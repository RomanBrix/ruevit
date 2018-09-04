import axios from "axios";
import { front, URL_POST,URL_GET, UploadSlider,UploadGallery } from "../actionsAndUrl";


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
    options = options || {};

    let expires = options.expires;

    if (typeof expires === "number" && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (let propName in options) {
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}


export function fastCall(type,phone) {
    return dispatch =>{
        // console.log(phone);
        axios.post(`${URL_POST}`,{ type, phone })
            .then((res) => {
                // console.log(res);

                if(res.data === true ) {
                    // dispatch({type: front.ADD_NEW_WORK});
                    alert("Мы уже звоним вам!");
                }else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
            })
            .catch((error) => {
                console.log(error);
            });
        // dispatch({
        //     type:front.TEST,
        //     test
        // })
    }
}

export function contactForm(type,name,phone,mail,msg) {
    return dispatch =>{
        // console.log(phone);
        const nameVal = name.value;
        const phoneVal = phone.value;
        const mailVal = mail.value;
        const msgVal = msg.value;

        // console.log(name);
        // console.log(nameVal);
        // console.log(`TyPE IS:  ${type}`);
        axios.post(`${URL_POST}`,{ type,name:nameVal, phone:phoneVal,mail:mailVal,msg:msgVal })
            .then((res) => {
                // console.log(res);

                if(res.data === true ) {
                    // dispatch({type: front.ADD_NEW_WORK});
                    alert("Ваше сообщение отправленно");
                    name.value ="";
                    phone.value='';
                    mail.value= '';
                    msg.value= '';
                }else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
            })
            .catch((error) => {
                console.log(error);
            });
        // dispatch({
        //     type:front.TEST,
        //     test
        // })
    }
}




export function getLogin(type,log, pass) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        // console.log(log,pass);

        if(type !== 'hash') {
            axios.get(`${URL_GET}`, {params: {type, log, pass}})
                .then((res) => {
                    console.log(res);

                    if (res.data === true) {
                        dispatch({type: front.LOGIN, login: true});
                    } else {
                        // alert('Не верный логин или пароль!');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }else{
            // const hashOfUser = getCookie('hash');
            // if(hashOfUser.length > 19) {
            //     dispatch({type: front.LOGIN, login: true});
            // }
        }
    }
}


export function changePassword(type,prevPass, newPass, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        const hash = getCookie('hash');

        axios.post(`${URL_POST}`,{ type, pPass:prevPass, nPass:newPass, hash:hash})
            .then((res) => {
                if(res.data === true ) {
                    fn(true);
                    // return true;

                }else if(typeof res.data === 'string' ){
                    // console.log(res.data);
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function addNewUser(type,userName, userPass, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ type, userName, userPass})
            .then((res) => {

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    // console.log(res.data);
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function getSliderPhoto(type) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        // console.log(log,pass);
        console.log('zapros powel');
        axios.get(`${URL_GET}`,{ params:{type}})
            .then((res) => {
                console.log('RES:');
                console.log(res);

                if(res.data.length >= 1  ) {
                    dispatch({type: front.GET_SLIDES, slides: res.data});
                }else{
                    // alert('Не верный логин или пароль!');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function uploadImages(type,file, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
       const url = type === 'upload_gallery' ?   UploadGallery : UploadSlider;
        // console.log(url);
        axios.post(`${url}`,  file , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                // console.log(res);
                if(res.data[0] === true ) {
                    fn(true, res.data[1], res.data[2]);
                }
                else if(typeof res.data[0] === 'string' ){
                    // console.log(res.data);
                    fn(false, res.data[0]);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function changeSlide(type,id, fileName, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        console.log(id);
        axios.post(`${URL_POST}`,{ type, id, fileName})
            .then((res) => {
                console.log(res.data);

                if(res.data === true ) {
                    // dispatch({type: front.REQ_OFF});
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}


export function getAlbAndPhotos(type) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        // console.log(log,pass);
        console.log('ищем альбомы и фото');
        axios.get(`${URL_GET}`,{ params:{type}})
            .then((res) => {
                console.log(res);

                if(res.data.length > 0  ) {
                    dispatch({type: front.GET_ALL_IMG, alb: res.data[0], photos: res.data[1]});
                }else{
                    // alert('Не верный логин или пароль!');
                    console.log('length: ', res.data.length)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
//change_album_name

export function changeAlbumName(type, id, name, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ type, id, name})
            .then((res) => {
                console.log(res.data);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    // alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

//delete_photos_from_albums


export function deletePhotoFromAlb(type, photos, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ type, photos})
            .then((res) => {
                console.log(res.data);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function deleteAlb(type, id, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ type, id})
            .then((res) => {
                console.log(res);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function addAlb(type, name, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ type, name})
            .then((res) => {
                console.log(res);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}



export function addPhotoToAlb(type, names, sizes, alb_id, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ type, names, sizes, alb_id})
            .then((res) => {
                console.log(res);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}


//get_news

export function getNews(type) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        // console.log(log,pass);
        console.log('ищем новости');
        axios.get(`${URL_GET}`,{ params:{type}})
            .then((res) => {
                console.log(res);

                if(res.data.length >= 1  ) {
                    dispatch({type: front.GET_ALL_NEWS, news: res.data});
                }else{
                    alert('Не верный логин или пароль!');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function addNews(type, name='New album', fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});

        axios.post(`${URL_POST}`,{ type, name})
            .then((res) => {
                console.log(res);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}
export function deleteNews(type, id, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        console.log(id);
        axios.post(`${URL_POST}`,{ type, id})
            .then((res) => {
                console.log(res);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}


export function changeNews(type, id, title, date, desc, content, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        console.log(id, title, date, desc);
        console.log(content);
        axios.post(`${URL_POST}`,{ type, id, title, date, desc, content})
            .then((res) => {
                console.log(res);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function getAdvServ(type) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        // console.log(log,pass);
        console.log('ищем приемущества и услуги');
        axios.get(`${URL_GET}`,{ params:{type}})
            .then((res) => {
                console.log(res);

                if(res.data) {
                    dispatch({type: front.GET_ALL_ADV_SERV, adv: res.data[0], serv: res.data[1]});
                }else{
                    alert('Не нашли!');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export function changeAdvServ(type, id, title, content, fn) {
    return dispatch =>{
        dispatch({type:front.REQUEST,});
        // console.log(id, title, date, desc);
        console.log(content);
        axios.post(`${URL_POST}`,{ type, id, title, content})
            .then((res) => {
                console.log(res);

                if(res.data === true ) {
                    fn(true);
                }
                else if(typeof res.data === 'string' ){
                    fn(false, res.data);
                } else{
                    alert('Произошла ошибка, попробуйте еще раз или обратитесь к администратору');
                }
                dispatch({type: front.REQ_OFF});

            })
            .catch((error) => {
                console.log(error);
            });
    }
}



export function langFunc(type, lang) {
    return dispatch =>{
        if(type === 'get'){

            const getLang = (()=>{
                let cookie = getCookie('lang');
                // console.log('cooooo ', cookie);
                // console.log(cookie >= 2);
                if(cookie && cookie.length >= 2){

                    return cookie;
                }else{
                    return 'default';
                }
            })();

            console.log('getlang: ', getLang);
            // if(getLang !== 'default') {
                dispatch({
                    type: front.GET_LANG,
                    language: getLang
                })
            // }
        }else if(type === 'set') {

            setCookie('lang', lang, {
                path: '/',
                expires: 240
            });
            dispatch({
                type:front.SET_LANG,
                language: lang
            })
        }
    }
}