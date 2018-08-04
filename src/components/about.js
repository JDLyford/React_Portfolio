import React from 'react';

import about from '../assets/images/about/code.png';
import ucflogo from '../assets/images/about/ucf.png';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Growing up I played on my personal computer everyday, I have always wanted to break games and website to find out what made them work. I started with a simple Picture Viewer application in C++ and found that I preferred immediate results. In order to learn about creating websites and small javascript applications I joined UCF's Coding Bootcamp and after six months of non-stop coding I learned enough to get started. I currently have a few projects in mind that I want to work towards as a hobby.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Every stumble and fall is a learning experience. Get up, take a breath, and keep coding."</em></div>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={ucflogo} alt="UcfLogo" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Completing UCF's <em>Full-Stack Coding Bootcamp</em> has given me a head-start on my <strong>Full-Stack development</strong> career.
            </div>
        </div>
            </div>
            
        </div>
        </section>
    );
}