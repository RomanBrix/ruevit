import axios from "axios";
import { front } from "../actionsAndUrl";

export function testFunc(test) {
    return dispatch =>{
        console.log(test);
        dispatch({
            type:front.TEST,
            test
        })
    }
}