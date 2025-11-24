'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/types';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { formatPrice, formatPersons } from '@/lib/utils/format';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const minPortion = product.portions[0];
  const maxPortion = product.portions[product.portions.length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="bg-white rounded-2xl border border-bone-dark/50 overflow-hidden h-full flex flex-col shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300">
        {/* Image Container */}
        <Link href={`/productos/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-bone">
          <Image
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {product.isFeatured && (
              <Badge variant="premium" className="shadow-lg backdrop-blur-sm">
                Destacado
              </Badge>
            )}
            {product.tags?.includes('nuevo') && (
              <Badge variant="info" className="shadow-lg backdrop-blur-sm">
                Nuevo
              </Badge>
            )}
            {product.tags?.includes('sin gluten') && (
              <Badge variant="success" className="shadow-lg backdrop-blur-sm text-xs">
                Sin gluten
              </Badge>
            )}
          </div>

          {/* Quick Actions (appears on hover) */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <Link href={`/productos/${product.slug}`}>
              <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">
                <Eye size={20} />
              </button>
            </Link>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Price tag */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg z-10">
            <p className="text-xs text-gray-500 mb-0.5">Desde</p>
            <p className="text-xl font-bold text-saffron">{formatPrice(minPortion.price)}</p>
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category & Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {product.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-olive bg-olive/10 px-2.5 py-1 rounded-full capitalize"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <Link href={`/productos/${product.slug}`}>
            <h3 className="font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-saffron transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-5 line-clamp-2 flex-1 leading-relaxed">
            {product.shortDescription || product.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-5 text-sm text-gray-500 mb-5 pb-5 border-b border-bone-dark">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-olive/10 rounded-lg flex items-center justify-center">
                <Users size={14} className="text-olive" />
              </div>
              <span className="font-medium text-charcoal">{formatPersons(minPortion.persons)}-{formatPersons(maxPortion.persons)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-olive/10 rounded-lg flex items-center justify-center">
                <Clock size={14} className="text-olive" />
              </div>
              <span className="font-medium text-charcoal">{minPortion.preparationTime} min</span>
            </div>
          </div>

          {/* Action */}
          <div className="flex items-center gap-3">
            <Link href={`/productos/${product.slug}`} className="flex-1">
              <Button variant="outline" className="w-full justify-center">
                Ver detalles
              </Button>
            </Link>
            <button className="w-12 h-12 bg-saffron/10 hover:bg-saffron text-saffron hover:text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
