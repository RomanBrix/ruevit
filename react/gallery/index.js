import React, {Component} from 'react';
import GHeader from "../layouts/GHeader";
import $ from "jquery";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            imgs: props.frontRedux.photosToAlbum,
            activePhoto: 0
        }
    }

    toggleFullScreenPhoto(src, activePhoto){
        const { imgs } = this.state;
        if(src !== 'close') {
            $('#f-photo').css('background-image', `url(src/gallery/${src})`);
            //off btn back when we need this
            if(activePhoto === 0) {
                if (!($('#arrowThatIneed').hasClass('not-active'))) {
                    $('#arrowThatIneed').addClass('not-active');
                }
            }else {
                if($('#arrowThatIneed').hasClass('not-active')) {
                    $('#arrowThatIneed').removeClass('not-active');
                }
            }
            //off btn 4wd when we need this
            // console.log(activePhoto);
            if(activePhoto === imgs.length -1 ) {
                if (!($('#arrowThatIneed2').hasClass('not-active'))) {
                    $('#arrowThatIneed2').addClass('not-active');
                }
            }else {
                if($('#arrowThatIneed2').hasClass('not-active')) {
                    $('#arrowThatIneed2').removeClass('not-active');
                }
            }
        }
        $('.fullScreenPhoto').fadeToggle().css('display','flex');
        $('body').toggleClass('stop-body');

        this.setState({
            activePhoto
        })
    };

    frwdImg(){
        const { imgs, activePhoto } = this.state;
        let newUrl = '';
        if(activePhoto + 1 < imgs.length) {
            newUrl = imgs[activePhoto + 1];
            $('#f-photo').css('background-image', `url(src/gallery/${newUrl})`);
            if($('#arrowThatIneed').hasClass('not-active')) {
                $('#arrowThatIneed').removeClass('not-active');
            }
            this.setState({
                activePhoto: activePhoto + 1
            })
        }
        if(activePhoto === imgs.length - 2) {
            if (!($('#arrowThatIneed2').hasClass('not-active'))) {
                $('#arrowThatIneed2').addClass('not-active');
            }
        }

    };

    backImg(){
        const { imgs, activePhoto } = this.state;
        let newUrl = '';
        if(activePhoto  > 0) {
            newUrl = imgs[activePhoto - 1];
            $('#f-photo').css('background-image', `url(src/gallery/${newUrl})`);
            if($('#arrowThatIneed2').hasClass('not-active')) {
                $('#arrowThatIneed2').removeClass('not-active');
            }
            this.setState({
                activePhoto: activePhoto - 1
            })
        }else{
            // alert('last')
        }
        if(activePhoto === 1) {
            if (!($('#arrowThatIneed').hasClass('not-active'))) {
                $('#arrowThatIneed').addClass('not-active');
            }
        }
    };

    render() {
        console.log(this.props);
        // const { frontRedux } = this.props;
        const { imgs } = this.state;
        const imgContainer = imgs.map((item, index)=>{
            return (
                <div className="gallery-img"  style={{backgroundImage: `url(src/gallery/${item})`}}id={`photo-${index}`} key={index} onClick={()=>{
                    this.toggleFullScreenPhoto(item, index)
                }}/>
            )
        });
        return (
            <div className="big-gallery">
                {/*<GHeader/>*/}
                <div className="fullScreenPhoto">
                    <div id="f-photo"/>
                    <div className="settings">
                        <i className="icon-cancel" onClick={()=>{
                            this.toggleFullScreenPhoto('close', 0);
                        }}/>
                        <i className={`icon-left-open-big not-active`} id="arrowThatIneed"onClick={()=>{
                            this.backImg();
                        }}/>
                        <i className={`icon-right-open-big`} id='arrowThatIneed2' onClick={()=>{
                            this.frwdImg();
                        }}/>
                    </div>
                </div>
                <div className="gallery-head">
                    <h2 className={`with-left-stroke`}>Галерея снимков</h2>
                    <i className='icon-cancel' onClick={()=>{
                        this.props.history.push('/')
                    }}/>
                </div>
                <div className="gallery-container">
                    { imgContainer }
                </div>
            </div>
        )
    }
}