import { Search, ShoppingBag, User, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface TopbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onFilterClick: () => void;
}

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'food', label: 'Makanan' },
  { id: 'crafts', label: 'Kerajinan' },
  { id: 'beauty', label: 'Kecantikan' },
  { id: 'home', label: 'Rumah Tangga' }
];

export function Topbar({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, onFilterClick }: TopbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Topbar */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#0F6B66] rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="hidden sm:block text-[#111827]">Pasar UMKM</span>
            </div>

            {/* Search Bar - Desktop & Tablet */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari produk lokal terbaik..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#FFF4EA] border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6B66] transition-shadow"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              <button 
                onClick={onFilterClick}
                className="lg:hidden p-2 hover:bg-[#FFF4EA] rounded-xl transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5 text-[#111827]" />
              </button>
              <button className="hidden lg:flex items-center gap-2 px-4 py-2 hover:bg-[#FFF4EA] rounded-xl transition-colors">
                <User className="w-5 h-5 text-[#111827]" />
                <span className="text-[#111827]">Masuk</span>
              </button>
              <button className="lg:hidden p-2 hover:bg-[#FFF4EA] rounded-xl transition-colors">
                <User className="w-5 h-5 text-[#111827]" />
              </button>
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="md:hidden mt-3">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari produk lokal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#FFF4EA] border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0F6B66] transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-3">
          <div className="flex gap-2 min-w-max lg:min-w-0 lg:justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-[#0F6B66] text-white shadow-md'
                    : 'bg-white text-[#111827] hover:bg-[#FFF4EA]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
