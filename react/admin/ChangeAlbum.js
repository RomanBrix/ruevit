import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import $ from 'jquery';

export default class ChangeAlbum extends Component {
    constructor(props){
        super(props);
        const { match, albums } = props;
        this.state = {
            AlbumName: albums[+match.params.pos].name,
            save: false,
             highlight: 0,
            openUpload: false
        }
    }
    componentWillReceiveProps(newProps){
        const {albums, match} = newProps;
        // console.log('New DATA');
        // console.log(albums[+match.params.pos]);
        this.setState({
            AlbumName: albums[+match.params.pos].name,
        });
        this.refs.header.value = albums[+match.params.pos].name;
    }
    getPhotosFromAlbum(id){
        const img = this.props.allPhotos;
        let imgsFromAlbum = [];
        // console.log(props);
        // console.log(img);
        for (let i = 0; i < img.length; i++) {

            if(img[i].alb_id == id){
                imgsFromAlbum.push(img[i]);
            }
        }
        return imgsFromAlbum;

    }
    render() {
        const { match, changeAlbumName, deletePhotoFromAlb, getAlbAndPhotos, uploadImages, addPhotoToAlb} = this.props;
        const {AlbumName, save, highlight, openUpload} = this.state;
        const photosFromAlbum = this.getPhotosFromAlbum(match.params.id);
        // console.log(photosFromAlbum);
        const container = photosFromAlbum.map((item)=>{
            // console.log(item);
           return  <div className="gallery-img"  style={{backgroundImage: `url(/src/gallery/${item.name})`}} id={`${item.id}`} key={item.id} onClick={({target})=>{
               // this.toggleFullScreenPhoto(item.name, index)
               const{ highlight } = this.state;
               if(target.classList.contains('highlight')){
                   target.classList.remove('highlight');
                   this.setState({
                       highlight: highlight - 1
                   })
               }else {
                   target.classList.add('highlight');
                   this.setState({
                       highlight: highlight + 1
                   })
               }
           }}/>
        });
        return (
            <div className="settings-gallery">
                <div className="gal-container">
                    {openUpload ?  <div className="upload" onClick={()=>{
                        this.setState({
                            openUpload: false
                        })
                    }}>
                        <div className="upload-container" onClick={(e)=>{
                            e.stopPropagation();
                        }}>
                            <div className="up"  onClick={()=>{
                                document.getElementById('upMultiPicture').click();
                            }}>
                                <input id="upMultiPicture" type="file" name="upPicture" accept=".jpg, .jpeg, .png" multiple/>
                                Выбрать файл
                            </div>
                            <div className="save" onClick={()=>{
                                const file_data = $('#upMultiPicture').prop('files');
                                let form_data = new FormData();
                                for (let x = 0; x < file_data.length; x++) {
                                    form_data.append("pictures[]", file_data[x]);
                                }

                                uploadImages('upload_gallery',form_data, (react, names, sizes)=>{
                                    console.log(sizes);
                                    if(react){
                                        alert('ok');
                                        // console.info('names is: ');
                                        // console.log(names);
                                        addPhotoToAlb('add_photo_to_album', names, sizes, match.params.id, (check)=>{
                                            if(check){
                                                getAlbAndPhotos('get_alb_and_photo');
                                                this.setState({
                                                    openUpload: false
                                                })
                                            }
                                        });
                                    }else {
                                        console.error(react);
                                    }
                                });
                            }}>Загрузить</div>
                        </div>
                    </div> : ''}


                    <div className="head">
                        <div className="name">Название:</div>
                        <input type="text" defaultValue={AlbumName} ref={`header`} onChange={({target})=>{
                            if(target.value !== AlbumName){
                                this.setState({
                                    save: true
                                })
                            }else{
                                this.setState({
                                    save: false
                                })
                            }
                        }}/>
                        {/*{console.log(this.refs)}*/}
                        {
                            save ?
                                <div className="save" onClick={()=>{
                                    const { header } = this.refs;
                                    // console.log(header.value);
                                    changeAlbumName('change_album_name', match.params.id, header.value, (check)=>{
                                        if(check){
                                            alert('Имя успешно созраненно!');
                                            this.setState({
                                                save:false,
                                                AlbumName: header.value
                                            })
                                        }else{
                                            alert(check);
                                        }
                                    })
                                }}>Сохранить</div>
                                :
                                ''
                        }

                        <div className="add-photo" onClick={()=>{
                            this.setState({
                                openUpload: true
                            })
                        }}>Добавить фото</div>

                            {
                                highlight > 0 ?
                                    <div className="highlights">
                                        <div className="counter">Выбранно:<span>{highlight}</span></div>
                                        <div className="btn-delete" onClick={()=>{
                                           const allHighlight = $('.highlight');
                                           // console.log(allHighlight.length);
                                            const toDelete = [];
                                           for(let i = 0; i < allHighlight.length; i++){
                                                toDelete.push({
                                                    photo_id: allHighlight[i].id,
                                                    album_id: match.params.id
                                                })
                                           }

                                           ///НА УДАЛЕНИЕ
                                           // console.log(toDelete);
                                            deletePhotoFromAlb('delete_photos_from_albums',toDelete, (check)=>{
                                                if(check){
                                                    alert('фото удалились!');
                                                    getAlbAndPhotos('get_alb_and_photo');
                                                    $('.highlight').toggleClass('highlight');
                                                    this.setState({
                                                        highlight: 0
                                                    })
                                                }else{
                                                    alert(check);
                                                }
                                            });

                                        }}>Удалить</div>
                                        <div className="btn-cancel" onClick={()=>{
                                            $('.highlight').toggleClass('highlight');
                                            this.setState({
                                                highlight: 0
                                            })
                                        }}>Отменить</div>
                                    </div>
                                    : ''
                            }
                    </div>
                    { container }
                </div>
            </div>
        )
    }
}