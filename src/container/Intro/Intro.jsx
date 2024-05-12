import React, { useState } from 'react';

import './Intro.css';
import { BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants'

const Intro = () => {
  const vidRef = React.useRef();

  React.useEffect(() => {
    vidRef.current.play();
  })

  return (
    <div className="app__video">
      <video src={meal} ref={vidRef} loop controls={false} muted />
    </div>
  );
};

export default Intro;
