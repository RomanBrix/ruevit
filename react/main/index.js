import React, {Component} from 'react';
import Intro from "./Intro";
// import Adv from "./Adv";
import Video from "./Video";
import Contact from "./Contact";
import Gallery from "./Gallery";
import {contacts} from "../URLS";
import Header from "../layouts/Header";
import Service from "./Service";
import News from "./News";
import AdvV2 from "./AdvV2";
// import AdvV3 from "./AdvV3";

export default class MainPage extends Component {

    componentWillUnmount(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        // console.log('unm');
    }
    render() {
        const { contacts, history, frontRedux } = this.props;
        const { fastCall, contactForm } = this.props;
        return(
            <div className="main-page">
                <Header contacts={ contacts.socials }  history={history}/>
                <Intro slider={frontRedux.slider} fastCall={fastCall}/>
                {/*<Adv advs={frontRedux.advs} history={history} />*/}
                <AdvV2 history={history}/>
                {/*<Video/>*/}
                <Service history={history} services={frontRedux.services}/>
                <Gallery history={history} photosToPreview={frontRedux.photosToAlbum}/>
                <News history={history} news={frontRedux.news}/>
                <Contact contacts={contacts} contactForm={contactForm} />
            </div>
        )
    }
}