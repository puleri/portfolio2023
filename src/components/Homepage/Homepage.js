import Navbar from "../NavBar/NavBar";
import ServicesElevator from "../ServicesElevator/ServicesElevator";
import css from './Homepage.module.css'

import earth from '../../assets/gifs/earth.gif'
import bracket from '../../assets/photos/bracket.svg'

import meetme from '../../assets/photos/meetMe.svg'
import ExperienceCarousel from "../ExperienceCarousel/ExperienceCarousel";
import Carousel from '../Carousel/Carousel'

function Homepage() {
    return (
        <>
            <section className={css.hero}>
                <div className={css.titleCard}>
                    <Navbar />
                    <div className="row center">
                        <img className={css.meetme} src={meetme} />
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

            <section className={css.cSectionContainer}>
                <p className={css.bio}>Ignited by an unconventional journey from tarot cards to software engineering. With a knack for cross-functional collaboration, I blend code and creativity to craft accessible, high-performing websites. A problem solver at heart, I bridge technical and stakeholder realms, transforming visions into digital realities.</p>
                <img src={bracket} className={css.bracket}/>
                <Carousel />
            </section>
        </>
    );
}

export default Homepage;
