import React, {Component} from 'react';

export default class Albums extends Component {
    render() {
        const { albums, photosToAlbum } = this.props.frontRedux;
        console.log(photosToAlbum);
        const albom_container = albums.map((item, index)=>{
            let srcOfBg = '';
            let i = 0;
            while(true){
                if(item.id === photosToAlbum[i].alb_id){
                    srcOfBg = photosToAlbum[i].name;
                    break;
                }else{
                    i++;
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
        return (
            <div className="big-gallery" style={{
                background: `rgba(53, 53, 53, 1.000) no-repeat center center`,
                backgroundSize: `40%`,
                backgroundImage: `url(/src/logo.svg)`
            }}>
                <div className="gallery-head">
                    <h2 className={`with-left-stroke`}>Все альбомы</h2>
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