export function getLoaderContent(lan) {
  const items = [
    {
      text: "Cargando...",
      lan: "es",
    },
    {
      text: "Loading...",
      lan: "en",
    },
  ];
  return items.filter((c) => c.lan === lan)[0];
}
