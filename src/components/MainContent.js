import React from 'react'
import cardLogo from '../assets/card_asset.webp';
import './MainContent.css';


const MainContent = () => {
 

  return (
    <div className="main-content-con">
        <div className='main-content'></div>
        <h1>India's Credit <br/>Revolution is here.<br/><span className='graditent-color-content'>Pay 1/3rd. </span>Anywhere.</h1>
        <img src={cardLogo} className="card-image" alt='crd' />
        <form className='content-con-form'>
            <div className='phone-number-input'>
                <input className='content-con-input' type='number' max='10' placeholder='Enter phone number' />
                <button className='main-content-btn'>Apply Now</button>
            </div>
            <div className='checkbox-input'>
                <input type='checkbox' />
                <p className='consent-msg'>By submitting this information, you agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</p>
            </div>
          
        </form>
    </div>
  )
}

export default MainContent