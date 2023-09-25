import React from 'react';
import { useRecoilValue } from 'recoil';
import { randomQuotes } from '../../atom';
import { styled } from 'styled-components';

const QuotesWrapper = styled.div`
    flex-basis: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: var(--padding-double-medium);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
`;

const Quote = styled.p`
    color: var(--text-200);
    margin-bottom: var(--margin-medium);
    font-size: var(--font-size-small);
    letter-spacing: 2px;
`;

const Author = styled.p`
    color: var(--primary-300);
    font-size: var(--font-size-micro);
`;

export default function Quotes() {
    const quotes = useRecoilValue(randomQuotes);

    return (
        <QuotesWrapper>
            <Quote>"{quotes.quote}"</Quote>
            <Author>{quotes.author}</Author>
        </QuotesWrapper>
    );
}
