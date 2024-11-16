import React from 'react';
import infoImage from '../logo2.webp';
import '../index.css';
import tickImage from './subway_tick.png';

export default function Information (props) {

    return (
        <div className="info-screen">
            <div className="info-top" >
                <div> <img src={infoImage} height="50px" width="50px" alt="" /> </div>
                <div style={{ color: 'white', marginLeft: '10px', fontSize: '16px'}}> Areen's Portfolio </div>
            </div>
            <div className="text-screen">
                <div className="text-screen-container">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div className="text-screen-smile" style={{}}> 
                            :) 
                        </div>
                        <div style={{ marginLeft: '20px'}}>
                            <div className="text-screen-hi">
                                Hi, I'm Areen, a recent engineering graduate. 
                            </div>
                            <div className="text-screen-tagline" >
                                Building. Tinkering. Upskilling.
                            </div> 
                        </div>
                    </div>
                    <div className="text-screen-so">
                        So, what is this?
                    </div>
                    <div className="text-screen-ans1">
                        This is my Windows XP themed portfolio website. On the home screen, you can double click on various icons to know my skills, projects, connect with me, view my resume or send me a message!
                    </div>
                    <div className="text-screen-ans1" style={{ marginTop: '2%' }}>
                        {/* Cringe description but ok */}
                        This website is designed to be close to the OG Windows XP design to set you on a stroll to your childhood memories. Click on
                        <b> OK</b> to proceed back to the home screen.
                    </div>
                    <div className="text-screen-ans1" style={{ marginTop: '4%' }}>
                        Icon credits: <a href="https://icons8.com/">Icons 8</a>.
                    </div>
                </div>
            </div>
            <div className="tick-container">
                    <button id={'information'} onClick={props.trigger} style={{ backgroundColor: '#349735', borderRadius: '5px' }}> 
                        <img id={'information'} src={tickImage} alt="" height="30px" width="30px" /> 
                    </button> 
                    <div style={{ color: 'white', marginLeft: '0.5%', fontSize: '18px'}}>	 
                        <span style={{ textDecorationLine: 'underline'}}>O</span>K 
                    </div>
            </div>
        </div>
    )
}