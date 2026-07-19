export async function POST(request) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json();

    if (!nombre || !email || !asunto || !mensaje) {
      return Response.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Formato de email inválido" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram configuration is missing");
      return Response.json(
        { error: "Error inesperado, envia un correo a contact@edducode.me" },
        { status: 500 }
      );
    }

    const sendMessageResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `🚀 Nuevo contacto del portafolio:\n\nDe: ${nombre}\nEmail: ${email}\nAsunto: ${asunto}\nMensaje: \n>>${mensaje}`,
        }),
      }
    );

    if (!sendMessageResponse.ok) {
      const errorData = await sendMessageResponse.json();
      console.error("Telegram API error:", errorData);
      throw new Error("Telegram rejected the message");
    }

    return Response.json({
      success: true,
      message: "Mensaje enviado correctamente",
    });
  } catch (error) {
    console.error("Error sending contact message:", error);
    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
