import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.8); 
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
                    color: #333;
                    padding: 12px 16px;

            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }
        }
    }
`;