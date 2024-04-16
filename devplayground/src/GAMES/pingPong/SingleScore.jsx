/* eslint-disable react/prop-types */
export function SingleScore({ player, namePlayer, borderColor }) {
    const scoreStyle = {
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        backgroundColor:"rgba(255, 255, 255, 0.10)",
        color: "#ffffff",
        textAlign: "center",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        fontFamily: '"Lucida Console", Monaco, monospace',
        border: "5px solid",
        borderColor: borderColor,
        display: "flex",
        flexDirection: "horizontal",
        align: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: "20px",
      };

      const textScore = {
        textShadow: "1px 1px #000"
      }
    
    
      const score = {
        display: "flex",
        flexDirection: "horizontal",
      }

      let avatar = {
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        marginTop: "5px"
      }
    
      return (
        <div style={scoreStyle}>
          <div style={score}>
            <img style={avatar} src="pingpong/img/avatar1.png" alt="avatar pc" />
            <div style={{marginLeft: "30px"}}>
              <h2 style={textScore}>{namePlayer}</h2>
              <h3 style={textScore}>{player}</h3>
            </div>
          </div>
        </div>
      );
  
    
}