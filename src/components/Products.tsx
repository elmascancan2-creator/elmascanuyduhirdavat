import { Wrench, Lightbulb, Satellite, ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const categories = [
  {
    icon: Wrench,
    title: 'Hırdavat & El Aletleri',
    desc: 'Günlük işleriniz ve profesyonel kullanım için dayanıklı el aletleri.',
    items: ['Kontrol Kalemi', 'Pense', 'Kargaburun', 'Asma Kilit'],
    image:
      'https://images.pexels.com/photos/8703532/pexels-photo-8703532.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-brand-yellow to-brand-yellow-dark',
  },
  {
    icon: Lightbulb,
    title: 'Aydınlatma',
    desc: 'Enerji tasarruflu aydınlatma çözümleri ile mekanlarınızı aydınlatın.',
    items: ['Ampul', 'Şerit LED'],
    image:
      'https://images.pexels.com/photos/3946250/pexels-photo-3946250.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-amber-400 to-orange-500',
  },
  {
    icon: Satellite,
    title: 'Uydu & TV Ekipmanları',
    desc: 'Kesintisiz görüntü için tüm uydu ve televizyon ekipmanları.',
    items: ['Çanak', 'Kumanda', 'Receiver', 'LNB'],
    image:
      'https://images.pexels.com/photos/5504455/pexels-photo-5504455.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-brand-navy to-brand-navy-dark',
  },
];

export default function Products() {
  const { ref, visible } = useReveal();

  return (
    <section id="urunlerimiz" className="bg-white py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-yellow-dark">
            Ürün Kategorileri
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-gray sm:text-4xl">
            Ürünlerimiz
          </h2>
          <p className="mt-4 text-base text-gray-600">
            İhtiyacınız olan tüm elektrik, uydu ve hırdavat ürünlerini geniş
            stok seçeneğiyle mağazamızda bulabilirsiniz.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Icon badge */}
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow shadow-lg">
                  <cat.icon className="h-6 w-6 text-brand-navy" strokeWidth={2} />
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-gray-600">{cat.desc}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-brand-gray transition-colors group-hover:bg-brand-navy group-hover:text-white"
                    >
                      <ChevronRight className="h-3 w-3 text-brand-yellow-dark" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent bar */}
              <div className={`h-2 bg-gradient-to-r ${cat.accent}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
