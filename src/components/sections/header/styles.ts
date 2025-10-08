import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Header = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.6); 
    backdrop-filter: blur(10px);

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        width: 250px;
    }

    nav {
        ul {
            display: flex;
            align-items: center;

            li {
                list-style: none;

                a {
                    text-decoration: none;
                    color: ${colors.primary};
                    padding: 12px 16px;
                    border-bottom: 2px solid transparent;
                    transition: border-bottom 0.3s;

            &:hover {
                border-bottom: 2px solid ${colors.secondary};
            }
        }
    }
`;