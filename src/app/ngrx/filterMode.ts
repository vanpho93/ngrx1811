export function filterModeReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'CHANGE_MODE') return action.mode;
    return state;
}
