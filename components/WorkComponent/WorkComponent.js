import { useState, useEffect } from "react/cjs/react.development";
import { getAllExperiences } from "../../api/workExperienceApi";

export default function WorkComponent() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const result = getAllExperiences();
    setExperiences(result);
  }, []);

  return (
    <section id="work">
      <div className="content">
        <h1>Work Experience</h1>
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
    </section>
  );
}
