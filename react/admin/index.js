import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import SettingsHeader from "./SettingsHeader";
import SettingsSlider from "./SettingsSlider";
import Profile from "./Profile";
import NotFound from "../layouts/NotFound";
import SettingsGallery from "./SettingsGallery";
import SettingsNews from "./SettingsNews";
import ChangeAlbum from "./ChangeAlbum";
import ArticleNews from "./ArticleNews";
import {addNews} from "../../redux/front/front-actions";
import SettingsAdvSer from "./SettingsAdvSer";
import ArticleAdvServ from "./ArticleAdvServ";

export default class Admin extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        // console.log(auth);
        this.state = {
            // photosFromAlbum: props.frontRedux.photosToAlbum
        };
        // props.getLogin('hash');
    }



    render() {
        const {
            frontRedux,
            history,
            changePassword,
            addNewUser,
            uploadImages,
            changeSlide,
            getSliderPhoto,
            changeAlbumName,
            deletePhotoFromAlb,
            getAlbAndPhotos,
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
        // const { photosFromAlbum } = this.state;
        const { auth } = frontRedux;
        console.log(auth);
        if(auth === false){
            return <Redirect to={`/login`}/>
        }

        return (
            <div className="admin">
                <SettingsHeader history={ history }/>
                <Switch>

                    <Route exact path={'/admin'} render={(props)=><Profile {...props} changePassword={changePassword} addNewUser={addNewUser}/>}/>
                    <Route  path="/admin/settings-slider" render={(props)=><SettingsSlider
                        slides={frontRedux.slider}
                        uploadImages={uploadImages}
                        changeSlide={changeSlide}
                        getSliderPhoto={getSliderPhoto}
                        {...props}/>}
                    />

                    <Switch>
                        {/*<Route  exact path="/admin/settings-news" render={(props)=><SettingsNews*/}
                            {/*{...props}*/}
                            {/*news={frontRedux.news}*/}
                            {/*addNews={addNews}*/}
                            {/*deleteNews={deleteNews}*/}
                            {/*getNews={getNews}*/}
                        {/*/>}/>*/}
                        {/*<Route  path="/admin/settings-news/:id" render={(props)=><ArticleNews*/}
                            {/*news={frontRedux.news}*/}
                            {/*changeNews={changeNews}*/}
                            {/*getNews={getNews}*/}
                            {/*history={history}*/}
                            {/*{...props}/>}/>*/}

                        <Route exact path="/admin/settings-gallery" render={(props)=><SettingsGallery
                            albums={ frontRedux.albums }
                            photos={frontRedux.photosToAlbum}
                            deleteAlb={deleteAlb}
                            getAlbAndPhotos={getAlbAndPhotos}
                            addAlb={addAlb}
                            {...props}
                        />}/>
                        <Route  path="/admin/settings-gallery/:id-:pos" render={(props)=><ChangeAlbum
                            // photosFromAlbum={photosFromAlbum}
                            uploadImages={uploadImages}
                            albums={ frontRedux.albums }
                            allPhotos={frontRedux.photosToAlbum}
                            changeAlbumName={changeAlbumName}
                            deletePhotoFromAlb={deletePhotoFromAlb}
                            getAlbAndPhotos={getAlbAndPhotos}
                            addPhotoToAlb={addPhotoToAlb}
                            history={history}

                            {...props}
                        />}/>

                        <Route  exact path="/admin/settings-adv-serv" render={(props)=><SettingsAdvSer
                            {...props}
                            adv={frontRedux.advs}
                            serv={frontRedux.services}
                            history={history}
                        />}/>

                        <Route  path="/admin/settings-adv-serv/:type-:id" render={(props)=><ArticleAdvServ
                            {...props}
                            adv={frontRedux.advs}
                            serv={frontRedux.services}
                            history={history}
                            getAdvServ={getAdvServ}
                            changeAdvServ={changeAdvServ}
                        />}/>
                    </Switch>

                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        )
    }
}