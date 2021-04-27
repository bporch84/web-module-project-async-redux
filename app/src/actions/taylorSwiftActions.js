import axios from "axios";

export const TS_LOAD = "TS_LOAD";
export const TS_SUCCESS = "TS_SUCCESS";
export const TS_FAIL = "TS_FAIL";

export const getTSQuote = () => (dispatch) => {
    dispatch({ type: TS_LOAD });
    axios.get("https://api.taylor.rest/")
         .then(res => {
             console.log(res)
             dispatch({ type: TS_SUCCESS, payload: res.data.quote })
            })
         .catch(err => dispatch({ type: TS_FAIL, payload: err }));
};