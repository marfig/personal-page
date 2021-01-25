import { useState, useEffect } from "react";

export default function Loader(props) {
  const { children } = props;
  const [progress, SetProgress] = useState("init-progress-bar");

  useEffect(() => {
    SetProgress("progress-bar");
  }, []);

  return (
    <div className="loader">
      <div className="container">
        <div>
          <p>{children}</p>
          <div>
            <div className={progress}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
