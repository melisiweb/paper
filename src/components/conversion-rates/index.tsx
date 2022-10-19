import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PCard } from "../../design-system/cards";
import { getConversionRates } from "../../endpoints";

const REFETCH_INTERVAL = 60000;
const REFETCH_INTERVAL_IN_SECONDS = REFETCH_INTERVAL / 1000;

export const ConversionRates: React.FC = () => {
  const [counter, setCounter] = useState<number>(REFETCH_INTERVAL_IN_SECONDS);
  const { isFetching } = useQuery(
    ["GET_CONVERSION_RATES"],
    () => getConversionRates("BTC"),
    {
      refetchInterval: REFETCH_INTERVAL,
    }
  );

  useEffect(() => {
    const timer =
      counter > 0 && window.setInterval(() => setCounter(counter - 1), 1000);

    if (isFetching) {
      setCounter(REFETCH_INTERVAL_IN_SECONDS);
    }

    return () => {
      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, [counter, isFetching]);

  return <PCard>{isFetching ? "Fetching" : counter}</PCard>;
};
