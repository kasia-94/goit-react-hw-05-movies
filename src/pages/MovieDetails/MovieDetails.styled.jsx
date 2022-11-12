import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 150px;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Addition = styled.ul`
  list-style: none;
`;

export const AdditionLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  color: black;
  text-decoration: none;
  transition: 250ms color ease;

  :hover,
  :focus {
    color: #14299b;
  }
  &.active {
    color: #14299b;
  }
`;
