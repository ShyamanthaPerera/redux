export const initialState = {
    count: 0,
    visible:true
}

export function CountReducer(state = initialState, action: { type: string }) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'RESET':
            return {
                ...state,
                visible: !state.visible
            }
        default:
            return state
    }
}