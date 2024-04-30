import { startTransition, useEffect, useRef, useState } from 'react'
import {gsap} from "gsap"
import { ScrollTrigger} from "gsap/dist/ScrollTrigger"
import '../MAIN_SECTION/parallax.css'
import { GameDetails } from '../GameDetails/GameDetails'
import { Footer } from '../../../Footer/Footer'
import { MobileNavbar } from '../../../navbar/Mobilenavbar'


export function MainSection(){

    const [background, setBackground] = useState(0)

    const parallaxRef = useRef(null)
    const starsRef = useRef(null)
    const sunRef = useRef(null)
    const mountains3Ref = useRef(null)
    const mountains2Ref = useRef(null)
    const mountains1Ref = useRef(null)
    const bushesRef = useRef(null)

    useEffect(() => {
        let cxt = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: {duration: 1},
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "2000",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 25))
                    },
                },
            });

            tl.to(
                bushesRef.current,
                {
                    y: "-=500"
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
                    top: 0
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
        })

        return () => cxt.revert();
    }, [])



    return (
        <>
        <MobileNavbar />
        <div className="parallax-outer">
            <div ref={parallaxRef} className="parallax" style={{ background: `linear-gradient(#02162e, #c2b6c0 ${background}%, #482e44)` }}>
                <img ref={starsRef} className="stars" src="./public/parallaxImg/stars.png" alt="" />
                <img ref={sunRef} className="sun" src="./public/parallaxImg/sun.png" alt="" />
                <img ref={mountains3Ref} className="mountains3" src="./public/parallaxImg/mountains3.png" alt="" />
                <img ref={mountains2Ref} className="mountains2" src="./public/parallaxImg/mountains2.png" alt="" />
                <img ref={mountains1Ref} className="mountains1" src="./public/parallaxImg/mountains1.png" alt="" />
                <div ref={bushesRef} className='bushesContainer'>
                <img  className="bushesImg" src="./public/parallaxImg/bushes.png" alt="" />
                <h1></h1>
                <GameDetails className="games"/>
                <Footer/>
                </div>
            </div>
        </div>
        
        </>
    )
}