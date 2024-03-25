import info from '../../assets/icon.gif'
import graphsImg from '../../assets/bar_resistance.eb8d6baa.svg'
import pointerImg from '../../assets/pointer_resistance.645dfcd4.svg'
import { useState } from 'react';


const Support = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className='bg-white p-6 rounded-md'>
            <div className="flex justify-between items-center relative">
                <h2 className='text-sm font-semibold'>Support & Resistance</h2>
                <img src={info} alt="info" className='w-5 h-5' onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} />
                {showTooltip && <span className="absolute bg-slate-200 right-6 py-1 px-4 rounded-md text-xs w-56 z-10">Support: Support prevents the price from falling further. It is a price point on the chart where the trader expects maximum demand (in terms of buying) coming into the stock/index. Whenever the price falls to the support line, it is likely to bounce back. Resistance is something that stops the price from rising further. The resistance level is a price point on the chart where traders expect maximum supply (in terms of selling) for the stock/index. The resistance level is always above the current market price.</span>}
            </div>
            <div className='relative w-80 mx-auto'>
                <img src={graphsImg} alt="graphsImg" className='my-6' />
                <img src={pointerImg} alt="pointerImg" className={`w-4 h-4 absolute bottom-7 left-44`} />
            </div>
            {/* <div className='flex justify-between w-80 mx-auto my-4'>
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
            </div> */}
            <div className='grid grid-cols-3 gap-x-10 gap-y-3 justify-between w-80 mx-auto mt-20'>
                <div className='text-start'>
                    <p className='text-xs'>21576.17</p>
                    <p className='text-xs text-[#9babc6]'>S1</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>21169.53</p>
                    <p className='text-xs text-[#9babc6]'>S2</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>20402.23</p>
                    <p className='text-xs text-[#9babc6]'>S3</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>22343.47</p>
                    <p className='text-xs text-[#9babc6]'>R1</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>22704.13</p>
                    <p className='text-xs text-[#9babc6]'>R2</p>
                </div>
                <div className='text-start'>
                    <p className='text-xs'>23471.43</p>
                    <p className='text-xs text-[#9babc6]'>R3</p>
                </div>
            </div>
        </div>
    );
};

export default Support;