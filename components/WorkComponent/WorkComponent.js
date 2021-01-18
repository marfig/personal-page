import { useEffect, useState } from "react";
import useMain from "../../hooks/useMain";
import Loader from "../Loader/Loader";

export default function WorkComponent() {
  const { loadingPage, setLoading } = useMain();
  const [progressBar, setProgressBar] = useState("init-progress-bar");

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 2000);
    setProgressBar("progress-bar");
    return () => {
      clearTimeout(timer1);
    };
  }, [loadingPage]);

  if (loadingPage)
    return (
      <section id="work">
        <div className="content">
          <Loader progressBar={progressBar}>Cargando...</Loader>
        </div>
      </section>
    );

  return (
    <section id="work">
      <div className="content">
        <h1>Work Experience</h1>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </div>
    </section>
  );
}
