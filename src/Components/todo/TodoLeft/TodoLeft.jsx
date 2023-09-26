import { styled } from 'styled-components';
import AddTodo from './AddTodo';
import AddCategories from './AddCategories';
import Categories from './Categories';

const TodoLeftWrapper = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function TodoLeft() {
    return (
        <TodoLeftWrapper>
            <AddTodo />
            <AddCategories />
            <Categories />
        </TodoLeftWrapper>
    );
}
