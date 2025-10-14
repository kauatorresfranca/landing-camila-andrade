import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles';

export const AboutMe = styled.section`
  padding: 60px 0;
  text-align: center;

  h3 {
    font-size: 32px;
    margin-bottom: 2rem;
    color: ${colors.primary};

    span {
      color: ${colors.secondary};
    }
  }
`;

export const AboutMeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(135deg, ${colors.secondary}cc 0%, ${colors.secondaryDark} 100%);
  border-radius: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const AboutMeImage = styled.img`
  max-width: 300px;
  border-radius: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px;
  }
`;

export const AboutMeText = styled.div`
  max-width: 600px;
  text-align: left;

  h4 {
    font-size: 24px;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    color: ${colors.background};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

export const AboutMeTraining = styled.div`
  h5 {
    font-size: 20px;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 16px;
      color: ${colors.background};
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;

      &:before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${colors.secondaryDark};
      }
    }
  }
`;