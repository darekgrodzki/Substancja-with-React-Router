import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class Projects extends React.Component {

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
              <strong>Projekty</strong>
          </h2>
          <p>
              Jesteśmy młodym, kreatywnym zespołem z głowami pełnymi pomysłów. Znajdziemy optymalne rozwiązania dla Twojej firmy, a nasza wiedza z zakresu marketingu pozwoli na idealne dopasowanie produktów do Twoich potrzeb. Projektujemy pojedyncze prace takie jak np. projekt banera, roll-up'u lub wizytówek, a także kompleksowe kampanie reklamowe. Na nasze usługi składają się między innymi:</p>

          <p>* symbole firmy (znak i logotyp firmowy),<br/>
              * wygląd strony www,<br/>
              * druki firmowe (papier firmowy, koperty i inne),<br/>
              * materiały reklamowe,<br/>
              * znakowanie środków transportu,<br/>
              * tablice i tabliczki informacyjne, szyldy reklamowe,<br/>
              * promocja Państwa produktów i usług.</p>
          <p>Koszt prac graficznych rozliczamy według stawki:</p>
          <p>
              <strong>60 zł netto za 1h,</strong>
          </p>
          <p>minimalka - 15 zł netto.</p>

            </div>
</div>

    }

}
