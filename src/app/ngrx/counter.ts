export function counterReducer(state = { counter: 0 }, action) {
    if (action.type === 'INCREASE') return { counter: state.counter + 1 };
    if (action.type === 'DESCREASE') return { counter: state.counter - 1 };
    if (action.type === 'RESET') return { counter: 0 };
    return state;
}
