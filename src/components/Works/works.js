import React from 'react'
 import './works.css';
 import block from '../../asset/block.jpeg';
 import packet from '../../asset/packet.jpeg';

 const works = () => {
    return (
        <section id="Works">
        <span className="workTitle">Projects</span>
           <div className="workBars">
             <div className='workBar'>
                <img src={block} alt='block'className='workBarImg'/>
                <div className='workBarText'>
                    <h2>BLOCKCHAIN BASED FILE SHARING SYSTEM</h2>
                </div>
             </div>
             <div className='workBar'>
                <img src={packet} alt='packet'className='workBarImg'/>
                <div className='workBarText'>
                    <h2>CATCHING PACKET DROPPERS AND MODIFIERS</h2>
                </div>
             </div>
            </div>
        </section>
    );
}
export default works;