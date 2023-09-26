import { styled } from 'styled-components';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import { todoState } from '../../../atom';

const TodoRightWrapper = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TodoTitle = styled.h4`
    font-size: var(--font-size-medium);
    font-weight: 800;
    margin-bottom: var(--margin-medium);
    color: var(--primary-100);
`;

const TodoItems = styled.div`
    width: 100%;
    max-height: 280px;
    overflow-y: scroll;
`;

export default function TodoRight() {
    const todo = useRecoilValue(todoState);

    return (
        <TodoRightWrapper>
            <TodoTitle>What will you want to do?</TodoTitle>
            {todo.length < 1 ? (
                <p>'There is no task'</p>
            ) : (
                <TodoItems>
                    {todo.map((item) => {
                        return <TodoItem key={item.id} item={item} />;
                    })}
                </TodoItems>
            )}
        </TodoRightWrapper>
    );
}
