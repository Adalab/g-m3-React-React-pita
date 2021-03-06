import React from "react";
import { Link } from 'react-router-dom';
import Footer from './Footer';

const linkAdalab = 'https://adalab.es/';

class LandingMain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page">
          <main className="page__main">
            <div className="main__container">
              <div className="main__wrapper">
                <div className="main__title-container">
                  <h1 className="h1__title">Awesome profile cards</h1>
                </div>
                <div className="main__description">
                  <h2 className="description__title">
                    Crea tu tarjeta de visita
                  </h2>
                  <p className="description__text">
                    Crea mejores contactos profesionales de forma fácil y cómoda
                  </p>
                </div>
                <ul className="main__steps">
                  <li className="steps__item">
                    <div className="item__container">
                      {" "}
                      <i className="item__icon far fa-object-ungroup"></i>
                      <span className="item__name">diseña</span>
                    </div>
                  </li>
                  <li className="steps__item">
                    <div className="item__container">
                      {" "}
                      <i className="item__icon far fa-keyboard"></i>
                      <span className="item__name">rellena</span>
                    </div>
                  </li>
                  <li className="steps__item">
                    <div className="item__container">
                      {" "}
                      <i className="item__icon fas fa-share-alt"></i>
                      <span className="item__name">comparte</span>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              <Link to="/cards" className="start__link">
                comenzar
              </Link>
            </div>
          </main>
        </div>
		<Footer linkAdalab={linkAdalab}/>
      </React.Fragment>
    );
  }
}

export default LandingMain;
