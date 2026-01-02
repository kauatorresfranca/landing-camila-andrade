import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles';

export const HeroSection = styled.section`
  padding: 120px 0 80px;
  background-color: #fcfcfc;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 30px;
    }
  }
`;

export const Content = styled.div`
  span {
    color: ${colors.secondaryDark};
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 2px;
    display: block;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 48px;
    color: ${colors.primary};
    line-height: 1.1;
    margin-bottom: 25px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 32px;
    }
  }

  p {
    font-size: 18px;
    color: ${colors.text};
    margin-bottom: 40px;
    max-width: 500px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 auto 30px;
    }
  }

  .button-group {
    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      justify-content: center;
    }
  }
`;

export const ImageSide = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    order: -1; // No mobile a imagem vem antes do texto se preferir
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;