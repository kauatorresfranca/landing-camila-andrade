import styled from 'styled-components';
import { colors } from '../../../../styles';

export const ProofSection = styled.section`
  padding: 50px 0;
  background: #f4f4f4;
  .container {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  h3 { font-size: 40px; color: ${colors.primary}; }
  p { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
`