export default function Loader(props) {
  const { progressBar, children } = props;
  return (
    <div className="loader">
      <div>
        <p>{children}</p>
        <div>
          <div className={progressBar}></div>
        </div>
      </div>
    </div>
  );
}
