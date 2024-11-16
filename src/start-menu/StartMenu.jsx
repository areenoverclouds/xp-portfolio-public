import React from 'react';
import Modal from 'react-modal';
import '../index.css';
import userImage from './mypic.png'; /* removed here */
import turnOffImage from './241.ico';
import infoImage from './information.png';

export default function StartMenu (props) {

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.trigger}
                className="start-modal"
                overlayClassName="start-overlay"
            >
                <div style={{ display: 'flex', flexDirection: 'column', zIndex: 'inherit', position: 'fixed' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '7px' }}>
                        <div style={{ border: '1px solid white', borderRadius: '3px', height: '40px', width: '40px' }}> <img src={userImage} alt="" height="40px" width="40px"/></div>
                        <div style={{ marginLeft: '10px' }}> <p style={{ color: 'white', fontFamily: 'Helvetica' }}> Administrator Areen </p> </div>
                    </div>

                    <button id={'information'} style={{ marginLeft: '7px', backgroundColor: '#D3E5FA', height: '50px', width: '283px', display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={props.info}>
                        <div style={{ margin: '5px' }}> <img id={'information'} src={infoImage} alt="" height="30px" width="30px"/> </div>
                        <div id={'information'} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '7px' }}> 
                            <div id={'information'}> What is this even? </div>
                            <div style={{ color: '#706D60', fontFamily: 'Helvetica', fontSize: '12px' }} id={'information'}> Information & Where to Start </div>
                        </div>
                    </button>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px', marginRight: '10px' }}>
                        <button style={{ backgroundColor: 'transparent', border: 'none', display: 'flex', alignItems: 'center'}} onClick={props.shutDown}> 
                            <img src={turnOffImage} alt="" height="25px" width="25px"/>
                            <div style={{ color: 'white', fontFamily: 'Helvetica', fontSize: '14px', marginLeft: '5px' }}> Exit Portfolio </div> 
                        </button> 
                    </div>

                </div>
            </Modal>

        </div>
    )
}