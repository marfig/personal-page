import { useState, useEffect } from "react/cjs/react.development";
import { useRouter } from "next/router";
import { getAllExperiences, getWorkContent } from "../../api/workExperienceApi";

export default function WorkComponent() {
  const router = useRouter();
  const [experiences, setExperiences] = useState([]);
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    const content = getWorkContent(router.locale || "es");
    setPageContent(content);
    const result = getAllExperiences(router.locale || "es");
    setExperiences(result);
  }, []);

  return (
    <section id="work">
      <div className="content">
        <div className="container">
          <h1>{pageContent.title}</h1>
          <div className="experience">
            <ul>
              {experiences.map((item, index) => (
                <li key={index}>
                  <div className="year">
                    <span className="to">{item.yearStart}</span>
                    <span className="from">{item.yearEnd}</span>
                  </div>
                  <div className="timeline">
                    <span className="line-before"></span>

                    <span className="line-after"></span>
                  </div>
                  <div className="experience__content">
                    <h4>{item.title}</h4>
                    <h5>{item.company}</h5>
                    <p className="experience__info">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
