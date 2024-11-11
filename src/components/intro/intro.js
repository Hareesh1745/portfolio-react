import React from "react";
import './intro.css';
import bg from '../../asset/bg.avif';

const intro = () => {
    return(
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm<span className="introName">Hareesh</span><br/>website Designer</span>
          p.   
          </div> 
          <img src={bg} alt="profile"className="bg"/>
      </section>
    )
}
export default intro