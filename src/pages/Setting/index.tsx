import i18next from "i18next";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { AppContext } from "../../App";
import Container from "../../layout/Container";
import Switch from "./components/Switch";

import classes from "./Setting.module.scss";

const Button = styled.p`
  color: ${({ theme }) => theme.palette.gray};
`
const OptionText = styled.p<{ disabled: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: ${({ theme, disabled }) =>
    disabled ? theme.palette.gray : theme.text.secondary};
`;




const Setting = () => {
  const [theme, setTheme] = useState(true)
  const appContext = useContext(AppContext)
  console.log(appContext);

  const { t } = useTranslation()
  // const test = useContext()
  // const handleChangeTheme = () => theme()


  return (
    <section>
      <h1>{`${t('title')}`}</h1>
      <Container>
        <OptionText disabled={false}>dark</OptionText>
        <Switch checked={appContext?.darkThemeOn} onCheck={appContext?.setDarkThemeOn} />
        <OptionText disabled={false}>light</OptionText>
      </Container>
    </section>
  );
};

export default Setting;
