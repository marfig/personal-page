export function getHomeContent(lan) {
  const items = [
    {
      title: "Hola, soy ",
      name: "Marvin",
      subtitle: "Desarrollador de Software",
      lan: "es",
    },
    {
      title: "Hi, I'm ",
      name: "Marvin",
      subtitle: "Software Developer",
      lan: "en",
    },
  ];
  return items.filter((c) => c.lan === lan)[0];
}
