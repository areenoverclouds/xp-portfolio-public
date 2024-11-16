import React from 'react';
import Balloon from './Balloon';
import '../index.css';
import risk from './information.png';

export default function Time (props) {
    /* Taskbar time */
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return (
        <div className="footer__items right">
            <button style={{ backgroundColor: 'transparent', margin: 'none', border: 'none' }} onClick={props.info}>
                <img id={'information'} className="footer__icon" src={risk} alt="" />
            </button>
            <div style={{ position: 'relative', width: 0, height: 0, marginRight: '5px' }}>
                <Balloon />
            </div>
            <div> {hours}:{minutes} </div>
        </div>
    )
}