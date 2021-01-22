export async function sendEmailApi(data) {
  try {
    const url = "/api/send";
    const params = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
