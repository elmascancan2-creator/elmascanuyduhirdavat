import { Zap, Phone, Clock, MapPin, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/business';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-gray text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-yellow text-brand-navy">
                <Zap className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <p className="text-base font-extrabold text-white">Elmascan</p>
                <p className="text-xs text-gray-400">Elektrik · Uydu · Hırdavat</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Elektrik, uydu kurulumu ve hırdavat ihtiyaçlarınızda hızlı, güvenilir
              ve uygun fiyatlı çözümler sunan mahallenizin hizmet noktası.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">Sayfalar</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-brand-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">İletişim</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-brand-yellow">
                  <Phone className="h-5 w-5 flex-none text-brand-yellow" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-brand-yellow">
                  <Mail className="h-5 w-5 flex-none text-brand-yellow" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="h-5 w-5 flex-none text-brand-yellow" />
                {BUSINESS.hours}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 flex-none text-brand-yellow" />
                {BUSINESS.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {BUSINESS.name}. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-yellow hover:text-brand-navy"
          >
            <ArrowUp className="h-4 w-4" />
            Yukarı Çık
          </button>
        </div>
      </div>
    </footer>
  );
}
