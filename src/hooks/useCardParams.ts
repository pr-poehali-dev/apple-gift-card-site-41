
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Тип для параметров карты
export interface CardParams {
  design: string;
  amount: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
}

// Дефолтные значения для карты
const defaultCardParams: CardParams = {
  design: 'Универсальная',
  amount: '2500',
  gradientFrom: 'from-blue-500',
  gradientVia: 'via-purple-500',
  gradientTo: 'to-pink-500'
};

/**
 * Хук для получения параметров карты из URL и управления ими
 */
export const useCardParams = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cardParams, setCardParams] = useState<CardParams | null>(null);

  // Извлечение параметров карты из URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const design = params.get('design');
    const amount = params.get('amount');
    const gradientFrom = params.get('from');
    const gradientVia = params.get('via');
    const gradientTo = params.get('to');
    
    // Если все необходимые параметры присутствуют, устанавливаем их
    if (design && amount && gradientFrom && gradientVia && gradientTo) {
      setCardParams({
        design,
        amount,
        gradientFrom: `from-${gradientFrom}`,
        gradientVia: `via-${gradientVia}`,
        gradientTo: `to-${gradientTo}`
      });
    } else {
      // Если параметры отсутствуют, используем дефолтные или перенаправляем
      navigate('/');
    }
  }, [location, navigate]);

  return { cardParams, defaultCardParams };
};
