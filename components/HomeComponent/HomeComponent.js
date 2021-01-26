import { useState, useEffect } from "react";
import { getHomeContent } from "../../api/homeApi";

export default function HomeComponent() {
  const [lan, setLan] = useState("es");
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const content = getHomeContent(lan);
    setPageContent(content);
  }, []);

  return (
    <section id="home">
      <h1>
        {pageContent.title} <strong>{pageContent.name}</strong>
      </h1>
      <h2>{pageContent.subtitle}</h2>
    </section>
  );
}
