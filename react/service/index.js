import React, {Component} from 'react';
import GHeader from "../layouts/GHeader";
import Zemlya from "./Zemlya";
import NotFound from "../layouts/NotFound";
import More from "./More";
import TehOtdel from "./TehOtdel";
import YurOtdel from "./YurOtdel";
import SWAT from "./SWAT";
import Anal from "./Anal";
import ReadableDraftJs from "../layouts/ReadableDraftJs";


export default class Service extends Component {
    // getContainer(position){
    //     switch (+position){
    //         case 0:
    //             return <Zemlya/>;
    //         case 1:
    //             return <More/>;
    //         case 2:
    //             return <TehOtdel/>;
    //         case 3:
    //             return <YurOtdel/>;
    //         case 4:
    //             return <SWAT/>;
    //         case 5:
    //             return <Anal/>;
    //         default:
    //             return <NotFound/>
    //     }
    // }
    render() {
        const { srvs, history, match, frontRedux } = this.props;
        const needId = match.params.position;
        let ourSrv = {};
        let ourSrvContent = '';
        let ourSrvTitle = '';
        // const Serv = frontRedux.services[position];


        // const container = this.getContainer(position);
        // console.log(container);
        for(let i = 0; i < srvs.length; i++){
            if(srvs[i].id == needId){
                ourSrv = srvs[i];
                break;
            }
        }

        switch (frontRedux.lang){
            case 'rus':
                ourSrvContent = ourSrv.content;
                ourSrvTitle = ourSrv.title;
                break;
            case 'ua':
                ourSrvContent = ourSrv.contentUa;
                ourSrvTitle = ourSrv.titleUa;
                break;

            case 'eng':
                ourSrvContent = ourSrv.contentEng;
                ourSrvTitle = ourSrv.titleEng;
                break;
            default:
                ourSrvContent = ourSrv.content;
                ourSrvTitle = ourSrv.title;
                break;
        }
        return (
            <div className="big-service">
                <div className="serv-header">
                    <h1>{ourSrvTitle}</h1>
                    <i className='icon-angle-circled-left' onClick={()=>{ history.push('/')}}/>
                </div>
                {/*{container}*/}
                <div className="serv-container">
                    <ReadableDraftJs content={ourSrvContent}/>
                </div>
            </div>
        )
    }
}