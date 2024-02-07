import React from 'react';
import { useRecoilValue } from 'recoil';
import { randomQuotes } from '../../data/quotes';
import { styled } from 'styled-components';

const QuotesWrapper = styled.div`
    flex-basis: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    padding: var(--padding-double-medium);
    margin-bottom: var(--margin-large);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 95%;
        padding: 1rem 2rem;
    }
`;

const Quote = styled.p`
    color: var(--text-200);
    margin-bottom: var(--margin-medium);
    font-size: var(--font-size-small);
    letter-spacing: 2px;
    line-height: 1.5;
`;

const Author = styled.p`
    color: var(--primary-300);
    font-size: var(--font-size-micro);
    letter-spacing: 2px;
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
