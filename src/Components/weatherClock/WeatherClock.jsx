import { styled } from 'styled-components';
import Weather from './Weather';
import Clock from './Clock';

const WeatherClockWrapper = styled.div`
    position: absolute;
    top: 1%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primary-200);
    padding: 0 var(--padding-large);
`;

export default function WeatherClock() {
    return (
        <WeatherClockWrapper>
            <Weather />
            <Clock />
        </WeatherClockWrapper>
    );
}
