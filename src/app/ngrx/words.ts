import { Word } from '../types';

const defaultWords: Word[] = [];

export function wordsReducer(state = defaultWords, action) {
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'ADD_WORD') return state.concat(action.word);
    if (action.type === 'REMOVE_WORD') return state.filter(word => word._id !== action._id);
    return state;
}

// this.store.dispatch({ type: 'ADD_WORD', word });
