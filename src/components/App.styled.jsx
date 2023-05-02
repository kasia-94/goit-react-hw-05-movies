import styled from '@emotion/styled';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0px 5px;

  @media screen and (min-width: 320px) {
    width: 300px;
    padding: 0 10px;
  }

  @media screen and (min-width: 480px) {
    width: 460px;
    padding: 0 10px;
  }

  @media screen and (min-width: 768px) {
    width: 728px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
`;
