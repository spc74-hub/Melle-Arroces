/**
 * Formatea un precio en euros
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

/**
 * Formatea una fecha en español
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'long',
  }).format(dateObj);
}

/**
 * Formatea un número de personas
 */
export function formatPersons(persons: number): string {
  return `${persons} ${persons === 1 ? 'persona' : 'personas'}`;
}

/**
 * Genera un slug a partir de un string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
