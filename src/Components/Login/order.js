import React, {useState} from 'react'
import './order.css'

const Order = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <div className='order'>
        <div className='order-summary'>
            <div className='order-top'>
              <p className='para-order'>Order Summary</p>
              <h4>You are Paying for Watcho Max</h4>
              <h1 className='subscription-price'>
                ₹ 299
                <span className='total-price'> 
                    <del>₹ 1462 </del>(Monthly Subscription)
                </span>
              </h1>
              <h6 className='ott-count'>All 18 OTTs in one magnificent pack.</h6>
            </div>
            <div className='coupon-code'>
                <h4>coupon Code</h4>
                <div className='apply-coupon'>
                    <form className='form-coupon'>
                        <input className='input-coupon' value={inputValue} onChange={handleInputChange} type='text' name='mobile' placeholder='Enter Coupon Code' autoComplete='off'/>
                        <button className={inputValue ? 'apply-button' : 'default'} type='button'> 
                            Apply
                        </button>
                    </form>
                    <span className='label'>
                    <img src={require('..//..//Assets/images/icons/coupon-icon.png')} alt='coupon'/>
                    </span>
                </div>
                <h6>*Verify your number first to redeem the coupon code.</h6>
                <div className='coupon-error'>

                </div>
            </div>
            <div className='payment-summary'>
                <h4>Payment Summary</h4>
                <p className='package-amount'>
                    Package amount
                    <span>₹ 253</span>
                </p>
                <p className='tax-amount'>
                    Tax (+)
                    <span>₹ 46</span>
                </p>
                <p className='total-amount'>
                    Total Payment
                    <span>₹ 299</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Order