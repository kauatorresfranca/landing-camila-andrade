import styled from 'styled-components';
import { colors } from '../../../../styles';

type ButtonProps = {
  type?: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  background-color: ${props => props.type === 'primary' ? colors.secondary : 'transparent'};
  color: ${colors.background};
  border: ${props => props.type === 'primary' ? '2px solid transparent' : `2px solid ${colors.primary}`};
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;