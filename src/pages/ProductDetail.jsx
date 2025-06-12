// frontend/src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // const response = await axios.get(`/api/products/${id}`);
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);

        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <div className="stock">
          {product.stock > 0 ? (
            <span className="in-stock">In Stock ({product.stock} available)</span>
          ) : (
            <span className="out-of-stock">Out of Stock</span>
          )}
        </div>
        <button className="add-to-cart" disabled={product.stock === 0}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;