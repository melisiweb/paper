export interface ConversionRatesResponse {
  data: {
    currency: string;
    rates: Record<string, string>;
  };
}
