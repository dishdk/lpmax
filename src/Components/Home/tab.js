
import React from 'react'
import './tab.css'
import Card from './card'

const Tab = () => {
  return (
    <div className='tab custom-button-tab'>
         <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Monthly</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Annual</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Card/></div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Card/></div>
</div>
    </div>
  )
}

export default Tab;

