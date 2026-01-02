import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Testimonials = styled.section`
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

export const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const TestimonialItem = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  img {
    max-width: 50px;
    border-radius: 50%;
    background-color: ${colors.secondaryTransparent};
  }

  h4 {
    font-size: 18px;
    color: ${colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
    color: ${colors.text};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  `

export const TestimonialLocation = styled.p`
  font-size: 14px;
  color: ${colors.text};
`;