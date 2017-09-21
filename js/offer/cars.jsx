import React from 'react';
import ReactDOM from 'react-dom';
import {Scroll, animateScroll} from 'react-scroll';

export class CarWrapping extends React.Component {

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
              <strong>Oklejanie samochodów</strong>
          </h2>

          <p>Łącząc kreatywność przy projektowaniu grafiki z doświadczeniem zbieranym przy każdej kolejnej aplikacji, oferujemy naszym klientom fachową usługę znakowania samochodów firmowych. Dzięki temu środki transportu mogą się stać bardzo efektywną, mobilną powierzchnią reklamową usług Państwa firmy...</p>
          <p>
              ...a dla fanów tuningu też znajdziemy ciekawe rozwiązanie. Zapraszamy.</p>

            </div>
</div>

    }

}
