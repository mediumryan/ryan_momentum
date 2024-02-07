import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
// import components
import TodoItem from './TodoItem';
// import state data
import { filteredTodo, nowCategory } from '../../../data/todo';

const TodoRightWrapper = styled.div`
    flex-basis: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0 var(--margin-medium);
    }
`;

const TodoTitle = styled.h4`
    font-size: 1.25rem;
    font-weight: 700;
    margin: 2rem 0 1rem 0;
    color: var(--white-100);
`;

const NoTask = styled.p`
    font-size: 1.25rem;
    color: var(--accent-200);
    margin-top: 4rem;
`;

const TodoItems = styled.div`
    width: 100%;
    max-height: 400px;
    overflow-y: scroll;
`;

export default function TodoRight() {
    const todo = useRecoilValue(filteredTodo);
    const nowCat = useRecoilValue(nowCategory);

    return (
        <TodoRightWrapper>
            <TodoTitle>Todo List</TodoTitle>
            {todo.length < 1 ? (
                <NoTask>'{nowCat} Category is empty'</NoTask>
            ) : (
                <TodoItems>
                    {todo.map((item, index) => {
                        return (
                            <TodoItem key={item.id} item={item} index={index} />
                        );
                    })}
                </TodoItems>
            )}
        </TodoRightWrapper>
    );
}
