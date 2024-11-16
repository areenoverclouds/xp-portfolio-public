import React from 'react';
import '../index.css';
import mylogo from '../logo2.webp';

export default function Booting () {
    return (
        <div className="loading-screen-here">
            <div className="window">
                <div className="logo">
                  <div className="logo-image"> <img src={mylogo} height="100px" width="100px" alt=""/> </div>
                  <p className="text">Areen's<span>Portfolio</span></p>
                </div>
                <div className="container">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
            </div>
        </div>
    )
}