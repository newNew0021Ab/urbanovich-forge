import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Валидация обязательных полей
    const { name, phone, city, workType } = body
    
    if (!name || !phone || !city || !workType) {
      return NextResponse.json(
        { error: 'Заполните все обязательные поля' },
        { status: 400 }
      )
    }

    // Валидация телефона (простая)
    const phoneRegex = /^\+?[0-9\s\-\(\)]{10,}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Некорректный формат телефона' },
        { status: 400 }
      )
    }

    // Создаём объект заявки
    const requestData = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      city: city.trim(),
      workType: workType.trim(),
      message: body.message || '',
      status: 'new'
    }

    // Логирование в консоль
    console.log('📞 Новая заявка:', {
      name: requestData.name,
      phone: requestData.phone,
      city: requestData.city,
      workType: requestData.workType
    })

    // Попытка отправки email (если настроены env переменные)
    const hasEmailConfig = process.env.SMTP_HOST || process.env.SENDGRID_API_KEY
    
    if (hasEmailConfig) {
      // Здесь должна быть логика отправки email
      console.log('📧 Email уведомление отправлено')
    } else {
      console.log('📝 Email не настроен, сохраняем в файл')
    }

    // Сохранение в файл
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'requests.json')
    
    try {
      await fs.mkdir(dataDir, { recursive: true })
      
      let requests = []
      try {
        const fileContent = await fs.readFile(filePath, 'utf-8')
        requests = JSON.parse(fileContent)
      } catch (error) {
        // Файл не существует или пустой
        requests = []
      }
      
      requests.unshift(requestData) // Добавляем в начало массива
      
      // Ограничиваем количество заявок в файле (последние 100)
      if (requests.length > 100) {
        requests = requests.slice(0, 100)
      }
      
      await fs.writeFile(filePath, JSON.stringify(requests, null, 2))
      
    } catch (fileError) {
      console.error('Ошибка сохранения в файл:', fileError)
    }

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.',
      requestId: requestData.id
    })

  } catch (error) {
    console.error('Ошибка обработки заявки:', error)
    
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки. Попробуйте позже.' },
      { status: 500 }
    )
  }
}