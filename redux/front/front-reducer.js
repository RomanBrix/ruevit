import Immutable from "immutable";
import { front } from "../actionsAndUrl";
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
const hashOfUsr = getCookie('hash');
const InitialState = Immutable.fromJS({
    request: false,
    auth: hashOfUsr !== undefined && hashOfUsr.length > 19,
    lang: 'ru',
    // photosToAlbum: ['image.png','ph1.png','ph3.png','ph2.png','ph3.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png'],
    albums: [
        {
            id: 0,
            name: "Операция ❌"
        }
    ],
    photosToAlbum:[
        {
            id: 0,
            name: 'ph1.png',
            alb_id: 0,
            sizex: 2,
            sizey: 3
        },
        {
            id: 1,
            name: 'ph1.png',
            alb_id: 0,
            sizex: 2,
            sizey: 1
        },
        {
            id: 2,
            name: 'ph1.png',
            alb_id: 0,
            sizex: 1,
            sizey: 2
        }

    ],
    slider: [
        {id: "1", img: "ph1-min.png"}
        ],
    services: [
        {
            id:1,
            title: 'Отдел наземных операций',
            content: '',
            img: 'zemlya.png'
        },
        {
            id:2,
            title: 'Отдел морских операций',
            content: '',
            img: 'image2.png'
        },
        {
            id:3,
            title: 'Технический отдел',
            content: '',
            img: 'teh.jpg'
        },
        {
            id:4,
            title: 'Юридический отдел',
            content: '',
            img: 'yur.jpg'
        },
        {
            id:5,
            title: 'Отдел специальных операций',
            content: '',
            img: 'image.png'
        },
        {
            id:6,
            title: 'Отдел аналитики',
            content: '',
            img: 'anal.jpg'
        },
    ],
    advs: [
        {
            id: 1,
            title: '',
            content: '',
            // img: 'image.png'
        },
        {
            id:2,
            title: 'Работа 24 на 7',
            content: '',
            // img: 'ph1.png'
        },
        {
            id:3,
            title: 'Сотрудники с опытом',
            content: '',
            // img: 'ph2.png'
        },
        {
            id:4,
            title: 'Cовременная система управления операциями',
            content: '',
            // img: 'ph3.png'
        },
        {
            id:5,
            title: 'Оказание услуг в любой точке мира',
            content: '',
            // img: 'image.png'
        },
        {
            id:6,
            title: 'Ответственность за объекты и грузы',
            content: '',
            // img: 'image.png'
        },
        {
            id:7,
            title: 'Ответственность за сотрудников',
            content: '',
            // img: 'image.png'
        },
        {
            id:8,
            title: 'Современное техническое оборудование',
            content: '',
            // img: 'image.png'
        },
    ],
    news: [
        {
            id: 0,
            date: 'march 14th, 2019',
            title: 'Брошенная Англия создает истребитель будущего',
            desc_r: `Великобританию исключили из проекта франко-германского истребителя, что толкнуло Лондон на поиск новых союзников… Великобританию исключили из проекта франко-германского истребителя`,
            content: '{"blocks":[{"key":"7e6k6","text":"Head","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8bbet","text":"sadasdas","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dh4v6","text":"sad","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3uift","text":"asf","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"4isk","text":"as","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c87hp","text":"fas","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"22bn3","text":"fasasf","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"63i7m","text":"asf","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ba5tk","text":"asf","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c6plg","text":"as","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1ans5","text":"fa","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1rfee","text":"sf","type":"ordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8bqq3","text":"asdasdasdasd","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'

        },
        {
            id: 1,
            date: 'march 14th, 2019',
            title: 'Брошенная Англия создает истребитель будущего',
            desc_r: `Великобританию исключили из проекта франко-германского истребителя, что толкнуло Лондон на поиск новых союзников… Великобританию исключили из проекта франко-германского истребителя`,
            content: ''
        },
        {
            id: 2,
            date: 'march 14th, 2019',
            title: 'Брошенная Англия создает истребитель будущего',
            desc_r: `Великобританию исключили из проекта франко-германского истребителя, что толкнуло Лондон на поиск новых союзников… Великобританию исключили из проекта франко-германского истребителя`,
            content: ''
        }
    ]
});

const frontReducer = (state = InitialState, action) => {
    switch (action.type) {
        case  front.REQUEST:
            return state.set('request', true);

        case  front.REQ_OFF:
            return state.set('request', false);

        case front.LOGIN:
            return state.set('auth', action.login).set('request', false);

        case front.GET_SLIDES:
            // console.log(`action slides:`);
            // console.log(action.slides);
            return state.set('slider', action.slides).set('request', false);
        case front.GET_ALL_IMG:
            return state.set('photosToAlbum', action.photos).set('albums', action.alb).set('request', false);
        case front.GET_ALL_NEWS:
            return state.set('news', action.news).set('request', false);
        case front.GET_ALL_ADV_SERV:
            return state.set('advs', action.adv).set('services', action.serv).set('request', false);
        case front.GET_LANG:
            if(action.language !== 'default') {
                return state.set('lang', action.language).set('request', false);
            }else{
                return state.set('request', false);
            }
        case front.SET_LANG:
            return state.set('lang', action.language).set('request', false);


        default: return state;
    }
};

export default frontReducer;