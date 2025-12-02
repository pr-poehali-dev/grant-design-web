import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  features: string[];
}

export default function Index() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection 
        selectedService={selectedService} 
        onServiceSelect={setSelectedService} 
      />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
