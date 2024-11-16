import React from 'react';
import networkImage from './earth.png';
import '../index.css';
import ReactModal from 'react-modal-resizable-draggable';
import DetailsAccordion from '../modal-tab/details-accordion/DetailsAccordion';
import TopBar from '../modal-tab/header/TopBar';

import linkedinImage from './linkedin.png';
import githubImage from './github.png';
import dribbleImage from './dribbble.png';
//import twitterImage from './twitter.png';
import leetcodeImage from './leetcode.png';
//import instagramImage from './instagram.png';
import gfgImage from './gfg.png';

export default function Network (props) {

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
                    <TopBar heading="Social" idText={'network'} img={networkImage} trigger={props.trigger} isMax={max} maximize={maximize} minimize={minimize} triggerTabMinimize={props.triggerTabMinimize} />
                    <div className="side-bar-and-content"> 
                        <div className={max ? "side-bar-max" : "side-bar"}>
                            <DetailsAccordion header="Details" text="My social media accounts. Double click on an icon to visit my profile. Let's connect!" />                                
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}> 

                            <div style={{ fontFamily: 'Helvetica', marginLeft: '7px', marginTop: '7px', fontSize: '12px', fontWeight: '600' }}>
                                Connect
                            </div> 
                            <div style={{ marginTop: '3px', height: '1px', width: '300px', background: 'linear-gradient(90deg, #579CDB 0.01%, rgba(43, 140, 229, 0.00) 100.27%)' }}>
                            </div>
                            <div className="modal-content" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                                {/* Linkedin */}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                    <button onDoubleClick={() => window.open('https://linkedin.com/in/areen-kaur', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                        <img src={linkedinImage} height="48px" width="48px" alt="" />
                                        <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}> LinkedIn </div>
                                    </button>
                                </div>

                                {/* Github */}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                    <button onDoubleClick={() => window.open('https://github.com/areenoverclouds', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                        <img src={githubImage} height="48px" width="48px" alt="" />
                                        <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Github</div>
                                    </button>
                                </div>

                                {/* Dribbble */}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                    <button onDoubleClick={() => window.open('https://dribbble.com/areeen', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                        <img src={dribbleImage} height="50px" width="50px" alt="" />
                                        <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Dribbble</div>
                                    </button>
                                </div>

                            </div>

                                <div style={{ fontFamily: 'Helvetica', marginLeft: '7px', marginTop: '15px', fontSize: '12px', fontWeight: '600' }}>
                                    Coding Profiles 
                                </div> 
                                <div style={{ marginTop: '3px', height: '1px', width: '300px', background: 'linear-gradient(90deg, #579CDB 0.01%, rgba(43, 140, 229, 0.00) 100.27%)' }}>
                                </div>

                                <div className="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>

                                    {/* Leetcode */}
                                    <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                        <button onDoubleClick={() => window.open('https://leetcode.com/cloud-nine', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                            <img src={leetcodeImage} height="42px" width="42px" alt="" />
                                            <div style={{ fontFamily: 'Helvetica', paddingTop: '8px', color: 'black' }}>Leetcode</div>
                                        </button>
                                    </div>

                                    {/* GFG */}
                                    <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                        <button onDoubleClick={() => window.open('https://auth.geeksforgeeks.org/user/kaurareen', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                            <img src={gfgImage} height="42px" width="42px" alt="" />
                                            <div style={{ fontFamily: 'Helvetica', paddingTop: '8px', color: 'black' }}>GFG</div>
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}