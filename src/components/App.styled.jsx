import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;  
`;

export const Header = styled.header`
  padding: 20px 20px;  
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
`;

export const StyledLink = styled.nav`
display: flex;
    gap: 20px;
    font-size: 20px;
      text-decoration: none;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;

    