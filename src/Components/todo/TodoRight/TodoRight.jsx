import { styled } from 'styled-components';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import { filteredTodo, nowCategory } from '../../../atom';

const TodoRightWrapper = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 0 var(--margin-medium);
    }
`;

const TodoTitle = styled.h4`
    font-size: var(--font-size-medium);
    font-weight: 800;
    margin-bottom: var(--margin-large);
    color: var(--primary-100);
`;

const NoTask = styled.p`
    font-size: var(--font-size-medium);
    color: var(--accent-100);
    margin-top: var(--margin-medium);
`;

const TodoItems = styled.div`
    width: 100%;
    max-height: 280px;
    overflow-y: scroll;
`;

export default function TodoRight() {
    const todo = useRecoilValue(filteredTodo);
    const nowCat = useRecoilValue(nowCategory);

    return (
        <TodoRightWrapper>
            <TodoTitle>What will you want to do?</TodoTitle>
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
