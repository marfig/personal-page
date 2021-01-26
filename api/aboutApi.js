export function getAboutContent(lan) {
  const items = [
    {
      title: "Sobre mí",
      descript: `<p>Soy Ingeniero en Informática, me dedico al desarrollo de Sistemas Informáticos desde hace más de 10 años.</p>
      <p>He formado parte de diferentes proyectos en empresas y por cuenta propia, brindando soluciones a las necesidades de negocio mediante la Tecnología de la Información.</p>
      <p>Me especializo en Desarrollo Web y herramientas .Net, pero me gusta aprender e incursionar constantemente en diferentes herramientas.</p>
      <p>Algunas de las tecnologías que utilizo son C#, .Net MVC, .Net Core, HTML, CSS, Javascript, NodeJS, React, Angular, SQL Server, Postgres SQL, MySQL, Oracle, MongoDB.</p>`,
      titleSkill: "Habilidades",
      lan: "es",
    },
    {
      title: "About me",
      descript: "<p>Hello, I'm Marvin</p>",
      titleSkill: "Skills",
      lan: "en",
    },
  ];
  return items.filter((c) => c.lan === lan)[0];
}

export function getSkills() {
  const skills = [
    {
      name: "C#",
      value: 90,
    },
    {
      name: "Sql Server",
      value: 85,
    },
    {
      name: "Postgres",
      value: 85,
    },
    {
      name: "HTML",
      value: 80,
    },
    {
      name: "CSS",
      value: 70,
    },
    {
      name: "Javascript",
      value: 75,
    },
    {
      name: "React",
      value: 70,
    },
  ];

  return skills;
}
