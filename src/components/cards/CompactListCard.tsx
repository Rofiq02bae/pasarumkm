import { Star, MapPin, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface CompactListCardProps {
  product: any;
  onClick: () => void;
}

export function CompactListCard({ product, onClick }: CompactListCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
      onClick={onClick}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
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

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          {/* Top Section */}
          <div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-[#111827] line-clamp-1 flex-1">
                {product.name}
              </h3>
              {product.discount && (
                <span className="px-2 py-0.5 bg-[#FF7A5A] text-white rounded-lg text-xs flex-shrink-0">
                  -{product.discount}%
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>{product.seller}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{product.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-[#111827]">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">Terjual {product.sold}</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-lg text-[#0F6B66]">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart logic
              }}
              className="p-2 bg-[#0F6B66] hover:bg-[#0a5450] text-white rounded-xl transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
