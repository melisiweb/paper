import { Button, CircularProgress, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PCard } from "../../design-system/cards";
import { getConversionRates } from "../../endpoints";
import { currenciesOptions, formatCurrencyValue } from "../../utils";
import { CurrencyInput } from "../currency-input";
import { ConversionResult, Logo, Title } from "./styles";

const REFETCH_INTERVAL = 30000;
const REFETCH_INTERVAL_IN_SECONDS = REFETCH_INTERVAL / 1000;
const INPUT_REGEX = /^[1-9]+\.?\d*$/;

export const ConversionRates: React.FC = () => {
  const [counter, setCounter] = useState<number>(REFETCH_INTERVAL_IN_SECONDS);
  const [currency, setCurrency] = useState("ETH");
  const [currencyAmount, setCurrencyAmount] = useState("1");
  const { isFetching, data } = useQuery(
    ["GET_CONVERSION_RATES", currency],
    async () => {
      const ratesResponse = await getConversionRates(currency);

      return ratesResponse.data?.data;
    },
    {
      refetchInterval: REFETCH_INTERVAL,
    }
  );

  const convertedAmount =
    parseFloat(currencyAmount) * parseFloat(data?.rates?.["USD"] || "0");

  useEffect(() => {
    const timer =
      counter > 0 && window.setInterval(() => setCounter(counter - 1), 1000);

    if (isFetching) {
      setCounter(REFETCH_INTERVAL_IN_SECONDS);
      if (timer) {
        window.clearInterval(timer);
      }
    }

    return () => {
      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, [counter, isFetching]);

  const onChangeInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    if (value === "" || INPUT_REGEX.test(value)) {
      setCurrencyAmount(value);
    }
  };

  const onChangeSelect = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setCurrency(ev.target.value);

  return (
    <PCard>
      <Stack spacing={3} alignItems="center" textAlign="center">
        <Logo />
        <Stack spacing={2} width={{ xs: "100%", md: "70%" }}>
          <Title as="h1" size={24}>
            Conversion rates
          </Title>
          <CurrencyInput
            inputValue={currencyAmount}
            selectValue={currency}
            selectOptions={currenciesOptions}
            onChangeInput={onChangeInput}
            onChangeSelect={onChangeSelect}
          />
          {!!convertedAmount && (
            <ConversionResult>
              You will get{" "}
              <strong>{formatCurrencyValue(convertedAmount)}</strong> USD
            </ConversionResult>
          )}
          <small>
            {isFetching ? <CircularProgress /> : `Quotes update in ${counter}`}
          </small>
          <Button
            variant="contained"
            color="primary"
            disabled={isFetching || !convertedAmount}
          >
            {isFetching ? "Updating quotes..." : "Buy"}
          </Button>
        </Stack>
      </Stack>
    </PCard>
  );
};
