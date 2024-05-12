import React from 'react';

import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constants'

const Footer = () => (
  <div className="app__footer">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contactus">
        <h1 className="headtext__cormorant" style={{ color: "#AAA", fontSize: "32px" }}>Contact Us</h1>
        <p className="p__opensans" style={{color:"#AAA"}}>9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans"style={{color:"#AAA"}}>+1 212-344-1230</p>
        <p className="p__opensans"style={{color:"#AAA"}}>+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="headtext__cormorant" style={{textTransform: "uppercase"}}>Gerícht</h1>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: "2rem"}} />
      
        <div className="app__footer-links_social">
          <FiFacebook className='facebook'/>
          <FiTwitter className='twitter'/>
          <FiInstagram className='instagram'/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="headtext__cormorant" style={{ color: "#AAA", fontSize: "32px" }}>Working Hour</h1>
        <p className="p__opensans"style={{color:"#AAA"}}>Monday-Friday:</p>
        <p className="p__opensans"style={{color:"#AAA"}}>08:00 am - 12:00 am</p>
        <p className="p__opensans"style={{color:"#AAA"}}>Saturday-Sunday:</p>
      </div>

    </div>

    <p className="p__opensans" style={{margin: "7rem 0 1rem 0", color:"#AAA"}}>© 2021 Gericht. All Rights reserved.</p>

  </div>
);

export default Footer;
