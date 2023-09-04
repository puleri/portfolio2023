import Navbar from "../NavBar/NavBar";
import ServicesElevator from "../ServicesElevator/ServicesElevator";
import css from './Homepage.module.css'
import '../ImgCur/ImgCur.css'

import earth from '../../assets/gifs/earth.gif'
import bracket from '../../assets/photos/bracket.svg'
import stroke from '../../assets/photos/stroke.png'


import meetme from '../../assets/photos/meetMe.svg'
import ExperienceCarousel from "../ExperienceCarousel/ExperienceCarousel";
import Carousel from '../Carousel/Carousel'
import Footer from "../Footer/Footer";
import TextDescrambler from "../TextDescrambler/TextDescrambler";
import ImgCur from "../ImgCur/ImgCur";
import { useState } from "react";

function Homepage() {
    const [hoveringMeet, setHoveringMeet] = useState(false)
    const phrases = [
        '',
        `I'm Matt, a Software Engineer working remotely for <span class="extrahop-span">ExtraHop</span> on their website and digital tradeshow experiences in sunny Seattle, Washington.`
      ];
    return (
        <>
            <section className={css.hero}>
                <div className={css.titleCard}>
                    <Navbar />
                    <div className="row center">
                        <img id="meetmeImage"
                         onMouseEnter={() => setHoveringMeet(true)}
                         onMouseLeave={() => setHoveringMeet(false)}
                         className={`${css.meetme} custom-cursor-target`} src={meetme} alt="Meet Me" />
                        <ImgCur visible={hoveringMeet}/>

                    </div>
                    <div className="row center">
                        <p className={css.mission}>Crafting  Digital  Experiences:  Where  Software  Engineering  and  Design  Converge</p>
                    </div>
                </div>
                <div className={css.servicesCard}>
                    <ServicesElevator />
                </div>
            </section>

            <section className={css.portfolioGrid}>
                <div className={css.p1}/>
                <div className={css.p2}>
                    <img src={earth} />
                </div>
                <div className={css.p3}/>
                <div className={css.p4}/>
                <div className={css.p5}/>
                <div className={css.p6}/>
            </section>

            <section id="about" name="about" className={css.cSectionContainer}>
                <p className={css.bio}>
                    <TextDescrambler phrases={phrases}/></p>
                <img src={bracket} className={css.bracket}/>
                <Carousel />
            </section>
            <Footer />
        </>
    );
}

export default Homepage;
