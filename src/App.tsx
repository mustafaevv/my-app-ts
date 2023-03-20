import { useEffect, useState, FC, createContext } from "react";
import classNames from "classnames";
import { I18nextProvider, useTranslation } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./routes/AllRoutes";
import Header from "./components/Header";

import classes from "./App.module.scss";
import { i18n } from "i18next";
import { getFromStorage, setToStorage } from "./service/storage";
import GlobalStyle from "./themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";


// const handleChangeLanguage = (lng: any) => {
//   i18n.changeLanguage(lng);
//   localStorage.setItem("lng", lng);
//   console.log(lng);
// };

type AppContextType = {
  darkThemeOn: boolean
  setDarkThemeOn: React.Dispatch<React.SetStateAction<boolean>>
}

const themeText = getFromStorage('darkThemeOn')
const theme = themeText ? JSON.parse(themeText) : true

export const AppContext = createContext<AppContextType | null>(null)

const App: FC = () => {
  const [darkThemeOn, setDarkThemeOn] = useState(theme || true)
  const { i18n } = useTranslation();


  useEffect(() => {
    setToStorage('darkThemeOn', darkThemeOn)
  }, [darkThemeOn])

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
        <I18nextProvider i18n={i18n}>
          <AppContext.Provider value={{
            darkThemeOn,
            setDarkThemeOn
          }}>
            <GlobalStyle />
            <Header />
            <AllRoutes />
          </AppContext.Provider>
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
