import React from 'react'
import './footer.scss'
import { Github, Linkedin, Twitter, Mail } from 'feather-icons-react/build/IconComponents';


const Footer = () => {
  let year = new Date();
  year = year.getFullYear();
  return (
    <div className='container--footer'>
      <h5>Living, learning, & leveling up one day at a time.</h5>
      <footer>
        <a href='https://www.linkedin.com/in/mauricio-santos-rebolledo-9a0924137/' target='_blank' className='container--icon'> <Linkedin className='icon' /> </a>
        <a href='https://github.com/MauricioSantos12' target='_blank' className='container--icon'> <Github className='icon' /> </a>
        <a href='https://twitter.com/Maurici89494430' target='_blank' className='container--icon'> <Twitter className='icon' /> </a>
        <a href="mailto:mauricio.santosr12@gmail.com" target='_blank' className='container--icon'> <Mail className='icon' /> </a>
      </footer>
      <div className='container--copy'>
        <p className="copy">Copyright {year} &copy; </p>
        <p className="copy">
            <a href="https://www.linkedin.com/in/mauricio-santos-rebolledo-9a0924137/" target="_blank"> {' '} Mauricio Santos Rebolledo</a>
        </p>
      </div>
    </div>
    
  )
}

export default Footer