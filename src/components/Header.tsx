import { useEffect, useState } from 'react';
import { Menu, X, Phone, Clock, MapPin, Zap, Satellite, Wrench } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/business';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Quick contact bar */}
      <div className="hidden bg-brand-gray text-gray-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-6">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-brand-yellow"
            >
              <Phone className="h-3.5 w-3.5 text-brand-yellow" />
              {BUSINESS.phone}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand-yellow" />
              {BUSINESS.hoursShort}
            </span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-brand-yellow"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-yellow" />
              {BUSINESS.address}
            </a>
          </div>
          <span className="font-medium text-brand-yellow">Güvenilir & Hızlı Servis</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-brand-navy transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <button onClick={scrollToTop} className="group flex items-center gap-2.5 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-yellow text-brand-navy transition-transform group-hover:scale-105">
              <Zap className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-extrabold text-white sm:text-lg">
                Elmascan
              </span>
              <span className="text-[10px] font-medium text-gray-300 sm:text-xs">
                Elektrik · Uydu · Hırdavat
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-100 transition-colors hover:bg-brand-navy-dark hover:text-brand-yellow"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-navy transition-all hover:bg-brand-yellow-dark hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              Hemen Ara
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors hover:bg-brand-navy-dark lg:hidden"
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMenu}
          />
          <nav className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col bg-brand-navy pt-24 pb-6 shadow-2xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-3 border-l-4 border-transparent px-6 py-4 text-base font-medium text-gray-100 transition-colors hover:border-brand-yellow hover:bg-brand-navy-dark"
              >
                {link.href === '#hizmetlerimiz' && <Wrench className="h-5 w-5 text-brand-yellow" />}
                {link.href === '#uydu-kurulumu' && <Satellite className="h-5 w-5 text-brand-yellow" />}
                {link.href === '#ana-sayfa' && <Zap className="h-5 w-5 text-brand-yellow" />}
                {link.href === '#urunlerimiz' && <Menu className="h-5 w-5 text-brand-yellow" />}
                {link.href === '#iletisim' && <Phone className="h-5 w-5 text-brand-yellow" />}
                {link.label}
              </a>
            ))}
            <div className="mt-auto px-6">
              <a
                href={BUSINESS.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-5 py-3 text-base font-bold text-brand-navy"
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </a>
              <p className="mt-4 flex items-center gap-2 px-1 text-sm text-gray-300">
                <Clock className="h-4 w-4 text-brand-yellow" />
                {BUSINESS.hoursShort}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
