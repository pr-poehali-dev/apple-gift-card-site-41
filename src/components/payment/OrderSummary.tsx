
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import GiftCardPreview from './GiftCardPreview';

interface OrderSummaryProps {
  cardParams: {
    design: string;
    amount: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  };
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cardParams }) => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-6">Ваш заказ</h2>
      
      <Card className="mb-6 border-0 card-shadow">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Apple Gift Card</h3>
            <span className="font-bold">{cardParams.amount} ₽</span>
          </div>
          
          <div className="flex justify-between text-sm text-muted-foreground mb-1">
            <span>Дизайн</span>
            <span>{cardParams.design}</span>
          </div>
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Доставка</span>
            <span>Электронно</span>
          </div>
          
          <div className="border-t my-4"></div>
          
          <div className="flex justify-between font-medium">
            <span>Итого к оплате</span>
            <span>{cardParams.amount} ₽</span>
          </div>
        </CardContent>
      </Card>
      
      {/* Предпросмотр карты */}
      <GiftCardPreview cardParams={cardParams} />
      
      <div className="mt-6 bg-white p-4 rounded-lg text-sm text-muted-foreground card-shadow">
        <div className="flex items-start gap-2">
          <Icon name="Info" className="w-4 h-4 mt-0.5 text-apple-blue" />
          <p>Код активации будет отправлен на указанный email сразу после успешной оплаты.</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
