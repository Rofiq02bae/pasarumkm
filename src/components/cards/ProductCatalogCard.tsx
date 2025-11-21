import { Star, MapPin, Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProductCatalogCardProps {
  product: any;
  onClick: () => void;
}

export function ProductCatalogCard({ product, onClick }: ProductCatalogCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group cursor-pointer h-full flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden" onClick={onClick}>
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
              placeholder.className = 'absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center';
              placeholder.innerHTML = `<span class="text-gray-400 text-sm text-center px-4">${product.name}</span>`;
              parent.appendChild(placeholder);
            }
          }}
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1.5 md:gap-2 z-10">
          {product.discount && (
            <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-[#FF7A5A] text-white rounded-md md:rounded-lg text-[10px] md:text-xs font-medium shadow-sm">
              -{product.discount}%
            </span>
          )}
          {product.featured && (
            <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-[#0F6B66] text-white rounded-md md:rounded-lg text-[10px] md:text-xs font-medium shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-2 right-2 md:top-3 md:right-3 w-8 h-8 md:w-9 md:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm z-10"
        >
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'
              }`}
          />
        </button>

        {/* Quick Add to Cart - Mobile: Always visible (icon), Desktop: Hover */}
        <div className="absolute bottom-2 right-2 md:bottom-3 md:left-3 md:right-3 md:opacity-0 md:group-hover:opacity-100 transition-all z-10">
          {/* Desktop Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic
            }}
            className="hidden md:flex w-full py-2 bg-[#0F6B66] text-white rounded-xl hover:bg-[#0a5450] transition-colors items-center justify-center gap-2 shadow-lg font-medium text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Tambah
          </button>

          {/* Mobile Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic
            }}
            className="md:hidden w-8 h-8 bg-white/90 backdrop-blur-sm text-[#0F6B66] rounded-full flex items-center justify-center shadow-md border border-gray-100"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col" onClick={onClick}>
        {/* Seller Info */}
        <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0F6B66]/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-[#0F6B66] text-[10px] md:text-xs font-bold">{product.seller.charAt(0)}</span>
          </div>
          <span className="text-xs text-gray-500 truncate">{product.seller}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-[#111827] text-sm md:text-base font-medium mb-1 md:mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] leading-snug">
          {product.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 mb-2 md:mb-3">
          <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
          <span className="text-xs text-gray-500 truncate">{product.location}</span>
        </div>

        <div className="mt-auto">
          {/* Rating & Sold */}
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs md:text-sm font-medium text-[#111827]">{product.rating}</span>
            </div>
            <span className="text-[10px] md:text-xs text-gray-400 border-l border-gray-200 pl-2 md:pl-3">
              {product.sold} Terjual
            </span>
          </div>

          {/* Price */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-0.5 md:gap-2">
            <span className="text-base md:text-lg font-bold text-[#0F6B66]">
              Rp {product.price.toLocaleString('id-ID')}
            </span>
            {product.discount && (
              <span className="text-[10px] md:text-xs text-gray-400 line-through">
                Rp {Math.round(product.price / (1 - product.discount / 100)).toLocaleString('id-ID')}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
