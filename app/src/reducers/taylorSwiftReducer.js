import { TS_LOAD, TS_SUCCESS, TS_FAIL } from "../actions/taylorSwiftActions";

const initialState = {
    quote: "",
    loading: false
};

export const taylorSwiftReducer = (state = initialState, action) => {
    switch(action.type) {
        case TS_LOAD:
            return {
                ...state,
                loading: true
            }
        case TS_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                loading: false
            }
        case TS_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    };
};