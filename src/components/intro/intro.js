import React from "react";
import './intro.css';
import bg from '../../asset/picture.jpg';
import {Link} from 'react-scroll'
import btnImg from '../../asset/hire1.png'

const intro = () => {
    return(
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm<span className="introName">Hareesh</span><br/>website Designer</span> 
          <p className="introPara">I am skilled web desinnger with experience in creating visually appealing and user friendly websites</p>
          <Link><button className="btn"><img src={btnImg}alt="Hire" className="btnImg"/>Hire me</button></Link>
          </div> 
          <img src={bg} alt="profile"className="bg"/>
      </section>
    )
}
export default intro