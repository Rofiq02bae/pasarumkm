import { Shield, Truck, HeadphonesIcon, Award } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Shield,
    title: 'Produk Terpercaya',
    description: '100% UMKM Terverifikasi'
  },
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    description: 'Gratis ongkir area lokal'
  },
  {
    icon: HeadphonesIcon,
    title: 'Layanan 24/7',
    description: 'Dukungan pelanggan siap membantu'
  },
  {
    icon: Award,
    title: 'Kualitas Terjamin',
    description: 'Garansi kepuasan 100%'
  }
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 py-6 lg:py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-3 lg:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#0F6B66]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#0F6B66]" />
              </div>
              <div>
                <h3 className="text-[#111827] mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
