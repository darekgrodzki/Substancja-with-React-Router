import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll, scroller, Element} from 'react-scroll';

export class Banners extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
      let position = this.refs.top.getBoundingClientRect().top + window.pageYOffset -200;
      animateScroll.scrollTo(position, {duration: 700, smooth: true});
    }



    render() {



        return <div className="offer" ref="top">
          <div className="offerGroup">
                <h2>
                    <strong>Banery reklamowe</strong>
                </h2>
                <p>
                  Najpopularniejsza forma reklamy zewnętrznej, najczęściej zawieszane na ścianach budynków lub ogrodzeniach. Zaletami naszych banerów oprócz rozsądnych cen jest przede wszystkim bardzo wysoka jakość wydruków przez co relacja ich jakości do ceny jest na najwyższym możliwym poziomie. W naszej ofercie posiadamy:
                </p>
                <div className="offerImage">
                  <img src="../img/smart2.jpg"/>
                  <img src="../img/smart2.jpg"/>
                </div>

                <div className="offerTable">
                    <div className="subtitle">
                      Ceny pln netto za m2 / dla wielkości całego zamówienia.
                    </div>
                    <div className="nazwa">Ilość m2</div>
                    <div className="cena">
                        <strong>&lt;3</strong>
                    </div>
                    <div className="cena">
                        <strong>3-10</strong>
                    </div>
                    <div className="cena">
                        <strong>10-50</strong>
                    </div>
                    <div className="cena">
                        <strong>&gt;50</strong>
                    </div>
                    <div className="nazwa">Baner laminowany</div>
                    <div className="cena">33</div>
                    <div className="cena">28</div>
                    <div className="cena">23</div>
                    <div className="cena">18</div>
                    <div className="nazwa">Baner powlekany</div>
                    <div className="cena">43</div>
                    <div className="cena">38</div>
                    <div className="cena">33</div>
                    <div className="cena">28</div>
                    <div className="nazwa">Baner dwustronny</div>
                    <div className="cena">70</div>
                    <div className="cena">65</div>
                    <div className="cena">60</div>
                    <div className="cena">55</div>
                    <div className="nazwa">Baner odblaskowy</div>
                    <div className="cena">70</div>
                    <div className="cena">65</div>
                    <div className="cena">60</div>
                    <div className="cena">55</div>
                    <div className="nazwa">Siatka mesh</div>
                    <div className="cena">38</div>
                    <div className="cena">33</div>
                    <div className="cena">28</div>
                    <div className="cena">23</div>
                </div>
            </div>
</div>

    }

}
