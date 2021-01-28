export function getContactContent(lan) {
  const items = [
    {
      title: "Contacto",
      comment: `Si tiene alguna consulta o solicitud, por favor póngase en contacto 
      conmigo utilizando el formulario a continuación.`,
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
      comment: `If you have any questions or requests, please contact with me using below form either.`,
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
