import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Hero = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 600px;
    }

    h3 {
        color: ${colors.primary};
        font-size: 2.5rem;
        margin-bottom: 1rem;

        span {
            color: ${colors.secondary};
        }
    }

    p {
        font-size: 14px;
        color: ${colors.text};
    }
`;

export const HeroContent = styled.div`
    max-width: 500px;
    display: flex;  
    flex-direction: column;
    gap: 1.5rem;
`;

export const HeroContentCopy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const HeroButtonWrapper = styled.div`
    max-width: 60%;
`;