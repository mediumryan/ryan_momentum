import { styled } from 'styled-components';
import './CSS/index.css';
import Bg from './Components/bg/Bg';
import WeatherClock from './Components/weatherClock/WeatherClock';
import Greeting from './Components/greeting/Greeting';
import Quotes from './Components/quotes/Quotes';
const MainWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

function App() {
    return (
        <MainWrapper>
            <Bg />
            <WeatherClock />
            <Greeting />
            <Quotes />
        </MainWrapper>
    );
}

export default App;
