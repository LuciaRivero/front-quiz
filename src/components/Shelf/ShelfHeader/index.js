import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';

class ShelfHeader extends Component {
  static propTypes = {
    productsLength: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="shelf-container-header">
        <small className="products-found">
          <span>{this.props.productsLength} Producto(s) encontrados.</span>
        </small>
        <Sort />
      </div>
    );
  
  }
}

export default ShelfHeader;
