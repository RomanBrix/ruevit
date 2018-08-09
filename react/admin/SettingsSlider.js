import React, {Component} from 'react';
import $ from 'jquery';
// import {Redirect} from 'react-router-dom';

export default class SettingsSlider extends Component {
    constructor(props){
        super(props);
        this.state={
            openUpload: false,
            id: null,
            theme: ''
        }
    }

    manualUploadPhoto(type){
        const { id } = this.state;
        const { uploadImages, changeSlide, getSliderPhoto } = this.props;
        const file_data = $('#upPicture').prop('files')[0];
        let form_data = new FormData();
        form_data.append('file', file_data);

        uploadImages(type ,form_data, (react, fileName)=>{
            if(react === true){
                // alert(fileName);
                if(type === 'change_slide'){
                    changeSlide(type, id, fileName, (react)=>{
                        // alert(react);
                        if(react){
                            getSliderPhoto('get_slider_photo');
                            alert('Слайд изменен');
                            this.setState({
                                openUpload: false
                            })
                        }
                    })
                }else if(type === 'add_new_slide'){
                    changeSlide(type, null, fileName, (react)=>{
                        // alert(react);
                        if(react){
                            getSliderPhoto('get_slider_photo');
                            alert('Слайд cоздан');
                            this.setState({
                                openUpload: false
                            })
                        }
                    })
                }
            }
        });

    }
    render() {
        const { slides, changeSlide, getSliderPhoto } = this.props;
        const { openUpload , theme} = this.state;
        console.log(`SLIDES FROM HERE`);
        console.log(slides);

        const slidesContainer = slides.map((item, index)=>{
            return(
                <div className={`slides`} key={index} style={{backgroundImage: `url(/src/slider/${item.img})`}}>
                    <div className="delete" onClick={()=>{
                        // item.id
                        // delete_slide
                        changeSlide('delete_slide', item.id, '', (react)=>{
                            // alert(react);
                            if(react){
                                getSliderPhoto('get_slider_photo');
                                alert('Слайд удален');
                            }
                        })
                    }}>Удалить слайд</div>
                    <div className="change" onClick={()=>{
                        this.setState({
                            openUpload: true,
                            id: item.id,
                            theme: 'change'
                        })
                    }}>Изменить фото
                    </div>
                </div>
            )
        });
        return (
            <div className="settings-slider">
                <div className="slider-container">
                    {openUpload ?  <div className="upload" onClick={()=>{
                        this.setState({
                            openUpload: false
                        })
                    }}>
                        <div className="upload-container" onClick={(e)=>{
                           e.stopPropagation();
                        }}>
                            <div className="up"  onClick={()=>{
                                document.getElementById('upPicture').click();
                            }}>
                                <input id="upPicture" type="file" name="upPicture" accept=".jpg, .jpeg, .png"/>
                                Выбрать файл
                            </div>
                            <div className="save" onClick={()=>{
                                if(theme === 'change') {
                                    this.manualUploadPhoto('change_slide');
                                }else if(theme === 'addnew'){
                                    this.manualUploadPhoto('add_new_slide');
                                }
                            }}>Загрузить</div>
                        </div>
                    </div> : ''}

                    {slidesContainer}
                    <div className="btn" onClick={()=>{
                        this.setState({
                            openUpload: true,
                            id: null,
                            theme: 'addnew'
                        })
                    }}>Добавить слайд</div>
                </div>
            </div>
        )
    }
}