import { useState, useEffect } from 'react';
import useSWR from 'swr';

interface StockPriceGraphProps {
  symbol: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function StockPriceGraph({ symbol }: StockPriceGraphProps) {
  const [apiUrl, setApiUrl] = useState<string | null>(null);
  
  // Use ESLint disable comment for unused variable
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const apiKey = 'YOUR_API_KEY';

  useEffect(() => {
    if (symbol) {
      setApiUrl(`https://api.example.com/stock/${symbol}?apikey=${apiKey}`);
    }
  }, [symbol]);

  // Use ESLint disable comment to properly handle the unused error variable
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading } = useSWR(apiUrl, fetcher);

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