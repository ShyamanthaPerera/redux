export const initialState = ""

export default function ItemReducer(state = initialState, action: {type: string, payload: string}) {
    switch (action.type) {
        case "ADD_ITEM":
            return state + action.payload
        default :
            return state;
    }
}