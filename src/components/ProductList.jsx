import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
