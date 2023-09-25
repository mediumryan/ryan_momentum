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
export const bgState = atom({
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
