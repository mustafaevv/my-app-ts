import { useEffect, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import Test from "./components/Test";

import classes from "./App.module.scss";
import "./theme/theme.scss";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.getItem("theme");
  };

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    console.log(lng);
  };

  return (
    <div className={classNames(classes["App"], theme)}>
      <h1>{`${t("title")}`}</h1>
      <Test />
      <button onClick={() => handleChangeLanguage("en")}>eng</button>
      <button onClick={() => handleChangeLanguage("ru")}>ru</button>
      <button onClick={handleChangeTheme}>changeBg</button>
    </div>
  );
};

export default App;
