import React, {Component} from 'react';
import style from './style.css';
import FloatCart from '../FloatCart';
import Buscador from '../Buscador/Buscador';

class Header extends Component {
  
  render() {
    return ( 
      <header>
        <div className="header"> 
          <ul className="nav">
          <li><a href="">Logo</a></li>
            <li><a href="">Hombres</a>
              <ul>
                <li><a href="">Remeras</a></li>
                <li><a href="">Jeans</a></li>
              </ul>
            </li>
            <li><a href="">Mujeres  </a>
              <ul>
                <li><a href="">Remeras</a></li>
                <li><a href="">Jeans</a></li>
              </ul>
            </li>
            <li><a href="">Contacto</a></li>
          </ul>
          <Buscador/>
          <FloatCart/>
        </div>
      </header>
      )
    }  
};
 
export default Header;