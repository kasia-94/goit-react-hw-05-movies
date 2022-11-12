import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled(NavLink)`
  font-size: 20px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  :hover,
  :focus {
    color: #3f51b5;
  }
  &.active {
    color: #3f51b5;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
`;
