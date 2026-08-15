import { Satellite, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    icon: Satellite,
    title: 'Çanak Anten & Uydu Kurulumu',
    desc: 'Profesyonel çanak anten montajı, sinyal ayarı ve uydu sistemleri kurulumu. Tüm kanallarda kesintisiz ve net görüntü için hizmetimiz vardır.',
    features: ['Çanak anten montajı', 'Sinyal & şebeke ayarı', 'Kumanda ve receiver kurulumu', 'Arıza tespit ve onarım'],
  },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="hizmetlerimiz" className="bg-[#0F172A] py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Hizmetlerimiz
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Profesyonel Çözümler
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Elektrik ve uydu sistemlerinde güvenilir ve kaliteli hizmet sunuyoruz.
            İş yerinde veya evlere hizmet veriyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-brand-navy p-8 shadow-lg ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Accent stripe */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-yellow transition-all group-hover:h-2.5" />

              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy transition-colors group-hover:scale-110">
                <service.icon className="h-8 w-8" strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-400">{service.desc}</p>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow">
                      <ArrowRight className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
