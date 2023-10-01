import React from 'react';

const Button = ({onClick, children}) => {
  return(
    <button
      className="btn btn--md btn--blue"
      onClick={ onClick }
    >
      {children}
    </button>
  )
};

export default Button;
