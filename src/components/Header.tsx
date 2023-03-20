import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Container from '../layout/Container'
import links from '../routes/routesLink'

const Nav = styled.header`
  padding: 1.25rem 0;
  background-color: ${({ theme }) => theme.background.primary};
`;

const NavContainer = styled(Container)`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(Link)`
  font-weight: bold;
  font-size: 1.875rem;
  text-decoration: none;
  color: ${({ theme }) => theme.title.primary};
`;

const NavList = styled.ul`
  gap: 3em;
  display: flex;
  list-style: none;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 1.125rem;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.title.primary};
`;

const Header = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">Logo</NavLogo>
        <NavList>
          {links.map(({ id, link, name }) => (
            <li key={id}><NavLink to={link}>{name}</NavLink></li>
          ))}
        </NavList>
      </NavContainer>
    </Nav>
  )
}

export default Header