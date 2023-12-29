import React from 'react';
import TodoLeft from './TodoLeft/TodoLeft';
import TodoRight from './TodoRight/TodoRight';
import { styled } from 'styled-components';

const TodoWrapper = styled.div`
    flex-basis: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    padding: var(--padding-medium) var(--padding-large);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.1px);
    -webkit-backdrop-filter: blur(0.1px);
`;

export default function Todo() {
    return (
        <TodoWrapper>
            <TodoLeft />
            <TodoRight />
        </TodoWrapper>
    );
}
