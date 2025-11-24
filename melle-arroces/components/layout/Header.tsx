'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Menu, X, User, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nuestros Arroces', href: '/productos' },
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-bone-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron to-terracotta rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="font-display text-2xl font-bold text-charcoal">
              Melle <span className="text-saffron">Arroces</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-saffron transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <a
              href="tel:+34123456789"
              className="hidden lg:flex items-center space-x-2 text-olive hover:text-olive-dark transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">123 456 789</span>
            </a>

            {/* User */}
            <button className="p-2 hover:bg-bone-dark rounded-lg transition-colors">
              <User size={22} className="text-charcoal" />
            </button>

            {/* Cart */}
            <button className="relative p-2 hover:bg-bone-dark rounded-lg transition-colors">
              <ShoppingCart size={22} className="text-charcoal" />
              <span className="absolute -top-1 -right-1 bg-saffron text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                0
              </span>
            </button>

            {/* CTA Button */}
            <Button size="sm" className="hidden lg:inline-flex">
              Hacer Pedido
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-bone-dark rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-saffron transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-bone-dark">
              <Button className="w-full">Hacer Pedido</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
