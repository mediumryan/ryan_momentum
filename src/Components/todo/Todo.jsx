import { styled } from 'styled-components';
// import components
import TodoLeft from './TodoLeft/TodoLeft';
import TodoRight from './TodoRight/TodoRight';

const TodoWrapper = styled.div`
    flex-basis: 60%;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.1px);
    -webkit-backdrop-filter: blur(0.1px);
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        width: 95%;
    }
`;

export default function Todo() {
    return (
        <TodoWrapper>
            <TodoLeft />
            <TodoRight />
        </TodoWrapper>
    );
}
