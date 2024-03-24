import { useState } from 'react';

const Home = () => {
    const times = ['5 Minutes', '10 Minutes', '15 Minutes', '30 Minutes', '1 Hour', '1 Day'];
    const [focusedButton, setFocusedButton] = useState('5 Minutes');

    const formatButtonText = (time) => {
        if (time.includes('Minutes')) {
            return time.replace(' Minutes', 'min');
        } else if (time.includes('Hour')) {
            return 'hour';
        } else if (time.includes('Day')) {
            return 'day';
        }
        return time;
    };

    const handleFocus = (time) => {
        setFocusedButton(time);
    };

    return (
        <div>
            <div className="flex justify-center bg-white w-fit mx-auto rounded-lg">
                {times.map((time, index) => (
                    <button 
                        key={index} 
                        autoFocus={time === '5 Minutes'} 
                        className={`text-xs font-semibold py-2 px-6 rounded-lg outline-none ${focusedButton === time ? 'text-white bg-[#387ED1]' : 'text-[#9babc6]'}`}
                        onFocus={() => handleFocus(time)}
                    >
                        {focusedButton === time ? time : formatButtonText(time).toLowerCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Home;
