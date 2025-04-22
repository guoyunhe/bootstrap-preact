import { ResponsiveValue } from './types';

export function rc(prefix: string, value?: ResponsiveValue<string | number>) {
  if (typeof value === 'undefined') {
    return '';
  } else if (typeof value === 'string' || typeof value === 'number') {
    return prefix + value;
  } else {
    return Object.entries(value)
      .map(([key, val]) => `${prefix + key}-${val}`)
      .join(' ');
  }
}
