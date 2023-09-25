import { styled } from 'styled-components';
import TodoItems from './TodoItems';

const TodoRightWrapper = styled.div`
    flex-basis: 60%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-double-medium);
`;

const TodoTitle = styled.h4`
    font-size: var(--font-size-medium);
`;

export default function TodoRight() {
    return (
        <TodoRightWrapper>
            <TodoTitle>What will you want to do?</TodoTitle>
            <TodoItems />
            <TodoItems />
            <TodoItems />
            <TodoItems />
        </TodoRightWrapper>
    );
}
