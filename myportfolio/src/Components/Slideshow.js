// OUTILS
import React from 'react'
import { Slide } from 'react-slideshow-image'
// MEDIAS
import Beaute from '../Medias/beaute.png'
import Cuisine from '../Medias/cuisiner.png'
import Website from '../Medias/creationWebsite.png'
import Medecine from '../Medias/medecine.png'
import Mode from '../Medias/mode.png'
import Voyage from '../Medias/voyager.png'
// COMPOSANTS
import Writer from './TypeWriter'







export default function Slideshow() {

    var ReactRotatingText = require('react-rotating-text');

    const tabIllustrations = [Beaute, Website, Medecine, Voyage, Mode, Cuisine];

    const properties = {
        duration: 6000,
        transitionDuration: 800,
        infinite: true,
        indicators: true,
        arrows: true,
        pauseOnHover: false
    }

    var beaute = 'le monde de la beauté';
    var creationWeb = 'la création de site web';
    var medecine = 'la médecine';
    var voyage = 'les voyages';
    var mode = 'la mode';
    var cuisine = 'la cuisine';


    return (
//height="370" width="320" 
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div>
                        <img id="imgBeaute" height="35%" width="35%" src={tabIllustrations[0]} />
                        <span><ReactRotatingText items={[beaute]} /></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img height="50%" width="50%" src={tabIllustrations[1]} />
                        <span><ReactRotatingText items={[creationWeb]} /></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img height="50%" width="50%" src={tabIllustrations[2]} />
                        <span><ReactRotatingText items={[medecine]} /></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img height="50%" width="50%" src={tabIllustrations[3]} />
                        <span><ReactRotatingText items={[voyage]} /></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img id="imgMode" height="35%" width="35%" src={tabIllustrations[4]} />
                        <span><ReactRotatingText items={[mode]} /></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img height="50%" width="50%" src={tabIllustrations[5]} />
                        <span><ReactRotatingText items={[cuisine]} /></span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}
