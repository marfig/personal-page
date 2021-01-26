export function getMainMenuContent(lan) {
  const items = [
    {
      home: "INICIO",
      about: "SOBRE MÍ",
      work: "TRABAJO",
      code: "CÓDIGO",
      contact: "CONTACTO",
      lan: "es",
    },
    {
      home: "HOME",
      about: "ABOUT",
      work: "WORKS",
      code: "CODE",
      contact: "CONTACT",
      lan: "en",
    },
  ];
  return items.filter((c) => c.lan === lan)[0];
}
