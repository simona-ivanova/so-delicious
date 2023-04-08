import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
  const { isAuthenticated, userFirstName, isAdmin } = useContext(AuthContext);

  return (
    <header className="header-area">

      <div className="top-header-area">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-between">

            <div className="col-12 col-sm-6">
              <div className="breaking-news">
                <div id="breakingNewsTicker" className="ticker">
                  <ul>
                    <li><Link to={isAuthenticated ? '/profile' : '/login'}><i className="fa fa-user" aria-hidden="true">
                    </i>{isAuthenticated && (`Здравей, ${userFirstName}`)}</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="top-social-info text-right">
                <a href="https://facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="delicious-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">

            <nav className="classy-navbar justify-content-between" id="deliciousNav">


              <Link to="/" className="nav-brand"><img src="img/logo.png" alt="" /></Link>


              <div className="classy-navbar-toggler">
                <span className="navbarToggler"><span></span><span></span><span></span></span>
              </div>


              <div className="classy-menu">


                <div className="classycloseIcon">
                  <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                </div>


                <div className="classynav">
                  <ul>
                    <li className="active"><a href="/">Начало</a></li>
                    <li><Link to="/catalog">Рецепти</Link>
                      <ul className="dropdown">
                        <li><Link to="/catalog/breakfasts">Закуски</Link></li>
                        <li><Link to="/catalog/salads">Салати</Link></li>
                        <li><Link to="/catalog/soups">Супи</Link></li>
                        <li><Link to="/catalog/appetizers">Предястия</Link></li>
                        <li><Link to="/catalog/main-dishes">Основни ястия</Link></li>
                        <li><Link to="/catalog/desserts">Десерти</Link></li>
                        <li><Link to="/catalog/bread">Хляб</Link></li>
                      </ul>
                    </li>
                  {isAdmin && (  <li><Link to="/create">Създай рецепта</Link></li>)}
                    <li><Link to="/about">За мен</Link></li>
                    <li><Link to="/contact">Контакти</Link></li>
                  </ul>


                  <div className="search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </div>

                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};