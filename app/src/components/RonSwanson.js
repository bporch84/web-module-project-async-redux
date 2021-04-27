import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRSQuote } from "../actions/ronSwansonActions";

const RonSwanson = (props) => {

    useEffect(() => {
        props.getRSQuote()
    }, []);

    if(props.loading) {
        return <h2>Loading...</h2>
    };

    return (
        <div>
            <h1>{props.quote}</h1>
            <button onClick={() => props.getRSQuote()}>Get new quote</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        quote: state.RSReducer.quote,
        loading: state.RSReducer.loading
    }
};

const mapDispatchToProps = { getRSQuote }

export default connect(mapStateToProps, mapDispatchToProps)(RonSwanson);
