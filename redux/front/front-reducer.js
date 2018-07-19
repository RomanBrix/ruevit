import Immutable from "immutable";
import { front } from "../actionsAndUrl";

const InitialState = Immutable.fromJS({
    request: false,
    // photosToAlbum: ['image.png','ph1.png','ph3.png','ph2.png','ph3.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png'],
    albums: [
        {
            id: 1,
            name: "Бовеые учения 🔫"
        },
        {
            id: 0,
            name: "Операция ❌"
        },
        {
            id: 2,
            name: "Отдыхаем 😜"
        },
        {
            id: 4,
            name: "Название"
        },
        {
            id: 3,
            name: "Название"
        },
        {
            id: 5,
            name: "Название"
        }
    ],
    photosToAlbum:[
        {
            id: 0,
            name: 'ph1.png',
            alb_id: 0
        },
        {
            id: 1,
            name: 'ph1.png',
            alb_id: 0
        },
        {
            id: 2,
            name: 'ph1.png',
            alb_id: 0
        },
        {
            id: 3,
            name: 'ph2.png',
            alb_id: 1
        },
        {
            id: 4,
            name: 'ph2.png',
            alb_id: 1
        },
        {
            id: 5,
            name: 'ph2.png',
            alb_id: 1
        },
        {
            id: 6,
            name: 'ph3.png',
            alb_id: 2
        },
        {
            id: 7,
            name: 'ph3.png',
            alb_id: 2
        },
        {
            id: 8,
            name: 'ph3.png',
            alb_id: 2
        },
        {
            id: 8,
            name: 'ph3.png',
            alb_id: 3
        },
        {
            id: 8,
            name: 'ph1.png',
            alb_id: 4
        },
        {
            id: 8,
            name: 'ph2.png',
            alb_id: 5
        },

    ],
    slider: ['ph1-min.png','ph2-min.png','ph3-min.png'],
    services: [
        {
            title: 'Отдел наземных операций',
            img: 'image.png'
        },
        {
            title: 'Отдел морских операций',
            img: 'image2.png'
        },
        {
            title: 'Технический отдел',
            img: 'image3.png'
        },
        {
            title: 'Юридический отдел',
            img: 'image2.png'
        },
        {
            title: 'Отдел специальных операций',
            img: 'image.png'
        },
        {
            title: 'Отдел аналитики',
            img: 'image.png'
        },
    ],
    advs: [
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'image.png'
        },
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'ph1.png'
        },
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'ph2.png'
        },
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'ph3.png'
        },
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'image.png'
        },
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'image.png'
        },
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'image.png'
        },
        {
            title: 'Headline',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim excepturi odio, reiciendis saepe sit. Delectus facere iste maiores placeat provident soluta ullam ut voluptatem?',
            img: 'image.png'
        },
    ],
    news: [
        {
            id: 0,
            date: 'march 14th, 2019',
            title: 'Брошенная Англия создает истребитель будущего',
            desc: `Великобританию исключили из проекта франко-германского истребителя, что толкнуло Лондон на поиск новых союзников…@%&%@Великобританию исключили из проекта франко-германского истребителя`
        },
        {
            id: 1,
            date: 'march 14th, 2019',
            title: 'Брошенная Англия создает истребитель будущего',
            desc: `Великобританию исключили из проекта франко-германского истребителя, что толкнуло Лондон на поиск новых союзников…@%&%@Великобританию исключили из проекта франко-германского истребителя`
        },
        {
            id: 2,
            date: 'march 14th, 2019',
            title: 'Брошенная Англия создает истребитель будущего',
            desc: `Великобританию исключили из проекта франко-германского истребителя, что толкнуло Лондон на поиск новых союзников…@%&%@Великобританию исключили из проекта франко-германского истребителя`
        }
    ]
});

const frontReducer = (state = InitialState, action) => {
    switch (action.type) {
        case  front.REQUEST:
            return state.set('request', true);

        case front.TEST:
            return state.set('test', action.test);

        default: return state;
    }
};

export default frontReducer;