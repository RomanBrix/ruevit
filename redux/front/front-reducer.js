import Immutable from "immutable";
import { front } from "../actionsAndUrl";

const InitialState = Immutable.fromJS({
    request: false,
    photosToAlbum: ['image.png','ph1.png','ph3.png','ph2.png','ph3.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png','image.png','ph1.png','ph3.png','ph2.png'],
    slider: ['ph1-min.png','ph2-min.png','ph3-min.png'],
    services: [
        {
            title: 'Физическая охрана обьектов',
            img: 'image.png'
        },
        {
            title: 'Охрана физических лиц',
            img: 'image2.png'
        },
        {
            title: 'Оружие',
            img: 'image3.png'
        },
        {
            title: 'Физическая охрана обьектов',
            img: 'image2.png'
        },
        {
            title: 'Физическая охрана обьектов',
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