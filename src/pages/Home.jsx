// frontend/src/pages/Home.js
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import './Home.css';

const Home = ({ products, categories, loading }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesCategory;
  });

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="home">
      <div className="filters">
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-results">No products match your selected category.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
