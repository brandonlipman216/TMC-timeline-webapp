import { useState, useEffect } from 'react';
import useSWR from 'swr';

interface StockPriceGraphProps {
  symbol: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function StockPriceGraph({ symbol }: StockPriceGraphProps) {
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  const _apiKey = 'YOUR_API_KEY'; // Changed from apiKey to _apiKey

  useEffect(() => {
    if (symbol) {
      setApiUrl(`https://api.example.com/stock/${symbol}?apikey=${_apiKey}`);
    }
  }, [symbol]);

  const { data, isLoading, _error } = useSWR(apiUrl, fetcher); // Changed from error to _error

  if (isLoading) {
    return <div>Loading stock data...</div>;
  }

  if (!data) {
    return <div>Failed to load stock data.</div>;
  }

  return (
    <div>
      <h3>Stock Price for {symbol}</h3>
      <p>Current Price: ${data.currentPrice}</p>
    </div>
  );
}