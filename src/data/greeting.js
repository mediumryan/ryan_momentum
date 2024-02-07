import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
