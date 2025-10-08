import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Button = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.background};
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;