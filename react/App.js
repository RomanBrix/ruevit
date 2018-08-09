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
        props.getNews('get_news');
        props.getAdvServ('get_adv_serv');
    }

    componentDidMount(){
        // $('body').toggleClass('stop-body');
        // const body  = document.getElementsByTagName('BODY');
        // document.body.classList.add('stop-body');

        // setTimeout(()=>{
        //     $('.loader').fadeToggle();
        //     document.body.classList.remove('stop-body');
        // }, 1200);
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
            changeAdvServ
        } = this.props;

        const frontRedux = this.props.front.toJS();
        // const { auth } = frontRedux;
        // console.log(auth);
        console.log(frontRedux.news);
        return (
            <Router>
                <RenderRouter>
                    {/*<Loader/>*/}
                    <Switch>
                        <Route  exact path="/login" render={(props)=><Login frontRedux={frontRedux} getLogin={getLogin} {...props}/>}/>
                        <Route  path="/admin" render={(props)=><Admin
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
                            fastCall={fastCall}
                            contactForm={contactForm}
                            {...props}/>}
                        />
                        <Route exact path="/about" render={(props)=><About frontRedux={frontRedux} contacts={contacts} {...props}/>}/>

                        <Route path="/adv/:position" render={(props)=><Adv frontRedux={frontRedux} {...props}/>}/>
                        <Route path="/service/:position" render={(props)=><Service frontRedux={frontRedux} {...props}/>}/>
                        <Switch>
                            <Route exact path="/gallery" render={(props)=><Albums frontRedux={frontRedux} {...props}/>}/>
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
