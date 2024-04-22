import './infoWordify.css'
import './wordifyIntro.css'

export function InfoWordify() {
  return (
    <div className="wordifyPopupButton">
      <a className='openWordifyPopup' href="#idWordifyPopup">?</a>
      <div id='idWordifyPopup' className="wordifyPopup" >
        <a className="closeWordifyPopup" href="#">X</a>
        <p id='howTo'>Come giocare</p>
        <p className='rulesWordify'>Hai <span id='spanWhiteWRD'>6</span> tentativi a disposizione per indovinare una parola italiana casuale di cinque lettere.</p>
        <p className='rulesWordify'>Quando premi invio, lettere della parola che hai inserito si illumineranno di <span id='spanYellowWRDF'>giallo</span> se sono presenti nella parola da indovinare, ma si trovano nella posizione sbagliata, di <span id='spanGreenWRD'>verde</span> se sono presenti e sono nella posizione corretta, mentre non si illumineranno se non sono presenti.</p>
        <p className='rulesWordify'>
        </p>
      </div>
    </div>
  );
}
