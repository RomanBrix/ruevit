import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import allLanguage from './language';
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
import Albums from "./gallery/Albums";
import About from "./about";
import Login from "./admin/Login";
import Admin from "./admin";
import {addNews, deleteNews} from "../redux/front/front-actions";



export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
        props.getSliderPhoto('get_slider_photo');
        props.getAlbAndPhotos('get_alb_and_photo');
        // props.getNews('get_news');
        props.getAdvServ('get_adv_serv');
        props.langFunc('get');

    }

    render() {
        const {
            fastCall,
            contactForm,
            getLogin,
            changePassword,
            addNewUser,
            uploadImages,
            changeSlide,
            getSliderPhoto,
            getAlbAndPhotos,
            changeAlbumName,
            deletePhotoFromAlb,
            deleteAlb,
            addAlb,
            addPhotoToAlb,
            addNews,
            deleteNews,
            getNews,
            changeNews,
            getAdvServ,
            changeAdvServ,
            langFunc
        } = this.props;
        const frontRedux = this.props.front.toJS();
        // const { lang } = frontRedux;
        // console.log("lang is: ", lang);
        // console.log(allLanguage);
        //check language
        //
        let lenguageWhichIneed = allLanguage[0];
        // console.log(lenguageWhichIneed);

        for (let i = 0; i < allLanguage.length; i++ ){
            if(allLanguage[i].langName === frontRedux.lang){
                lenguageWhichIneed = allLanguage[i];
            }
        }
        // console.log(lenguageWhichIneed);




        return (
            <Router>
                <RenderRouter>
                    {/*<Loader/>*/}
                    <Switch>
                        <Route  exact path="/login" render={(props)=><Login frontRedux={frontRedux} getLogin={getLogin} {...props}/>}/>
                        <Route  path="/admin" render={(props)=><Admin
                            // getLogin={getLogin}
                            addNewUser={addNewUser}
                            frontRedux={frontRedux}
                            changePassword={changePassword}
                            uploadImages={uploadImages}
                            changeSlide={changeSlide}
                            getSliderPhoto={getSliderPhoto}
                            getAlbAndPhotos={getAlbAndPhotos}
                            changeAlbumName={changeAlbumName}
                            deletePhotoFromAlb={deletePhotoFromAlb}
                            deleteAlb={deleteAlb}
                            addAlb={addAlb}
                            addPhotoToAlb={addPhotoToAlb}
                            addNews={addNews}
                            deleteNews={deleteNews}
                            getNews={getNews}
                            changeNews={changeNews}
                            getAdvServ={getAdvServ}
                            changeAdvServ={changeAdvServ}
                            {...props}
                        />}/>

                        <Route exact path="/" render={(props)=><MainPage
                            frontRedux={frontRedux}
                            contacts={contacts}
                            translate={lenguageWhichIneed}
                            fastCall={fastCall}
                            contactForm={contactForm}
                            langFunc={langFunc}
                            {...props}/>}
                        />
                        <Route exact path="/about" render={(props)=><About frontRedux={frontRedux} contacts={contacts} translate={lenguageWhichIneed.about}{...props}/>}/>

                        <Route path="/adv/:position" render={(props)=><Adv advs={frontRedux.advs} frontRedux={frontRedux} {...props}/>}/>
                        <Route path="/service/:position" render={(props)=><Service srvs={frontRedux.services} frontRedux={frontRedux} {...props}/>}/>
                        <Switch>
                            <Route exact path="/gallery" render={(props)=><Albums frontRedux={frontRedux} translate={lenguageWhichIneed.mainPage.gallery}{...props}/>}/>
                            <Route path="/gallery/:id-:pos" render={(props)=><Gallery frontRedux={frontRedux} {...props}/>}/>
                            {/*<Route path="*" component={NotFound}/>*/}
                            <Route exact path="/news" render={(props)=><News news={frontRedux.news} {...props}/>}/>
                            <Route path="/news/:id" render={(props)=><NewsArticle news={frontRedux.news} {...props}/>}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                        <Route path="*" component={NotFound}/>



                    </Switch>
                </RenderRouter>
            </Router>
        );
    }
}
