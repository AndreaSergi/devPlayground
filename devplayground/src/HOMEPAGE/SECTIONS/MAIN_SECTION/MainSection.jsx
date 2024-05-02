import { startTransition, useEffect, useRef, useState } from 'react'
import {gsap} from "gsap"
import { ScrollTrigger} from "gsap/dist/ScrollTrigger"
import '../MAIN_SECTION/parallax.css'
import { GameDetails } from '../GameDetails/GameDetails'
import { Footer } from '../../../Footer/Footer'
import {MobileNavbar} from '../../../navbar/Mobilenavbar'
import { ProvaNav } from './Provanav'
import { ButtonUp } from './ButtonUp'


export function MainSection(){

    const [background, setBackground] = useState(0)

    const parallaxRef = useRef(null)
    const starsRef = useRef(null)
    const sunRef = useRef(null)
    const mountains3Ref = useRef(null)
    const mountains2Ref = useRef(null)
    const mountains1Ref = useRef(null)
    const bushesRef = useRef(null)
    const titleRef = useRef(null)
    const gameDetailsRef = useRef(null)

    useEffect(() => {
        let cxt = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: {duration: 1},
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "1000",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                         setBackground(Math.ceil(self.progress * 100 + 0.01)); 
                    },
                },
            });

            tl.to(
                bushesRef.current,
                {
                    y: "-=550"
                },
                1.1
            );
            tl.to(
                mountains1Ref.current,
                {
                    y: "-=130"
                },
                1
            );
            tl.to(
                mountains2Ref.current,
                {
                    y: "-=90"
                },
                1
            );
            tl.to(
                mountains3Ref.current,
                {
                    y: "-=20"
                },
                1
            );
            tl.to(
                starsRef.current,
                {
                    top: 0,
                    opacity: 1
                },
                0.5
            );
            tl.to(
                sunRef.current,
                {
                    y: "+=300"
                },
                0
            );
          /*   tl.to(
                (titleRef.current),
                {
                    y: "-=150",
                    opacity: 0
                },
                0.2
            );  */
           /*  tl.to(
                titleRef.current,
                {
                    opacity: "0",
                    duration: 1
                },
                0.2
            ); */
            tl.to(
                gameDetailsRef.current,
                {
                    y: "-=1"
                },
                0
            );
        })
        
        

        return () => cxt.revert();
    }, [])

    



    return (
        <>
        {/* <MobileNavbar/> */}
        <ProvaNav/>
        <ButtonUp/>
        <div className="parallax-outer">
            <div ref={parallaxRef} className="parallax" style={{ background: `linear-gradient(#02162e , #c2b6c0 ${background}% )` }}>
                <img ref={starsRef} className="stars" src="./public/parallaxImg/stars.png" alt="" />

                <img ref={sunRef} className="sun" src="./public/parallaxImg/sun.png" alt="" />

                <img ref={mountains3Ref} className="mountains3" src="./public/parallaxImg/mountains3.png" alt="" />

                <img ref={mountains2Ref} className="mountains2" src="./public/parallaxImg/mountains2.png" alt="" />

                <h2 ref={titleRef} id="titleDevP" className={`jersey-15-regular fade-in-fwd`}><span className="segnoHome">&lt;</span><span className="devHome">dev</span><span className="playgroundHome">Playground</span><span className="segnoHome">/&gt;</span></h2>

                <img ref={mountains1Ref} className="mountains1" src="./public/parallaxImg/mountains1.png" alt="" />

                <div ref={bushesRef} className='bushesContainer'>

                <img  className="bushesImg" src="./public/parallaxImg/bushes.png" alt="" />

                <div className='gameDetailsContainer'>
                <GameDetails ref={gameDetailsRef} className="games"/>
                </div>
                <Footer/>
                </div>
            </div>
        </div>
        
        </>
    )
}