export function PlayAgain(src) {
    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        <button className="play-again neonTextPlayAgain" type="button" onClick={ refreshPage }><span className="neonTextPlayAgain">GIOCA ANCORA</span> </button>
    )
}