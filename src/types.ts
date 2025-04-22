export type ResponsiveValue<T> =
  | T
  | {
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      xxl?: T;
    };
