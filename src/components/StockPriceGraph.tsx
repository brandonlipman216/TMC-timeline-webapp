import { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

interface StockPriceGraphProps {
  apiKey: string; // We'll use a different API key
  currentDatePosition: number;
}

interface StockData {
  c: number[];  // Close prices
  t: number[];  // Timestamps
  currentPrice: number;
}

// Mock data to use when API calls fail
const MOCK_STOCK_DATA: StockData = {
  c: [10, 12, 15, 14, 13, 16, 18],
  t: [1622505600, 1622592000, 1622678400, 1622764800, 1622851200, 1622937600, 1623024000],
  currentPrice: 18
};

export default function StockPriceGraph({ apiKey, currentDatePosition }: StockPriceGraphProps) {
  // Always start with mock data to ensure something displays immediately
  const [stockData, setStockData] = useState<StockData>(MOCK_STOCK_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useMockData, setUseMockData] = useState(true);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    // Get a free API key from https://www.alphavantage.co/support/#api-key
    const alphaVantageKey = "demo"; // Replace with your free API key
    
    const fetchStockData = async () => {
      try {
        setLoading(true);
        console.log('Fetching stock data from Alpha Vantage API...');
        
        // URL for Alpha Vantage daily time series
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TMC&outputsize=compact&apikey=${alphaVantageKey}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch stock data: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check if we got valid data
        if (data['Error Message']) {
          throw new Error(`API error: ${data['Error Message']}`);
        }
        
        if (!data['Time Series (Daily)']) {
          throw new Error('Invalid response format');
        }
        
        // Process Alpha Vantage data format
        const timeSeriesData = data['Time Series (Daily)'];
        const dates = Object.keys(timeSeriesData).sort();
        
        // Extract close prices and timestamps
        const closePrices = [];
        const timestamps = [];
        
        for (const date of dates) {
          const closePrice = parseFloat(timeSeriesData[date]['4. close']);
          closePrices.push(closePrice);
          timestamps.push(new Date(date).getTime() / 1000);
        }
        
        // Get the most recent closing price
        const currentPrice = closePrices[closePrices.length - 1];
        
        // Update state with real data
        setStockData({
          c: closePrices,
          t: timestamps,
          currentPrice: currentPrice
        });
        
        setUseMockData(false);
        console.log('Successfully loaded stock data from Alpha Vantage');
      } catch (err) {
        console.error('Error fetching stock data:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        // We'll keep using the mock data that's already loaded
      } finally {
        setLoading(false);
      }
    };
    
    fetchStockData();
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;
    
    // Destroy previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;
    
    // Convert timestamps to dates for labels
    const labels = stockData.t.map(timestamp => {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    
    // Create the chart rotated 90 degrees
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'TMC Stock Price',
          data: stockData.c,
          borderColor: '#0D9669',
          backgroundColor: 'rgba(13, 150, 105, 0.2)',
          tension: 0.1,
          pointRadius: 0,
          fill: true
        }]
      },
      options: {
        indexAxis: 'y', // This makes the chart vertical
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `$${context.parsed.x.toFixed(2)}`;
              }
            }
          }
        },
        scales: {
          x: {
            position: 'top',
            title: {
              display: true,
              text: 'Price ($)'
            },
            grid: {
              display: true,
              color: 'rgba(200, 200, 200, 0.3)'
            }
          },
          y: {
            reverse: true, // To match the timeline direction (older dates at top)
            grid: {
              display: false
            },
            ticks: {
              maxTicksLimit: 12, // Limit the number of ticks to avoid overcrowding
              callback: function(val, index) {
                // Show every 5th label to avoid overcrowding
                return index % 5 === 0 ? this.getLabelForValue(val as number) : '';
              }
            }
          }
        }
      }
    });
  }, [stockData]);

  if (loading && !stockData) return <div className="stock-graph-container">Loading stock data...</div>;

  return (
    <div className="stock-graph-container">
      <div className="stock-graph-header">
        TMC Stock Price
        {useMockData && <div className="text-xs text-gray-500 mt-1">(Simulated data)</div>}
      </div>
      <canvas ref={chartRef} className="stock-graph"></canvas>
      
      {/* Current price indicator aligned with current date line */}
      <div 
        className="current-price-indicator"
        style={{ top: `${currentDatePosition}px` }}
      >
        <span className="current-price-label">
          ${stockData.currentPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}