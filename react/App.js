import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { contacts } from './URLS';
import $ from 'jquery'
import RenderRouter from './RenderRouter';
import MainPage from './main';
import Adv from './adv';
import NotFound from "./layouts/NotFound";
import Header from "./layouts/Header";
import Service from "./service";
import Gallery from "./gallery";
import News from "./news";
import Loader from "./layouts/Loader";
import NewsArticle from "./news/NewsArticle";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        // $('body').toggleClass('stop-body');
        // const body  = document.getElementsByTagName('BODY');
        document.body.classList.add('stop-body');

        setTimeout(()=>{
            $('.loader').fadeToggle();
            document.body.classList.remove('stop-body');
        }, 1200);
    }
    render() {
        const {testFunc} = this.props;
        const frontRedux = this.props.front.toJS();
        // console.log(this.props);
        return (
            <Router>
                <RenderRouter>
                    {/*<Loader/>*/}
                    <Switch>
                        <Route exact path="/" render={(props)=><MainPage frontRedux={frontRedux} contacts={contacts} {...props}/>}/>
                        <Route path="/adv/:position" render={(props)=><Adv frontRedux={frontRedux} {...props}/>}/>
                        <Route path="/service/:position" render={(props)=><Service frontRedux={frontRedux} {...props}/>}/>
                        <Route path="/gallery" render={(props)=><Gallery frontRedux={frontRedux} {...props}/>}/>
                        <Switch>
                            <Route exact path="/news" render={(props)=><News frontRedux={frontRedux} {...props}/>}/>
                            <Route path="/news/:id" render={(props)=><NewsArticle frontRedux={frontRedux} {...props}/>}/>
                        </Switch>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </RenderRouter>
            </Router>
        );
    }
}
