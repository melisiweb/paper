import { AxiosResponse } from "axios";
import { paxios } from "./api";
import { ConversionRatesResponse } from "./types";

export const getConversionRates = (
  currency: string
): Promise<AxiosResponse<ConversionRatesResponse>> => {
  return paxios.get(
    `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
  );
};
