import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { generateClientEmail, generateInternalEmail } from '../../../lib/email-templates'

const SMTP_EMAIL = process.env.SMTP_EMAIL
const SMTP_PASSWORD = process.env.SMTP_PASSWORD

if (!SMTP_EMAIL || !SMTP_PASSWORD) {
  console.error('❌ Faltan variables de entorno: SMTP_EMAIL o SMTP_PASSWORD')
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service_type, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }

    // 1. Correo interno (a CENTLIA)
    await transporter.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: `🔔 CENTLIA - Nuevo mensaje de ${name}`,
      html: generateInternalEmail({ name, email, phone, company, service: service_type, message }),
    })

    // 2. Correo al cliente
    await transporter.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: `✅ CENTLIA - ¡Hemos recibido tu mensaje, ${name}!`,
      html: generateClientEmail({ name, email, phone, company, service: service_type, message }),
    })

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error enviando correo:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
}
