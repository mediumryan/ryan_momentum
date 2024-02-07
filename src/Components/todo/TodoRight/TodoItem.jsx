import { styled } from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, todoState } from '../../../data/todos';

const TodoItemWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    color: var(--text-100);
    padding: var(--padding-double-medium);
    border: 2px solid var(--text-100);
    border-radius: 10px;
    margin-bottom: var(--margin-small);
`;

const ItemText = styled.span`
    flex-basis: 50%;
    text-align: center;
    font-size: var(--font-size-small);
    color: var(--primary-100);
`;

const ItemBtnBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-basis: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ItemBtn = styled.button`
    color: var(--text-100);
    font-size: var(--font-size-micro);
    padding: var(--padding-double-small);
    border-radius: 4px;
    &:hover {
        color: var(--primary-100);
    }
`;

export default function TodoItems({ item, index }) {
    // category button filter
    const category = useRecoilValue(categoryState);
    const newCategory = category.filter((i) => i !== item.state);
    // delete item
    const [todo, setTodo] = useRecoilState(todoState);
    const deleteItem = () => {
        const newTodo = todo.filter((i) => i.id !== item.id);
        setTodo(newTodo);
    };
    // change item category
    const targetIndex = todo.findIndex((i) => i.id === item.id);
    const changeCategory = (e) => {
        const toChange = e.target.textContent;
        const newItem = {
            text: item.text,
            id: item.id,
            checked: false,
            state: toChange,
        };
        setTodo([
            ...todo.slice(0, targetIndex),
            newItem,
            ...todo.slice(targetIndex + 1),
        ]);
    };

    return (
        <TodoItemWrapper>
            <ItemText>{item.text}</ItemText>
            <ItemBtnBox>
                {newCategory.map((i, buttonIndex) => {
                    return (
                        <ItemBtn
                            key={buttonIndex}
                            onClick={(e) => {
                                changeCategory(e);
                            }}
                        >
                            {i}
                        </ItemBtn>
                    );
                })}
                <ItemBtn onClick={deleteItem}>
                    <FaTrashAlt />
                </ItemBtn>
            </ItemBtnBox>
        </TodoItemWrapper>
    );
}
