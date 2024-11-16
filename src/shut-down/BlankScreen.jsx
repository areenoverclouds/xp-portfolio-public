import React from "react";
import loginImage from "./cpubox.png";

export default function BlankScreen (props) {
    return (
        <div className="loading-screen-here">
            <button onClick={props.restart} style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', padding: '20px'}}>
                <img src={loginImage} height="100px" width="200px" alt="" />
                <p style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }}> Restart </p>
            </button>
        </div>
    )
}