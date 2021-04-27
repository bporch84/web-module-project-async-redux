import axios from "axios";

export const RS_LOAD = "RS_LOAD";
export const RS_SUCCESS = "RS_SUCCESS";
export const RS_FAIL = "RS_FAIL";

export const getRSQuote = () => (dispatch) => {
    dispatch({ type: RS_LOAD });
    axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
         .then(res => {
             console.log(res)
             dispatch({ type: RS_SUCCESS, payload: res.data })
            })
         .catch(err => dispatch({ type: RS_FAIL, payload: err }));
};