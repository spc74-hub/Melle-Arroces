'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';
import { Product } from '@/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { formatPrice, formatPersons } from '@/lib/utils/format';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const minPortion = product.portions[0];
  const maxPortion = product.portions[product.portions.length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card hover className="group h-full flex flex-col">
        {/* Image */}
        <Link href={`/productos/${product.slug}`} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isFeatured && (
              <Badge variant="premium" className="shadow-lg">
                ⭐ Destacado
              </Badge>
            )}
            {product.tags?.includes('nuevo') && (
              <Badge variant="info" className="shadow-lg">
                Nuevo
              </Badge>
            )}
          </div>

          {/* Quick Add Button (appears on hover) */}
          <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button size="sm" variant="primary">
              Ver Detalles
            </Button>
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <Link href={`/productos/${product.slug}`}>
            <h3 className="font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-saffron transition-colors">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {product.shortDescription || product.description}
          </p>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="default" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Info */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Users size={16} className="text-olive" />
              <span>{formatPersons(minPortion.persons)}-{formatPersons(maxPortion.persons)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-olive" />
              <span>{minPortion.preparationTime} min</span>
            </div>
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between pt-4 border-t border-bone-dark">
            <div>
              <p className="text-xs text-gray-500 mb-1">Desde</p>
              <p className="text-2xl font-bold text-saffron">
                {formatPrice(minPortion.price)}
              </p>
            </div>
            <Link href={`/productos/${product.slug}`}>
              <Button size="sm" variant="outline">
                Ver más
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
