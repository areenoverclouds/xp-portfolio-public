import React from 'react';
import mylogo from '../logo2.webp'; /* designed in canva */
import BlankScreen from './BlankScreen';

export default function ShutDown (props) {

    const [blank, setBlank] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
          setBlank(true);
        }, 7000); 
        return () => clearTimeout(timeout); 
    }, []);

    return (
        <div>
            {blank && <BlankScreen restart={props.restart} />}
            {!blank && 
                <div className="info-screen">
                    <div style={{ position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', height: '80vh', width:'100vw', background: 'radial-gradient(92.05% 35.16% at 9.49% 16.3%, #8DA2CF 0%, #5375D7 100%' }}>
                        <div class="logo" style={{ marginLeft: '40%', paddingTop: '10%' }}>
                            <div className="logo-image"> <img src={mylogo} height="100px" width="100px" alt="" /> </div>
                            <p className="off-text">Areen's<span>Portfolio</span></p>
                            <p style={{ color: 'white', fontSize: '30px', marginLeft: '-40px', marginTop: '20px' }}> Shutting Down... </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}