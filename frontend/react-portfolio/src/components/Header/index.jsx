import React from 'react'

const Header = () => {
  return(
    <header className="header flex">
      <div className="header__item">
        <h1 className="title">Portfolio A.M.</h1>
      </div>
      <div className="header__item">
        <a className="text text--xxs" href="https://amarkin11.github.io/release/portfolio-old/" target="_blank">Старая версия</a>
      </div>
    </header>
  )
};

export default Header;
