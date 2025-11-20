import { Clock, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface GlassmorphismPromoCardProps {
  promo: any;
  onProductClick: (product: any) => void;
  isActive?: boolean;
}

export function GlassmorphismPromoCard({ promo, onProductClick, isActive = true }: GlassmorphismPromoCardProps) {
  // Jika promo tidak aktif, jangan render apapun
  if (!isActive) return null;

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A5A] via-[#ff9580] to-[#ffa894]" />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10" />

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F6B66]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-white fill-white" />
              <span className="text-white text-sm">Penawaran Terbatas</span>
            </div>
            <h2 className="text-white mb-2">{promo.title}</h2>
            <p className="text-white/90">{promo.subtitle}</p>
          </div>

          {/* Timer */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 lg:min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white text-sm">Berakhir dalam</span>
            </div>
            <div className="text-2xl text-white">{promo.timeLeft}</div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {promo.products.map((product: any, index: number) => (
            <motion.div
              key={product.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 cursor-pointer hover:bg-white transition-all group"
              onClick={() => onProductClick(product)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Mini Product Image */}
              <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
                <img
                  src={`/${product.image}.jpg`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center';
                      placeholder.innerHTML = `<span class="text-gray-400 text-xs text-center px-2">${product.name}</span>`;
                      parent.appendChild(placeholder);
                    }
                  }}
                />
              </div>

              <h4 className="text-[#111827] text-sm mb-2 line-clamp-2">
                {product.name}
              </h4>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#0F6B66]">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                {product.discount && (
                  <span className="text-xs text-gray-500 line-through">
                    Rp {Math.round(product.price / (1 - product.discount / 100)).toLocaleString('id-ID')}
                  </span>
                )}
              </div>

              {product.discount && (
                <div className="inline-block px-2 py-1 bg-[#FF7A5A] text-white rounded-lg text-xs">
                  Hemat {product.discount}%
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#FF7A5A] rounded-xl hover:bg-gray-50 transition-colors">
            Lihat Semua Promo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
