export function getAboutContent(lan) {
  const items = [
    {
      title: "Sobre mí",
      descript: `<p>¡Hola!</p>
      <p>Mi nombre es Marvin Figueredo</p>
      <p>Soy Ingeniero en Informática, me dedico profesionalmente al desarrollo de Sistemas Informáticos desde el año 2008.</p>
      <p>Mi experiencia principal tiene que ver con Aplicaciones Web empresariales. Me tocó trabajar sobre todo como Backend con C# y .Net, 
      aunque también he trabajado en interfaces con HTML, CSS y Javascript.</p>
      <p>En proyectos personales además he utilizado herramientas como React y Next JS.</p>`,
      titleSkill: "Habilidades",
      lan: "es",
    },
    {
      title: "About",
      descript: `<p>Hello!</p>
      <p>My name is Marvin Figueredo.</p>
      <p>I'm a Computer Engineer, I'm professionally dedicated to the development of Computer Systems since 2008.</p>
      <p>My main experience has to do with Enterprise Web Applications. I work mainly as a Backend with C# and dotnet, 
      however I have also worked on interfaces with HTML, CSS and Javascript.</p>
      <p>In personal projects I have also used tools like React and Next JS.</p>`,
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
