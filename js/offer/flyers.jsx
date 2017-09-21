import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Flyers extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let position = this.refs.top.getBoundingClientRect().top + window.pageYOffset - 200;
        animateScroll.scrollTo(position, {
            duration: 700,
            smooth: true
        });
    }

    render() {

        return <div className="offer" ref="top">
            <div className="offerGroup">
                <h2>
                    <strong>Ulotki, foldery</strong>
                </h2>
                <p>
                    Drukujemy je przy mniejszych nakładach w technologii cyfrowej lub przy większych offsetowo. Mamy możliwość wykonania bardzo wielu produktów takich jak:
                </p>
                <p>- ulotki - zwykłe i składane</p>
                <p>- teczki ofertowe,</p>
                <p>- prezentacje - bindowane i szyte,</p>
                <p>- foldery i katalogi,</p>
                <p>- zaproszenia,</p>
                <p>- i wiele innych.</p>

                <div className="offerImage">
                    <img src="../img/offerProducts/ulotki.jpg"/>
                    <img src="../img/offerProducts/foldery.jpg"/>
                </div>
                <p className="margin">
                    W związku z tym, że gama produktów druku małoformatowego jest ogromna nie publikujemy na naszej stronie całej oferty. Jeśli chcesz dowiedzieć się więcej lub otrzymać wycenę, zadzwoń lub napisz do nas maila, z przyjemnością odpowiemy na wszystkie Twoje pytania.
                </p>
                <p className="margin">
                  Poniżej kilka przykładowych cen ulotek - ceny netto.
                </p>

                <div className="offerTable">
                    <div className="subtitle">Ulotki offsetowe, dwustronne, kreda matowa 150g</div>
                    <div className="nazwa">Format / Ilość</div>
                    <div className="cena">
                        <strong>1000</strong>
                    </div>
                    <div className="cena">
                        <strong>2000</strong>
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">DL</div>
                    <div className="cena">156</div>
                    <div className="cena">200</div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">A6</div>
                    <div className="cena">146</div>
                    <div className="cena">170</div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">A5</div>
                    <div className="cena">232</div>
                    <div className="cena">300</div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">A4</div>
                    <div className="cena">382</div>
                    <div className="cena">472</div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                </div>
            </div>
        </div>

    }

}
