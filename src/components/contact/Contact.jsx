import React, { useState } from 'react'
import './contact.scss'
import { Link } from "react-router-dom";
import { XCircle, CheckCircle, AlertCircle } from 'feather-icons-react'
import imageMauro from '../../images/imgMauro.JPG'
import { sendEmailValidationRequest } from '../../actions/sendEmail.action'
import icon from '../../images/icon_page.png'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [showNotification, setShowNofitication] = useState(false);

  const sendEmail = async () => {
    if(email != '' && name != '' && msg != ''){
      let result = await sendEmailValidationRequest(email, name, msg);
      if(result.status != 200){
        setError(true);
      }
      cleanStates();
    }else{
      setWarning(true);
    }
    setShowNofitication(true);
  }

  const cleanVariables = () => {
    setWarning(false);
    setShowNofitication(false);
    setError(false);
  }

  const cleanStates = () => {
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <section className={showNotification ? 'contact not-allowed' : "contact"} id="contact">
      <nav className='navContact'>
        <img src={icon} className='iconPage' alt="icon page" />
        <Link className='contact' to="/"><XCircle /></Link>
      </nav>
      <div className='container--divider'>
        <hr className="rounded" />
        <img src={imageMauro} alt="Image Mauro" className='imageDivider' />
      </div>
      <div className="form-contact-container">
        <h4>Thanks for taking the time to reach out. How can I help you today?</h4>
        <div className="container-form-contact">
          <div >
            <div className="control-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                className="input-field"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="control-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                className="input-field"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="control-form">
              <label htmlFor="mensaje">Message</label>
              <textarea
                id="mensaje"
                cols="60"
                rows="5"
                name="mensaje"
                className="input-field"
                required
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <button type="submit"
              id="submit-btn"
              className={showNotification ? "submit-btn disabled" : "submit-btn"}
              onClick={() => sendEmail()} 
              >Send</button>
          </div>
        </div>
      </div>

      {
        showNotification ?
        warning ?
        <div className='container--modal'>
          <AlertCircle className='iconModal alert' />
          <h1>
            Review all fields
          </h1>
          <button onClick={() => cleanVariables()} className='buttonModal' style={{'--color-bg-button': '#f59c1a'}}>Close</button>
        </div>
        :
        <div className='container--modal'>
          {
            error ?
            <XCircle className='iconModal denided' />
            :
            <CheckCircle className='iconModal success' />
          }
          <h1>
            Your message is deliveried
          </h1>
          <p>As soon as posible, i answer you. Thank you for your message :)</p>
          <button onClick={() => cleanVariables()} className='buttonModal' style={{'--color-bg-button': error ? 'red' : ' green'}}>{error ? 'Close' : 'Check'}</button>
        </div>
        :
        null
      }
      
    </section>
  )
}

export default Contact