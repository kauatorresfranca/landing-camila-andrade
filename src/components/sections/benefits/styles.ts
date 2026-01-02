import styled from 'styled-components'
import { colors } from '../../../../styles'

export const BenefitsSection = styled.section`
  padding: 60px 0;
  background: ${colors.primary};
  color: #fff;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
  }

  .card {
    text-align: center;
    .icon { color: ${colors.secondary}; margin-bottom: 15px; }
    h4 { margin-bottom: 10px; font-size: 18px; }
    p { font-size: 14px; opacity: 0.8; }
  }
`