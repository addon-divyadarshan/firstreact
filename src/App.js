import React, { Component } from 'react';
import './App.css';
function Banner(){
  return (
 <div id="main">

<div className="topnav">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <a href="#home" id="logo"><b>Devv</b></a>
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
    <i id="cross" className="fa fa-bars"></i>
  </a>

</div>


{/* header */}

<div>

     <img class="svg" src="image/code.svg"/>

</div>


  {/* <div className="border-red">
    <ul>
      <li><a href="#"><i className="fa fa-home"></i> Home</a></li>
      <li><a href="#"><i className="fa fa-user"></i> About</a></li>
      <li><a href="#"><i className="fa fa-phone"></i> Contact</a></li>
     
    </ul>
    </div> */}

   
    {/* body content */}

  <div className="hero-text">
    <h1>I am John Doe</h1>
    
  <p>And I'm a Photographer</p>
     <button class="hvr"><span>Hire me </span></button>
  </div>

  {/* servise */}
  <div>
  <h1 class="add">ser<span class="vise">vise</span></h1>
 
  <div class="row">
  <div class="column">
    <div class="serve">
      <p><i id="bb" class="fa fa-user"></i></p>
      <h3>11+</h3>
      <p>Partners</p>
    </div>
  </div>

  <div class="column">
    <div class="serve">
      <p><i id="bb" class="fa fa-check"></i></p>
      <h3>55+</h3>
      <p>Projects</p>
    </div>
  </div>

  <div class="column">
    <div class="serve">
      <p><i id="bb" class="fa fa-smile-o"></i></p>
      <h3>100+</h3>
      <p>Happy Clients</p>
    </div>
  </div>

  </div>
  </div>
   









  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
    <img class="image" src="image/john.jpg"/>
      <h2>I'm John Doe</h2>
      <p className="card">And i'm Web developer</p>
    
      <button className="btn1">Contact Me</button>
    </div>
    <div class="flip-box-back">
      <h2>Contact</h2>
      <p><span className="email">Email</span>johndoe@gmail.com</p> 
       
      <ul>
      <li><i id="link" className="fa fa-linkedin"></i></li>
      <li><i id="link" className="fa fa-github"></i></li>
      <li><i id="link" className="fa fa-whatsapp"></i></li>
      </ul>
    </div>
  </div>
</div>


<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
    <img class="image" src="image/mike.jpg"/>
      <h2>I'm Mike Ross</h2>
      <p className="card">And i'm UI developer</p>
      <button className="btn1">Contact Me</button>
    </div>
    <div class="flip-box-back">
      <h2>Contact</h2>
      <p><span className="email">Email</span>MikeRoss@gmail.com</p>  
      <ul>
      <li><i id="link" className="fa fa-linkedin"></i></li>
      <li><i id="link" className="fa fa-github"></i></li>
      <li><i id="link" className="fa fa-whatsapp"></i></li>
      </ul>
    </div>
  </div>
</div>

<div id="box"class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
    <img class="image" src="image/alexa.jpg"/>
      <h2>I'm Alerx</h2>
      <p className="card">And i'm Front-end developer</p>
      <button className="btn1">Contact Me</button>
    </div>
    <div class="flip-box-back">
      <h2>Contact</h2>
      <p><span className="email">Email</span>alexa@gmail.com</p>  
      <ul>
      <li><i id="link" className="fa fa-linkedin"></i></li>
      <li><i id="link" className="fa fa-github"></i></li>
      <li><i id="link" className="fa fa-whatsapp"></i></li>
      </ul>
    </div>
  </div>
</div> 





<div className="footer" id="blog">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <footer>
  <p className="crt">Created <span className="span"><i className="fa fa-heart"></i> John Doe</span></p>
</footer>
  </div>


  </div>

 

  
  );
}


export default Banner;