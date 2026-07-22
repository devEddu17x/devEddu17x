import { NextResponse } from "next/server"

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = (body.name || body.nombre || "").trim()
    const email = (body.email || "").trim()
    const subject = (body.subject || body.asunto || "").trim()
    const message = (body.message || body.mensaje || "").trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format" },
        { status: 400 }
      )
    }

    const token = process.env.TELEGRAM_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error("Telegram configuration missing (TELEGRAM_TOKEN or TELEGRAM_CHAT_ID)")
      return NextResponse.json(
        { error: "Contact service is currently unavailable. Please write directly to contact@eddux.dev" },
        { status: 500 }
      )
    }

    const telegramMessage =
      `🚀 <b>Nuevo mensaje desde eddux.dev</b>\n\n` +
      `👤 <b>Nombre:</b> ${escapeHtml(name)}\n` +
      `📧 <b>Email:</b> ${escapeHtml(email)}\n` +
      `📌 <b>Asunto:</b> ${escapeHtml(subject)}\n\n` +
      `💬 <b>Mensaje:</b>\n${escapeHtml(message)}`

    const sendMessageResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          parse_mode: "HTML",
          text: telegramMessage,
        }),
      }
    )

    if (!sendMessageResponse.ok) {
      const errorData = await sendMessageResponse.json()
      console.error("Telegram API Error:", errorData)
      return NextResponse.json(
        { error: "Failed to dispatch message through Telegram Bot API" },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Error processing contact form message:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
