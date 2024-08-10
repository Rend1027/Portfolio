import React from 'react';
import azure from '../../assets/images/logos/azure.png'
import css from '../../assets/images/logos/css.png'
import html from '../../assets/images/logos/html.png'
import javascript from '../../assets/images/logos/javascript.png'
import nextjs from '../../assets/images/logos/nextjs.png'
import vscode from '../../assets/images/logos/vscode.png'


const LogoTrack = () => {
    return (
        <div className='container'>
            <img src={azure} alt='Azure'/>
            <img src={css} alt='CSS'/>
            <img src={html} alt='HTML'/>
            <img src={javascript} alt='Javascript'/>
            <img src={nextjs} alt='Nextjs'/>
            <img src={vscode} alt='VScode'/>
        </div>
    );
};

export default LogoTrack;