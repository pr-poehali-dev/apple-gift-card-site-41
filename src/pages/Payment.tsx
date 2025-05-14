import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentForm, { PaymentFormData } from "@/components/payment/PaymentForm";
import OrderSummary from "@/components/payment/OrderSummary";
import { useCardParams } from "@/hooks/useCardParams";

/**
 * Страница оформления заказа и оплаты
 */
const Payment = () => {
  const navigate = useNavigate();
  const { cardParams } = useCardParams();

  // Обработчик отправки формы
  const handleSubmitPayment = (formData: PaymentFormData) => {
    // Здесь будет логика для обработки платежа
    console.log("Платежные данные:", formData);

    // Показываем уведомление об успешной оплате
    toast({
      title: "Оплата прошла успешно!",
      description: `Код карты отправлен на ${formData.email}`,
    });

    // Перенаправляем на главную
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // Если параметры карты еще не загружены, показываем заглушку
  if (!cardParams) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Загрузка...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16 bg-apple-gray">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Левая часть - форма оплаты */}
            <div className="fade-in">
              <h1 className="text-3xl font-semibold mb-6">Оформление заказа</h1>
              <PaymentForm
                amount={cardParams.amount}
                onSubmit={handleSubmitPayment}
              />
            </div>

            {/* Правая часть - сводка и карточка */}
            <div className="fade-in">
              <OrderSummary cardParams={cardParams} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
