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
    padding: var(--padding-double-medium);
    margin-right: var(--margin-medium);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.1px);
    -webkit-backdrop-filter: blur(0.1px);
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
