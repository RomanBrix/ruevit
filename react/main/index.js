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
        const { contacts, history, frontRedux, langFunc, contactForm, fastCall, translate } = this.props;
        // const { fastCall, contactForm } = this.props;
        return(
            <div className="main-page">
                <Header contacts={ contacts.socials }  history={history} langFunc={langFunc} lang={frontRedux.lang} translate={translate}/>
                <Intro slider={frontRedux.slider} fastCall={fastCall} translate={translate.mainPage.intro}/>
                {/*<Adv advs={frontRedux.advs} history={history} />*/}
                <AdvV2 history={history} advs={frontRedux.advs} lang={frontRedux.lang} translate={translate.mainPage.advs}/>
                {/*<Video/>*/}
                <Service history={history} services={frontRedux.services} lang={frontRedux.lang} translate={translate.mainPage.serv}/>
                <Gallery history={history} photosToPreview={frontRedux.photosToAlbum} translate={translate.mainPage.gallery}/>
                {/*<News history={history} news={frontRedux.news}/>*/}
                <Contact contacts={contacts} contactForm={contactForm} translate={translate.mainPage.contacts}/>
            </div>
        )
    }
}