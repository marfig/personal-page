export default async function (req, res) {
  const url = process.env.SENDEMAIL_URL;
  const apiKey = process.env.SENDEMAIL_API_KEY;

  const { name, subject, email, message } = req.body;

  const data = {
    sender: {
      name: name,
      email: email,
    },
    to: [
      {
        email: process.env.TO_EMAIL_ADDRESS,
      },
    ],
    subject: subject,
    htmlContent: `<html><head></head><body><p>${message}</p></body></html>`,
  };

  const params = {
    method: "POST",
    headers: {
      method: "POST",
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, params);

    if (response.status !== 200 && response.status !== 201) {
      throw new Error("An error ocurred. Message not sent.");
    }

    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("An error ocurred. Message not sent.");
  }
}
