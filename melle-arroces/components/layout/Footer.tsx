import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-light">
        <div className="container-main py-12 lg:py-16">
          <div className="bg-gradient-to-br from-saffron/20 to-terracotta/10 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">
                  Recibe ofertas exclusivas
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Suscríbete a nuestra newsletter y recibe un 10% de descuento en tu primer pedido.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-5 py-4 rounded-xl bg-charcoal-light border border-charcoal-light focus:border-saffron focus:outline-none text-white placeholder:text-gray-500 transition-colors"
                />
                <Button className="whitespace-nowrap px-8">
                  Suscribirse
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand - Takes more space */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron to-saffron-dark rounded-xl flex items-center justify-center shadow-warm">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <span className="font-display text-2xl font-bold">
                Melle <span className="text-saffron">Arroces</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Paellas y arroces artesanales elaborados con ingredientes de primera calidad
              y recetas tradicionales del Mediterráneo. El auténtico sabor de Valencia en tu mesa.
            </p>

            {/* Horario */}
            <div className="flex items-start gap-3 p-4 bg-charcoal-light rounded-xl">
              <div className="w-10 h-10 bg-saffron/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-saffron" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Horario de pedidos</p>
                <p className="text-gray-400 text-sm">Lun - Dom: 10:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-6 text-white">Navegación</h3>
            <ul className="space-y-4">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Nuestros Arroces', href: '/productos' },
                { name: 'Sobre Nosotros', href: '/nosotros' },
                { name: 'Contacto', href: '/contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-saffron transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/50 group-hover:bg-saffron transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-4">
              {[
                { name: 'Política de Privacidad', href: '/privacidad' },
                { name: 'Política de Cookies', href: '/cookies' },
                { name: 'Términos y Condiciones', href: '/terminos' },
                { name: 'Aviso Legal', href: '/aviso-legal' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-saffron transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/50 group-hover:bg-saffron transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-lg mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-charcoal-light rounded-xl hover:bg-charcoal-light/80 transition-colors group"
                >
                  <div className="w-10 h-10 bg-saffron/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-saffron/30 transition-colors">
                    <MapPin size={18} className="text-saffron" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-0.5">Dirección</p>
                    <p className="text-gray-400 text-sm">
                      Calle Ejemplo 123<br />
                      46001 Valencia, España
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+34123456789"
                  className="flex items-center gap-4 p-4 bg-charcoal-light rounded-xl hover:bg-charcoal-light/80 transition-colors group"
                >
                  <div className="w-10 h-10 bg-saffron/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-saffron/30 transition-colors">
                    <Phone size={18} className="text-saffron" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-0.5">Teléfono</p>
                    <p className="text-gray-400 text-sm">+34 123 456 789</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@mellearroces.com"
                  className="flex items-center gap-4 p-4 bg-charcoal-light rounded-xl hover:bg-charcoal-light/80 transition-colors group"
                >
                  <div className="w-10 h-10 bg-saffron/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-saffron/30 transition-colors">
                    <Mail size={18} className="text-saffron" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-0.5">Email</p>
                    <p className="text-gray-400 text-sm">hola@mellearroces.com</p>
                  </div>
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal-light rounded-xl flex items-center justify-center hover:bg-saffron transition-colors group"
                aria-label="Instagram"
              >
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-charcoal-light rounded-xl flex items-center justify-center hover:bg-saffron transition-colors group"
                aria-label="Facebook"
              >
                <Facebook size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light">
        <div className="container-main py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; {currentYear} Melle Arroces. Todos los derechos reservados.</p>
            <p className="flex items-center gap-2">
              Hecho con <span className="text-red-500">❤</span> en Valencia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
