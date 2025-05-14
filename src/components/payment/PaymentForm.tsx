
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface PaymentFormProps {
  amount: string;
  onSubmit: (formData: PaymentFormData) => void;
}

export interface PaymentFormData {
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [formValid, setFormValid] = useState(false);

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
      onSubmit({ email, cardNumber, expiryDate, cvv });
    }
  };

  return (
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
        Оплатить {amount} ₽
      </Button>
      
      <div className="flex items-center justify-center text-sm text-muted-foreground gap-2 mt-4">
        <Icon name="Lock" className="w-4 h-4" />
        <span>Безопасная оплата с шифрованием</span>
      </div>
    </form>
  );
};

export default PaymentForm;
