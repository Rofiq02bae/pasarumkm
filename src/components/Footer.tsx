import { ShoppingBag, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  tentang: [
    { label: 'Tentang Kami', href: '#' },
    { label: 'Cara Kerja', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Karir', href: '#' }
  ],
  bantuan: [
    { label: 'Pusat Bantuan', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Cara Belanja', href: '#' },
    { label: 'Cara Jual', href: '#' }
  ],
  kebijakan: [
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Kebijakan Pengembalian', href: '#' },
    { label: 'Pembayaran', href: '#' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-12">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0F6B66] rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">Pasar UMKM</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Platform marketplace terpercaya untuk UMKM Indonesia. Dukung produk lokal, tingkatkan ekonomi bangsa.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF7A5A] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Jl. Pasar UMKM No. 123<br />Jakarta Selatan, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF7A5A] flex-shrink-0" />
                <span className="text-white/70 text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF7A5A] flex-shrink-0" />
                <span className="text-white/70 text-sm">hello@pasarumkm.id</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white mb-4">Tentang</h4>
            <ul className="space-y-3">
              {footerLinks.tentang.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.bantuan.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Kebijakan</h4>
            <ul className="space-y-3">
              {footerLinks.kebijakan.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 rounded-2xl p-6 lg:p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-2">Dapatkan Update Terbaru</h3>
            <p className="text-white/70 mb-6">
              Subscribe untuk mendapatkan info promo dan produk UMKM terbaru
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F6B66]"
              />
              <button className="px-8 py-3 bg-[#0F6B66] hover:bg-[#0a5450] text-white rounded-xl transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center lg:text-left">
              © 2025 Pasar UMKM. All rights reserved. Made with ❤️ for Indonesian SMEs
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
