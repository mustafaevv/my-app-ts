import { useContext, useState } from 'react';
import styled from "styled-components";

import { AppContext } from "../../../App";
import Switch from "./Switch";

const Box = styled.div`
  margin: 0 auto;
  width: 37.5rem;
  height: 31.25rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.background.primary};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2em;
  font-size: 2rem;
  color: ${({ theme }) => theme.text.secondary};
`;

const OptionText = styled.p<{ disabled: boolean }>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  text-transform: capitalize;
  color: ${({ theme, disabled }) =>
    disabled ? theme.palette.gray : theme.text.secondary};
`;

const Block = () => {
  const [test, setTest] = useState(true)

  const [language, setLanguage] = useState(false)
  const appContext = useContext(AppContext)
  return (
    <Box>
      <Title>Settings</Title>
      <Content>
        <Item>
          <OptionText disabled={false}>ru</OptionText>
          <Switch checked={language} onCheck={setLanguage} />
          <OptionText disabled={true}>en</OptionText>
        </Item>
        <Item>
          <OptionText disabled={false}>light</OptionText>
          <Switch checked={appContext?.darkThemeOn} onCheck={appContext?.setDarkThemeOn} />
          <OptionText disabled={true}>dark</OptionText>
        </Item>
      </Content>
    </Box>
  )
}

export default Block