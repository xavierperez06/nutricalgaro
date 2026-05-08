import nodeemailer from "nodemailer";

export const POST = async (request) => {
  const { fullname, email, subject, message } = await request.json();

  if (!fullname || !fullname.trim()) {
    return new Response(JSON.stringify({ error: "El nombre es requerido." }), {
      status: 400,
    });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Email inválido." }), {
      status: 400,
    });
  }
  if (!message || !message.trim()) {
    return new Response(
      JSON.stringify({ error: "El mensaje no puede estar vacío." }),
      { status: 400 },
    );
  }

  const user = process.env.EMAIL_USER;

  const transporter = nodeemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    const emailSent = await transporter.sendMail({
      from: user,
      to: "nutricalgaro@gmail.com",
      replyTo: email,
      subject: `${fullname} te ha enviado un mensaje desde Nutricalgaro.`,
      html: `<p>Nombre y Apellido: ${fullname} </p>
             <p>Motivo de consulta: ${subject} </p>
             <p>Mensaje: ${message} </p>`,
    });

    console.log("Mensaje enviado: %s", emailSent.messageId);

    return new Response("Email enviado.", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("El email no pudo ser enviado.", { status: 500 });
  }
};
