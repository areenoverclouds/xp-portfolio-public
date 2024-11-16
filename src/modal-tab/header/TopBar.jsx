import React from 'react';
import '../../index.css';
import closeButton from './Vector.svg';
import maxButton from './maxi.svg';
import minButton from './mini.png';
import tabButton from './tab.svg';
import searchButtonIcon from './search.png';
import backButtonDisabled from './backward-grey.png';
import forwardButtonDisabled from './forward-grey.png';

export default function TopBar(props) {

    function triggerMaxMin(){
        if(props.isMax) {
            props.minimize();
        } else {
            props.maximize();
        }
    }

    return (
        <>
            <div className={props.isMax ? "top-container-max" : "top-container"}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src={props.img} height="18px" width="18px" style={{ paddingLeft: '5px'}} alt="" />
                    <div style={{ paddingLeft: '8px', color: 'white', fontFamily: 'Helvetica', fontSize: '14px' }}> {props.heading} </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button id={props.idText} className="topbar-minimize-button" onClick={props.triggerTabMinimize}>
                            <img id={props.idText} src={tabButton} style={{ height: '10px', width: '10px' }} alt="" />
                        </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button className="topbar-maximize-button" onClick={triggerMaxMin}>
                            <img src={props.isMax ? minButton : maxButton} style={{ height: '14px', width: '14px'}} alt="" />
                        </button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button id={props.idText} className="topbar-close-button" onClick={props.trigger}>
                            <img id={props.idText} src={closeButton} style={{ height: '14px', width: '14px'}} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className={props.isMax ? "top-container-2-max" : "top-container-2"}>
                <div style={{ display: 'flex', flexDirection: 'row ', alignItems: 'center' }}>
                    <div className="arrow-container"><img src={backButtonDisabled} width="30px" height="30px" alt="" /></div>
                    <div className="top-bar-text">Back</div>
                    <div className="arrow-container"><img src={forwardButtonDisabled} width="30px" height="30px" alt="" /></div>
                    <div className="top-bar-line"></div>
                    <div className="arrow-container"><img src={searchButtonIcon} width="28px" height="28px" alt="" /></div>
                    <div className="top-bar-text">Search</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ color: '#746B6B', marginTop: '1px', marginLeft: '10px', fontSize: '13px'}}> Address </div>
                    <div className={props.isMax ? "address-bar-max" : "address-bar"}>
                        <div className="blue-box"></div>
                        <div style={{ fontSize: '11px', marginLeft: '5px', fontFamily: 'Helvetica' }}> C:\Portfolio\Areen\Desktop\{props.heading} </div>
                    </div>
                </div>
            </div>
        </>
    )
}