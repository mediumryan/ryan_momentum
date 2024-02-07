import { atom, selector } from 'recoil';

const quotesState = atom({
    key: 'quotes',
    default: [
        {
            id: 0,
            quote: 'I never dreamed about success, I worked for it',
            author: 'Estee Lauder',
        },
        {
            id: 1,
            quote: 'Do not try to be original, just try to be good.',
            author: 'Paul Rand',
        },
        {
            id: 2,
            quote: 'Do not be afraid to give up the good to go for the great',
            author: 'John D. Rockefeller',
        },
        {
            id: 3,
            quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
            author: 'Martin Luther King Jr.',
        },
        {
            id: 4,
            quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
            author: 'Thomas Edison',
        },
        {
            id: 5,
            quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
            author: 'REid Hoffman',
        },
        {
            id: 6,
            quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
            author: 'Tim O Reilly',
        },
        {
            id: 7,
            quote: 'Some people dream of success, while other people get up every morning and make it happen',
            author: 'Wayne Huizenga',
        },
        {
            id: 8,
            quote: 'The only thing worse than starting something and falling.. is not starting something',
            author: 'SEth Godin',
        },
        {
            id: 9,
            quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
            author: 'Jim Rohn',
        },
    ],
});
export const randomQuotes = selector({
    key: 'random_quotes',
    get: ({ get }) => {
        const quotes = get(quotesState);
        const randomInt = Math.floor(Math.random(quotes.length) * 10);
        return quotes[randomInt];
    },
});
