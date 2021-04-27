import { RS_LOAD, RS_SUCCESS, RS_FAIL } from "../actions/ronSwansonActions";

const initialState = {
    RSquote: "",
    RSloading: false
};

export const ronSwansonReducer = (state = initialState, action) => {
    switch(action.type) {
        case RS_LOAD:
            return {
                ...state,
                RSloading: true
            }
        case RS_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                RSloading: false
            }
        case RS_FAIL:
            return {
                ...state,
                RSloading: false
            }
        default:
            return state
    };
};