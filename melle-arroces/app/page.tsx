import Hero from '@/components/home/Hero';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { getFeaturedProducts } from '@/data/products';
import { ArrowRight, UtensilsCrossed, Truck, Heart, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  const steps = [
    {
      number: 1,
      title: 'Elige tu paella',
      description: 'Navega por nuestro catálogo y selecciona tu paella favorita. Elige el número de personas y personaliza según tus preferencias.',
      color: 'from-saffron to-saffron-dark',
    },
    {
      number: 2,
      title: 'Realiza tu pedido',
      description: 'Selecciona fecha y hora de entrega. Paga de forma segura con tarjeta o efectivo en la entrega.',
      color: 'from-terracotta to-terracotta-dark',
    },
    {
      number: 3,
      title: 'Disfruta en casa',
      description: 'Recibe tu paella recién preparada en tu domicilio. Solo tienes que calentar y disfrutar.',
      color: 'from-olive to-olive-dark',
    },
  ];

  const testimonials = [
    {
      name: 'María García',
      location: 'Valencia',
      text: 'La mejor paella que he probado fuera de casa de mi abuela. El arroz en su punto y el socarrat increíble.',
      rating: 5,
    },
    {
      name: 'Carlos Ruiz',
      location: 'Madrid',
      text: 'Pedimos para una reunión familiar y fue todo un éxito. Repetiremos seguro.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      location: 'Barcelona',
      text: 'Servicio impecable y la calidad de los ingredientes se nota. Muy recomendable.',
      rating: 5,
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center mb-14 lg:mb-16">
            <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
              Nuestro Menú
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-5">
              Arroces <span className="text-gradient">Destacados</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubre nuestras paellas y arroces más populares, elaborados con ingredientes
              de primera calidad y recetas tradicionales del Mediterráneo.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-14">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/productos">
              <Button size="lg" variant="outline" className="group px-8">
                Ver Todos los Productos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-16 bg-bone">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: UtensilsCrossed,
                title: 'Recetas Tradicionales',
                description: 'Elaboradas siguiendo las recetas valencianas de toda la vida',
              },
              {
                icon: Truck,
                title: 'Entrega Puntual',
                description: 'Tu paella llega caliente y lista para disfrutar',
              },
              {
                icon: Heart,
                title: 'Hecho con Amor',
                description: 'Cada paella es preparada con mimo y dedicación',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-bone-dark/50 shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-saffron/20 to-saffron/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-saffron" size={26} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gradient-to-b from-white via-bone/50 to-white">
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
              Proceso Simple
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-5">
              ¿Cómo <span className="text-gradient">funciona</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Recibe tu paella en casa en 3 sencillos pasos
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto relative">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-saffron via-terracotta to-olive opacity-20"></div>

            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center group">
                {/* Number circle */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-8 shadow-warm group-hover:shadow-warm-lg group-hover:scale-105 transition-all duration-300 rotate-3 group-hover:rotate-0`}>
                  {step.number}
                </div>

                <h3 className="font-display text-xl lg:text-2xl font-semibold text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-charcoal text-white overflow-hidden">
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center mb-14 lg:mb-16">
            <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
              Testimonios
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Lo que dicen <span className="text-saffron">nuestros clientes</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Más de 500 familias ya disfrutan de nuestras paellas
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-charcoal-light rounded-2xl p-8 relative group hover:-translate-y-1 transition-transform"
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-saffron/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-saffron fill-saffron" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron to-terracotta rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-saffron via-saffron to-terracotta text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container-main text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para probar<br className="sm:hidden" /> nuestras paellas?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Haz tu primer pedido hoy y descubre por qué somos los favoritos
            de más de 500 familias en toda España.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <Button size="lg" className="bg-white text-saffron hover:bg-bone border-0 shadow-lg px-10">
                Hacer mi Pedido Ahora
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10">
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
