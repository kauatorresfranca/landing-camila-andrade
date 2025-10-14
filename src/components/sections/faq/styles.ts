import styled from 'styled-components';
import { colors } from '../../../../styles';

export const FAQ = styled.section`
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

export const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const FAQItem = styled.div<{ active: boolean }>`
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const FAQQuestion = styled.div`
  padding: 1rem;
  font-size: 18px;
  color: ${colors.primary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FAQAnswer = styled.div`
  padding: 1rem;
  font-size: 16px;
  color: ${colors.text};
  background: ${colors.secondaryTransparent};
  line-height: 1.6;
`;

export const FAQIcon = styled.span`
  font-size: 20px;
  color: ${colors.secondary};
`;