import React from "react";
import App from './App';
import Booting from './loading-screen/Booting';
import ShutDown from "./shut-down/ShutDown";
import useSound from 'use-sound';
import shutSound from './windows_xp_shutdown.mp3';
import startSound from './windows-xp-startup-sound.mp3';
import clickSound from './mouse_click.mp3';

export default function ProIndex () {

    const [boot, setBoot] = React.useState(true);
    const [shutDown, setShutDown] = React.useState(false);

    const [playClose] = useSound(shutSound, { volume: 0.25 });
    const [playStart] = useSound(startSound, { volume: 0.25 });
    const [playMouseClick] = useSound(clickSound, { volume: 0.25 });

    const shutDownPortfolio = () => {
        playClose();
        setShutDown(true);
    }

    function getRandom(min, max) {
        const floatRandom = Math.random();
        const difference = max - min;
        const random = Math.round(difference * floatRandom);
        const randomWithinRange = random + min;      
        return randomWithinRange;
      }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const restartPortfolio = async () => {
        setShutDown(prev => false);
        playStart();
        setBoot(prev => true);
        await delay(getRandom(2500, 5000));
        setBoot(prev => false);
    }

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setBoot(prev => false);
        }, getRandom(6000, 8000)); 
        return () => clearTimeout(timeout); 
    })

    React.useEffect(() => {
        const handleMouseClick = () => {
          playMouseClick();
        };
        document.addEventListener('click', handleMouseClick);
        return () => {
          document.removeEventListener('click', handleMouseClick);
        };
    }, [playMouseClick]);

    return (
        <div>
            {boot && !shutDown && <Booting />}
            {!shutDown && !boot && <App shutDown={shutDownPortfolio} />}
            {shutDown && <ShutDown  restart={restartPortfolio} />}
        </div>
    )
}