import React from 'react';
import './popup.scss'
export default function popup(props) {
    return (
        <div className="popup-background">
            <div className="popup-container">
                <div className="popup-container__header">
                    <div className="header-popup"> <h2>{props.title}</h2></div>
                    <img onClick={() => props.closePopup()} src="/cross-out.png"></img>
                </div>
                <div className="popup-container__body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
