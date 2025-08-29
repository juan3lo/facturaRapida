
import React from 'react';
import { Logo } from './icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark-light border-t border-brand-dark-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-brand-text-secondary max-w-md">
              Simplificamos la facturación electrónica para freelancers, pymes y contadores en México.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-brand-text mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-brand-text-secondary hover:text-brand-blue transition-colors">Características</a></li>
              <li><a href="#pricing" className="text-brand-text-secondary hover:text-brand-blue transition-colors">Planes</a></li>
              <li><a href="#" className="text-brand-text-secondary hover:text-brand-blue transition-colors">Iniciar Sesión</a></li>
              <li><a href="#" className="text-brand-text-secondary hover:text-brand-blue transition-colors">Registrarse</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-brand-text mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="mailto:soporte@facturahoy.com" className="text-brand-text-secondary hover:text-brand-blue transition-colors">soporte@facturahoy.com</a></li>
              <li><p className="text-brand-text-secondary">Chat en vivo</p></li>
              <li><a href="#" className="text-brand-text-secondary hover:text-brand-blue transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="text-brand-text-secondary hover:text-brand-blue transition-colors">Aviso de Privacidad</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 border-t border-brand-dark-border pt-6 text-center text-sm text-brand-text-secondary">
          <p>&copy; {new Date().getFullYear()} Factura Hoy. Todos los derechos reservados. Una solución de Facturación Digital S.A. de C.V.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
