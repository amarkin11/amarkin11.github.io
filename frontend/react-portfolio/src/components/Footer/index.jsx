import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return(
    <footer className="footer">
      <p className="text text--xxs text--center">Маркин А.С. &copy; 2017-{currentYear}</p>
    </footer>
  );
};

export default Footer;
