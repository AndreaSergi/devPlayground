import React, { useRef, useEffect } from 'react';

export function Video() {
  const styleVideo = {
    
    position: "absolute",
    top: "150px",
    left: "0px",
    zIndex: "0px",
    width: "100vw",
    height: "80vh",
  };

  // Crea una ref per il video
  const videoRef = useRef(null);

  useEffect(() => {
    // Imposta la velocità di riproduzione a 2.0, cioè doppia velocità
    if(videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  return(
    <video ref={videoRef} style={styleVideo} autoPlay muted loop>
      <source src="../public/pingpong/background.mp4" type="video/mp4" />
    </video>
  );
}
