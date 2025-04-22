import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaUniversity,
  FaYoutube,
} from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail, MdLocationOn, MdMobileFriendly, MdMobileOff, MdMobileScreenShare, MdPhone } from 'react-icons/md';
import { Assets } from '../Assests/Assets';
import logo from '../Assests/cbit2.png';

const Footer = () => {
  return (
    <footer className="text-dark pt-5 pb-3 mt-5" style={{ backgroundColor: '#d9d5d4' }}>
      <div className="container">
        <div className="row">

          <div className="col-md-7 mb-4">
            <img src={logo} alt='logo' width="350" height="89" style={{backgroundColor:"#d9d5d4"}}/>
            <p className="d-flex align-items-center small mb-1">College Contact Info</p>
            <p className="d-flex align-items-center small mb-1">
              <MdLocationOn className="me-2" />
              Gandipet, Hyderabad, Telangana
            </p>
            <p className="d-flex align-items-center small mb-1">
              <MdPhone className="me-2" />
              040-24193276
            </p>
            <p>
              <MdMobileFriendly className="me-2" />
              8466997201
            </p>
            <p className="d-flex align-items-center small mb-1">
              <MdEmail className="me-2" />
              principal@cbit.ac.in
            </p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Connect With Us</h5>
            <div className="d-flex flex-column gap-2">
              <a href="https://www.facebook.comhttps://www.facebook.com/CBIThyderabad/" className="text-dark text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="me-2" /> Facebook
              </a>
              <a href="https://www.instagram.com/cbithyderabad/" className="text-dark text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <GrInstagram className="me-2" /> Instagram
              </a>
              <a href="https://www.linkedin.comhttps://www.youtube.com/channel/UCUW8oQB8Fl6j-pg2g_sf1tw" className="text-dark text-decoration-none d-flex align-items-center" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaYoutube className="me-2" /> Youtube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center pt-3 border-top border-secondary mt-4">
          <p className="mb-1 small">
            &copy; {new Date().getFullYear()} Student Management System - CBIT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
