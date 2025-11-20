import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureBannerProps {
  onProductClick: (product: any) => void;
}

export function FeatureBanner({ onProductClick }: FeatureBannerProps) {
  const featuredProduct = {
    id: 'featured-1',
    name: 'Bananen Bolen Premium',
    description: 'Bolu pisang isi keju dan coklat, pilihan tepat untuk camilan istimewa',
    price: 75000,
    originalPrice: 120000,
    rating: 4.9,
    reviews: 234,
    seller: 'Delamart',
    image: 'bananenbolen',
    badge: 'Best Seller'
  };

  return (
    <motion.div
      className="relative bg-gradient-to-r from-[#0F6B66] to-[#0a5450] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={() => onProductClick(featuredProduct)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="relative grid lg:grid-cols-2 gap-6 p-6 lg:p-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#FF7A5A] text-white rounded-full text-sm">
              {featuredProduct.badge}
            </span>
            <div className="flex items-center gap-1 text-white/90">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Trending</span>
            </div>
          </div>

          <h2 className="text-white">{featuredProduct.name}</h2>

          <p className="text-white/80 line-clamp-2">
            {featuredProduct.description}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white">{featuredProduct.rating}</span>
              <span className="text-white/60 text-sm">({featuredProduct.reviews} ulasan)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl text-white">
              Rp {featuredProduct.price.toLocaleString('id-ID')}
            </span>
            <span className="text-white/60 line-through">
              Rp {featuredProduct.originalPrice.toLocaleString('id-ID')}
            </span>
            <span className="px-2 py-1 bg-[#FF7A5A] text-white rounded-lg text-sm">
              -38%
            </span>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#0F6B66] rounded-xl hover:bg-gray-50 transition-colors w-fit group-hover:gap-3 duration-300">
            Lihat Detail
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Image Area */}
        <div className="relative h-64 lg:h-auto">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-white/20 rounded-2xl overflow-hidden">
              <img
                src='/bananenbolen.jpg'
                alt={featuredProduct.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('flex', 'items-center', 'justify-center');
                    const placeholder = document.createElement('span');
                    placeholder.className = 'text-white/60 text-sm';
                    placeholder.textContent = 'Featured Image';
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
