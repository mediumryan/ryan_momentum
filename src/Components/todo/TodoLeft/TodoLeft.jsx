import { styled } from 'styled-components';
// import components
import AddTodo from './AddTodo';
import AddCategories from './AddCategories';
import Categories from './Categories';

const TodoLeftWrapper = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0 var(--margin-medium);
    }
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
