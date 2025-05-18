import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { products, getAllCategories } from "../data/products";
import { Product } from "../types";
import { Search, SlidersHorizontal, X } from "lucide-react";

const categories = getAllCategories();

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (activeCategory) {
      filtered = filtered.filter((product) => product.category === activeCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply price filter
    filtered = filtered.filter((product) => {
      const price = product.salePrice || product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case "price-high-low":
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case "name-a-z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured or any other value
        filtered = filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
    
    // Update URL with category parameter
    if (activeCategory) {
      searchParams.set("category", activeCategory);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  }, [activeCategory, searchTerm, priceRange, sortBy, searchParams, setSearchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category === activeCategory ? "" : category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseInt(e.target.value, 10);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleClearFilters = () => {
    setActiveCategory("");
    setSearchTerm("");
    setPriceRange([0, 1000]);
    setSortBy("featured");
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center bg-gray-100 px-4 py-2 rounded-md"
            >
              <SlidersHorizontal size={20} className="mr-2" />
              {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
          </div>
          
          {/* Sidebar Filters - Desktop always visible, mobile conditionally */}
          <aside className={`w-full md:w-64 md:pr-8 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="sticky top-24">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button
                    onClick={handleClearFilters}
                    className="text-sm text-brand-600 hover:text-brand-700"
                  >
                    Clear All
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-md p-4 mb-4">
                  <h4 className="font-medium mb-2">Search</h4>
                  <div className="flex items-center bg-white border border-gray-300 rounded-md">
                    <input
                      type="text"
                      placeholder="Search products"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full px-3 py-2 focus:outline-none"
                    />
                    <div className="px-3">
                      <Search size={18} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-md p-4 mb-4">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeCategory === category}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 text-brand-600 focus:ring-brand-500"
                        />
                        <span className="ml-2 text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-md p-4 mb-4">
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600">Min Price: ${priceRange[0]}</label>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Max Price: ${priceRange[1]}</label>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Products Grid */}
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                {activeCategory || "All Products"}
              </h1>
              
              <div className="flex items-center">
                <label className="text-gray-700 mr-2">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                  <option value="rating">Best Rating</option>
                </select>
              </div>
            </div>
            
            {/* Active Filters */}
            {(activeCategory || searchTerm || priceRange[0] > 0 || priceRange[1] < 1000) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activeCategory && (
                  <div className="bg-gray-100 py-1 px-3 rounded-full flex items-center text-sm">
                    <span>Category: {activeCategory}</span>
                    <button
                      onClick={() => setActiveCategory("")}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {searchTerm && (
                  <div className="bg-gray-100 py-1 px-3 rounded-full flex items-center text-sm">
                    <span>Search: {searchTerm}</span>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                
                {(priceRange[0] > 0 || priceRange[1] < 1000) && (
                  <div className="bg-gray-100 py-1 px-3 rounded-full flex items-center text-sm">
                    <span>Price: ${priceRange[0]} - ${priceRange[1]}</span>
                    <button
                      onClick={() => setPriceRange([0, 1000])}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            <ProductGrid products={filteredProducts} />
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;