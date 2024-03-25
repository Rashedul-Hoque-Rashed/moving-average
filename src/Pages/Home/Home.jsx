import { useState } from 'react';
import Summary from '../../Components/Summary/Summary';
import Support from '../../Components/Support/Support';


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
        <div className='max-w-7xl mx-auto'>
            <div className="flex justify-center bg-white w-fit mx-auto rounded-lg">
                {times.map((time, index) => (
                    <button
                        key={index}
                        autoFocus={time === '5 Minutes'}
                        className={`text-xs font-semibold py-2 px-3 md:px-6 rounded-lg outline-none ${focusedButton === time ? 'text-white bg-[#387ED1]' : 'text-[#9babc6]'}`}
                        onFocus={() => handleFocus(time)}
                    >
                        {focusedButton === time ? time : formatButtonText(time).toLowerCase()}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8'>
            <Summary focusedButton={focusedButton} />
            <Support focusedButton={focusedButton}/>
            </div>
        </div>
    );
};

export default Home;
