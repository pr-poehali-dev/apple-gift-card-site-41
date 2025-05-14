
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CARD_DESIGNS = [
  {
    name: "Универсальная",
    gradientFrom: "from-blue-500",
    gradientVia: "via-purple-500",
    gradientTo: "to-pink-500",
  },
  {
    name: "Солнечный день",
    gradientFrom: "from-red-500",
    gradientVia: "via-orange-500",
    gradientTo: "to-yellow-500",
  },
  {
    name: "Морская волна",
    gradientFrom: "from-teal-500",
    gradientVia: "via-cyan-500",
    gradientTo: "to-blue-500",
  },
];

const CARD_AMOUNTS = [1000, 2500, 5000];

const GiftCard = ({ design, amount }: { design: typeof CARD_DESIGNS[0], amount: number }) => (
  <div className="w-full h-full">
    <div 
      className={`w-full h-64 rounded-2xl bg-gradient-to-r ${design.gradientFrom} ${design.gradientVia} ${design.gradientTo} card-shadow transition-transform duration-300 hover:scale-[1.02] cursor-pointer`}
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.19251 0C9.20021 0 9.20796 0 9.21571 0C9.41351 1.28544 8.86786 2.31057 8.30186 2.97529C7.70432 3.68236 6.89839 4.33088 5.65594 4.22776C5.49456 3.01276 6.05826 2.01643 6.59121 1.39353C7.20991 0.672193 8.14996 0.0821437 9.19251 0Z" fill="black"/>
              <path d="M12.5169 6.11107C12.5054 6.12412 11.8312 6.47816 11.8337 7.37195C11.8363 8.41447 12.6704 8.81279 12.681 8.81769C12.6713 8.84879 12.4354 9.59327 11.8946 10.3528C11.4402 10.9957 10.9624 11.6335 10.2267 11.6335C9.52248 11.6335 9.29303 11.2093 8.48645 11.2093C7.7043 11.2093 7.34831 11.6448 6.70548 11.6448C6.03578 11.6448 5.5406 11.0069 5.03613 10.3164C4.45208 9.50483 3.97539 8.24147 3.97539 7.04043C3.97539 5.05802 5.31616 3.99783 6.64106 3.99783C7.32257 3.99783 7.88633 4.46725 8.31486 4.46725C8.72319 4.46725 9.35587 3.97213 10.1476 3.97213C10.4739 3.97213 11.5166 3.99758 12.5169 6.11107Z" fill="black"/>
            </svg>
          </div>
          <span className="text-white font-medium">Gift Card</span>
        </div>
        
        <div className="text-white">
          <p className="text-sm opacity-90">{design.name}</p>
          <h3 className="text-2xl font-bold mb-1">{amount} ₽</h3>
          <Button className="bg-white/20 hover:bg-white/30 text-white text-sm rounded-full backdrop-blur-sm">
            Выбрать
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const CardsSection = () => {
  return (
    <section id="cards" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-4">
            Выберите свою карту
          </h2>
          <p className="text-apple-darkgray text-lg">
            Выберите дизайн и сумму, которая подойдет именно вам. 
            Подарите возможность выбора из миллиона приложений, игр и многого другого.
          </p>
        </div>
        
        <div className="space-y-16">
          {CARD_DESIGNS.map((design, idx) => (
            <div key={idx} className="fade-in">
              <h3 className="text-xl md:text-2xl font-medium mb-6">{design.name}</h3>
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {CARD_AMOUNTS.map((amount, i) => (
                    <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <GiftCard design={design} amount={amount} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
