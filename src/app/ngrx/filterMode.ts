export function filterModeReducer(state = 'SHOW_FORGOT', action) {
    if (action.type === 'CHANGE_MODE') return action.mode;
    return state;
}
