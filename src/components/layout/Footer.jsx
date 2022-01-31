import React from 'react';

function Footer() {
    const footerYear = new Date().getFullYear()
  return <div>
      <footer className='footer p-1 bg-gray-600 text-primary-content footer-center'>
        <div>
            <p>Copyright &copy; Haris Sultanic {footerYear} All rights reserved</p>
        </div>
      </footer>
  </div>;
}

export default Footer;
