import React from 'react';
import TodoLeft from './TodoLeft/TodoLeft';
import TodoRight from './TodoRight/TodoRight';
import { styled } from 'styled-components';

const TodoWrapper = styled.div`
    flex-basis: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
`;

export default function Todo() {
    return (
        <TodoWrapper>
            <TodoLeft />
            <TodoRight />
        </TodoWrapper>
    );
}
