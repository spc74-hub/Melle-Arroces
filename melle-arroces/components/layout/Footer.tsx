import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron to-terracotta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-display text-xl font-bold">
                Melle <span className="text-saffron">Arroces</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Paellas y arroces artesanales elaborados con ingredientes de primera calidad
              y recetas tradicionales del Mediterráneo.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-saffron transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-gray-400 hover:text-saffron transition-colors">
                  Nuestros Arroces
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-saffron transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-saffron transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-saffron transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-saffron transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-400 hover:text-saffron transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal" className="text-gray-400 hover:text-saffron transition-colors">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-saffron mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Calle Ejemplo 123<br />
                  46001 Valencia, España
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-saffron flex-shrink-0" />
                <a href="tel:+34123456789" className="text-gray-400 hover:text-saffron transition-colors">
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-saffron flex-shrink-0" />
                <a href="mailto:hola@mellearroces.com" className="text-gray-400 hover:text-saffron transition-colors">
                  hola@mellearroces.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-charcoal-light mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Melle Arroces. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
