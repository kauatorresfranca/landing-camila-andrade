import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const Header = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.8); 
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(212, 184, 131, 0.2);
    padding: 1rem 0;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        width: 180px; // Ajustado para não ocupar espaço excessivo
        transition: transform 0.3s ease;
        &:hover { transform: scale(1.02); }
    }

    nav {
        @media (max-width: ${breakpoints.tablet}) {
            display: none; // No futuro, faremos o mobile menu aqui
        }

        ul {
            display: flex;
            gap: 24px;
            list-style: none;

            li a {
                font-size: 0.9rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: ${colors.primary};
                transition: all 0.3s ease;
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: -4px;
                    left: 0;
                    background-color: ${colors.secondary};
                    transition: width 0.3s ease;
                }

                &:hover {
                    color: ${colors.secondaryDark};
                    &:after { width: 100%; }
                }
            }
        }
    }
`;