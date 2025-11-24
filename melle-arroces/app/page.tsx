import Hero from '@/components/home/Hero';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { getFeaturedProducts } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Nuestros Arroces <span className="text-saffron">Destacados</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras paellas y arroces más populares, elaborados con ingredientes
              de primera calidad y recetas tradicionales del Mediterráneo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/productos">
              <Button size="lg" variant="outline" className="group">
                Ver Todos los Productos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-bone to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-lg text-gray-600">
              Recibe tu paella en casa en 3 sencillos pasos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-saffron to-saffron-dark rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-warm">
                1
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                Elige tu paella
              </h3>
              <p className="text-gray-600">
                Navega por nuestro catálogo y selecciona tu paella favorita.
                Elige el número de personas y personaliza según tus preferencias.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-warm">
                2
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                Realiza tu pedido
              </h3>
              <p className="text-gray-600">
                Selecciona fecha y hora de entrega. Paga de forma segura
                con tarjeta o efectivo en la entrega.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-olive to-olive-dark rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-warm">
                3
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                Disfruta en casa
              </h3>
              <p className="text-gray-600">
                Recibe tu paella recién preparada en tu domicilio.
                Solo tienes que calentar y disfrutar del auténtico sabor mediterráneo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-saffron to-terracotta text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para probar nuestras paellas?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Haz tu primer pedido hoy y descubre por qué somos los favoritos
            de más de 500 familias.
          </p>
          <Link href="/productos">
            <Button size="lg" variant="secondary" className="bg-white text-saffron hover:bg-bone">
              Hacer mi Pedido Ahora
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
