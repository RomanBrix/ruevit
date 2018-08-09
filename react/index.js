// import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    fastCall,
    contactForm,
    getLogin,
    changePassword,
    addNewUser,
    getSliderPhoto,
    uploadImages,
    changeSlide,
    getAlbAndPhotos,
    changeAlbumName,
    deletePhotoFromAlb,
    deleteAlb,
    addAlb,
    addPhotoToAlb,
    getNews,
    addNews,
    deleteNews,
    changeNews,
    getAdvServ,
    changeAdvServ
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
        fastCall,
        contactForm,
        getLogin,
        changePassword,
        addNewUser,
        getSliderPhoto,
        uploadImages,
        changeSlide,
        getAlbAndPhotos,
        changeAlbumName,
        deletePhotoFromAlb,
        deleteAlb,
        addAlb,
        addPhotoToAlb,
        getNews,
        addNews,
        deleteNews,
        changeNews,
        getAdvServ,
        changeAdvServ
    })(App);