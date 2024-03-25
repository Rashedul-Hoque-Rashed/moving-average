import info from '../../assets/icon.gif'
import graphsImg from '../../assets/bar.8505e185.svg'
import pointerImg from '../../assets/pointer.c2b2a6c5.svg'
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
const Summary = ({ focusedButton }) => {

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className='bg-white p-6 rounded-md'>
            <div className="flex justify-between items-center relative">
                <h2 className='text-sm font-semibold'>Summary</h2>
                <img src={info} alt="info" className='w-5 h-5' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} />
                {showTooltip && <span className="absolute bg-slate-200 right-6 py-1 px-4 rounded-md text-xs w-56 z-10">Here is a Snapshot of the most popular technical indicators. We take these into consideration, analyze them, run some internal calculations and help you understand the overall market conditions.</span>}
            </div>
            <div className='relative w-80 mx-auto'>
                <img src={graphsImg} alt="graphsImg" className='my-6' />
                <img src={pointerImg} alt="pointerImg" className={`w-4 h-4 absolute bottom-7 ${focusedButton === '5 Minutes' ? 'left-40' : focusedButton === '10 Minutes' ? 'left-48' : focusedButton === '15 Minutes' ? 'left-52' : focusedButton === '30 Minutes' ? 'left-44' : focusedButton === '1 Hour' ? 'left-56' : 'left-72'}`} />
            </div>
            <div className='flex justify-between w-80 mx-auto my-4'>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 14 : focusedButton === '10 Minutes' ? 11 : focusedButton === '15 Minutes' ? 9 : focusedButton === '30 Minutes' ? 7 : focusedButton === '1 Hour' ? 4 : 3
                    }</p>
                    <button className='text-[#eb1d54] bg-[#ffe2eb] text-xs rounded-md py-1 px-4'>Bearish</button>
                </div>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 8 : focusedButton === '10 Minutes' ? 9 : focusedButton === '15 Minutes' ? 9 : focusedButton === '30 Minutes' ? 12 : focusedButton === '1 Hour' ? 10 : 10
                    }</p>
                    <button className='text-[#7b828b] bg-[#ebeff5] text-xs rounded-md py-1 px-4'>Neutral</button>
                </div>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 5 : focusedButton === '10 Minutes' ? 7 : focusedButton === '15 Minutes' ? 9 : focusedButton === '30 Minutes' ? 8 : focusedButton === '1 Hour' ? 13 : 14
                    }</p>
                    <button className='text-[#3cbb00] bg-[#e2ffd5] text-xs rounded-md py-1 px-4'>Bullish</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-x-10 gap-y-3 justify-between w-80 mx-auto my-4'>
                <div className='text-start'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 22108.15 : focusedButton === '10 Minutes' ? 22098.53 : focusedButton === '15 Minutes' ? 22086.10 : focusedButton === '30 Minutes' ? 22053.62 : focusedButton === '1 Hour' ? 22017.77 : 22076.49
                    }</p>
                    <p className='text-xs text-[#9babc6]'>EMA (20)</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 22115.62 : focusedButton === '10 Minutes' ? 22104.85 : focusedButton === '15 Minutes' ? 22090.76 : focusedButton === '30 Minutes' ? 22051.08 : focusedButton === '1 Hour' ? 21987.83 : 22159.61
                    }</p>
                    <p className='text-xs text-[#9babc6]'>SMA (20)</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 40.38 : focusedButton === '10 Minutes' ? 46.95 : focusedButton === '15 Minutes' ? 51.51 : focusedButton === '30 Minutes' ? 55.85 : focusedButton === '1 Hour' ? 58.31 : 51.48
                    }</p>
                    <p className='text-xs text-[#9babc6]'>RSI (14)</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? -18.79 : focusedButton === '10 Minutes' ? 25.60 : focusedButton === '15 Minutes' ? 67.30 : focusedButton === '30 Minutes' ? 105.57 : focusedButton === '1 Hour' ? 133.74 : -96.92
                    }</p>
                    <p className='text-xs text-[#9babc6]'>Awesome Osc.</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? -1.74 : focusedButton === '10 Minutes' ? 11.71 : focusedButton === '15 Minutes' ? 24.23 : focusedButton === '30 Minutes' ? 39.81 : focusedButton === '1 Hour' ? 35.51 : 14.42
                    }</p>
                    <p className='text-xs text-[#9babc6]'>Macd (12, 26, 9)</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? -97.47 : focusedButton === '10 Minutes' ? -79.31 : focusedButton === '15 Minutes' ? -32.52 : focusedButton === '30 Minutes' ? 51.64 : focusedButton === '1 Hour' ? 76.55 : -43.90
                    }</p>
                    <p className='text-xs text-[#9babc6]'>CCI (20)</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;