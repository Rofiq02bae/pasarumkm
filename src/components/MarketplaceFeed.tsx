import { motion } from 'motion/react';
import { useState } from 'react';
import { FeatureBanner } from './cards/FeatureBanner';
import { ProductCatalogCard } from './cards/ProductCatalogCard';
import { CompactListCard } from './cards/CompactListCard';
import { GlassmorphismPromoCard } from './cards/GlassmorphismPromoCard';

interface MarketplaceFeedProps {
  searchQuery: string;
  selectedCategory: string;
  filters: any;
  onProductClick: (product: any) => void;
}

// Mock data
const products = [
  { id: 1, name: 'Bananen Bolen', category: 'food', price: 450000, rating: 4.8, sold: 234, image: 'bananenbolen', nomor: '08123456789', seller: 'Delamart', location: 'Yogyakarta', discount: 20 },
  { id: 2, name: 'Gethuk Goreng', category: 'food', price: 125000, rating: 4.9, sold: 567, image: 'gethuk', nomor: '08123456780', seller: 'Yu Anti', location: 'Sleman' },
  { id: 3, name: 'Slondok Jangkang Emas', category: 'food', price: 280000, rating: 4.7, sold: 189, image: 'slondok', nomor: '08123456781', seller: 'Pa Mariyadi', location: 'Depok', featured: true },
  { id: 4, name: 'Wingko Ugy', category: 'food', price: 320000, rating: 4.9, sold: 423, image: 'wingko', nomor: '08123456782', seller: 'Mbak Ugy', location: 'Jakarta' }
  // { id: 5, name: 'Keripik Tempe Original', category: 'food', price: 35000, rating: 4.6, sold: 892, image: 'tempeh chips', seller: 'Snack Malang', location: 'Malang', discount: 15 },
  // { id: 6, name: 'Sepatu Kulit Handmade', category: 'fashion', price: 550000, rating: 4.8, sold: 156, image: 'leather shoes', seller: 'Leather Craft', location: 'Bandung' },
  // { id: 7, name: 'Madu Hutan Murni 500ml', category: 'food', price: 150000, rating: 4.9, sold: 678, image: 'honey jar', seller: 'Madu Asli', location: 'Kalimantan', featured: true },
  // { id: 8, name: 'Lukisan Wayang Kulit', category: 'crafts', price: 1200000, rating: 5.0, sold: 45, image: 'wayang painting', seller: 'Seni Jawa', location: 'Solo' },
  // { id: 9, name: 'Sabun Herbal Natural', category: 'beauty', price: 45000, rating: 4.7, sold: 1234, image: 'herbal soap', seller: 'Herbal Indonesia', location: 'Bogor', discount: 25 },
  // { id: 10, name: 'Sarung Tenun Tradisional', category: 'fashion', price: 380000, rating: 4.8, sold: 267, image: 'traditional sarong', seller: 'Tenun Nusa', location: 'NTT' }
];

const promoData = {
  title: 'Flash Sale Hari Ini!',
  subtitle: 'Diskon hingga 50% untuk produk pilihan',
  timeLeft: '2 jam 34 menit',
  products: products.slice(0, 3)
};

export function MarketplaceFeed({ searchQuery, selectedCategory, onProductClick }: MarketplaceFeedProps) {
  // State untuk mengatur apakah promo aktif atau tidak
  // Set ke true untuk menampilkan promo, false untuk menyembunyikan
  const [isPromoActive] = useState(false);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex-1 space-y-6">
      {/* Feed Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[#111827] mb-1">
            {selectedCategory === 'all' ? 'Semua Produk' : `Kategori ${selectedCategory}`}
          </h2>
          <p className="text-gray-600">{filteredProducts.length} produk ditemukan</p>
        </div>
      </div>

      {/* Feature Banner */}
      <FeatureBanner onProductClick={onProductClick} />

      {/* Product Grid with Mixed Card Types */}
      <div className="space-y-6">
        {/* First Row - Catalog Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {filteredProducts.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCatalogCard product={product} onClick={() => onProductClick(product)} />
            </motion.div>
          ))}
        </div>

        {/* Glassmorphism Promo */}
        <GlassmorphismPromoCard promo={promoData} onProductClick={onProductClick} isActive={isPromoActive} />

        {/* Compact List Cards */}
        <div className="space-y-3">
          {filteredProducts.slice(4, 7).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CompactListCard product={product} onClick={() => onProductClick(product)} />
            </motion.div>
          ))}
        </div>

        {/* More Catalog Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {filteredProducts.slice(7).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCatalogCard product={product} onClick={() => onProductClick(product)} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
