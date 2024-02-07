import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
// import state data
import { categoryState, todoState } from '../../../data/todo';
// import icons
import { FaTrashAlt } from 'react-icons/fa';

const TodoItemWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 95%;
    font-size: 0.85rem;
    padding: 1rem 2rem;
    margin: 0.5rem 0;
    border: 2px solid var(--white-100);
    border-radius: 10px;
`;

const ItemText = styled.span`
    flex-basis: 50%;
    text-align: center;
    color: var(--accent-200);
`;

const ItemBtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-basis: 50%;
`;

const ItemBtn = styled.button`
    color: var(--white-100);
    padding: 0.5rem;
    transition: 300ms color;
    &:hover {
        color: var(--accent-200);
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
