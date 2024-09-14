import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import ShopControls from '../components/ShopControls';
import FilterModal from '../components/FilterModal';
import CategoryModal from '../components/CategoryModal';
import SortModal from '../components/SortModal';
import { loadProductData } from '../utils/dataLoader';
import '../styles/Shop.css';

function Shop({ cartItems, addToCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);
  const [filters, setFilters] = useState({ priceRange: [0, 1000], brands: [] });

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await loadProductData();
      setProducts(productsData);
      setFilteredProducts(productsData);
    };
    fetchProducts();
  }, []);

  const addToFavorites = (product) => {
    if (favorites.find(fav => fav.name === product.name)) {
      setFavorites(favorites.filter(fav => fav.name !== product.name));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    filterAndSortProducts(selectedCategory, sortOption, filters);
  };

  const handleSortChange = (selectedSort) => {
    setSortOption(selectedSort);
    filterAndSortProducts(category, selectedSort, filters);
  };

  const handleViewChange = (selectedView) => {
    setViewMode(selectedView);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    filterAndSortProducts(category, sortOption, newFilters);
  };

  const filterAndSortProducts = (selectedCategory, selectedSort, appliedFilters) => {
    let filtered = products;
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply price range filter
    filtered = filtered.filter(product => 
      product.price >= appliedFilters.priceRange[0] && product.price <= appliedFilters.priceRange[1]
    );

    // Apply brand filter
    if (appliedFilters.brands.length > 0) {
      filtered = filtered.filter(product => appliedFilters.brands.includes(product.brand));
    }

    // Apply sorting
    if (selectedSort) {
      filtered.sort((a, b) => {
        if (selectedSort === 'price-asc') return a.price - b.price;
        if (selectedSort === 'price-desc') return b.price - a.price;
        if (selectedSort === 'name-asc') return a.name.localeCompare(b.name);
        if (selectedSort === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });
    }

    setFilteredProducts(filtered);
  };

  const handleFilterClick = () => setIsFilterModalOpen(true);
  const handleCategoryClick = () => setIsCategoryModalOpen(true);
  const handleSortClick = () => setIsSortModalOpen(true);

  return (
    <div className="shop">
      <ShopControls
        viewMode={viewMode}
        onFilterClick={handleFilterClick}
        onCategoryClick={handleCategoryClick}
        onSortClick={handleSortClick}
        onViewChange={handleViewChange}
      />
      <ProductList 
        products={filteredProducts} 
        viewMode={viewMode}
        addToFavorites={addToFavorites}
        addToCart={addToCart}
        favorites={favorites}
        cartItems={cartItems}
      />
      {isFilterModalOpen && (
        <FilterModal 
          onClose={() => setIsFilterModalOpen(false)}
          onApplyFilters={handleApplyFilters}
          initialFilters={filters}
        />
      )}
      {isCategoryModalOpen && (
        <CategoryModal 
          onClose={() => setIsCategoryModalOpen(false)}
          categories={['Shirts', 'Pants', 'Shoes', 'Accessories']}
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
        />
      )}
      {isSortModalOpen && (
        <SortModal 
          onClose={() => setIsSortModalOpen(false)}
          sortOption={sortOption}
          onSortChange={handleSortChange}
        />
      )}
    </div>
  );
}

export default Shop;