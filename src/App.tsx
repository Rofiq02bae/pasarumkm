import { useState } from 'react';
import { Topbar } from './components/Topbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CategoryCarousel } from './components/CategoryCarousel';
import { MarketplaceFeed } from './components/MarketplaceFeed';
import { QuickViewModal } from './components/QuickViewModal';
import { FilterModal } from './components/FilterModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filters, setFilters] = useState({
    priceRange: [0, 1000000],
    location: 'all',
    rating: 0,
    sortBy: 'relevant'
  });

  return (
    <div className="min-h-screen bg-[#FFF4EA]">
      <Topbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onFilterClick={() => setIsFilterModalOpen(true)}
      />

      <Hero
        // setSearchQuery={setSearchQuery}
        // setSelectedCategory={setSelectedCategory}
      />

      {/* <TrustStrip /> */}

      <CategoryCarousel
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="flex gap-6">
          {/* <FilterSidebar 
            filters={filters}
            setFilters={setFilters}
          /> */}

          <MarketplaceFeed
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            filters={filters}
            onProductClick={setSelectedProduct}
          />
        </div>
      </div>

      <Footer />

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
