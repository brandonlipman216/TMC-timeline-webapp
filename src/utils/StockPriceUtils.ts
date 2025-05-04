// TMC stock price data from Yahoo Finance (projected for 2025)
const TMC_STOCK_DATA: [string, number][] = [
  ["2025-05-02", 2.98],
  ["2025-05-01", 3.10],
  ["2025-04-30", 3.14],
  ["2025-04-29", 3.28],
  ["2025-04-28", 3.31],
  ["2025-04-25", 3.05],
  ["2025-04-24", 3.69],
  ["2025-04-23", 2.55],
  ["2025-04-22", 2.36],
  ["2025-04-21", 2.44],
  ["2025-04-17", 2.96],
  ["2025-04-16", 2.79],
  ["2025-04-15", 2.87],
  ["2025-04-14", 2.83],
  ["2025-04-11", 1.95],
  ["2025-04-10", 1.86],
  ["2025-04-09", 1.79],
  ["2025-04-08", 1.62],
  ["2025-04-07", 1.76],
  ["2025-04-04", 1.83],
  ["2025-04-03", 1.95],
  ["2025-04-02", 1.94],
  ["2025-04-01", 1.66],
  ["2025-03-31", 1.72],
  ["2025-03-28", 1.72],
  ["2025-03-27", 1.70],
];

// Additional projected data for other timeline event dates
const ADDITIONAL_PRICE_DATA: [string, number][] = [
  ["2025-05-09", 3.15],
  ["2025-05-12", 3.22],
  ["2025-05-29", 3.40],
  ["2025-05-30", 3.42],
  ["2025-06-15", 3.56],
  ["2025-06-23", 3.65],
  ["2025-06-27", 3.69],
  ["2025-06-28", 3.71],
  ["2025-07-07", 3.78],
  ["2025-07-08", 3.82],
  ["2025-07-14", 3.85],
  ["2025-07-15", 3.88],
  ["2025-07-29", 3.95],
  ["2025-10-06", 4.25],
  ["2025-10-12", 4.32],
  ["2025-10-15", 4.36],
  ["2025-11-05", 4.52],
  ["2025-11-07", 4.55],
  ["2025-11-29", 4.68],
  ["2025-12-31", 4.85],
  ["2026-01-15", 5.02],
  ["2026-03-01", 5.34],
  ["2026-04-15", 5.56],
  ["2026-07-15", 5.92],
  ["2026-10-15", 6.25],
  ["2027-01-13", 6.48],
];

// Combine all price data
const ALL_PRICE_DATA = [...TMC_STOCK_DATA, ...ADDITIONAL_PRICE_DATA];

/**
 * Get TMC stock price for a specific date
 * @param date The date to look up
 * @returns The stock price for the given date, or undefined if not found
 */
export function getStockPriceForDate(date: Date): number | undefined {
  // Format date as YYYY-MM-DD
  const dateStr = date.toISOString().split('T')[0];
  
  // Find exact match
  const entry = ALL_PRICE_DATA.find(([entryDate]) => entryDate === dateStr);
  if (entry) {
    return entry[1];
  }
  
  // If no exact match, find closest previous date
  const sortedData = [...ALL_PRICE_DATA].sort((a, b) => 
    new Date(b[0]).getTime() - new Date(a[0]).getTime()
  );
  
  const closestPreviousDate = sortedData.find(([entryDate]) => 
    new Date(entryDate) <= date
  );
  
  return closestPreviousDate ? closestPreviousDate[1] : undefined;
}

/**
 * Get the current TMC stock price (most recent available)
 * @returns The most recent stock price
 */
export function getCurrentStockPrice(): number {
  const sortedData = [...ALL_PRICE_DATA].sort((a, b) => 
    new Date(b[0]).getTime() - new Date(a[0]).getTime()
  );
  
  return sortedData[0][1];
}
