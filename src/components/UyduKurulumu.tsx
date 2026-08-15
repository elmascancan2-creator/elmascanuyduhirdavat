import { Satellite, Tv, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { BUSINESS } from '@/data/business';

const steps = [
  {
    icon: MapPin,
    title: 'Yerinde İnceleme',
    desc: 'Adresinize gelerek en uygun çanak konumu belirlenir.',
  },
  {
    icon: Satellite,
    title: 'Montaj & Kurulum',
    desc: 'Çanak anteninizi sağlam ve güvenli şekilde monte ederiz.',
  },
  {
    icon: Tv,
    title: 'Kontrol & Test',
    desc: 'Tüm kanallarda görüntü ve ses kalitesini test edip teslim ederiz.',
  },
];

export default function UyduKurulumu() {
  const { ref, visible } = useReveal();

  return (
    <section id="uydu-kurulumu" className="relative overflow-hidden bg-brand-navy py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/13031119/pexels-photo-13031119.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-4 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/15 px-4 py-1.5 text-sm font-semibold text-brand-yellow ring-1 ring-brand-yellow/30">
              <Satellite className="h-4 w-4" />
              Uydu Kurulum Hizmeti
            </span>
            <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
              Kesintisiz Görüntü İçin{' '}
              <span className="text-brand-yellow">Profesyonel Uydu Kurulumu</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-300">
              Çanak anten montajından sinyal ayarına kadar tüm süreçleri titizlikle
              yönetiyoruz. Hızlı kurulum, dayanıklı ekipman ve uzun ömürlü
              kullanım güvencesi.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Türksat & Hotbird uydu ayarı',
                'HD & 4K uydu receiver kurulumu',
                'Çanak anten değişimi',
                'Sinyal kesilmesi arıza onarımı',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle2 className="h-5 w-5 flex-none text-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={BUSINESS.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-yellow px-7 py-3.5 text-base font-bold text-brand-navy transition-all hover:bg-brand-yellow-dark hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Kurulum İçin Randevu Al
            </a>
          </div>

          {/* Right: steps */}
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-yellow text-brand-navy">
                  <step.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="mt-4 block text-xs font-bold text-brand-yellow">
                  Adım {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
