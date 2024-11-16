import React from 'react';
import computerImage from './mycomputer.png';
import '../index.css';
import ReactModal from 'react-modal-resizable-draggable';
import DetailsAccordion from '../modal-tab/details-accordion/DetailsAccordion';
import TopBar from '../modal-tab/header/TopBar';

import resumeImage from './994.ico';
import pptImage from './powerpoint.png';

export default function MySelf (props) {

    const [max, setMax] = React.useState(false);
    const maximize = () => {
        setMax(true);
    }
    const minimize = () => {
        setMax(false);
    }

    return (
        <div>
            <ReactModal
                isOpen={props.isOpen}
                disableResize={true}
            >
                <div className={max ? "modal-container-max" : "modal-container"} > 
                    <TopBar heading="My Self" idText='myself' img={computerImage} trigger={props.trigger} isMax={max} maximize={maximize} minimize={minimize} triggerTabMinimize={props.triggerTabMinimize}/>
                    <div className="side-bar-and-content"> 
                        <div className={max ? "side-bar-max" : "side-bar"}>
                            <DetailsAccordion header="Details" text="Hi! I'm Areen, a BTech graduate. Check out my work history or view my resume." />                                
                        </div>
                        <div className="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>
                            
                            {/* Education */}

                            {/* Work history */}
                            <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }} id={'ppt'} >
                                <button id={'ppt'} onDoubleClick={props.triggerPPTOpen} onClick={props.triggerPPTOpen} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                    <img id={'ppt'} src={pptImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Work Exp</div>
                                </button>
                            </div>

                            {/* Resume */}
                            <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://drive.google.com/file/d/1SFqrON_V-nNvMa-2T0gg5FNHE0T0zCS3/view?usp=sharing', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                    <img src={resumeImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Resume</div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}
