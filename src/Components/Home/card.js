import React from 'react'
import './card.css'
const Card = () =>{
  return (
    <div className = 'card-wrapper'>
        <div className='best_plan'>
            <p className='best_plan_head'> Best Plans</p>
        <div className='save_upto red-plan'>
          <span className='save'>Save upto 79%</span>
        
        <div className='card_header'>
          <div className='left_view'>
               <h4> ₹ 299 <span className='monthly'>/Monthly</span>
                </h4>
                <del className='discount_price'> 1462</del>
           </div>
           <div className='right_view'>
                <h4> Watcho Max</h4>
                <h6>₹253+Tax = ₹299</h6>
            </div>
          </div>
        <div className='head_name'> 
            <p className='plan_name'> All 17 major Apps, one plan</p>
            <p className='choose_plan'> The smartest choice you'll make</p>
        </div>
        <div className='icon_container'>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/Indsony.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/Inddisney.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndZee5.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/Indwatcho.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/EngSho.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/Indlgp.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndSanskar.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/Indhungama.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/Indchaupal.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndManoMax.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndFancode.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndTarangPlus.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/Indhoi.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndRajTV.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndETVWin.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndAaoNXT.png")} alt=''/>
        </div>
        <div className='icon'> 
           <img src={require("..//../Assets/images/logos/IndStage.png")} alt=''/>
        </div>
        </div>
        <button  className='subscribe'>Subscribe now</button>
        <div className='card_bottom'>
          <div className='icon_knowmore'>
            <img src='' alt=''/>
          </div>
          <div className='text_knowmore'>
            <h4>Know more</h4></div>
          <div className='icon_compare'>
            <img src='' alt=''/>
          </div>
          <div className='text_compare'><h4>Compare</h4></div>
        </div>
      </div>
    </div>  
  </div>
  
  )
}

export default Card;