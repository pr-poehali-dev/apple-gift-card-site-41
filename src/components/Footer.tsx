
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-medium text-lg mb-4">Apple Gift Card</h4>
            <ul className="space-y-3 text-apple-darkgray">
              <li><a href="#" className="hover:text-black transition-colors">О картах</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Варианты дизайна</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Где использовать</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Покупателям</h4>
            <ul className="space-y-3 text-apple-darkgray">
              <li><a href="#" className="hover:text-black transition-colors">Способы оплаты</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Возврат</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Поддержка</h4>
            <ul className="space-y-3 text-apple-darkgray">
              <li><a href="#" className="hover:text-black transition-colors">Часто задаваемые вопросы</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Связаться с нами</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Правила использования</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Связаться с нами</h4>
            <ul className="space-y-3 text-apple-darkgray">
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                <a href="mailto:support@applegiftcard.ru" className="hover:text-black transition-colors">
                  support@applegiftcard.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                <a href="tel:+78005553535" className="hover:text-black transition-colors">
                  8 (800) 555-35-35
                </a>
              </li>
            </ul>
            
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-apple-darkgray hover:text-black transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-apple-darkgray hover:text-black transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-apple-darkgray hover:text-black transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-sm text-apple-darkgray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 Apple Gift Card. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-black transition-colors">Условия использования</a>
              <a href="#" className="hover:text-black transition-colors">Карта сайта</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
