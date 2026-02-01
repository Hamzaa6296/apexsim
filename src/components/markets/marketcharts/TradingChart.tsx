"use client";
import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export interface ChartPoint {
  x: number | Date;
  y: [number, number, number, number]; // Must be an array of 4 numbers
}

interface TradingChartProps {
  data: ChartPoint[];
}

// Helper to generate realistic Candles AND Volume
const generateData = (count: number) => {
  let candles = [];
  let volume = [];
  let currentPrice = 88000;
  let currentTime = new Date().getTime() - (count * 60000);

  for (let i = 0; i < count; i++) {
    const volatility = 200;
    const open = currentPrice;
    const close = open + (Math.random() - 0.5) * volatility;
    const high = Math.max(open, close) + Math.random() * 50;
    const low = Math.min(open, close) - Math.random() * 50;
    const vol = Math.floor(Math.random() * 1000) + 200;

    candles.push({ x: currentTime, y: [open, high, low, close] });
    // Volume bars match candle color (green if close > open)
    volume.push({ 
        x: currentTime, 
        y: vol, 
        fillColor: close > open ? '#22c55e' : '#ef4444' 
    });

    currentPrice = close;
    currentTime += 60000;
  }
  return { candles, volume };
};

export default function TradingChart({ data }: TradingChartProps) {
  const { candles, volume } = useMemo(() => generateData(60), []);

  // Main Candlestick Options
  const mainOptions: ApexOptions = {
    chart: {
      id: 'candles',
      group: 'trading-view', // Syncs with volume chart
      type: 'candlestick',
      background: 'transparent',
      toolbar: { show: false },
      zoom: { enabled: true }
    },
    theme: { mode: 'dark' },
    xaxis: { type: 'datetime', labels: { show: false }, axisTicks: { show: false } },
    yaxis: { opposite: true, labels: { style: { colors: '#71717a' } } },
    grid: { borderColor: '#27272a', strokeDashArray: 2 },
    plotOptions: { 
        candlestick: { colors: { upward: '#22c55e', downward: '#ef4444' } } 
    }
  };

  // Volume Bar Options
  const volumeOptions: ApexOptions = {
    chart: {
      id: 'volume',
      group: 'trading-view',
      type: 'bar',
      background: 'transparent',
      toolbar: { show: false },
      sparkline: { enabled: false }
    },
    theme: { mode: 'dark' },
    xaxis: { type: 'datetime', labels: { style: { colors: '#71717a' } } },
    yaxis: { opposite: true, labels: { show: false } }, // Hide Y labels to save space
    grid: { borderColor: '#27272a', strokeDashArray: 2 },
    plotOptions: { bar: { columnWidth: '80%' } },
    dataLabels: { enabled: false }
  };

  return (
    <div className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden font-manrope">
      
      {/* 1. TOP OPTIONS BAR (Timeframes/Tools) */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#181818]">
        <div className="flex items-center gap-4">
          <span className="font-bold text-white text-sm">BTC/USDT</span>
          <div className="flex gap-1">
            {['1m', '5m', '15m', '1h', '4h', 'D'].map((t) => (
              <button key={t} className="text-[10px] px-2 py-1 text-gray-400 hover:bg-white/5 rounded !cursor-pointer transition-colors">
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 text-gray-400">
           <button className="!cursor-pointer hover:text-white text-xs">Indicators</button>
           <button className="!cursor-pointer hover:text-white text-xs">Settings</button>
        </div>
      </div>

      {/* 2. MAIN CHARTS CONTAINER */}
      <div className="p-2 space-y-1">
        {/* Candlestick Chart (70% height) */}
        <div className="h-[350px]">
          <Chart options={mainOptions} series={[{ data: candles }]} type="candlestick" height="100%" />
        </div>
        
        {/* Volume Bar Chart (30% height) */}
        <div className="h-[120px]">
          <Chart options={volumeOptions} series={[{ name: 'Volume', data: volume }]} type="bar" height="100%" />
        </div>
      </div>

      {/* 3. BOTTOM STATUS BAR */}
      <div className="flex items-center gap-6 px-4 py-1.5 border-t border-white/5 bg-[#181818] text-[10px] text-gray-500">
        <div className="flex gap-2">
            <span>O: <span className="text-white">88240.1</span></span>
            <span>H: <span className="text-white">88300.5</span></span>
            <span>L: <span className="text-white">88190.2</span></span>
            <span>C: <span className="text-white text-green-500">88250.9</span></span>
        </div>
        <span>Vol: <span className="text-white">1.25M</span></span>
      </div>
    </div>
  );
}