import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Popups extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
      let position = this.refs.top.getBoundingClientRect().top + window.pageYOffset -200;
      animateScroll.scrollTo(position, {duration: 700, smooth: true});
    }

    render() {



        return <div className="offer" ref="top"><div className="offerGroup">
          <h2>
              <strong>Ścianki reklamowe - POP UP</strong>
          </h2>
          <p>Potrzebujesz ściankę reklamową... to dobrze trafiłeś!<br/>
              Produkujemy POP UP'y
              <strong>łukowe</strong>
              i
              <strong>proste</strong>
              w różnych rozmiarach.
              <br/>

              <strong>Dlaczego nasze ścianki?</strong>
              <br/>
              Ponieważ drukujemy grafiki z
              <strong>fotograficzną jakością</strong>
              i zabezpieczamy je bardzo dobrym
              <strong>laminatem strukturalnym
              </strong>typu stoplight. Dodatkowo używamy nieprześwitujących podkładów polipropylenowych do naklejania folii, a w konstrukcje ścianek zaopatrujemy się u solidnych producentów. Efekt jest taki, że nasze produkcje zadowolą nawet najbardziej wymagających klientów.<br/>
              Chcesz dowiedzieć się więcej lub otrzymać
              <strong>wycenę</strong>,
              <strong>zadzwoń</strong>
              lub napisz do nas
              <strong>maila</strong>,
              <br/>
              z przyjemnością odpowiemy na wszystkie Twoje pytania.</p>

            </div>
</div>

    }

}
