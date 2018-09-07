import React, {Component} from 'react';
import NotFound from "../layouts/NotFound";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Seventh from "./Seventh";
import ReadableDraftJs from "../layouts/ReadableDraftJs";

export default class Adv extends Component {

    // getContainer(position){
    //
    //     switch (+position){
    //         case 1:
    //             return <First/>;
    //         case 2:
    //             return <Second/>;
    //         case 3:
    //             return <Third/>;
    //         case 4:
    //             return <Fourth/>;
    //         case 5:
    //             return <Fifth/>;
    //         case 6:
    //             return <Sixth/>;
    //         case 7:
    //             return <Seventh/>;
    //         default:
    //             return <NotFound/>
    //     }
    // }
    render() {
        // console.log(this.props);
        const { match, history, advs, frontRedux } = this.props;
        // const { head } = this.state;
        const needId = match.params.position;
        let ourAdv = {};
        let ourAdvContent = '';
        let ourAdvTitle = '';
        // const names = ['','Работа 24 на 7','Сотрудники с опытом','Cовременная система управления операциями', 'Оказание услуг в любой точке мира', 'Ответственность за объекты и грузы', 'Ответственность за сотрудников','Современное техническое оборудование'];
        // const head = names[+match.params.position];
        // const container = this.getContainer(match.params.position);
        for(let i = 0; i < advs.length; i++){
            if(advs[i].id == needId){
                ourAdv = advs[i];
                break;
            }
        }
        switch (frontRedux.lang){
            case 'rus':
                ourAdvContent = ourAdv.content;
                ourAdvTitle = ourAdv.title;
                break;
            case 'ua':
                ourAdvContent = ourAdv.contentUa;
                ourAdvTitle = ourAdv.titleUa;
                break;

            case 'eng':
                ourAdvContent = ourAdv.contentEng;
                ourAdvTitle = ourAdv.titleEng;
                break;
            default:
                ourAdvContent = ourAdv.content;
                ourAdvTitle = ourAdv.title;
                break;

        }
        return (
            <div className="big-service">
                <div className="serv-header">
                    <h1>{ourAdvTitle}</h1>
                    <i className='icon-angle-circled-left' onClick={()=>{ history.push('/')}}/>
                </div>
                    {/*{container}*/}
                <div className="serv-container">
                    <ReadableDraftJs content={ourAdvContent}/>
                </div>
            </div>
        )
    }
}