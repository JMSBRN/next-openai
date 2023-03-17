import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p>Contact us:</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 555-555-5555</p>
          </div>
          <div className={styles.col}>
            <p>Follow us:</p>
            <ul className={styles.socialIcons}>
              <li>
                <a href="#">
                  <FaLinkedin className={styles.icon}/>
                </a>
              </li>
              <li>
                <a href="#">
                <FaGithub className={styles.icon}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook className={styles.icon}/>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className={styles.icon}/>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.copy}>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
