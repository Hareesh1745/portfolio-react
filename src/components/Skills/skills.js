 import React from 'react'
 import './skills.css';
 import UIDesign from '../../asset/ui-design.png';
 import WebDesign from '../../asset/website-design.png';
 import AppDesign from '../../asset/app-design.png';

 const skillS = () => {
    return (
        <section id="Skills">
           <span className="skillTitle">What I do</span>
           <span className="skillDesc">Highly motivated and creative Entry Level Web Designer with a strong passion for creating visually appealing and user-friendly websites</span>
           <div className="skillBars">
             <div className='skillBar'>
                <img src={UIDesign} alt='UIDesgin'className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p></p>
                </div>
             </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign'className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web design</h2>
                    <p></p>
                </div>
             </div>
             <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign'className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App design</h2>
                    <p></p>
                </div>
             </div>
            </div> 
        </section>
    );
 }
 export default skillS;