import {
  Phone,
  Clock,
  MapPin,
  Mail,
  Navigation,
} from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section id="iletisim" className="bg-brand-gray py-20 lg:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-yellow">
            İletişim & Konum
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Sorularınız veya hizmet talepleriniz için telefonumuzdan bize ulaşın
            veya mağazamızı ziyaret edin. En kısa sürede size dönüş yapalım.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            <a
              href={BUSINESS.phoneHref}
              className="group flex items-center gap-5 rounded-2xl bg-brand-navy p-6 text-white transition-all hover:bg-brand-navy-dark hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-brand-yellow text-brand-navy transition-transform group-hover:scale-110">
                <Phone className="h-8 w-8" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Telefon</p>
                <p className="text-xl font-bold">{BUSINESS.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-5 rounded-2xl bg-brand-navy p-6 text-white">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
                <Clock className="h-8 w-8" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Çalışma Saatleri</p>
                <p className="text-xl font-bold">{BUSINESS.hours}</p>
              </div>
            </div>

            <a
              href={BUSINESS.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl bg-brand-navy p-6 text-white transition-all hover:bg-brand-navy-dark hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-brand-yellow text-brand-navy transition-transform group-hover:scale-110">
                <MapPin className="h-8 w-8" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">Adres</p>
                <p className="text-lg font-bold leading-snug">{BUSINESS.address}</p>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="group flex items-center gap-5 rounded-2xl bg-brand-navy p-6 text-white transition-all hover:bg-brand-navy-dark hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-brand-yellow text-brand-navy transition-transform group-hover:scale-110">
                <Mail className="h-8 w-8" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400">E-posta</p>
                <p className="text-lg font-bold">{BUSINESS.email}</p>
              </div>
            </a>

            <a
              href={BUSINESS.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-yellow px-6 py-4 text-base font-bold text-brand-navy transition-all hover:bg-brand-yellow-dark hover:shadow-xl"
            >
              <Navigation className="h-5 w-5" />
              Yol Tarifi Al
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <iframe
              title="Konum"
              src={BUSINESS.mapEmbed}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
