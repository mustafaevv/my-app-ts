import { useEffect, useState } from "react";
import classNames from "classnames";
import "react-i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import i18next from "i18next";

import Test from "./components/Test";
import ns1 from "./locales/en/language.json";
import ns2 from "./locales/ru/language.json";

import classes from "./App.module.scss";
import "./theme/theme.scss";

const resources = {
  en: {
    translation: ns1,
  },
  ru: {
    translation: ns2,
  },
};

i18next.use(initReactI18next).init<TransferFunction>({
  resources,
  lng: "en",
});

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.getItem("theme");
  };

  const changeLanguage = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
    console.log(language);
  };

  return (
    <div className={classNames(classes["App"], theme)}>
      <h1>{t("title")}</h1>
      <Test />
      <select onChange={changeLanguage}>
        <option value="en">en</option>
        <option value="ru">ru</option>
      </select>
      <button onClick={changeMode}>changeBg</button>
    </div>
  );
};

export default App;
