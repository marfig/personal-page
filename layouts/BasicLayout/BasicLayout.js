import Header from "../../components/Header";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <div className="basic-layout">
      <div>
        <LanguageSelector />
        <Header />
        {children}
      </div>
    </div>
  );
}
