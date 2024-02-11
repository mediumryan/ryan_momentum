import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
// import state data
import { randomQuotes } from '../../data/quotes';

const QuotesWrapper = styled.div`
    flex-basis: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    padding: 1rem 2rem;
    margin: 2rem 0;
    font-size: 0.85rem;
    line-height: 1.5;
    letter-spacing: 1px;
    color: var(--accent-300);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);

    p.quote {
        margin-bottom: 1rem;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            margin-bottom: 0.5rem;
        }
    }

    p.author {
        color: var(--white-100);
        font-size: 0.75rem;
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 95%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 85%;
        font-size: 1.15rem;
    }
`;

export default function Quotes() {
    const quotes = useRecoilValue(randomQuotes);

    return (
        <QuotesWrapper>
            <p className="quote">"{quotes.quote}"</p>
            <p className="author">{quotes.author}</p>
        </QuotesWrapper>
    );
}
