import React from 'react'
import FAQ from './Accordion'
import './home.css';
import Tab from './tab';
import Middle from './middle';

export default function home() {
  return (
    <>
    <div className="banner">
     <img src="https://d10y32mfhqtk2g.cloudfront.net/images/1703942611877Generic-HD-device-&-Normal-Laptop-1920x529-Pix_1.jpg" alt="" />
    </div>
     <Tab/>
    <Middle/>
    <div className='Accordion'>
    <h1 class="faq" >FAQ's</h1>
      <FAQ/>
    </div>
    </>
  )
}
