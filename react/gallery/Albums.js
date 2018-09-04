import React, {Component} from 'react';

export default class Albums extends Component {
    render() {
        const { albums, photosToAlbum,  } = this.props.frontRedux;
        const { translate } = this.props;
        const albom_container = albums.map((item, index)=>{
            let srcOfBg = '';
            let i = 0;
            while(true){
                if(photosToAlbum[i] !== undefined) {
                    if (item.id === photosToAlbum[i].alb_id) {
                        srcOfBg = photosToAlbum[i].name;
                        break;
                    } else {
                        i++;
                    }
                }else{
                    srcOfBg = 'ph1.png';
                    break;
                }

                //НА ВСЯКИЙ СЛУЧАЙ
                if(i > photosToAlbum.length){
                    console.log('BIGGGG');
                    break
                }
            }

            return(
                <div className={`albom-card`} style={{ backgroundImage: `url(src/gallery/${srcOfBg})`}} key={index} onClick={()=>{
                    this.props.history.push(`/gallery/${item.id}-${index}`)
                }}>
                    <div className={`title`}>{item.name}</div>
                </div>
            )
        });
        console.log(translate);
        return (
            <div className="big-gallery" style={{
                backgroundImage: `url(/src/shevron.svg)`
            }}>
                <div className="gallery-head">
                    <h2 className={`with-left-stroke`}>{translate.albmHead}</h2>
                    <i className='icon-cancel' onClick={()=>{
                        this.props.history.push('/')
                    }}/>
                </div>
                <div className="gallery-container">
                    {/*{ imgContainer }*/}
                    {albom_container}
                </div>
            </div>
        )
    }
}