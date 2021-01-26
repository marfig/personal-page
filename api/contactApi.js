export function getContactContent(lan) {
  const items = [
    {
      title: "Contacto",
      comment: "Alguna leyenda en español. Por definir.",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar",
      wait: "Un momento por favor. Tu mensaje está siendo enviado...",
      messageSeneded: "Mensaje enviado. Gracias por contactarme!",
      errorSend: "Ocurrió un error. Por favor intente de nuevo más tarde",
      lan: "es",
    },
    {
      title: "Contact me",
      comment:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send",
      wait: "One moment please. Your message is being sent...",
      messageSeneded: "Message sended. Thank you for your contact!",
      errorSend: "An error ocurred. Please try again later",
      lan: "en",
    },
  ];
  return items.filter((c) => c.lan === lan)[0];
}
