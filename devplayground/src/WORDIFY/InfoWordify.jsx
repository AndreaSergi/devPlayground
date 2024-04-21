import './infoWordify.css'
import './wordifyIntro.css'

export function InfoWordify() {
  return (
    <div className="wordifyPopupButton">
      <a className='openWordifyPopup' href="#idWordifyPopup">?</a>
      <div id='idWordifyPopup' className="wordifyPopup" >
        <a className="closeWordifyPopup" href="#">X</a>
        <p>Come giocare</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem aut cum veniam optio possimus atque nobis alias beatae porro?
        </p>
      </div>
    </div>
  );
}
