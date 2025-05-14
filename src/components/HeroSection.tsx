
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="py-20 md:py-32 overflow-hidden bg-apple-gray">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-apple-black">
              Apple Gift Card
            </h1>
            <p className="text-xl md:text-2xl text-apple-darkgray max-w-md">
              Один подарок. Бесконечные возможности.
            </p>
            <p className="text-base text-gray-600 max-w-lg">
              Откройте мир приложений, игр, музыки, фильмов, TV-шоу, iCloud и многого другого.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="apple-button">
                Купить сейчас
              </Button>
              <Button variant="outline" className="border-apple-blue text-apple-blue rounded-full hover:bg-apple-blue/5">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] fade-in" style={{ perspective: '1000px' }}>
            <div 
              className="absolute w-[350px] md:w-[420px] h-[250px] md:h-[300px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl card-shadow"
              style={{ 
                transform: 'rotateY(-15deg) rotateX(10deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.19251 0C9.20021 0 9.20796 0 9.21571 0C9.41351 1.28544 8.86786 2.31057 8.30186 2.97529C7.70432 3.68236 6.89839 4.33088 5.65594 4.22776C5.49456 3.01276 6.05826 2.01643 6.59121 1.39353C7.20991 0.672193 8.14996 0.0821437 9.19251 0Z" fill="black"/>
                      <path d="M12.5169 6.11107C12.5054 6.12412 11.8312 6.47816 11.8337 7.37195C11.8363 8.41447 12.6704 8.81279 12.681 8.81769C12.6713 8.84879 12.4354 9.59327 11.8946 10.3528C11.4402 10.9957 10.9624 11.6335 10.2267 11.6335C9.52248 11.6335 9.29303 11.2093 8.48645 11.2093C7.7043 11.2093 7.34831 11.6448 6.70548 11.6448C6.03578 11.6448 5.5406 11.0069 5.03613 10.3164C4.45208 9.50483 3.97539 8.24147 3.97539 7.04043C3.97539 5.05802 5.31616 3.99783 6.64106 3.99783C7.32257 3.99783 7.88633 4.46725 8.31486 4.46725C8.72319 4.46725 9.35587 3.97213 10.1476 3.97213C10.4739 3.97213 11.5166 3.99758 12.5169 6.11107Z" fill="black"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Gift Card</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90">Apple Gift Card</p>
                <h3 className="text-2xl font-bold">5000 ₽</h3>
              </div>
            </div>
            
            <div 
              className="absolute w-[350px] md:w-[420px] h-[250px] md:h-[300px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl shadow-xl card-shadow left-16 top-24 md:left-32 md:top-24"
              style={{ 
                transform: 'rotateY(-15deg) rotateX(10deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.19251 0C9.20021 0 9.20796 0 9.21571 0C9.41351 1.28544 8.86786 2.31057 8.30186 2.97529C7.70432 3.68236 6.89839 4.33088 5.65594 4.22776C5.49456 3.01276 6.05826 2.01643 6.59121 1.39353C7.20991 0.672193 8.14996 0.0821437 9.19251 0Z" fill="black"/>
                      <path d="M12.5169 6.11107C12.5054 6.12412 11.8312 6.47816 11.8337 7.37195C11.8363 8.41447 12.6704 8.81279 12.681 8.81769C12.6713 8.84879 12.4354 9.59327 11.8946 10.3528C11.4402 10.9957 10.9624 11.6335 10.2267 11.6335C9.52248 11.6335 9.29303 11.2093 8.48645 11.2093C7.7043 11.2093 7.34831 11.6448 6.70548 11.6448C6.03578 11.6448 5.5406 11.0069 5.03613 10.3164C4.45208 9.50483 3.97539 8.24147 3.97539 7.04043C3.97539 5.05802 5.31616 3.99783 6.64106 3.99783C7.32257 3.99783 7.88633 4.46725 8.31486 4.46725C8.72319 4.46725 9.35587 3.97213 10.1476 3.97213C10.4739 3.97213 11.5166 3.99758 12.5169 6.11107Z" fill="black"/>
                    </svg>
                  </div>
                  <span className="text-white font-medium">Gift Card</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90">Apple Gift Card</p>
                <h3 className="text-2xl font-bold">2500 ₽</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
