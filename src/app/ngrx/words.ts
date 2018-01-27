import { Word } from '../types';

const defaultWords: Word[] = [
    { _id: 'i3292', en: 'one', vn: 'mot', isMemorized: false },
    { _id: 'kqhr4', en: 'two', vn: 'hai', isMemorized: false },
    { _id: '0f23i', en: 'three', vn: 'ba', isMemorized: false },
    { _id: '23rfu', en: 'four', vn: 'bon', isMemorized: false },
];

export function wordsReducer(state = defaultWords, action) {
    if (action.type === 'ADD_WORD') return defaultWords.concat(action.word);
    return state;
}

// this.store.dispatch({ type: 'ADD_WORD', word });
