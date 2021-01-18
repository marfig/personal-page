import { useEffect, useState } from "react";
import useMain from "../../hooks/useMain";
import Loader from "../Loader/Loader";

export default function HomeComponent() {
  const { loadingPage, setLoading } = useMain();
  const [progressBar, setProgressBar] = useState("init-progress-bar");

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 500);
    setProgressBar("progress-bar");
    return () => {
      clearTimeout(timer1);
    };
  }, [loadingPage]);

  if (loadingPage)
    return (
      <section id="about">
        <div className="content">
          <Loader progressBar={progressBar}>Cargando...</Loader>
        </div>
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
