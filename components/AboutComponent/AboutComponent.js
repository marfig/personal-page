import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getAboutContent, getSkills } from "../../api/aboutApi";

export default function AboutComponent() {
  const router = useRouter();
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const content = getAboutContent(router.locale || "es");
    setPageContent(content);
  }, []);

  return (
    <section id="about">
      <div className="content">
        <div className="container">
          <div className="descript">
            <h1>{pageContent.title}</h1>
            <div
              className="info"
              dangerouslySetInnerHTML={{ __html: pageContent.descript }}
            />
          </div>
          <div className="skill-content">
            <Skills title={pageContent.titleSkill} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ title }) {
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
      <h3>{title}</h3>

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
