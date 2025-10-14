import styled from 'styled-components';
import { colors} from '../../../../styles';

export const Footer = styled.footer`
  background: ${colors.primary};
  color: white;
  padding: 60px 0 20px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const FooterSection = styled.div`
  h4 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
`;

export const FooterLink = styled.a`
  display: block;
  font-size: 16px;
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${colors.secondary};
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;

  p {
    font-size: 14px;
  }
`;