import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1200px) {
    width: 450px;
  }
`;

export const DetailsBox = styled.div``;

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

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin: 10px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: 250ms color ease;

  :hover {
    color: #3f51b5;
  }
`;
