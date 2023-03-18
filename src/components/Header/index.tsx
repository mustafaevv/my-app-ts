import React from "react";

import Container from "../../layout/Container";
import links from "../../routes/routesLink";

import classes from "./Header.module.scss";

type Props = {
  language: (lng: string) => any;
  theme: () => any;
};

const Header = ({ language, theme }: Props) => {
  return (
    <header className={classes["header"]}>
      <Container>
        <a href="/">Logo</a>
        <ul>
          {links.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => language("en")}>en</button>
        <button onClick={() => language("ru")}>ru</button>
        <button onClick={theme}>changeBg</button>
      </Container>
    </header>
  );
};

export default Header;
