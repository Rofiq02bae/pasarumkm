import { Search, Package, Store, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
}

const categoryShortcuts = [
  { id: 'fashion', label: 'Fashion', icon: Heart, color: '#FF7A5A' },
  { id: 'food', label: 'Makanan', icon: Package, color: '#0F6B66' },
  { id: 'crafts', label: 'Kerajinan', icon: Store, color: '#FF7A5A' },
  { id: 'trending', label: 'Trending', icon: TrendingUp, color: '#0F6B66' }
];

export function Hero({ setSearchQuery, setSelectedCategory }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0F6B66] via-[#0F6B66] to-[#0a5450] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF7A5A] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 lg:mb-6">
              Temukan Produk UMKM<br />Terbaik di Sekitar Anda
            </h1>
            <p className="text-white/90 text-lg lg:text-xl mb-8 lg:mb-10">
              Dukung usaha lokal dengan berbelanja langsung dari UMKM terpercaya
            </p>
          </motion.div>

          {/* Hero Search */}
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Mau cari apa hari ini?"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 lg:py-5 bg-white text-[#111827] rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
              />
            </div>
          </motion.div>

          {/* Category Shortcuts */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categoryShortcuts.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-4 lg:p-6 transition-all group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div 
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <p className="text-white">{category.label}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
