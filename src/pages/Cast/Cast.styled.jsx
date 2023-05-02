import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
  list-style: none;
  gap: 5px;
  padding: 0;
  margin: 0;
`;

export const Image = styled.img`
  width: 75%;
  height: auto;
`;

export const CastContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 767px) {
    flex-basis: calc((100% - 5px) / 2);
    padding: 5px 0;
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 10px) / 3);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 20px) / 5);
  }
`;

export const CastTitle = styled.h2`
  text-align: center;
`;
