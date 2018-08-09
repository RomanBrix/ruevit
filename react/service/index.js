import React, {Component} from 'react';
import GHeader from "../layouts/GHeader";
import Zemlya from "./Zemlya";
import NotFound from "../layouts/NotFound";
import More from "./More";
import TehOtdel from "./TehOtdel";
import YurOtdel from "./YurOtdel";
import SWAT from "./SWAT";
import Anal from "./Anal";


export default class Service extends Component {
    getContainer(position){
        switch (+position){
            case 0:
                return <Zemlya/>;
            case 1:
                return <More/>;
            case 2:
                return <TehOtdel/>;
            case 3:
                return <YurOtdel/>;
            case 4:
                return <SWAT/>;
            case 5:
                return <Anal/>;
            default:
                return <NotFound/>
        }
    }
    render() {
        const { frontRedux, history, match } = this.props;
        const position = match.params.position;
        const Serv = frontRedux.services[position];

        const container = this.getContainer(position);
        console.log(container);
        return (
            <div className="big-service">
                <div className="serv-header">
                    <h1>{Serv.title}</h1>
                    <i className='icon-angle-circled-left' onClick={()=>{ history.push('/')}}/>
                </div>
                {container}
            </div>
        )
    }
}