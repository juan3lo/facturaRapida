
import React from 'react';
import type { PricingPlan } from '../types';
import { CheckCircleIcon } from './icons';

const plans: PricingPlan[] = [
  {
    name: 'Básico',
    folios: 50,
    price: 450,
    pricePerFolio: 9.00,
  },
  {
    name: 'Profesional',
    folios: 100,
    price: 800,
    pricePerFolio: 8.00,
    popular: true,
  },
  {
    name: 'Negocios',
    folios: 250,
    price: 1750,
    pricePerFolio: 7.00,
  },
  {
    name: 'Corporativo',
    folios: 500,
    price: 3000,
    pricePerFolio: 6.00,
  },
];

const includedFeatures = [
  'Timbrado CFDI 4.0',
  'Complementos de Pago',
  'Cancelación de Facturas',
  'Portal en la Nube',
  'Soporte Técnico',
  'Sin Vigencia de Folios',
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className={`relative bg-brand-dark-light border ${plan.popular ? 'border-brand-blue' : 'border-brand-dark-border'} rounded-xl p-8 flex flex-col transition-all duration-300 transform hover:scale-105 hover:border-brand-blue`}>
    {plan.popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full">
        MÁS POPULAR
      </div>
    )}
    <h3 className="text-xl font-bold text-brand-text text-center">{plan.name}</h3>
    <p className="text-brand-text-secondary text-center mb-6">{plan.folios} Folios</p>
    
    <div className="text-center my-4">
      <span className="text-5xl font-extrabold text-brand-text">${plan.price}</span>
      <span className="text-brand-text-secondary ml-1">MXN</span>
    </div>
    <p className="text-center text-brand-blue font-semibold mb-8">
      ${plan.pricePerFolio.toFixed(2)} por folio
    </p>

    <div className="flex-grow">
      <ul className="space-y-3 text-sm">
        {includedFeatures.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-brand-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <a href="#" className={`mt-10 block w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.popular ? 'bg-brand-blue text-white hover:bg-brand-blue-light' : 'bg-brand-dark-border text-brand-text hover:bg-brand-blue'}`}>
      Comprar Paquete
    </a>
  </div>
);


const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text">Planes a tu medida. Paga solo por lo que usas.</h2>
          <p className="mt-4 text-lg text-brand-text-secondary">
            Sin mensualidades, sin plazos forzosos. Compra tus folios y úsalos cuando los necesites. Todos los planes incluyen todas nuestras funcionalidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
         <p className="text-center mt-8 text-brand-text-secondary text-sm">Precios más IVA. ¿Necesitas más de 500 folios? <a href="#contact" className="text-brand-blue hover:underline">Contáctanos</a> para un plan personalizado.</p>
      </div>
    </section>
  );
};

export default Pricing;
