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
        color: ${colors.primary};
    }
`;