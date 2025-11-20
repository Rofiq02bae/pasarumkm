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
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden group cursor-pointer"
      whileHover={{ y: -5 }}
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
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount && (
            <span className="px-2 py-1 bg-[#FF7A5A] text-white rounded-lg text-sm shadow-md">
              -{product.discount}%
            </span>
          )}
          {product.featured && (
            <span className="px-2 py-1 bg-[#0F6B66] text-white rounded-lg text-sm shadow-md">
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
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'
              }`}
          />
        </button>

        {/* Quick Add to Cart - Shows on Hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic
            }}
            className="w-full py-2 bg-[#0F6B66] text-white rounded-xl hover:bg-[#0a5450] transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Tambah ke Keranjang
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4" onClick={onClick}>
        {/* Seller Info */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-[#0F6B66] rounded-full flex items-center justify-center">
            <span className="text-white text-xs">{product.seller.charAt(0)}</span>
          </div>
          <span className="text-sm text-gray-600">{product.seller}</span>
        </div>

        {/* Product Name */}
        <h3 className="text-[#111827] mb-2 line-clamp-2 min-h-[3rem]">
          {product.name}
        </h3>

        {/* Rating & Sold */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-[#111827]">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">Terjual {product.sold}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mb-3">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{product.location}</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-[#0F6B66]">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
          {product.discount && (
            <span className="text-sm text-gray-400 line-through">
              Rp {Math.round(product.price / (1 - product.discount / 100)).toLocaleString('id-ID')}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
