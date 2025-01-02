export const initialState = ""

export default function CustomerReducer(state = initialState, action: {type: string, payload: string}) {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return state + action.payload
        default :
            return state;
    }
}