import React from 'react'
import './footer.css'

const footer = () =>{
    return(
      <footer className='footer-wrapper'>
        <div className='foottop'>
            <ul>
                <li>TV App</li>
                <li><a href='#'><img src={require('../../Assets/images/logos/android_TV.png')} alt =''/></a></li> 
                <li><a href='#'><img src={require('../../Assets/images/logos/amazon.png')} alt =''/></a></li> 
                <li><a href='#'><img src={require('../../Assets/images/logos/apple_tv.png')} alt =''/></a></li> 
                <li>Mobile App</li>
                <li><a href='#'><img src={require('../../Assets/images/logos/apple_ios.png')} alt =''/></a></li> 
                <li><a href='#'><img src={require('../../Assets/images/logos/android_logo.png')} alt =''/></a></li> 
            </ul>
        </div>
        <div className='footbottom'>
            <ul>
                <li>Terms & Condition </li>
                <li>Privacy Policy </li>
            </ul>
        </div>
      </footer>
    );

};
export default footer;