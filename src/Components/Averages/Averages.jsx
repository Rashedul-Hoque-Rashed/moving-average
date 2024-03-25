import { useState } from 'react';
import graphsImg from '../../assets/bar_ma.1ee3ecd8.svg'
import pointerImg from '../../assets/pointer.c2b2a6c5.svg'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Averages = ({focusedButton}) => {

    const [viewDetails, setViewDetails] = useState(false);

    const data = [
        {
            name: 'RSI (14)',
            symbol: 'N',
            minData5: 38.38,
            minData10: 36.95,
            minData15: 53.51,
            minData30: 43.85,
            hourData1: 48.31,
            dayData1: 55.48
        },
        {
            name: 'Stoch.%K (14, 3, 3)',
            symbol: 'N',
            minData5: 12.54,
            minData10: 13.54,
            minData15: 15.92,
            minData30: 56.41,
            hourData1: 46.41,
            dayData1: 57.35
        },
        {
            name: 'CCI (20)',
            symbol: 'N',
            minData5: -87.47,
            minData10: -89.31,
            minData15: -24.52,
            minData30: 41.64,
            hourData1: 66.55,
            dayData1: -53.90
        },
        {
            name: 'ADX (14)',
            symbol: 'N',
            minData5: 28.67,
            minData10: 20.59,
            minData15: 17.57,
            minData30: 11.79,
            hourData1: 17.02,
            dayData1: 15.19,
        },
        {
            name: 'Awesome Osc.',
            symbol: 'S',
            minData5: -15.79,
            minData10: 27.60,
            minData15: 65.30,
            minData30: 110.57,
            hourData1: 145.74,
            dayData1: -97.92,
        },
        {
            name: 'Momentum (10)',
            symbol: 'B',
            minData5: -376.80,
            minData10: 88.20,
            minData15: 52.35,
            minData30: -22.70,
            hourData1: -15.35,
            dayData1: -49.20,
        },
        {
            name: 'Macd (12, 26, 9)',
            symbol: 'S',
            minData5: 16.42,
            minData10: 37.51,
            minData15: 42.81,
            minData30: 28.23,
            hourData1: 14.71,
            dayData1: -2.74,
        },
        {
            name: 'Stoch. RSI Fast (3, 3, 14, 14)',
            symbol: 'N',
            minData5: 9.39,
            minData10: 1.97,
            minData15: 17.81,
            minData30: 42.62,
            hourData1: 68.48,
            dayData1: 9.72,
        },
        {
            name: 'Williams %Range (14)',
            symbol: 'N',
            minData5: -87.46,
            minData10: -83.46,
            minData15: -84.08,
            minData30: -35.59,
            hourData1: -37.59,
            dayData1: -62.65,
        },
        {
            name: 'Ultimate Osc. (7, 14, 28)',
            symbol: 'N',
            minData5: 56.59,
            minData10: 42.97,
            minData15: 48.33,
            minData30: 53.01,
            hourData1: 58.80,
            dayData1: 61.75,
        },
    ]

    const displayedData = viewDetails ? data : data.slice(0, 2);

    return (
        <div className='bg-white p-6 rounded-md'>
            <div className="flex justify-between items-center relative">
                <h2 className='text-sm font-semibold'>Moving averages</h2>
            </div>
            <div className='relative w-80 mx-auto'>
                <img src={graphsImg} alt="graphsImg" className='my-6' />
                <img src={pointerImg} alt="pointerImg" className={`w-4 h-4 absolute bottom-7 ${focusedButton === '5 Minutes' ? 'left-32' : focusedButton === '10 Minutes' ? 'left-44' : focusedButton === '15 Minutes' ? 'left-40' : focusedButton === '30 Minutes' ? 'left-52' : focusedButton === '1 Hour' ? 'left-60' : 'left-64'}`} />
            </div>
            <div className='flex justify-between w-80 mx-auto my-4'>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 10 : focusedButton === '10 Minutes' ? 8 : focusedButton === '15 Minutes' ? 7 : focusedButton === '30 Minutes' ? 7 : focusedButton === '1 Hour' ? 4 : 2
                    }</p>
                    <button className='text-[#fe9801] bg-[#fff5e6] text-xs rounded-md py-1 px-4'>Bearish</button>
                </div>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 2 : focusedButton === '10 Minutes' ? 2 : focusedButton === '15 Minutes' ? 2 : focusedButton === '30 Minutes' ? 2 : focusedButton === '1 Hour' ? 2 : 1
                    }</p>
                    <button className='text-[#7b828b] bg-[#ebeff5] text-xs rounded-md py-1 px-4'>Neutral</button>
                </div>
                <div className='text-center'>
                    <p className='text-xs'>{
                        focusedButton === '5 Minutes' ? 5 : focusedButton === '10 Minutes' ? 7 : focusedButton === '15 Minutes' ? 8 : focusedButton === '30 Minutes' ? 8 : focusedButton === '1 Hour' ? 11 : 14
                    }</p>
                    <button className='text-[#018ee8] bg-[#e0f3ff] text-xs rounded-md py-1 px-4'>Bullish</button>
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

export default Averages;