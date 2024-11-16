import React from 'react';
import skillsImage from './imgpic.png';
import contentImage from  './Tailwind.png';
import '../index.css';
import ReactModal from 'react-modal-resizable-draggable';

import closeButton from '../modal-tab/header/Vector.svg';
import maxButton from '../modal-tab/header/maxi.svg';
import minButton from '../modal-tab/header/mini.png';
import tabButton from '../modal-tab/header/tab.svg';

export default function Skills (props) {

    const [max, setMax] = React.useState(false);
    function triggerMaxMin(){
        if(max) {
            setMax(false);
        } else {
            setMax(true);
        }
    }

    return (
        <div>
            <ReactModal
                isOpen={props.isOpen}
                disableResize={true}
            >
                <div  className={max ? "modal-container-max" : "modal-container"} >

                    {/* Top Bar */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', background: 'linear-gradient(180deg, #0657BD 0%, #0062F0 100%)' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ marginLeft: '5px', marginTop: '5px'}}> <img src={skillsImage} alt="" height="20px" width="20px"/> </div>
                            <div style={{ paddingLeft: '8px', color: 'white', fontFamily: 'Helvetica', fontSize: '14px', marginTop: '3px' }}> Skills - Picture Viewer </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button id={'skills'} className="topbar-minimize-button"  onClick={props.triggerTabMinimize}>
                                    <img id={'skills'} src={tabButton} style={{ height: '10px', width: '10px' }} alt="" />
                                </button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button className="topbar-maximize-button" onClick={triggerMaxMin}>
                                    <img src={max ? minButton : maxButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button id={'skills'} className="topbar-close-button" onClick={props.trigger}>
                                    <img id={'skills'} src={closeButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="skills-image-area" >
                        <img src={contentImage} alt="" style={{ height: '100%', width: 'auto' }}/>
                    </div>
                    
                </div>
            </ReactModal>
        </div>
    )
}