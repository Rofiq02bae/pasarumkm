import { ChevronLeft, ChevronRight, Shirt, Cookie, Palette, Sparkles, Home, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef } from 'react';

interface CategoryCarouselProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'Semua Kategori', icon: Home, gradient: 'from-purple-500 to-pink-500' },
  { id: 'fashion', label: 'Fashion & Pakaian', icon: Shirt, gradient: 'from-blue-500 to-cyan-500' },
  { id: 'food', label: 'Makanan & Minuman', icon: Cookie, gradient: 'from-orange-500 to-red-500' },
  { id: 'crafts', label: 'Kerajinan Tangan', icon: Palette, gradient: 'from-green-500 to-emerald-500' },
  { id: 'beauty', label: 'Kecantikan', icon: Sparkles, gradient: 'from-pink-500 to-rose-500' },
  { id: 'home', label: 'Rumah Tangga', icon: Utensils, gradient: 'from-indigo-500 to-purple-500' }
];

export function CategoryCarousel({ selectedCategory, setSelectedCategory }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#FFF4EA] py-6 lg:py-8 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-[#111827]">Jelajahi Kategori</h2>

          <div className="hidden lg:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 bg-white hover:bg-gray-50 rounded-xl shadow-sm transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#111827]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 bg-white hover:bg-gray-50 rounded-xl shadow-sm transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#111827]" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
        >
          {/* Span untuk padding kiri */}
          <span className="flex-shrink-0 w-4 lg:w-6" />

          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-shrink-0 w-40 lg:w-48 p-6 rounded-2xl transition-all flex flex-col items-center justify-between ${selectedCategory === category.id
                  ? 'bg-white shadow-lg ring-2 ring-[#0F6B66]'
                  : 'bg-white hover:shadow-md'
                }`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {/* Container icon dengan spacing yang konsisten */}
              <div className="flex flex-col items-center flex-1 justify-center space-y-4">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>

                {/* Teks dengan padding yang cukup */}
                <div className="flex-1 flex items-center">
                  <p className="text-[#111827] text-center text-sm leading-tight font-medium px-2">
                    {category.label}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}

          {/* Span untuk padding kanan */}
          <span className="flex-shrink-0 w-4 lg:w-6" />
        </div>
      </div>
    </section>
  );
}