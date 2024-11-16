import React from "react";
import ReactModal from "react-modal-resizable-draggable";
import "../index.css";

export default function Warning (props) {
     
    return (
        <div>
            <ReactModal
                        isOpen={props.isOpen}
                        disableResize={true}
                        disableKeystroke={true}
                    >
                        <div className="warning-modal-container" style={{ borderRadius: '5px' }}>
                            <div style={{ color: 'white', fontSize: '16px', padding: '3px 10px 3px 7px' }}> {props.heading} </div>
                            <div style={{ backgroundColor: '#EBE9D8', display: 'flex', flexDirection: 'column', width: '303px', height: '98px', marginLeft: '5px', marginRight: '3px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', padding: '5px 5px 5px 5px' }}>
                                    <img src={props.img} height="30px" width="30px" style={{ margin: '5px 5px 5px 5px'}} alt="" />
                                    <div style={{ fontSize: '14px', marginTop: '10px', color: 'black' }}> {props.text} </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px' }}>
                                    <button onClick={props.close1} style={{ backgroundColor: '#EBE9D8', border: '1px solid #000', paddingLeft: '30px', paddingRight: '30px', color: 'black' }}>
                                        {props.option1} 
                                    </button>
                                    {props.option2 !== "" && 
                                        <button onClick={props.close2} style={{ backgroundColor: '#EBE9D8', border: '1px solid #000', paddingLeft: '30px', paddingRight: '30px', color: 'black' }}> 
                                            {props.option2} 
                                        </button>}
                                </div>
                            </div>
                        </div>
                    </ReactModal>
        </div>
    )
}