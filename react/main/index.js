import React, {Component} from 'react';
import Intro from "./Intro";
import Adv from "./Adv";
import Video from "./Video";
import Contact from "./Contact";
import Gallery from "./Gallery";
import {contacts} from "../URLS";
import Header from "../layouts/Header";
import Service from "./Service";

export default class MainPage extends Component {

    componentWillUnmount(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
    render() {
        const { contacts, history, frontRedux } = this.props;
        // console.log(frontRedux);

        return(
            <div className="main-page">
                <Header contacts={ contacts.socials } />
                <Intro/>
                <Adv/>
                <Video/>
                <Service history={history} services={frontRedux.services}/>
                <Gallery history={history}/>
                <Contact contacts={contacts} />
            </div>
        )
    }
}