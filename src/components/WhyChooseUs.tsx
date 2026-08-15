import { Briefcase, BadgePercent, Clock3, ThumbsUp } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const reasons = [
  {
    icon: Briefcase,
    title: 'İş Yerinde Hizmet',
    desc: 'Adresinize gelerek ihtiyaçlarınızı yerinde tespit eder ve çözüm sunarız.',
  },
  {
    icon: BadgePercent,
    title: 'Uygun Fiyat & Kaliteli Malzeme',
    desc: 'Bütçenize uygun fiyatlarla, kaliteli ve dayanıklı malzemeler kullanırız.',
  },
  {
    icon: Clock3,
    title: 'Hızlı Servis',
    desc: 'Arıza ve kurulum taleplerinizde hızlı dönüş yapar, zamanınızı değerli kılarız.',
  },
  {
    icon: ThumbsUp,
    title: 'Müşteri Memnuniyeti',
    desc: 'İşimizi tamamlamadan önce kontrol eder, müşteri memnuniyetini ön planda tutarız.',
  },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-[#0F172A] py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Avantajlarımız
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Müşterilerimize sunduğumuz kaliteli hizmet, uygun fiyat ve güvenilir
            işçilikle fark yaratıyoruz.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group flex flex-col items-start gap-4 rounded-2xl bg-brand-navy p-7 ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:bg-brand-navy-dark hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-brand-yellow text-brand-navy transition-all group-hover:scale-110">
                <r.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
