import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 30px;
  list-style: none;
  background-color: #3f51b5;
`;

export const MenuItem = styled.li`
  margin-right: 40px;
`;

export const MenuLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  color: white;
  text-decoration: none;
  transition: 250ms color ease;

  :hover,
  :focus {
    color: #060c30;
  }
  &.active {
    color: #060c30;
  }
`;
