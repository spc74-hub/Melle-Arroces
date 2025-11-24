'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Clock, Truck, Award, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-bone via-white to-bone-dark overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-saffron/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-terracotta/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-olive/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="container-main py-16 lg:py-24 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="bg-saffron/10 text-saffron px-5 py-2.5 rounded-full text-sm font-semibold border border-saffron/20 backdrop-blur-sm">
                <Sparkles className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
                Auténtica cocina mediterránea
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-8 leading-[1.1] tracking-tight">
              El sabor de la{' '}
              <span className="text-gradient relative">
                auténtica paella
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-saffron/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              <br className="hidden sm:block" />
              {' '}en tu mesa
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Paellas y arroces artesanales elaborados con ingredientes de primera calidad,
              recetas tradicionales y el amor de siempre. Listos para disfrutar en casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14">
              <Link href="/productos">
                <Button size="lg" className="w-full sm:w-auto group text-base px-8">
                  Ver Nuestros Arroces
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link href="/nosotros">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                  Nuestra Historia
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: Clock, title: "Preparación rápida", desc: "Listo en 30-60 min" },
                { icon: Truck, title: "Entrega el mismo día", desc: "Pedidos antes de las 12h" },
                { icon: Award, title: "Calidad garantizada", desc: "Ingredientes premium" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 text-left bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-bone-dark/50 shadow-soft"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron/20 to-saffron/5 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-saffron" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-0.5">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative lg:pl-8"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-dashed border-saffron/20 -rotate-3 scale-105"></div>

              {/* Main image */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-soft-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/hero-paella.png"
                  alt="Paella Valenciana - Melle Arroces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating card - repositioned */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-soft-lg p-5 sm:p-6 border border-bone-dark/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-saffron to-saffron-dark rounded-full border-3 border-white shadow-sm"></div>
                    <div className="w-11 h-11 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-full border-3 border-white shadow-sm"></div>
                    <div className="w-11 h-11 bg-gradient-to-br from-olive to-olive-dark rounded-full border-3 border-white shadow-sm"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-saffron text-base">★</span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-charcoal">
                      +500 clientes satisfechos
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* New floating badge - top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-br from-saffron to-saffron-dark text-white rounded-2xl shadow-warm-lg px-4 py-3 text-center"
              >
                <p className="text-2xl font-bold leading-none">4.9</p>
                <p className="text-xs opacity-90 mt-0.5">Google</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
