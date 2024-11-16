import React from 'react';

import notepadImage from './notepad.png';
import closeButton from '../modal-tab/header/Vector.svg';
import maxButton from '../modal-tab/header/maxi.svg';
import minButton from '../modal-tab/header/mini.png';
import tabButton from '../modal-tab/header/tab.svg';

import ReactModal from 'react-modal-resizable-draggable';
import '../index.css';
import Warning from '../warning-modal/Warning';

import crossIcon from './cross.png';
import warnImage from './warning.png';
import tickIcon from './425.ico';

export default function Notepad (props) {

    const [inputText, setInputText] = React.useState("");
    const [verifyNew, setVerifyNew] = React.useState(false);
    const [verifyClose, setVerifyClose] = React.useState(false);
    const [noText, setNoText] = React.useState(false);
    const [errorModal, setErrorModal] = React.useState(false);
    const [successModal, setSuccessModal] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const handleOnTextChange = (e) => {
        setSubmitted(false);
        setInputText(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(inputText === "") {
            setNoText(true);
        } else {
            setLoading(true);
            const response = await fetch('', { /* BE service link */
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({inputText}),
            });
            if (!response.ok) {
                setErrorModal(true);
            } else {
                setSuccessModal(true);
                setSubmitted(true);
            }
        }
        setLoading(false);
    };

    const clearScreen = () => {
        setInputText("");
        closeDialog();
    }

    const closeDialog = () => {
        setVerifyNew(prev => false);
        setVerifyClose(prev => false);
        setErrorModal(prev => false);
        setNoText(prev => false);
        setSuccessModal(prev => false);
    }

    const [isDropdownVisible, setDropdownVisible] = React.useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const [max, setMax] = React.useState(false);

    function triggerMaxMin(){
        if(max) {
            setMax(false);
        } else {
            setMax(true);
        }
    }

    const handleTabMinimize = (e) => {
        localStorage.setItem('notepadMessage', inputText);
        props.triggerTabMinimize(e);
    }

    const handleTabClose = (e) => {
        if(inputText === "" || submitted) {
            props.trigger(e);
        } else {
            setVerifyClose(true);
        }
    }

    const closeTab = (e) => {
        closeDialog();
        localStorage.setItem('notepadMessage', '');
        e.target.id = 'message';
        props.trigger(e);
    }

    React.useEffect(() => {
        const savedMessage = localStorage.getItem('notepadMessage');
        if (savedMessage) {
            setInputText(savedMessage);
        }
    }, []);

    return (
        <div>
            <ReactModal
                isOpen={props.isOpen}
                disableResize={true}
            >
                <div className={`${max ? "modal-container-max" : "modal-container"} ${loading ? 'loading-cursor' : ''}`}> 

                    {/* Header */}
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '3px' }}>
                            <img src={notepadImage} height="20px" width="20px" style={{ paddingLeft: '5px'}} alt="" />
                            <div style={{ paddingLeft: '8px', fontFamily: 'Helvetica', fontSize: '13px' }}> Untitled - Notepad </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button id={'message'} className="topbar-minimize-button" onClick={handleTabMinimize}>
                                    <img id={'message'} src={tabButton} style={{ height: '10px', width: '10px' }} alt="" />
                                </button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button className="topbar-maximize-button" onClick={triggerMaxMin}>
                                    <img src={max ? minButton : maxButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button id={'message'} className="topbar-close-button" onClick={handleTabClose}>
                                    <img id={'message'} src={closeButton} style={{ height: '14px', width: '14px'}} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Menu */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <button style={{ marginTop: '7px', marginLeft: '1px', fontSize: '12px', border: 'none', background: 'white', color: 'black' }}> <span style={{ textDecoration: 'underline' }}>F</span>ile </button>
                            {isDropdownVisible && 
                                <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', zIndex: '999', backgroundColor: '#F1EEE1', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    <button className="highlight-button" onClick={() => {setVerifyNew(true)}} style={{}}> New </button> 
                                    <button className="highlight-button" onClick={handleSubmit} type="submit"> Save </button> 
                                </div>
                            }
                        </div>
                        <div style={{ backgroundColor: 'pink'}}></div>
                    </div>

                    {/* Line */}
                    <div style={{ marginTop: '3px', width: '100%', height: '1px', borderBottom: '0.5px solid #BDBCB9' }}>
                    </div>

                    {/* Content */}
                    <div>
                        <form onSubmit={handleSubmit}>
                            <textarea 
                                type="text"
                                value={inputText}
                                onChange={handleOnTextChange}
                                placeholder="Drop a message for me here. Click on File -> Save to send your message!"
                                style={{ fontFamily: 'Inconsolata', border: 'none', width: '96%', outline: 'none', resize: 'none', margin: '5px', fontSize: '14px' }}
                                rows="30"
                                disabled={loading}
                                className={loading ? 'loading-cursor' : ''}
                            />
                        </form>
                    </div>
                </div>
            </ReactModal> 

            {/* Warnings */} 
            <Warning isOpen={noText} img={warnImage} heading="Warning" option1="Ok" option2="" close1={closeDialog} close2={closeDialog} text="Please enter some text before sending it."/>
            <Warning isOpen={verifyNew} img={warnImage} heading="Warning" option1="Yes" option2="No" close1={clearScreen} close2={closeDialog} text="Are you sure you want to discard your changes?"/>
            <Warning isOpen={verifyClose} img={warnImage} heading="Warning" option1="Close" option2="Cancel" close1={closeTab} close2={closeDialog} text="Are you sure you want to close? Your changes will be discarded."/>
            <Warning isOpen={errorModal} img={crossIcon} heading="Error" option1="Ok" option2="" close1={closeDialog} close2={closeDialog} text="There was an error sending the message. Please try again."/>     
            <Warning isOpen={successModal} img={tickIcon} heading="Success" option1="Ok" option2=""  close1={closeDialog} close2={closeDialog} text="Message sent successfully!"/>         
        </div>
    )
}
