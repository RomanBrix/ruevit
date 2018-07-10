// import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    testFunc
} from "../redux/front/front-actions";
import App from "./App";

const mapStateToProps = ( state ) => {
    return ({
        front: state.front
    })
};

export default connect(
    mapStateToProps,
    {
        testFunc
    })(App);