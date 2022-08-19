//import React from 'react';

function Button(onClickHandler, children) {
  return (

    <button onClick={onClickHandler}>{children}</button>
    
  )
}

export default Button