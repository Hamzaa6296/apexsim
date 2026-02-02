"use client";
import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { FaChartLine } from "react-icons/fa";
import { MdOutlineOpenInFull } from "react-icons/md";
import { MdOutlineGridView } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function TradingChart() {
  const [hoverData, setHoverData] = useState({
    open: 20362.21,
    high: 20367.78,
    low: 19549.09,
    close: 19965.74,
    change: -1.94,
    amplitude: 4.02
  });

  const { candles, volume, lastPrice } = useMemo(() => {
    let currentPrice = 22000;
    let currentTime = new Date('2022-11-01').getTime();
    const candles = [];
    const volume = [];

    for (let i = 0; i < 120; i++) {
      const open = currentPrice;
      const close = open + (Math.random() - 0.5) * 600;
      const high = Math.max(open, close) + Math.random() * 200;
      const low = Math.min(open, close) - Math.random() * 200;
      const vol = Math.floor(Math.random() * 400000) + 100000;

      candles.push({ x: currentTime, y: [open, high, low, close] });
      volume.push({
        x: currentTime,
        y: vol,
        fillColor: close > open ? '#26a69a' : '#ef5350'
      });

      currentPrice = close;
      currentTime += 86400000;
    }
    return {
      candles,
      volume,
      lastPrice: candles[candles.length - 1].y[3]
    };
  }, []);

  // 1. Main Candlestick Pane Options
  const mainOptions: ApexOptions = {
    chart: {
      id: 'candles',
      group: 'sync-charts',
      type: 'candlestick',
      background: 'transparent',
      toolbar: { show: false },
      offsetY: -10,
      events: {
        mouseMove: (event, chartContext, config) => {
          const i = config.dataPointIndex;
          if (i > -1 && candles[i]) {
            const d = candles[i].y;
            setHoverData({
              open: d[0], high: d[1], low: d[2], close: d[3],
              change: parseFloat(((d[3] - d[0]) / d[0] * 100).toFixed(2)),
              amplitude: parseFloat(((d[1] - d[2]) / d[2] * 100).toFixed(2))
            });
          }
        }
      }
    },
    annotations: {
      yaxis: [{
        y: lastPrice,
        borderColor: '#ef5350',
        strokeDashArray: 0,
        label: {

          text: lastPrice.toFixed(2),
          position: 'right',
          style: { color: '#fff', background: '#ef5350' }
        }
      }]
    },
    theme: { mode: 'dark' },
    xaxis: { type: 'datetime', labels: { show: false }, axisTicks: { show: false }, axisBorder: { show: false } },
    yaxis: {
      opposite: true,
      labels: { style: { colors: '#71717a', fontSize: '10px' }, formatter: (v) => v.toFixed(0) },
    },
    grid: { borderColor: '#1e1e1e', strokeDashArray: 0, xaxis: { lines: { show: true } } },
    plotOptions: {
      candlestick: { colors: { upward: '#26a69a', downward: '#ef5350' }, wick: { useFillColor: true } }
    },
    tooltip: { enabled: false }
  };

  // 2. Volume Pane Options
  const volumeOptions: ApexOptions = {
    chart: { id: 'volume', group: 'sync-charts', type: 'bar', background: 'transparent', toolbar: { show: false }, offsetY: -20 },
    theme: { mode: 'dark' },
    xaxis: { type: 'datetime', labels: { style: { colors: '#52525b', fontSize: '10px' } }, axisBorder: { show: false } },
    yaxis: {
      opposite: true,
      labels: { style: { colors: '#71717a', fontSize: '10px' }, formatter: (v) => (v / 1000).toFixed(0) + 'K' },
      tickAmount: 2
    },
    grid: { borderColor: '#1e1e1e', strokeDashArray: 0, xaxis: { lines: { show: true } } },
    plotOptions: { bar: { columnWidth: '85%' } },
    dataLabels: { enabled: false },
    tooltip: { enabled: false }
  };

  return (
    <div className="bg-[#181818] w-full h-full font-manrope flex flex-col border border-white/5 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-3 py-3 font-semibold bg-[#181818] border-b border-white/5">
        <div className="flex items-center gap-3">
          {['Time', '1s', '15m', '1H', '4H', '1D', '1W'].map((t) => (
            <button key={t} className={`text-[12px] !cursor-pointer ${t === '1D' ? 'text-[#f0b90b]' : 'text-gray-500 hover:text-white'}`}>
              {t}
            </button>
          ))}
          <button className="text-gray-500 !cursor-pointer"><FaCaretDown size={10} /></button>
          <button className="text-gray-500 !cursor-pointer"><FaChartLine size={15} /></button>
          <button className="text-gray-500 !cursor-pointer"><FaChartIcon size={13} /></button>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-[#f0b90b] !cursor-pointer">Original</span>
          <span className="text-gray-500 hover:text-white !cursor-pointer">Trading View</span>
          <span className="text-gray-500 hover:text-white !cursor-pointer">Depth</span>
          <button className="text-gray-500 !cursor-pointer"><MdOutlineOpenInFull size={15} /></button>
          <button className="text-gray-500 !cursor-pointer"><MdOutlineGridView size={13} /></button>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-start gap-1 px-4 py-2 text-[11px] border-b border-white/5 bg-[#181818]">
        <div className="flex items-center gap-1">
          <button className="text-gray-500 !cursor-pointer"><FaCaretDown size={10} /></button>
          <span className="text-gray-500">2023/03/10</span>
          <span className="text-gray-500">Open:</span>
          <span className="text-[#ef5350]">{hoverData.open.toFixed(2)}</span>
          <span className="text-gray-500">High:</span>
          <span className="text-[#26a69a]">{hoverData.high.toFixed(2)}</span>
          <span className="text-gray-500">Low:</span>
          <span className="text-[#ef5350]">{hoverData.low.toFixed(2)}</span>
          <span className="text-gray-500">Close:</span>
          <span className="text-[#ef5350]">{hoverData.close.toFixed(2)}</span>
          <span className="text-gray-500">CHANGE:</span>
          <span className="text-[#ef5350]">{hoverData.change}%</span>
          <span className="text-gray-500">AMPLITUDE:</span>
          <span className="text-[#ef5350]">{hoverData.amplitude}%</span>
          <span className="text-[#f0b90b]">MA(7): 21631.17</span>
        </div>
        <div className='gap-1 flex items-center'>
          <button className="text-gray-500 !cursor-pointer"><FaCaretDown size={10} /></button>
          <span className="text-[#9c27b0]">MA(25): 23133.19</span>
          <span className="text-[#00bcd4]">MA(99): 20290.29</span>
          <div className='flex items-center gap-2'>
            <button className="text-gray-500 bg-[#3A3F46]/50 p-0.5 opacity-50 !cursor-pointer"><IoEyeOutline size={12} /></button>
            <button className="text-gray-500 bg-[#3A3F46]/50 p-0.5 opacity-50 !cursor-pointer"><IoSettingsOutline size={12} /></button>
            <button className="text-gray-500 bg-[#3A3F46]/50 p-0.5 opacity-50 !cursor-pointer"><RxCross2 size={12} /></button>
          </div>
        </div>

      </div>


      {/* Main Chart Section */}
      <div className="flex-grow flex flex-col relative">
        <div className="flex-grow">
          <Chart options={mainOptions} series={[{ data: candles }]} type="candlestick" height="100%" />
          <div className="absolute flex gap-2 bottom-28 left-4 text-[10px] text-gray-500 z-10">
          Vol(BTC): <span className="text-[#ef5350]">503.753K</span> Vol(USDT) <span className="text-[#ef5350]">10.05B</span>
          <div className='flex items-center gap-2'>
            <button className="text-gray-500 bg-[#3A3F46]/50 p-0.5 opacity-50 !cursor-pointer"><IoEyeOutline size={12} /></button>
            <button className="text-gray-500 bg-[#3A3F46]/50 p-0.5 opacity-50 !cursor-pointer"><IoSettingsOutline size={12} /></button>
            <button className="text-gray-500 bg-[#3A3F46]/50 p-0.5 opacity-50 !cursor-pointer"><RxCross2 size={12} /></button>
          </div>
        </div>
        </div>
        {/* Volume Sub-pane (Lower 25%) */}
        <div className="h-32 border-t border-white/5">
          <Chart options={volumeOptions} series={[{ name: 'Volume', data: volume }]} type="bar" height="100%" />
        </div>
      </div>
    </div>
  );
}

const FaCaretDown = ({ size }: { size: number }) => (
  <svg fill="currentColor" viewBox="0 0 320 512" height={size} width={size}><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
);
const FaChartIcon = ({ size }: { size: number }) => (
  <svg fill="currentColor" viewBox="0 0 448 512" height={size} width={size}><path d="M160 80V48c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v32h112c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48h112zM128 448h192v-32H128v32zm0-64h192v-32H128v32zm0-64h192v-32H128v32zm0-64h192v-32H128v32z"></path></svg>
);