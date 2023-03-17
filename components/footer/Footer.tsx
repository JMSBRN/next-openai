import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { footer, container, row, col, socialIcons, icon, copy } = styles;
  return (
    <footer className={footer}>
      <div className={container}>
        <div className={row}>
          <div className={col}>
            <p>Contact us:</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 555-555-5555</p>
          </div>
          <div className={col}>
            <p>Follow us:</p>
            <ul className={socialIcons}>
              <li>
                <a href="#">
                  <FaLinkedin className={icon} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub className={icon} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook className={icon} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className={icon} />
                </a>
              </li>
            </ul>
          </div>
          <div className={copy}>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
