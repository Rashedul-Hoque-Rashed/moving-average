import info from '../../assets/icon.gif'
import graphsImg from '../../assets/bar.8505e185.svg'
import pointerImg from '../../assets/pointer.c2b2a6c5.svg'

// eslint-disable-next-line react/prop-types
const Summary = ({focusedButton}) => {
    return (
        <div className=''>
            <div className="flex justify-between items-center">
                <h2 className='text-sm font-semibold'>Summary</h2>
                <img src={info} alt="info" className='w-5 h-5'/>
            </div>
            <div className='relative'>
                <img src={graphsImg} alt="graphsImg" className='my-6'/>
                <img src={pointerImg} alt="pointerImg" className={`w-4 h-4 absolute bottom-9 ${focusedButton === '5 Minutes' ? 'left-40' : focusedButton === '10 Minutes' ? 'left-48' : focusedButton === '15 Minutes' ? 'left-52' : focusedButton === '30 Minutes' ? 'left-44' : focusedButton === '1 Hour' ? 'left-56' : 'left-72'}`}/>
            </div>
        </div>
    );
};

export default Summary;