import Immutable from "immutable";
import { front } from "../actionsAndUrl";

const InitialState = Immutable.fromJS({
    request: false,
    photosToAlbum: ['src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg','src/image3.jpg','src/image2.jpg'],
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
            img: 'image.png'
        },
        {
            title: 'Физическая охрана обьектов',
            img: 'image2.png'
        },
        {
            title: 'Физическая охрана обьектов',
            img: 'image.png'
        },
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