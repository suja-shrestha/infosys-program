import './Background.css';
import video2 from '../../assets/video2.mp4';
import FutureTechnology from '../../assets/FutureTechnology.png';
import hack from '../../assets/hack.png';
import hacking from '../../assets/hacking.png';

const Background = ({ playStatus, heroCount }) => {
    return (
        <>
            {playStatus ? (
                <video className='background fade-in' autoPlay loop>
                    <source src={video2} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            ) : (
               
                heroCount === 0 ? (
                    <img src={FutureTechnology} className='background fade-in' alt='Future Technology' />
                ) : heroCount === 1 ? (
                    <img src={hack} className='background fade-in' alt='Hack' />
                ) : heroCount === 2 ? (
                    <img src={hacking} className='background fade-in' alt='Hacking' />
                ) : null
            )}
        </>
    );
};

export default Background;
