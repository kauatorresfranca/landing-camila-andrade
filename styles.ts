import { createGlobalStyle } from "styled-components";

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1200px',
}

export const colors = {
    primary: '#2c3e50',
    primaryTransparent: 'rgba(44, 62, 80, 0.4)',
    primaryDark: '#1a2332',
    secondary: '#d4b883',
    secondaryTransparent: 'rgba(212, 184, 131, 0.4)',
    secondaryDark: '#b8965f',
    background: '#fff',
    text: '#555',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
    }

    body {
        padding-top: 84px;
        background-color: ${colors.background};
        scroll-behavior: smooth;
    }
`