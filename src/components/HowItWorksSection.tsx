
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const steps = [
  {
    icon: 'ShoppingCart',
    title: 'Выберите и купите',
    description: 'Выберите карту нужного номинала и оформите заказ с оплатой банковской картой'
  },
  {
    icon: 'Mail',
    title: 'Получите код',
    description: 'Моментально получите уникальный код на вашу электронную почту'
  },
  {
    icon: 'Gift',
    title: 'Активируйте или подарите',
    description: 'Используйте полученный код для пополнения Apple ID или подарите его близким'
  },
  {
    icon: 'ShoppingBag',
    title: 'Наслаждайтесь покупками',
    description: 'Приобретайте игры, приложения, фильмы, музыку, подписки и многое другое в AppStore'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-apple-gray">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-semibold text-apple-black mb-4">
            Как это работает
          </h2>
          <p className="text-apple-darkgray text-lg">
            Всего несколько простых шагов, чтобы начать использовать Apple Gift Card
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Card key={idx} className="bg-white border-0 overflow-hidden card-shadow fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-apple-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={step.icon} className="h-6 w-6 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-apple-darkgray">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 md:p-8 rounded-2xl card-shadow fade-in">
          <h3 className="text-2xl font-medium mb-4">Важная информация</h3>
          <div className="space-y-4 text-apple-darkgray">
            <p>
              Для использования карты необходим Apple ID и устройство с последней версией iOS, iPadOS, macOS или tvOS.
            </p>
            <p>
              Карты можно активировать только в аккаунтах Apple ID российского App Store.
            </p>
            <p>
              Средства, добавленные на ваш Apple ID, нельзя перевести обратно на банковскую карту или другим пользователям.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
