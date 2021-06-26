import React, { Component } from 'react';
import './style/Landing.css';
import LoginButton from './LoginButton';
import video from './assest/images/video.mp4'
import img from './assest/images/Logo.png'

export class Landing extends Component {
    render() {
        return (

            <div className='container'>
        
            <video className='video' autoPlay loop muted width={1536} > 
              <source src={video} type="video/mp4" />
            </video>
    
            <div className='overlay'>
    
            <img src={img} alt='logo'/>
            <h1 style={{fontSize:"5.5rem" ,color:'#e67e22',marginLeft:500}}>Dalaa<span style={{color:"white"}}>Karshak</span> </h1>
            <LoginButton/>
    
            </div>
    
            
          </div>
        )
    }
}

export default Landing