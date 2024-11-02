export function getWorkContent(lan) {
  const items = [
    {
      title: "Experiencia Laboral",
      lan: "es",
    },
    {
      title: "Work Experience",
      lan: "en",
    },
  ];
  return items.filter((c) => c.lan === lan)[0];
}

export function getAllExperiences(lan) {
  let list_experiences = [
    {
      title: "Gerente de Tecnología",
      company: "Investor Casa de Bolsa S.A.",
      description: `Encargado del desarrollo y mantenimiento de los sistemas 
            informáticos de la compañía. Tecnologías: .Net MVC, .Net Core,
            SQL Server, Postgres SQL`,
      yearStart: 2014,
      yearEnd: 2021,
      lan: "es",
    },
    {
      title: "Technology Manager",
      company: "Investor Casa de Bolsa S.A.",
      description: `Responsible for the development and maintenance of the information systems of the company. 
            Technologies: .Net MVC, .Net Core, SQL Server, Postgres SQL`,
      yearStart: '2014',
      yearEnd: 'present',
      lan: "en",
    },
    {
      title: "Encargado de Desarrollo",
      company: "Taxare S.A. y Roshka",
      description: `Desarrollo de Aplicación Web para procesamiento Impositivo. Tecnologías:
            Java Spring, Paython Django, Postgres SQL.`,
      yearStart: '2013',
      yearEnd: '2014',
      lan: "es",
    },
    {
      title: "Development Manager",
      company: "Taxare S.A. y Roshka",
      description: `Web Application Development for Tax Processing. Technologies:
            Java Spring, Paython Django, Postgres SQL.`,
      yearStart: '2013',
      yearEnd: '2014',
      lan: "en",
    },
    {
      title: "Desallorador de Software",
      company: "IDTEKNOLOGY",
      description: `Desarrollo de Home Banking para empresa del sistema financiero.
            Tecnologías: .Net MVC, SQL Server, Oracle.`,
      yearStart: '2012',
      yearEnd: '2013',
      lan: "es",
    },
    {
      title: "Software Developer",
      company: "IDTEKNOLOGY",
      description: `Development of Home Banking for financial system company.
      Technologies: .Net MVC, SQL Server, Oracle.`,
      yearStart: '2012',
      yearEnd: '2013',
      lan: "en",
    },
    {
      title: "Desallorador de Software",
      company: "Nucleo S.A.",
      description: `Desarrollo y mantenimiento de sistemas internos de la
            comapañía. Tecnologías: C#, WPF, SQL Server, Oracle.`,
      yearStart: '2011',
      yearEnd: '2012',
      lan: "es",
    },
    {
      title: "Software Developer",
      company: "Nucleo S.A.",
      description: `Development and maintenance of internal company systems. Technologies: C#, WPF, SQL Server, Oracle.`,
      yearStart: '2011',
      yearEnd: '2012',
      lan: "en",
    },
    {
      title: "Desallorador de Software",
      company: "INAVAN Paraguay",
      description: `Desarrollo de diversos sistemas para clientes locales y del
            exterior. Tecnologías: Asp Net Web Forms, PHP, SQL Server`,
      yearStart: '2008',
      yearEnd: '2011',
      lan: "es",
    },
    {
      title: "Software Developer",
      company: "INAVAN Paraguay",
      description: `Development of various systems for local and external clients. Technologies: Asp Net Web Forms, PHP, SQL Server`,
      yearStart: '2008',
      yearEnd: '2011',
      lan: "en",
    },
  ];

  return list_experiences.filter((x) => x.lan === lan);
}
