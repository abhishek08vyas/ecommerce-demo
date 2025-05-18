import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, getAllCategories } from '@/data/products';
import { Product, SortOption } from '@/types';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getAllCategories();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOption>('price-asc');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  
  // Parse query params on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);
  
  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Sort products
    switch (sortOrder) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For demo purposes, just use the existing order
        break;
    }
    
    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategories, sortOrder, priceRange]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update URL with search param
    const newParams = new URLSearchParams(searchParams);
    if (searchQuery) {
      newParams.set('search', searchQuery);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };
  
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 2000 });
    setSortOrder('price-asc');
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="bg-sleep-50/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Sleep Apnea Products</h1>
            <div className="text-sm text-gray-500">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Search</h3>
                <form onSubmit={handleSearch}>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" size="sm">
                      Search
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-gray-700"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="flex items-center space-x-4">
                  <div>
                    <Label htmlFor="min-price" className="text-xs text-gray-500">
                      Min
                    </Label>
                    <Input
                      id="min-price"
                      type="number"
                      min="0"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                      className="mt-1"
                    />
                  </div>
                  <div className="text-gray-400">to</div>
                  <div>
                    <Label htmlFor="max-price" className="text-xs text-gray-500">
                      Max
                    </Label>
                    <Input
                      id="max-price"
                      type="number"
                      min="0"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-sleep-300 text-sleep-500"
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort controls */}
            <div className="flex justify-end mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select
                  value={sortOrder}
                  onValueChange={(value) => setSortOrder(value as SortOption)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;