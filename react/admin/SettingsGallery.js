import React, {Component} from 'react';
import $ from "jquery";
// import {Redirect} from 'react-router-dom';

export default class SettingsGallery extends Component {
    render() {
        const { albums, photos,getPhotosFromAlbum, deleteAlb, getAlbAndPhotos, addAlb } = this.props;

        const container = albums.map((item, index)=>{
            let srcOfBg = '';
            let i = 0;
            while(true){
                // console.log(photos.length);
                // console.log(photos[i]);
                if(photos[i] !== undefined) {
                    if (item.id === photos[i].alb_id) {
                        srcOfBg = photos[i].name;
                        break;
                    } else {
                        i++;
                    }
                }else{
                    srcOfBg = 'ph1.png';
                    break;
                }

                //НА ВСЯКИЙ СЛУЧАЙ
                if(i > photos.length){
                    console.log('BIGGGG');
                    break
                }
            }
            return(
                <div className={`albom-card`} style={{ backgroundImage: `url(/src/gallery/${srcOfBg})`}} key={index}>
                    <div className="settings">
                        <div className="delete" onClick={()=>{
                            deleteAlb('delete_albums',item.id, (check)=>{
                                if(check){
                                    alert('альбом удалился!');
                                    getAlbAndPhotos('get_alb_and_photo');
                                }else{
                                    alert(check);
                                }
                            })
                        }}>Удалить</div>
                        <div className="change" onClick={()=>{
                            // getPhotosFromAlbum(item.id);
                            this.props.history.push(`/admin/settings-gallery/${item.id}-${index}`)
                        }}>Изменить</div>
                    </div>
                    <div className={`title`}>{item.name}</div>
                </div>
            )
        });
        return (
            <div className="settings-gallery">
                {/*gallery*/}
                <div className="gal-container">
                    <div className="head">
                        <div className="add-photo" onClick={()=>{
                            const name = prompt('Название альбома');
                            console.log(name);
                            if(name && name.length > 2){
                                addAlb('add_album',name, (check)=>{
                                    if(check){
                                        alert('Альбом добавлен');
                                        getAlbAndPhotos('get_alb_and_photo');
                                    }else{
                                        alert(check);
                                    }
                                })
                            }
                        }}>Добавить альбом</div>
                    </div>
                    {container}
                </div>
            </div>
        )
    }
}