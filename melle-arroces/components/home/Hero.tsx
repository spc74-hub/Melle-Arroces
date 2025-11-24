'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Clock, Truck, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-bone via-white to-bone-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-saffron/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="bg-saffron/10 text-saffron px-4 py-2 rounded-full text-sm font-semibold">
                🥘 Auténtica cocina mediterránea
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-6 leading-tight">
              El sabor de la{' '}
              <span className="text-gradient">
                auténtica paella
              </span>
              {' '}en tu mesa
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Paellas y arroces artesanales elaborados con ingredientes de primera calidad,
              recetas tradicionales y el amor de siempre. Listos para disfrutar en casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/productos">
                <Button size="lg" className="w-full sm:w-auto group">
                  Ver Nuestros Arroces
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Nuestra Historia
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-saffron" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Preparación rápida</h3>
                  <p className="text-sm text-gray-600">Listo en 30-60 min</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="text-saffron" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Entrega el mismo día</h3>
                  <p className="text-sm text-gray-600">Pedidos antes de las 12h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-saffron" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Calidad garantizada</h3>
                  <p className="text-sm text-gray-600">Ingredientes premium</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-warm-lg">
              <Image
                src="/images/hero-paella.png"
                alt="Paella Valenciana - Melle Arroces"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 to-terracotta/10"></div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-warm-lg p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 bg-saffron rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-terracotta rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-olive rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-saffron text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-charcoal">
                    +500 clientes satisfechos
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
