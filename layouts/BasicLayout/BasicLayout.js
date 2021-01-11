import Header from "../../components/Header";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <div className="basic-layout">
      <div>
        <Header />
        {children}
      </div>
    </div>
  );
}
