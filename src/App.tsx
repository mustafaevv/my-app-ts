import { useEffect, useState, FC, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { getFromStorage, setToStorage } from "./service/storage";
import { darkTheme, lightTheme } from "./themes";
import GlobalStyle from "./themes/GlobalStyle";
import AllRoutes from "./routes/AllRoutes";
import Header from "./components/Header";

type AppContextType = {
  darkThemeOn: boolean;
  setDarkThemeOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const themeText = getFromStorage("darkThemeOn");
const theme = themeText ? JSON.parse(themeText) : true;

export const AppContext = createContext<AppContextType | null>(null);

const App: FC = () => {
  const [darkThemeOn, setDarkThemeOn] = useState(theme || true);

  useEffect(() => {
    setToStorage("darkThemeOn", darkThemeOn);
  }, [darkThemeOn]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
        <AppContext.Provider
          value={{
            darkThemeOn,
            setDarkThemeOn,
          }}
        >
          <GlobalStyle />
          <Header />
          <AllRoutes />
        </AppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
