import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Container from "../../layout/Container";
import Block from "./components/Block";

const Section = styled.section`
  padding: 3.125rem 0;
`;

const Setting = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Block />
      </Container>
    </Section>
  );
};

export default Setting;
