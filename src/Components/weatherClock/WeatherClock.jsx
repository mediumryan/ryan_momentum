import { styled } from 'styled-components';
import Weather from './Weather';
import Clock from './Clock';

const WeatherClockWrapper = styled.div`
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    font-size: 1.05rem;
    color: var(--primary-200);
`;

export default function WeatherClock() {
    return (
        <WeatherClockWrapper>
            <Weather />
            <Clock />
        </WeatherClockWrapper>
    );
}
