import React, {Component} from 'react';

export default class Video extends Component {
    render() {
        return (
            <div className="video">
                <div className="open-video">
                    <div className="video-play">
                        <i className="icon-play"/>
                    </div>
                </div>
                <div className="video-preview">
                    <h2>Убедитесь сами что, мы можем!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam, similique. Animi cum dicta expedita ipsum nulla officia ullam. Ab accusamus consequatur minima necessitatibus ullam.</p>
                </div>
            </div>
        )
    }
}