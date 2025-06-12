// frontend/src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="category">{product.category}</p>
        <Link to={`/product/${product.id}`} className="view-details">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;