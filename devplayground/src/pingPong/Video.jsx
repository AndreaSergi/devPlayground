export function Video() {
    const styleVideo = {
        border: "1px solid #1c5ac4d5",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "0px",
        width: "100vw",
        height: "100vh"
      }

    return(
        <video style={styleVideo}  autoPlay muted loop>
            <source src="pingpong/background.mp4" type="video/mp4" />
        </video>
    )
}