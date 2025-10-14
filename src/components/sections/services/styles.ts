import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Services = styled.div`

    h3 {
        font-size: 32px;
        margin-bottom: 1rem;
        color: ${colors.primary};
        margin: 0 auto;
        text-align: center;

        span {
            color: ${colors.secondary};
        }
    }
`;

export const ServicesList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
`;

export const ServiceItem = styled.div`
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);

    img {
        max-width: 50px;
        padding: 0.5rem;
        border-radius: 50%;
        margin-bottom: 1rem;
        background-color: ${colors.secondaryTransparent};
    }
`;