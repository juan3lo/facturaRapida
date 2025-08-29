
import React from 'react';
import type { Feature } from '../types';
import {
  CheckCircleIcon, CloudIcon, DownloadIcon, CreditCardIcon, ChatAlt2Icon, CurrencyDollarIcon,
  UsersIcon, XCircleIcon, MailIcon, EyeIcon, CollectionIcon
} from './icons';

const featuresData: Feature[] = [
  {
    icon: <CheckCircleIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Cumplimiento CFDI 4.0 y SAT',
    description: 'Genera facturas 100% válidas ante el SAT, cumpliendo con todas las normativas fiscales vigentes del Anexo 20 y CFDI 4.0.',
  },
  {
    icon: <CloudIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Portal Seguro en la Nube',
    description: 'Accede a tu información desde cualquier lugar y dispositivo. Tus datos están protegidos con los más altos estándares de seguridad.',
  },
  {
    icon: <DownloadIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Descarga XML y PDF al Instante',
    description: 'Visualiza y descarga los archivos XML y PDF de tus facturas en segundos, tanto para ti como para tus clientes.',
  },
  {
    icon: <CreditCardIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Complementos de Pago Incluidos',
    description: 'Emite Comprobantes de Recepción de Pagos (CRP) de forma sencilla y sin costo adicional, manteniendo tu contabilidad al día.',
  },
  {
    icon: <ChatAlt2Icon className="h-8 w-8 text-brand-blue" />,
    title: 'Soporte Personalizado',
    description: 'Nuestro equipo de expertos está listo para ayudarte vía chat y correo electrónico para resolver cualquier duda que tengas.',
  },
  {
    icon: <CurrencyDollarIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Pago por Folio, Sin Contratos',
    description: 'Olvídate de las mensualidades. Compra solo los folios que necesitas y úsalos cuando quieras. No tienen vigencia.',
  },
  {
    icon: <UsersIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Multi-Emisor',
    description: 'Gestiona la facturación de varias razones sociales (RFCs) desde una sola cuenta, optimizando tu administración.',
  },
  {
    icon: <XCircleIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Cancelación sin Costo',
    description: 'Cancela tus facturas y complementos de pago directamente desde el portal sin ningún cargo extra. Proceso rápido y sencillo.',
  },
  {
    icon: <MailIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Envío por Correo Automático',
    description: 'Envía automáticamente las facturas a tus clientes por correo electrónico al momento de timbrarlas, ahorrándote tiempo.',
  },
  {
    icon: <EyeIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Vista Previa Antes de Timbrar',
    description: 'Revisa y valida toda la información de tu factura con una vista previa idéntica al PDF final para evitar errores antes de emitirla.',
  },
  {
    icon: <CollectionIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Descarga Masiva de Facturas',
    description: 'Descarga reportes y todos tus comprobantes emitidos en un rango de fechas con un solo clic, facilitando tus cierres contables.',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-brand-dark-light border border-brand-dark-border rounded-xl p-6 transition-all duration-300 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/10 transform hover:-translate-y-1">
    <div className="mb-4">{feature.icon}</div>
    <h3 className="text-lg font-bold text-brand-text mb-2">{feature.title}</h3>
    <p className="text-brand-text-secondary text-sm">{feature.description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text">Todo lo que necesitas para tu Facturación</h2>
          <p className="mt-4 text-lg text-brand-text-secondary">
            Diseñamos una plataforma completa y fácil de usar que resuelve todas tus necesidades de facturación electrónica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
