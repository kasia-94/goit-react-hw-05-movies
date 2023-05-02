import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieLi = styled.li`
  position: relative;
  overflow: hidden;
  z-index: 0;
  border-radius: 6px;
  @media screen and (max-width: 767px) {
    flex-basis: calc((100% - 5px) / 2);
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 10px) / 3);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 20px) / 5);
  }
`;

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

export const MovieImage = styled.img`
  width: 100%;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 5px;
  padding: 0;
  margin: 0;
`;

export const Overlay = styled.div`
  display: inline-block;
  position: absolute;
  z-index: 0;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateY(100%);
  transition: transform 250ms ease-in-out;

  padding: 20px 10px;

  background: #3f51b5ca;
  color: white;

  @media screen and (min-width: 1200px) {
    padding: 40px 20px;
  }

  li:hover & {
    transform: translateY(0);
  }
`;

export const Overview = styled.p`
  width: 130px;
  font-size: 10px;
  line-height: 1.56;
  letter-spacing: 0.03em;

  @media screen and (min-width: 320px) {
    width: 130px;
  }
  @media screen and (min-width: 480px) {
    width: 220px;
    font-size: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;

export const Title = styled.h3`
  width: 130px;
  margin: 0 0 10px 0;
  font-size: 13px;
  line-height: 1.56;
  letter-spacing: 0.03em;
  text-align: center;

  @media screen and (min-width: 320px) {
    width: 130px;
  }
  @media screen and (min-width: 480px) {
    width: 220px;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 18px;
  }
`;
