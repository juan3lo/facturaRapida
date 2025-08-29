
import React, { useState, useEffect } from 'react';
import { Logo } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark-light/80 backdrop-blur-lg border-b border-brand-dark-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Logo className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-brand-text-secondary hover:text-brand-text transition-colors duration-300">Características</a>
            <a href="#pricing" className="text-brand-text-secondary hover:text-brand-text transition-colors duration-300">Planes</a>
            <a href="#contact" className="text-brand-text-secondary hover:text-brand-text transition-colors duration-300">Soporte</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-brand-text-secondary hover:text-brand-text transition-colors duration-300 text-sm">Iniciar Sesión</a>
            <a href="#" className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
              Registrarse Gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
