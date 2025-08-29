
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-brand-blue/10 to-transparent rounded-full blur-3xl translate-x-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
                <div className="inline-block bg-brand-dark-light border border-brand-dark-border rounded-full px-4 py-1 text-sm text-brand-text-secondary mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    100% Compatible con SAT y CFDI 4.0
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Facturación CFDI 4.0: Rápida, Segura y sin Complicaciones
                </h1>
                <p className="text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    Nuestra plataforma en la nube simplifica tu facturación electrónica. Emite, envía y gestiona tus facturas con la confianza y el respaldo que tu negocio necesita.
                </p>
                <div className="flex justify-center items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#pricing" className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-blue/20">
                        Ver Planes y Precios
                    </a>
                    <a href="#features" className="bg-brand-dark-light hover:bg-brand-dark-border text-brand-text font-semibold py-3 px-8 rounded-lg transition-colors duration-300 border border-brand-dark-border">
                        Conocer Máss
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
