import Immutable from "immutable";
import { front } from "../actionsAndUrl";

const InitialState = Immutable.fromJS({
    request: false,
    test: "2",
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