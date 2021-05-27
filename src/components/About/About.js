import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div>
      <div style={{
        fontSize:"30px",
        textAlign:"center",
        fontFamily:"sans-serif",
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color:"#474747"
        

      }}>
        *Me talking about my self*
      </div>
      <div style={{
        textAlign:"center",
        color:"#4e342e",
        fontFamily:"sans-serif"
      }}>
        It's me Puja Sharma,a webDesignerand Frontend Developer who,<br/>
         loves to make things beautiful and always lookout  <br/>
          to work on something exciting.
      </div>
      <ul>
  <li style={{
    color:"#4e342e",
    fontSize:"37px",
    fontFamily:"sans-serif"
  }}>
   Eduaction
   <p style={{
     fontFamily:"sans-serif",
     fontSize:"22px"
   }}>Bachelor in Computer Science,TU
       || Kathmandu,Nepal</p>
  </li>
</ul>

<br/>
<ul>
  <li style={{
    fontSize:"37px",
    color:"#474747"
  }}>
    Skills
    <p style={{
     fontFamily:"sans-serif",
     fontSize:"22px"
   }}>JavaScript,ReactJs,Html,Css,AdobeXd,Videoediting,Photoshop,etc</p>
  </li>
</ul><br/>

<ul >
  <li style={{
    fontSize:"37px",
    color:"#474747"
   
  }}>
    Interest
    <p style={{
     fontFamily:"sans-serif",
     fontSize:"22px"
   }}>Travelling,Photoediting etc</p>
  </li>
</ul>
<div> 

</div>

      </div>


    )
  }
}