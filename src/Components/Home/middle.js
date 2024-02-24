import React from 'react'
import './middle.css'
const middle = () => {
  return (
    <>
    <div className='middle-section'>
        <div className='paylater'>
            <h2>How it works</h2>
            <div className='track'>
               <div className='step active day1'>
                <span className='icon'>1</span>
                <span className='text heading'>Select a plan</span>
                <span className='text'>Best suited to you</span>
               </div>
               <div className='step active day2'>
                <span className='icon'>2</span>
                <span className='text heading'>Verify your number</span>
                <span className='text'>your no. is safe with us</span>
               </div>
               <div className='step active day3'>
                <span className='icon'>3</span>
                <span className='text heading'>Make Payment</span>
                <span className='text'>Cancel anytime</span>
               </div>
            </div>
        </div>
    </div>
   <div className='need-help'>
         <div className='need-help-text'>
               <h4>Need Help!     
               <span>Compare & Make A Choice</span>
               </h4>
         </div>
         <div className='need-help-icon'>
              <img src={require('../../Assets/images/icons/external-link.png')} alt='help-icon'/>
         </div>
   </div>
    <div className='why-watcho'>
          <h3 className='why-watcho-heading'>Why Watcho?</h3>
          <div className='why-watcho-icon'>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Unbeatable-Prices.png')} alt='watcho-icon'/>
              </div>
                <h4>Unbeatable Prices</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Variety-Content.png')} alt='watcho-icon'/>
              </div>
                <h4>Variety of Content</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Watch-Convenience.png')} alt='watcho-icon'/>
              </div>
                <h4>Watch At Convenience</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Multi-Device-Compatibility.png')} alt='watcho-icon'/>
              </div>
                <h4>Multi-Device Compatibility</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/No-Commercials.png')} alt='watcho-icon'/>
              </div>
                <h4>No Commercials (or Fewer)</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Offline-Viewing.png')} alt='watcho-icon'/>
              </div>
                <h4>Offline Viewing</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Original-Content.png')} alt='watcho-icon'/>
              </div>
                <h4>Original Content</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Parental-Controls.png')} alt='watcho-icon'/>
              </div>
                <h4>Parental Controls</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Continuous-Updates.png')} alt='watcho-icon'/>
              </div>
                <h4>Continuous Updates</h4>
             </div>
             <div className='icon-box'>
              <div className='inner-icon'>
                <img src={require('../../Assets/images/Why watcho/Access-Anywhere.png')} alt='watcho-icon'/>
              </div>
                <h4>Access Anywhere</h4>
             </div>
          </div>
          <div className='subscribe-plan'>
            <button>Subscribe a Plan</button>
          </div>
    </div>
    </>
  )
}

export default middle