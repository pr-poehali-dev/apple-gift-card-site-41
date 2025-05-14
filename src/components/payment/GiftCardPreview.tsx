import React from "react";

interface GiftCardPreviewProps {
  cardParams: {
    design: string;
    amount: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  };
}

const GiftCardPreview: React.FC<GiftCardPreviewProps> = ({ cardParams }) => {
  // Проверяем, если это карта "Морская волна"
  const isOceanWave = cardParams.design === "Морская волна";

  return (
    <div
      className={`w-full h-60 rounded-2xl bg-gradient-to-r ${cardParams.gradientFrom} ${cardParams.gradientVia} ${cardParams.gradientTo} card-shadow ${isOceanWave ? "gift-card-ocean-wave" : ""}`}
    >
      {/* Добавляем волнистые линии только для морской волны */}
      {isOceanWave && (
        <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden opacity-20">
          <div className="w-48 h-48 rounded-full border-2 border-white absolute -bottom-32 -right-32"></div>
          <div className="w-36 h-36 rounded-full border-2 border-white absolute -bottom-24 -right-24"></div>
          <div className="w-24 h-24 rounded-full border-2 border-white absolute -bottom-16 -right-16"></div>
        </div>
      )}

      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.19251 0C9.20021 0 9.20796 0 9.21571 0C9.41351 1.28544 8.86786 2.31057 8.30186 2.97529C7.70432 3.68236 6.89839 4.33088 5.65594 4.22776C5.49456 3.01276 6.05826 2.01643 6.59121 1.39353C7.20991 0.672193 8.14996 0.0821437 9.19251 0Z"
                fill="black"
              />
              <path
                d="M12.5169 6.11107C12.5054 6.12412 11.8312 6.47816 11.8337 7.37195C11.8363 8.41447 12.6704 8.81279 12.681 8.81769C12.6713 8.84879 12.4354 9.59327 11.8946 10.3528C11.4402 10.9957 10.9624 11.6335 10.2267 11.6335C9.52248 11.6335 9.29303 11.2093 8.48645 11.2093C7.7043 11.2093 7.34831 11.6448 6.70548 11.6448C6.03578 11.6448 5.5406 11.0069 5.03613 10.3164C4.45208 9.50483 3.97539 8.24147 3.97539 7.04043C3.97539 5.05802 5.31616 3.99783 6.64106 3.99783C7.32257 3.99783 7.88633 4.46725 8.31486 4.46725C8.72319 4.46725 9.35587 3.97213 10.1476 3.97213C10.4739 3.97213 11.5166 3.99758 12.5169 6.11107Z"
                fill="black"
              />
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
  );
};

export default GiftCardPreview;
