import { styled } from 'styled-components';
import './CSS/index.css';
import Bg from './Components/bg/Bg';
import WeatherClock from './Components/weatherClock/WeatherClock';
const MainWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

function App() {
    return (
        <MainWrapper>
            <Bg />
            <WeatherClock />
        </MainWrapper>
    );
}

export default App;
