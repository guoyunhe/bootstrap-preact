export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ResponsiveValue<T> = T | Record<Breakpoint, T>;
