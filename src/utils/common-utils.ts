import { slug } from 'github-slugger';

export function slugify(input?: string) {
  if (!input) return '';

  return slug(input.trim());
}
