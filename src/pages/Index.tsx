
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CardsSection from '@/components/CardsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Function to handle reveal animations on scroll
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CardsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
