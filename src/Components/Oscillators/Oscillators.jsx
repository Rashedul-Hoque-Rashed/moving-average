import info from '../../assets/icon.gif'
import graphsImg from '../../assets/bar_oscillator.ed2bf1c3.svg'
import pointerImg from '../../assets/pointer.c2b2a6c5.svg'
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Oscillators = ({ focusedButton }) => {

    const [showTooltip, setShowTooltip] = useState(false);
    const [viewDetails, setViewDetails] = useState(false);

    const data = [
        {
            name: 'RSI (14)',
            symbol: 'N',
            minData5: 40.38,
            minData10: 46.95,
            minData15: 51.51,
            minData30: 55.85,
            hourData1: 58.31,
            dayData1: 51.48
        },
        {
            name: 'Stoch.%K (14, 3, 3)',
            symbol: 'N',
            minData5: 14.54,
            minData10: 14.54,
            minData15: 16.92,
            minData30: 66.41,
            hourData1: 66.41,
            dayData1: 47.35
        },
        {
            name: 'CCI (20)',
            symbol: 'N',
            minData5: -97.47,
            minData10: -79.31,
            minData15: -32.52,
            minData30: 51.64,
            hourData1: 76.55,
            dayData1: -43.90
        },
        {
            name: 'ADX (14)',
            symbol: 'N',
            minData5: 26.67,
            minData10: 18.59,
            minData15: 13.57,
            minData30: 12.79,
            hourData1: 16.02,
            dayData1: 16.19,
        },
        {
            name: 'Awesome Osc.',
            symbol: 'S',
            minData5: -18.79,
            minData10: 25.60,
            minData15: 67.30,
            minData30: 105.57,
            hourData1: 133.74,
            dayData1: -96.92,
        },
        {
            name: 'Momentum (10)',
            symbol: 'B',
            minData5: -396.80,
            minData10: 77.20,
            minData15: 44.35,
            minData30: -15.70,
            hourData1: -13.35,
            dayData1: -52.20,
        },
        {
            name: 'Macd (12, 26, 9)',
            symbol: 'S',
            minData5: 14.42,
            minData10: 35.51,
            minData15: 39.81,
            minData30: 24.23,
            hourData1: 11.71,
            dayData1: -1.74,
        },
        {
            name: 'Stoch. RSI Fast (3, 3, 14, 14)',
            symbol: 'N',
            minData5: 8.39,
            minData10: 0.97,
            minData15: 12.81,
            minData30: 46.62,
            hourData1: 60.48,
            dayData1: 10.72,
        },
        {
            name: 'Williams %Range (14)',
            symbol: 'N',
            minData5: -85.46,
            minData10: -85.46,
            minData15: -83.08,
            minData30: -33.59,
            hourData1: -33.59,
            dayData1: -52.65,
        },
        {
            name: 'Ultimate Osc. (7, 14, 28)',
            symbol: 'N',
            minData5: 40.59,
            minData10: 39.97,
            minData15: 45.33,
            minData30: 51.01,
            hourData1: 59.80,
            dayData1: 55.75,
        },
    ]

    const displayedData = viewDetails ? data : data.slice(0, 2);

    return (
        <div className='bg-white p-6 rounded-md'>
            <div className="flex justify-between items-center relative">
                <h2 className='text-sm font-semibold'>Moving averages</h2>
                <img src={info} alt="info" className='w-5 h-5' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} />
                {showTooltip && <span className="absolute bg-slate-200 right-6 py-1 px-4 rounded-md text-xs w-56 z-10">They form a majority of the leading technical indicators and they oscillate between a local minimum & maximum. The interpretation varies based on the position of the oscillator on the chart.</span>}
            </div>
            <div className='relative w-80 mx-auto'>
                <img src={graphsImg} alt="graphsImg" className='my-6' />
                <img src={pointerImg} alt="pointerImg" className={`w-4 h-4 absolute bottom-7 ${focusedButton === '5 Minutes' ? 'left-36' : focusedButton === '10 Minutes' ? 'left-40' : focusedButton === '15 Minutes' ? 'left-52' : focusedButton === '30 Minutes' ? 'left-48' : focusedButton === '1 Hour' ? 'left-60' : 'left-72'}`} />
            </div>
            <div className='flex justify-between w-80 mx-auto my-4'>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 4 : focusedButton === '10 Minutes' ? 3 : focusedButton === '15 Minutes' ? 2 : focusedButton === '30 Minutes' ? 0 : focusedButton === '1 Hour' ? 0 : 1
                    }</p>
                    <button className='text-[#ff667d] bg-[#fce7ec] text-xs rounded-md py-1 px-4'>Bearish</button>
                </div>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 6 : focusedButton === '10 Minutes' ? 7 : focusedButton === '15 Minutes' ? 7 : focusedButton === '30 Minutes' ? 10 : focusedButton === '1 Hour' ? 8 : 9
                    }</p>
                    <button className='text-[#7b828b] bg-[#ebeff5] text-xs rounded-md py-1 px-4'>Neutral</button>
                </div>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 0 : focusedButton === '10 Minutes' ? 0 : focusedButton === '15 Minutes' ? 1 : focusedButton === '30 Minutes' ? 0 : focusedButton === '1 Hour' ? 2 : 0
                    }</p>
                    <button className='text-[#034de6] bg-[#e3ecff] text-xs rounded-md py-1 px-4'>Bullish</button>
                </div>
            </div>
            <div className='w-80 mx-auto my-8 relative'>
                {
                    displayedData.map((value, index) => <div key={index} className='flex justify-between items-center text-xs mb-3'>
                        <div className='flex gap-3 items-center'>
                            <button className={`p-1 bg-gray-500 rounded-md ${value.symbol === 'N' ? 'text-[#000] bg-[#ececec]' : value.symbol === 'S' ? 'text-[#eb1d54] bg-[#fddfe9]' : 'text-[#387ed1] bg-[#eeeeff]'}`}>{value.symbol}</button>
                            <p>{value.name}</p>
                        </div>
                        <p>{
                        focusedButton === '5 Minutes' ? value?.minData5 : focusedButton === '10 Minutes' ? value?.minData10 : focusedButton === '15 Minutes' ? value?.minData15 : focusedButton === '30 Minutes' ? value?.minData30 : focusedButton === '1 Hour' ? value?.hourData1 : value?.dayData1
                    }</p>
                    </div>)
                }
                <button onClick={() => setViewDetails(!viewDetails)} className='text-sm text-[#9babc6] font-semibold hover:text-[#387ed1] flex gap-1 items-center absolute -bottom-10 -right-6'>{viewDetails ? 'View Less' : 'View Details'} {viewDetails ? <FaAngleUp className='w-5 h-5'/> : <FaAngleDown className='w-5 h-5'/>} </button>
            </div>
        </div>
    );
};

export default Oscillators;