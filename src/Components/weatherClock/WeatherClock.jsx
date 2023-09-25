import { styled } from 'styled-components';
import Weather from './Weather';
import Clock from './Clock';

const WeatherClockWrapper = styled.div`
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function WeatherClock() {
    return (
        <WeatherClockWrapper>
            <Weather />
            <Clock />
        </WeatherClockWrapper>
    );
}
