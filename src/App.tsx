import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products';
import UyduKurulumu from '@/components/UyduKurulumu';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-gray antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <UyduKurulumu />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
