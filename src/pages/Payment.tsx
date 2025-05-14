
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Интерфейс для параметров карты
interface CardParams {
  design: string;
  amount: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
}

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardParams, setCardParams] = useState<CardParams | null>(null);
  const [formValid, setFormValid] = useState(false);

  // Получаем параметры из URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const design = params.get('design');
    const amount = params.get('amount');
    const gradientFrom = params.get('from');
    const gradientVia = params.get('via');
    const gradientTo = params.get('to');
    
    if (design && amount && gradientFrom && gradientVia && gradientTo) {
      setCardParams({
        design,
        amount,
        gradientFrom: `from-${gradientFrom}`,
        gradientVia: `via-${gradientVia}`,
        gradientTo: `to-${gradientTo}`
      });
    } else {
      // Если параметры отсутствуют, возвращаемся на главную
      navigate('/');
    }
  }, [location, navigate]);

  // Валидация формы
  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isCardNumberValid = cardNumber.replace(/\s/g, '').length === 16;
    const isExpiryDateValid = /^\d{2}\/\d{2}$/.test(expiryDate);
    const isCvvValid = /^\d{3}$/.test(cvv);
    
    setFormValid(isEmailValid && isCardNumberValid && isExpiryDateValid && isCvvValid);
  }, [email, cardNumber, expiryDate, cvv]);

  // Форматирование номера карты
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    if (formattedValue.length <= 19) { // 16 цифр + 3 пробела
      setCardNumber(formattedValue);
    }
  };

  // Форматирование даты окончания
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    if (value.length <= 5) {
      setExpiryDate(value);
    }
  };

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValid) {
      // Здесь будет логика для обработки платежа
      alert('Оплата прошла успешно! Код карты отправлен на ваш email.');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 md:py-16 bg-apple-gray">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Левая часть - форма оплаты */}
            <div className="fade-in">
              <h1 className="text-3xl font-semibold mb-6">Оформление заказа</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">На этот адрес будет отправлен код активации</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Данные карты</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Номер карты</label>
                    <Input 
                      placeholder="0000 0000 0000 0000" 
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Срок действия</label>
                      <Input 
                        placeholder="MM/YY" 
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">CVV</label>
                      <Input 
                        type="password" 
                        placeholder="123" 
                        maxLength={3}
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full apple-button mt-6" 
                  disabled={!formValid}
                  type="submit"
                >
                  Оплатить {cardParams?.amount} ₽
                </Button>
                
                <div className="flex items-center justify-center text-sm text-muted-foreground gap-2 mt-4">
                  <Icon name="Lock" className="w-4 h-4" />
                  <span>Безопасная оплата с шифрованием</span>
                </div>
              </form>
            </div>
            
            {/* Правая часть - сводка и карточка */}
            <div className="fade-in">
              <h2 className="text-xl font-medium mb-6">Ваш заказ</h2>
              
              <Card className="mb-6 border-0 card-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Apple Gift Card</h3>
                    <span className="font-bold">{cardParams?.amount} ₽</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Дизайн</span>
                    <span>{cardParams?.design}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Доставка</span>
                    <span>Электронно</span>
                  </div>
                  
                  <div className="border-t my-4"></div>
                  
                  <div className="flex justify-between font-medium">
                    <span>Итого к оплате</span>
                    <span>{cardParams?.amount} ₽</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Предпросмотр карты */}
              {cardParams && (
                <div 
                  className={`w-full h-60 rounded-2xl bg-gradient-to-r ${cardParams.gradientFrom} ${cardParams.gradientVia} ${cardParams.gradientTo} card-shadow`}
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
                      <p className="text-sm opacity-90">{cardParams.design}</p>
                      <h3 className="text-2xl font-bold">{cardParams.amount} ₽</h3>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 bg-white p-4 rounded-lg text-sm text-muted-foreground card-shadow">
                <div className="flex items-start gap-2">
                  <Icon name="Info" className="w-4 h-4 mt-0.5 text-apple-blue" />
                  <p>Код активации будет отправлен на указанный email сразу после успешной оплаты.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;
