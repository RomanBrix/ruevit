import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RenderRouter from './RenderRouter';
import MainPage from './main';
import Adv from './adv';
import NotFound from "./layouts/NotFound";
import Header from "./layouts/Header";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        const {testFunc} = this.props;
        const frontRedux = this.props.front.toJS();

        return (
            <Router>
                <RenderRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" render={(props)=><MainPage frontRedux={frontRedux} {...props}/>}/>
                        <Route path="/adv" render={(props)=><Adv frontRedux={frontRedux} {...props}/>}/>
                        <Route path="/service" render={(props)=><Adv frontRedux={frontRedux} {...props}/>}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </RenderRouter>
            </Router>
        );
    }
}
