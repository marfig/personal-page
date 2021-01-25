import { useState, useEffect } from "react";
import { getSkills } from "../../api/aboutApi";

export default function AboutComponent() {
  return (
    <section id="about">
      <div className="content">
        <div className="container">
          <div className="descript">
            <h1>About</h1>
            <div className="info">
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
          <div className="skill-content">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [listSkills, setListSkills] = useState([]);
  const [barProgress, setBarProgress] = useState("bar-progress-init");

  useEffect(() => {
    const list = getSkills();
    setListSkills(list);
  }, []);

  useEffect(() => {
    let timerBarProgress = setTimeout(() => setBarProgress("bar-progress"), 5);
    return () => {
      clearTimeout(timerBarProgress);
    };
  }, []);

  return (
    <div className="skill">
      <h3>Skills</h3>

      {listSkills &&
        listSkills.map((skill, index) => (
          <div className="bar-container" key={index}>
            <div className="bar-title">{skill.name}</div>
            <div className="bar">
              <div
                className={barProgress}
                style={{ width: `${skill.value}%` }}
              ></div>
              <span className="bar-percent">{skill.value}%</span>
            </div>
          </div>
        ))}
    </div>
  );
}
