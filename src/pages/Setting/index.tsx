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
  const appContext = useContext(AppContext)
  const { t } = useTranslation();

  const [test, setTest] = useState(false)


  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(test);
  };

  return (
    <section>
      <h1>{`${t('title')}`}</h1>
      <Container>
        <OptionText disabled={false}>ru</OptionText>
        <Switch checked={test} onCheck={setTest} />
        <OptionText disabled={false}>en</OptionText>

        <OptionText disabled={false}>dark</OptionText>
        <Switch checked={appContext?.darkThemeOn} onCheck={appContext?.setDarkThemeOn} />
        <OptionText disabled={false}>light</OptionText>
        <div>
          <label htmlFor="language-select">Select language: </label>
          <select id="language-select" onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </div>
      </Container>
    </section>
  );
};

export default Setting;
