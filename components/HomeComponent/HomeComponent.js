import { useEffect } from "react";
import useMain from "../../hooks/useMain";

export default function HomeComponent() {
  const { loadingPage, setLoadingPage } = useMain();

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  if (loadingPage)
    return (
      <section id="home">
        <p>Cargando...</p>
      </section>
    );

  return (
    <section id="home">
      <h1>
        Hi, I'm <strong>Marvin</strong>
      </h1>
      <h2>Software Developer</h2>
    </section>
  );
}
