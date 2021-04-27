import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTSQuote } from "../actions/taylorSwiftActions";

const TaylorSwift = (props) => {

    useEffect(() => {
        props.getTSQuote()
    }, []);

    if(props.loading) {
        return <h2>Loading...</h2>
    };

    return (
        <div>
            <h1>{props.quote}</h1>
            <button onClick={() => props.getTSQuote()}>Get new quote</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        quote: state.TSReducer.quote,
        loading: state.TSReducer.loading
    }
};

const mapDispatchToProps = { getTSQuote }

export default connect(mapStateToProps, mapDispatchToProps)(TaylorSwift);
