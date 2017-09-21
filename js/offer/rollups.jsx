import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Rollups extends React.Component {

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
                    <strong>Standard</strong>
                </h2>
                <p>Lekka, wykonana z aluminium standardowa konstrukcja w komplecie z czarną torbą transportową. Występuje w 2 rozmiarach 85 lub 100 cm szerokości na 200 cm wysokości.
                </p>
                <div className="offerImage">
                  <img src="../img/offerProducts/standard.jpg"/>
                  <img src="../img/offerProducts/standard2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">Blockout</div>
                    <div className="cena">129</div>
                    <div className="cena">139</div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                </div>
            </div>

            <div className="offerGroup">
                <h2>
                    <strong>Oval</strong>
                </h2>
                <p>Kaseta wykonana z aluminium o ładnym owalnym kształcie. Występuje w 2 rozmiarach 85 lub 100 cm szerokości na 200 cm wysokości. Zaletą tego systemu, oprócz ciekawego kształu jest torba transportowa, która ma suwak na całej szerokości przez co wyjmowanie i wkładanie kasety jest łatwiejsze.
                </p>

                <div className="offerImage">
                  <img src="../img/offerProducts/oval.jpg"/>
                  <img src="../img/offerProducts/oval2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Blockout
                    </div>
                    <div className="cena">
                        175
                    </div>
                    <div className="cena">
                        210
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                </div>
            </div>

            <div className="offerGroup">
                <h2>
                    <strong>Standard+</strong>
                </h2>
                <p>
                  Wykonana w pełni z aluminium, sprawdzona konstrukcja w komplecie z czarną torbą transportową. Jest dużo bardziej stabilna i wytrzymała od wersji standard m.in. ze względu na to, że jest wykonana z grubszego aluminium. Roll up ten posiada dwie nóżki oraz jeden lub dwa słupki w zależności od szerokości. Występuje w 4 rozmiarach 85, 100, 120 lub 150 cm szerokości na 200 cm wysokości. Opcjonalnie można zamówić lampkę do oświetlenia kasety.
                </p>
                <div className="offerImage">
                  <img src="../img/offerProducts/standard+.jpg"/>
                  <img src="../img/offerProducts/standard+2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="cena">
                        <strong>120</strong>
                    </div>
                    <div className="cena">
                        <strong>150</strong>
                    </div>

                    <div className="nazwa">
                        Blockout
                    </div>
                    <div className="cena">
                        199
                    </div>
                    <div className="cena">
                        229
                    </div>
                    <div className="cena">
                        X
                    </div>
                    <div className="cena">
                        X
                    </div>

                    <div className="nazwa">
                        Baner powlekany
                    </div>
                    <div className="cena">
                        199
                    </div>
                    <div className="cena">
                        229
                    </div>
                    <div className="cena">
                        264
                    </div>
                    <div className="cena">
                        304
                    </div>

                    <div className="nazwa">
                        Baner ferrari
                    </div>
                    <div className="cena">
                        239
                    </div>
                    <div className="cena">
                        275
                    </div>
                    <div className="cena">
                        320
                    </div>
                    <div className="cena">
                        399
                    </div>
                </div>
            </div>

            <div className="offerGroup">
                <h2>
                    <strong>Smart</strong>
                </h2>
                <p>
                  Ekonomiczne kasety o kształcie łezki w komplecie z czarną torbą transportową. Roll up posiada jeden lub dwa słupki w zależności od szerokości. Występuje w rozmiarach 85, 100 lub 120 cm szerokości na 200 cm wysokości. Występują także w kolorze czarnym.
                </p>
                <div className="offerImage">
                  <img src="../img/offerProducts/smart.jpg"/>
                  <img src="../img/offerProducts/smart2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="cena">
                        <strong>120</strong>
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Blockout
                    </div>
                    <div className="cena">
                        289
                    </div>
                    <div className="cena">
                        329
                    </div>
                    <div className="cena">
                        x
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Baner powlekany
                    </div>
                    <div className="cena">
                        289
                    </div>
                    <div className="cena">
                        329
                    </div>
                    <div className="cena">
                        379
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Baner ferrari
                    </div>
                    <div className="cena">
                        329
                    </div>
                    <div className="cena">
                        369
                    </div>
                    <div className="cena">
                        435
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Poliester
                    </div>
                    <div className="cena">
                        349
                    </div>
                    <div className="cena">
                        389
                    </div>
                    <div className="cena">
                        475
                    </div>
                    <div className="empty"></div>
                </div>
            </div>

            <div className="offerGroup">
                <h2>
                    <strong>Smart+</strong>
                </h2>
                <p>
                  Aluminiowe kasety o kształcie łezki wykonane z najwyższej jakości materiałów w komplecie z czarną, wzmocnioną torbą transportową. Roll up posiada regulację pochylenia grafiki oraz jeden lub dwa słupki w zależności od szerokości. Występuje w 4 rozmiarach 85, 100 na 200 cm wysokości i 120 lub 150 cm szerokości na 215 cm wysokości. Opcjonalnie można zamówić lampkę do oświetlenia kasety.
                </p>

                <div className="offerImage">
                  <img src="../img/offerProducts/smart+.jpg"/>
                  <img src="../img/offerProducts/smart2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="cena">
                        <strong>120</strong>
                    </div>
                    <div className="cena">
                        <strong>150</strong>
                    </div>

                    <div className="nazwa">
                        Blockout
                    </div>
                    <div className="cena">
                        317
                    </div>
                    <div className="cena">
                        365
                    </div>
                    <div className="cena">
                        X
                    </div>
                    <div className="cena">
                        X
                    </div>

                    <div className="nazwa">
                        Baner powlekany
                    </div>
                    <div className="cena">
                        317
                    </div>
                    <div className="cena">
                        365
                    </div>
                    <div className="cena">
                        399
                    </div>
                    <div className="cena">
                        460
                    </div>

                    <div className="nazwa">
                        Baner ferrari
                    </div>
                    <div className="cena">
                        362
                    </div>
                    <div className="cena">
                        405
                    </div>
                    <div className="cena">
                        455
                    </div>
                    <div className="cena">
                        545
                    </div>

                    <div className="nazwa">
                        Poliester
                    </div>
                    <div className="cena">
                        382
                    </div>
                    <div className="cena">
                        425
                    </div>
                    <div className="cena">
                        495
                    </div>
                    <div className="cena">
                        X
                    </div>
                </div>
            </div>

            <div className="offerGroup">
                <h2>
                    <strong>Pemium</strong>
                </h2>
                <p>
                  Aluminiowe kasety wykonane z najwyższej jakości materiałów w komplecie z czarną, wzmocnioną torbą transportową. Roll up posiada regulację pochylenia grafiki oraz jeden lub dwa słupki w zależności od szerokości. Występuje w 3 rozmiarach 85, 100 lub 120 cm, a wysokość grafiki jest regulowana w zakresie od 160 do 220 cm. Opcjonalnie można zamówić lampkę do oświetlenia kasety.
                </p>

                <div className="offerImage">
                  <img src="../img/offerProducts/premium.jpg"/>
                  <img src="../img/offerProducts/premium2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="cena">
                        <strong>120</strong>
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Baner ferrari
                    </div>
                    <div className="cena">
                        434
                    </div>
                    <div className="cena">
                        525
                    </div>
                    <div className="cena">
                        595
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Poliester
                    </div>
                    <div className="cena">
                        454
                    </div>
                    <div className="cena">
                        545
                    </div>
                    <div className="cena">
                        635
                    </div>
                    <div className="empty"></div>
                </div>
            </div>

            <div className="offerGroup">
                <h2>
                    <strong>Standard dwustronny</strong>
                </h2>
                <p>
                  Dwustronne, aluminiowe kasety w w komplecie z czarną torbą transportową. Roll upy te występują w dwóch rozmiarach 85 lub 100 cm szerokości na 200 cm wysokości. Opcjonalnie można zamówić lampkę do oświetlenia kasety.
                </p>

                <div className="offerImage">
                  <img src="../img/offerProducts/standardDouble.jpg"/>
                  <img src="../img/offerProducts/standardDouble2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Blockout
                    </div>
                    <div className="cena">
                        329
                    </div>
                    <div className="cena">
                        369
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Baner powlekany
                    </div>
                    <div className="cena">
                        329
                    </div>
                    <div className="cena">
                        369
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Baner ferrari
                    </div>
                    <div className="cena">
                        399
                    </div>
                    <div className="cena">
                        459
                    </div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                </div>
            </div>

            <div className="offerGroup">
                <h2>
                    <strong>Smart+ dwustronny</strong>
                </h2>
                <p>
                  Dwustronne, aluminiowe kasety wykonane z najwyższej jakości materiałów w komplecie z czarną, wzmocnioną torbą transportową. Występuje w 3 rozmiarach 85, 100 lub 120 cm szerokości na 200 cm wysokości. Opcjonalnie można zamówić lampkę do oświetlenia kasety.
                </p>

                <div className="offerImage">
                  <img src="../img/offerProducts/smart+Double.jpg"/>
                  <img src="../img/offerProducts/smart+Double2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za 1 sztukę z wydrukiem / rodzaje podłoża do druku
                    </div>
                    <div className="nazwa">Szerokość w cm</div>
                    <div className="cena">
                        <strong>85</strong>
                    </div>
                    <div className="cena">
                        <strong>100</strong>
                    </div>
                    <div className="cena">
                        <strong>120</strong>
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Blockout
                    </div>
                    <div className="cena">
                        553
                    </div>
                    <div className="cena">
                        613
                    </div>
                    <div className="cena">
                        X
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Baner powlekany
                    </div>
                    <div className="cena">
                        553
                    </div>
                    <div className="cena">
                        613
                    </div>
                    <div className="cena">
                        659
                    </div>
                    <div className="empty"></div>

                    <div className="nazwa">
                        Baner ferrari
                    </div>
                    <div className="cena">
                        633
                    </div>
                    <div className="cena">
                        693
                    </div>
                    <div className="cena">
                        749
                    </div>
                    <div className="empty"></div>
                    
                    <div className="nazwa">
                        Poliester
                    </div>
                    <div className="cena">
                        673
                    </div>
                    <div className="cena">
                        733
                    </div>
                    <div className="cena">
                        789
                    </div>
                    <div className="empty"></div>
                </div>

            </div>

        </div>

    }

}
