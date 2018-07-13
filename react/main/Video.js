import React, {Component} from 'react';
import $ from "jquery";

export default class Video extends Component {

    toggleFullScreenVideo(state){
        if(state === 'close') {
            $('.youtube_player_iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
        $('#video-layer-on').fadeToggle().css('display', 'flex');
        $('body').toggleClass('stop-body');

    };
    render() {
        return (
            <div className="video">
                <div id="video-layer-on"  onClick={()=>{
                    this.toggleFullScreenVideo('close');
                }}>
                    <iframe id="ytplayer" className={`youtube_player_iframe`} type="text/html" width="720" height="405"
                            src="https://www.youtube.com/embed/rV40J4MpNYc?disablekb=1&loop=1&rel=0&showinfo=0&color=white&enablejsapi=1"

                            frameBorder="0" allowFullScreen/>
                    {/*<i className='icon-cancel'/>*/}
                </div>
                <div id="bg-for-video" style={{
                    backgroundImage: `url(/src/video/image.png)`
                }}/>
                <div className="open-video">
                    <div className="video-play" onClick={()=>{
                        this.toggleFullScreenVideo('open');
                        $('.youtube_player_iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
                    }}>
                        <i className="icon-play"/>
                    </div>
                </div>
                <div className="video-preview">
                    <h2>Убедитесь сами что, мы можем!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam, similique. Animi cum dicta expedita ipsum nulla officia ullam. Ab accusamus consequatur minima necessitatibus ullam.</p>
                    <img src={`/src/video/aim.svg`} alt=""/>
                </div>
            </div>
        )
    }
}