/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';

const AudioComponent = React.forwardRef((props, ref) => (
  <audio ref={ref}>
    <source src={props.src} type="audio/mp3" />
  </audio>
));

export default AudioComponent;
