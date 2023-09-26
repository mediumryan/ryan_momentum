import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
// import background images
import bg1 from './Images/1.jpg';
import bg2 from './Images/2.jpg';
import bg3 from './Images/3.jpg';
import bg4 from './Images/4.jpg';
import bg5 from './Images/5.jpg';
import bg6 from './Images/6.jpg';
import bg7 from './Images/7.jpg';
import bg8 from './Images/8.jpg';
import bg9 from './Images/9.jpg';
import bg10 from './Images/10.jpg';

const { persistAtom } = recoilPersist();

// about bg
const bgState = atom({
    key: 'bg_image',
    default: [
        {
            id: 0,
            imagePath: bg1,
        },
        {
            id: 1,
            imagePath: bg2,
        },
        {
            id: 2,
            imagePath: bg3,
        },
        {
            id: 3,
            imagePath: bg4,
        },
        {
            id: 4,
            imagePath: bg5,
        },
        {
            id: 5,
            imagePath: bg6,
        },
        {
            id: 6,
            imagePath: bg7,
        },
        {
            id: 7,
            imagePath: bg8,
        },
        {
            id: 8,
            imagePath: bg9,
        },
        {
            id: 9,
            imagePath: bg10,
        },
    ],
});
export const randomBg = selector({
    key: 'random_bg',
    get: ({ get }) => {
        const bg = get(bgState);
        const randomInt = Math.floor(Math.random(bg.length) * 10);
        return bg[randomInt];
    },
});
// about clock
export const timeState = atom({
    key: 'time',
    default: new Date(Date.now()),
});
// about greeting
export const isNameState = atom({
    key: 'is_name',
    default: false,
    effects_UNSTABLE: [persistAtom],
});
export const nameState = atom({
    key: 'name',
    default: '',
    effects_UNSTABLE: [persistAtom],
});
//about quotes
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
// about todo
export const categoryState = atom({
    key: 'categories',
    default: ['TO_DO', 'DOING', 'DONE'],
    effects_UNSTABLE: [persistAtom],
});
export const todoState = atom({
    key: 'todo_state',
    default: [],
    effects_UNSTABLE: [persistAtom],
});
