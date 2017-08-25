import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {Scroll, animateScroll} from 'react-scroll';
import {Main} from './MainContent.jsx';
import {Offer} from './Offer.jsx';
import {Portfolio} from './Portfolio.jsx';
import {Contact} from './Contact.jsx';
import {Footer} from './footer.jsx';
require('../scss/main.scss');

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {

        constructor(props) {
            super(props);

            this.state = {

                buttonsText: [

                    [
                        "", "Home"
                    ],
                    [
                        "oferta", "Oferta"
                    ],
                    [
                        "portfolio", "Potfolio"
                    ],
                    ["kontakt", "Kontakt"]
                ],
                hamburgerClass: false,
                goToTop: false,
                position: 0
            };

        }

        componentDidMount() {
            window.addEventListener('scroll', this.myfunction);
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.myfunction);
        }

        myfunction = () => {
            if (window.scrollY > 300) {
                this.setState({goToTop: true, position: window.scrollY});
            } else {
              this.setState({goToTop: false, position: 0})
            }
        }

        changeClass = (a) => {
            this.setState({hamburgerClass: a})
        }

        render() {

            let menu = this.state.buttonsText.map((element, index) => {

                return <NavLink exact to={`/${element[0]}`} className="linkTo" activeClassName="active" key={index}>
                    <div className="cube">
                        <div className="second">
                            <span>{element[1]}</span>
                        </div>
                        <div className="first">
                            <span>{element[1]}</span>
                        </div>
                    </div>
                </NavLink>
            });

            let goToTop;
            if(this.state.goToTop===true){
              goToTop = <div className="goToTop" onClick={() => animateScroll.scrollToTop({duration: Math.sqrt(this.state.position)*10, smooth: true})}><img src="./img/do_gory.png"/></div>
            } else {
              goToTop = <div className="goToTopHide"><img src="./img/do_gory.png"/></div>
            }

            let menuHamburger;
            if (this.state.hamburgerClass === true) {
              menuHamburger = this.state.buttonsText.map((element, index) => {
                  return <NavLink exact to={`/${element[0]}`} className="hamburgerButton" activeClassName="hamburgerButtonActive" key={index}>{element[1]}</NavLink>
                });
            }

            let hamburger;
            if (this.state.hamburgerClass === false) {
                hamburger = <div id="menu-toggle" onClick={e => this.changeClass(true)}>
                    <div id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            } else {
                hamburger = <div id="menu-toggle" className="open" onClick={e => this.changeClass(false)}>
                    <div id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>

            }

            return (
                <BrowserRouter>
                    <div>
                        <header style={{
                            backgroundImage: "url('./img/tlo.jpg')"
                        }}>
                            <div className="header">
                                <nav>
                                    <img src="./img/logo.png"/>
                                    <ul>{menu}</ul>

                                    {hamburger}
                                    <div className="hamburgerNavi">
                                        {menuHamburger}
                                    </div>
                                </nav>
                            </div>
                            <div className="conceptDiv">
                                <p>Połączyliśmy potencjał dwóch substancji: agencji reklamowej i drukarni. Artystyczny świat kreacji może więc korzystać z całej palety precyzyjnych technologii wyrażania myśli i koncepcji. Co to oznacza dla naszych klientów? Przede wszystkim niższe koszty produkcji reklam (typu: stojaki roll up, banery reklamowe, naklejki, plakaty itd.) oraz dużą oszczędność czasu. Łatwiej jest także wyeliminować wszelkie problemy, występujące często na linii agencja reklamowa - drukarnia.</p>
                            </div>
                        </header>
                        <div className="three"></div>
                        {goToTop}

                        <div style={{
                            width: '100%'
                        }}>
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/oferta" component={Offer}/>
                            <Route exact path="/portfolio" component={Portfolio}/>
                            <Route exact path="/kontakt" component={Contact}/>
                        </div>
                        <Footer/>
                    </div>
                </BrowserRouter>

            )

        }

    }
    ReactDOM.render(
        <App/>, document.getElementById('app'));

});
