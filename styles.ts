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
        font-family: 'Roboto', sans-serif;
    }

    body {
        padding-top: 84px;
        background-color: ${colors.background};
        color: ${colors.text};
        line-height: 1.5;
    }

    .container {
        max-width: 1140px; // Padrão Bootstrap/Moderno
        margin: 0 auto;
        padding: 0 20px;
    }

    h1, h2, h3 {
        color: ${colors.primary};
        font-weight: 700;
    }

    a {
        text-decoration: none; // Removido por padrão
    }
`;