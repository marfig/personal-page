import { useState } from "react";

export default function HomeComponent() {
  const [progressBar, setProgressBar] = useState("init-progress-bar");

  return (
    <section id="home">
      <h1>
        Hi, I'm <strong>Marvin</strong>
      </h1>
      <h2>Software Developer</h2>
    </section>
  );
}
