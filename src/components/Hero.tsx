import { ArrowRight, Phone, CheckCircle2, Zap, Satellite, Wrench } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function Hero() {
  return (
    <section id="ana-sayfa" className="relative overflow-hidden bg-brand-navy-dark">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5194769/pexels-photo-5194769.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Hırdavat ve el aletleri"
          className="h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-dark via-brand-navy/95 to-black/95" />
      </div>

      {/* Decorative glow */}
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-brand-navy/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="animate-fade-up">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Elektrik, Uydu ve Hırdavat İhtiyaçlarınızda{' '}
              <span className="text-brand-yellow">Hızlı ve Güvenilir</span> Çözümler
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Çanak anten kurulumundan elektrik malzemelerine, hırdavat ürünlerinden
              aydınlatma çözümlerine kadar ihtiyaçlarınız tek adreste. İş yerinizde
              hizmet, kaliteli malzeme ve uygun fiyat garantisi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#iletisim"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-yellow px-7 py-3.5 text-base font-bold text-brand-navy transition-all hover:bg-brand-yellow-dark hover:shadow-xl hover:shadow-brand-yellow/30"
              >
                Bize Ulaşın
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-gray-400/40 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-brand-yellow hover:text-brand-yellow"
              >
                <Phone className="h-5 w-5" />
                Telefonla Sor
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {['İş Yerinde Hizmet', 'Uygun Fiyat', 'Kaliteli Malzeme'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-200">
                  <CheckCircle2 className="h-5 w-5 text-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image collage */}
          <div className="relative hidden animate-fade-in lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/5504455/pexels-photo-5504455.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Uydu çanak antenler"
                  className="h-48 w-full rounded-xl object-cover shadow-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/3946250/pexels-photo-3946250.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="LED ampul aydınlatma"
                  className="h-64 w-full rounded-xl object-cover shadow-2xl"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.pexels.com/photos/8703532/pexels-photo-8703532.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="El aletleri"
                  className="h-64 w-full rounded-xl object-cover shadow-2xl"
                />
                <div className="flex h-48 w-full flex-col items-center justify-center rounded-xl bg-brand-yellow text-brand-navy shadow-2xl">
                  <Satellite className="h-10 w-10" strokeWidth={2} />
                  <p className="mt-2 px-4 text-center text-sm font-bold leading-snug">
                    Uydu Kurulumu & Sinyal Ayarı
                  </p>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-lg bg-white p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Wrench className="h-6 w-6 text-brand-yellow-dark" />
                <div className="leading-tight">
                  <p className="text-xs font-bold text-brand-gray">Profesyonel</p>
                  <p className="text-[10px] text-gray-500">Servis Hizmeti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider into dark services section */}
      <div className="relative h-12 bg-[#0F172A]">
        <svg
          className="absolute inset-x-0 -top-px h-12 w-full text-[#0F172A]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 48"
          fill="currentColor"
        >
          <path d="M0 48h1440V12c-240 24-480 36-720 36S240 36 0 12v36z" />
        </svg>
      </div>
    </section>
  );
}
