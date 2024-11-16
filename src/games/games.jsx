import React from 'react';

import gamesImage from './games.png';
import catImage from './cat.jpg';
import catCodeImage from './catcode.png';
import ballImage from './ball.png';
import ballCodeImage from './ballcode.png';
import hangmanImage from './hangman.PNG';
import hangmanCodeImage from './hangcode.png';
import ARPenguins from './ARPenguins.PNG';
import coderlyimage from './coderly.PNG';
import snakeImage from './snake-game.PNG';
import sandImage from './sandpic.PNG';

import '../index.css';
import ReactModal from 'react-modal-resizable-draggable';
import DetailsAccordion from '../modal-tab/details-accordion/DetailsAccordion';
import TopBar from '../modal-tab/header/TopBar';

export default function Games (props) {

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
                <div className={max ? "modal-container-max" : "modal-container"}> 
                    <TopBar heading="Games" idText='games' img={gamesImage} trigger={props.trigger} isMax={max} maximize={maximize} minimize={minimize} triggerTabMinimize={props.triggerTabMinimize} />
                    <div className="side-bar-and-content"> 
                        <div className={max ? "side-bar-max" : "side-bar"}>
                            <DetailsAccordion header="Details" text="These are the games I've built in React or Unity 3D. Double click to  open and play." />                                
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white'}}> 

                            <div style={{ fontFamily: 'Helvetica', marginLeft: '7px', marginTop: '7px', fontSize: '12px', fontWeight: '600' }}>
                                Executable files 
                            </div> 
                            <div style={{ marginTop: '3px', height: '1px', width: '300px', background: 'linear-gradient(90deg, #579CDB 0.01%, rgba(43, 140, 229, 0.00) 100.27%)' }}>
                            </div>
                            <div className="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>

                                {/* Cat Quiz*/}
                                <div style={{marginTop: '7px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://which-cat-am-i.netlify.app/', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                    <img src={catImage} height="60px" width="60px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', color: 'black' }}>Cat Quiz</div>
                                </button>
                                </div>

                                {/* Roll a Ball*/}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://areenoverclouds.github.io/Roll-a-Ball/', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px', touchAction: 'none' }}>
                                    <img src={ballImage} height="50px" width="58px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Roll Ball</div>
                                </button>
                                </div>

                                {/* Hang Man*/}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://oh-wow-hangman.netlify.app/', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={hangmanImage} height="50px" width="58px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Hangman</div>
                                </button>
                                </div>

                                {/* Snake Game*/}
                                <div style={{marginTop: '10px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://nokia-snake-game.vercel.app/', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={snakeImage} height="50px" width="58px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Nokia Snake</div>
                                </button>
                                </div>

                            </div>

                            <div style={{ fontFamily: 'Helvetica', marginLeft: '7px', marginTop: '15px', fontSize: '12px', fontWeight: '600' }}>
                                Source Code 
                            </div> 
                            <div style={{ marginTop: '3px', height: '1px', width: '300px', background: 'linear-gradient(90deg, #579CDB 0.01%, rgba(43, 140, 229, 0.00) 100.27%)' }}>
                            </div>

                            <div className="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>

                                {/* Cat Quiz*/}
                                <div style={{marginTop: '7px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://github.com/areenoverclouds/cat-quiz/', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={catCodeImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', color: 'black' }}>Cat Quiz</div>
                                </button>
                                </div>

                                {/* Roll a Ball*/}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://github.com/areenoverclouds/Roll-a-Ball/', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={ballCodeImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Roll Ball</div>
                                </button>
                                </div>

                                {/* Hang Man*/}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://github.com/areenoverclouds/hangman-game/', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={hangmanCodeImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Hangman</div>
                                </button>
                                </div>
                            </div>

                            <div style={{ fontFamily: 'Helvetica', marginLeft: '7px', marginTop: '15px', fontSize: '12px', fontWeight: '600' }}>
                                Other Projects
                            </div> 
                            <div style={{ marginTop: '3px', height: '1px', width: '300px', background: 'linear-gradient(90deg, #579CDB 0.01%, rgba(43, 140, 229, 0.00) 100.27%)' }}>
                            </div>

                            <div className="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>

                                {/* Coderly */}
                                <div style={{marginTop: '7px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://github.com/areenoverclouds/coderly-extension', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={coderlyimage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', color: 'black' }}>Coderly Extension</div>
                                </button>
                                </div>

                                {/* Vision */}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://drive.google.com/file/d/114QjzKWwW8sKfIEF_d6cN8PgIxH3EpCE/view', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={ARPenguins} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Vision: AR World</div>
                                </button>
                                </div>

                                {/* Sand Simulator */}
                                <div style={{marginTop: '7px', paddingTop: '5px', marginLeft: '7px' }}>
                                <button onDoubleClick={() => window.open('https://sand-simulation.vercel.app', '_blank')} style={{ backgroundColor: 'white', border: 'none', height: '80px', width: '80px' }}>
                                    <img src={sandImage} height="50px" width="50px" alt="" />
                                    <div style={{ fontFamily: 'Helvetica', paddingTop: '3px', color: 'black' }}>Sand Simulator</div>
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