export default function LanguageItem(props) {
  const { languages } = props;
  const keys = Object.keys(languages);
  let filterKeys = [];

  keys.forEach((k) => {
    if (languages[k] > 0.25) {
      filterKeys.push(k);
    }
  });

  return (
    <div className="language-item">
      <div className="language-legend">
        {!filterKeys && null}
        {filterKeys &&
          filterKeys.map((key, i) => (
            <div key={`${key}_${i}`}>
              <div
                className="language-legend-item"
                style={{
                  backgroundColor: GetColorBar(languages[key]),
                }}
              ></div>
              <label>{key}</label>
              <label>{languages[key]}%</label>
            </div>
          ))}
      </div>
      <div className="language-bar">
        {!filterKeys && null}
        {filterKeys &&
          filterKeys.map((key, i) => (
            <div
              key={`${i}_${key}`}
              style={{
                width: `${languages[key]}%`,
                backgroundColor: GetColorBar(languages[key]),
              }}
            ></div>
          ))}
      </div>
    </div>
  );
}

function GetColorBar(value) {
  if (value > 80) return "green";

  if (value > 50) return "yellow";

  if (value > 20) return "orange";

  return "red";
}
