import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/shelf/actions';

import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import './style.scss';

class Shelf extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    filters: PropTypes.array,
    termFilter: PropTypes.string,
    sort: PropTypes.string
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { termFilter, filters: nextFilters, sort: nextSort } = nextProps;

    if (termFilter !== this.props.termFilter) {
      this.handleFetchProducts(termFilter, undefined, undefined)
    }

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(undefined, nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, undefined, nextSort);
    }
  }

  handleFetchProducts = (
    termFilter = this.props.termFilter,
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchProducts(termFilter, filters, sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    console.log(this.state);
    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length}/>
          <ProductList products={products} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.shelf.products,
  termFilter: state.filters.term,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Shelf);
