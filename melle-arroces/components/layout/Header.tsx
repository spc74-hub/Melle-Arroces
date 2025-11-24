'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, User, Phone, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nuestros Arroces', href: '/productos' },
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-bone-dark/50'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      )}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-saffron to-saffron-dark rounded-xl flex items-center justify-center shadow-warm group-hover:shadow-warm-lg transition-shadow">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-2xl font-bold text-charcoal">
                Melle <span className="text-saffron">Arroces</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-charcoal hover:text-saffron transition-colors font-medium rounded-lg hover:bg-saffron/5 group"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-saffron scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone - Desktop only */}
            <a
              href="tel:+34123456789"
              className="hidden xl:flex items-center gap-2 text-olive hover:text-olive-dark transition-colors px-4 py-2 rounded-lg hover:bg-olive/5"
            >
              <div className="w-9 h-9 bg-olive/10 rounded-lg flex items-center justify-center">
                <Phone size={16} className="text-olive" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Llámanos</p>
                <p className="text-sm font-semibold text-charcoal">123 456 789</p>
              </div>
            </a>

            {/* Divider */}
            <div className="hidden xl:block w-px h-8 bg-bone-dark"></div>

            {/* User */}
            <button className="p-2.5 hover:bg-bone-dark rounded-xl transition-colors group">
              <User size={22} className="text-charcoal group-hover:text-saffron transition-colors" />
            </button>

            {/* Cart */}
            <button className="relative p-2.5 hover:bg-bone-dark rounded-xl transition-colors group">
              <ShoppingCart size={22} className="text-charcoal group-hover:text-saffron transition-colors" />
              <span className="absolute -top-0.5 -right-0.5 bg-gradient-to-br from-saffron to-saffron-dark text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-warm">
                0
              </span>
            </button>

            {/* CTA Button - Desktop */}
            <Link href="/productos" className="hidden lg:block">
              <Button size="sm" className="ml-2 group">
                Hacer Pedido
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 hover:bg-bone-dark rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="flex flex-col py-4 border-t border-bone-dark">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center justify-between text-charcoal hover:text-saffron hover:bg-saffron/5 transition-all font-medium py-4 px-2 rounded-xl group',
                  index === 0 && 'mt-2'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <ChevronRight size={18} className="text-gray-400 group-hover:text-saffron group-hover:translate-x-1 transition-all" />
              </Link>
            ))}

            {/* Mobile Phone */}
            <a
              href="tel:+34123456789"
              className="flex items-center gap-3 text-olive hover:text-olive-dark transition-colors py-4 px-2 mt-2 rounded-xl hover:bg-olive/5"
            >
              <div className="w-10 h-10 bg-olive/10 rounded-lg flex items-center justify-center">
                <Phone size={18} className="text-olive" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Llámanos</p>
                <p className="font-semibold text-charcoal">+34 123 456 789</p>
              </div>
            </a>

            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-bone-dark">
              <Link href="/productos" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-center">
                  Hacer Pedido
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
