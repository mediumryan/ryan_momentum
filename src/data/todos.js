import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// basic todo
export const nowCategory = atom({
    key: 'now_category',
    default: 'TO_DO',
    effects_UNSTABLE: [persistAtom],
});
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

// filtered todo
export const filteredTodo = selector({
    key: 'filtered_todo',
    get: ({ get }) => {
        const now = get(nowCategory);
        const todo = get(todoState);
        return todo.filter((a) => a.state === now);
    },
});
