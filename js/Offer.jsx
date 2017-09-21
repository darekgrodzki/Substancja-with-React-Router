import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';


export class Offer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            offerPage: [
                ["Roll up'y", "rollupy"],
                ["Banery reklamowe", "banery"],
                ["Naklejki", "naklejki"],
                ["Ścianki reklamowe", "popupy"],
                ["Oklejanie witryn", "witryny"],
                ["Oklejanie pojazdów", "reklama_na_samochodach"],
                ["Plakaty i fototapety", "plakaty_i_fototapety"],
                ["Wizytówki", "wizytowki"],
                ["Ulotki", "ulotki"],
                ["Projekty", "projekty"],
                ["Strony www", "strony_www"],
                ["Jak zamawiać", "zamowienia"],
            ]

        };
    }


    render() {

        let menuOffer = this.state.offerPage.map((element, index) => {

            return <NavLink to={`/oferta/${element[1]}`} className="offerButton" activeClassName="activeOfferButton" key={index}>
                <span>{element[0]}</span><img src={'./img/offerIcons/' + index + '.png'}/></NavLink>;

        });

        return <div className="offer">
            <div className="naviOfferBox">
                <div className="naviOffer">{menuOffer}</div>
            </div>
            <div className="three"></div>
            <div className="promoDiv">
                <p>
                    <span>PROMOCJA</span>
                </p>
                <p>ROLL UP STANDARD 85 x 200 cm</p>
                <p>Za jedyne
                    <span>99</span>
                    zł netto</p>
            </div>
        </div>

    }

}
