import { Star, MapPin, Heart, Share2, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { AnimatePresence } from "motion/react";
import { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';

interface QuickViewModalProps {
  product: any;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) return null;

  // Mock gallery images
  const galleryImages = [
    `/${product.image}.jpg`,
    `/${product.image}-detail1.jpg`,
    `/${product.image}-detail2.jpg`,
    `/${product.image}-detail3.jpg`
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleWhatsAppContact = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name}`;
    const whatsappUrl = `https://wa.me/${product.nomor}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {product && (
        <Dialog open={!!product} onOpenChange={onClose}>
          <DialogContent className="max-w-2xl max-h-[90vh] p-0 bg-white rounded-2xl flex flex-col">
            {/* === SCROLLABLE CONTENT === */}
            <div className="flex-1 overflow-y-auto">
              {/* Top: Image Gallery */}
              <div className="relative bg-gray-50 rounded-2xl">
                {/* Main Image */}
                <div className="relative aspect-square bg-gray-100 rounded-2xl">
                  <img
                    src={galleryImages[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x600/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`;
                    }}
                  />

                  {/* Navigation Arrows */}
                  {galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#111827]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5 text-[#111827]" />
                      </button>
                    </>
                  )}

                  {/* Top Actions */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'
                          }`}
                      />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Badge */}
                  {product.discount && (
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 bg-[#FF7A5A] text-white rounded-lg shadow-lg">
                        -{product.discount}%
                      </span>
                    </div>
                  )}

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all shadow-sm ${currentImageIndex === index
                          ? 'bg-white w-6'
                          : 'bg-white/60 hover:bg-white/80'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex justify-center gap-2 p-4 overflow-x-auto bg-gray-50 border-t border-gray-200">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === index
                        ? 'border-[#0F6B66] ring-2 ring-[#0F6B66]/20'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/64x64/f3f4f6/9ca3af?text=${index + 1}`;
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 lg:p-8">
                {/* Product Title */}
                <h2 className="text-[#111827] mb-3 pr-12">{product.name}</h2>

                {/* Rating & Sold */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-[#111827]">{product.rating}</span>
                    <span className="text-gray-500 text-sm">(234 ulasan)</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-gray-600">Terjual {product.sold}</span>
                </div>

                {/* Price */}
                <div className="bg-[#FFF4EA] rounded-2xl p-4 mb-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl text-[#0F6B66]">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                    {product.discount && (
                      <>
                        <span className="text-gray-400 line-through">
                          Rp {Math.round(product.price / (1 - product.discount / 100)).toLocaleString('id-ID')}
                        </span>
                        <span className="px-2 py-1 bg-[#FF7A5A] text-white rounded-lg text-sm">
                          -{product.discount}%
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Seller Info */}
                <div className="border border-gray-100 rounded-2xl p-4 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-[#0F6B66] rounded-full flex items-center justify-center">
                      <span className="text-white">{product.seller?.charAt(0) || 'S'}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#111827] mb-1">{product.seller}</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{product.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span>4.9 Rating Toko</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>98% Respon Rate</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-[#111827] mb-3">Deskripsi Produk</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Produk berkualitas tinggi dari UMKM lokal. Dibuat dengan bahan pilihan dan dikerjakan dengan detail oleh pengrajin berpengalaman. Cocok untuk digunakan sehari-hari maupun sebagai hadiah spesial.
                  </p>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-[#111827] mb-3">Spesifikasi</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Kategori</span>
                      <span className="text-[#111827]">{product.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Kondisi</span>
                      <span className="text-[#111827]">Baru</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Berat</span>
                      <span className="text-[#111827]">500 gram</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === FIXED CTA (tidak scroll) === */}
            <div className="border-t border-gray-100 p-2 bg-white flex-shrink-0 flex flex-col items-center rounded-2xl">
              <button
                onClick={handleWhatsAppContact}
                className="w-full max-w-sm py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-base font-medium">Hubungi Penjual via WhatsApp</span>
              </button>
              <p className="text-center text-xs text-gray-500 mt-2">
                Chat langsung dengan penjual untuk info lebih lanjut
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}