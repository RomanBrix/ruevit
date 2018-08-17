import React, {Component} from 'react';

export default class AdvV2 extends Component {
    render() {
        // const names = ['','Работа 24 на 7','Сотрудники с опытом','Cовременная система управления операциями', 'Оказание услуг в любой точке мира', 'Ответственность за объекты и грузы', 'Ответственность за сотрудников','Современное техническое оборудование'];
        const { advs } = this.props;
        const namesContainer = advs.map((item, )=>{
            return <div className={`adv-card-v2`} key={item.id} onClick={()=>{
                this.props.history.push(`/adv/${item.id}`);
            }}>
                <h2>{item.title}</h2>
            </div>
        });
        return (
            <div className="adv-v2" id={`adv`}>

                <div className="adv-intro">
                    <h2 className={`with-left-stroke`}>Наши преимущества</h2>
                </div>
                <div className="adv-cards">
                    <div className="bg-for-adv">
                        <div className="bg-img" style={{backgroundImage: `url(/src/shevron.svg)`}}></div>
                    </div>
                    {namesContainer}
                </div>
            </div>
        )
    }
}