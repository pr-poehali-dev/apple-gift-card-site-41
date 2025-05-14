import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(
      "/payment?design=Универсальная&amount=2500&from=blue-500&via=purple-500&to=pink-500",
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/30">
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <div className="flex items-center gap-2">
                <Icon name="Apple" className="h-6 w-6" />
                <span className="font-medium text-black">Gift Card</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#home"
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              Главная
            </a>
            <a
              href="/#cards"
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              Карты
            </a>
            <a
              href="/#how-it-works"
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              Инструкция
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="apple-button" onClick={handleBuyNow}>
              Купить сейчас
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
