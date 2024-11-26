import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import './App.css';

const App = () => {
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false); // Video does not plays by default on page load.

    useEffect(() => {
        const interval = setInterval(() => {
            if (playStatus) {
                return; // Don't change heroCount if video is playing
            }
            setHeroCount((count) => (count === 2 ? 0 : count + 1));
        }, 3000);
        
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [playStatus]);

    const heroData = [
        { text1: "", text2: "" }, // Text should be empty when video is playing
        { text1: "Indulge", text2: "Your passion" },
        { text1: "Give in to ", text2: "your passion" },
    ];

    return (
        <>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </>
    );
}

export default App;
