// OUTILS
import React, {useState, useEffect, useRef} from 'react'
import { useHistory } from "react-router-dom"
import {withRouter} from 'react-router-dom'
import { TweenMax, TweenLite, TimelineMax, Linear, Sine, Back } from 'gsap/all'
import $ from 'jquery'
import CSSPlugin from 'gsap/CSSPlugin'
import { Modal } from 'react-bootstrap'
import 'react-slideshow-image/dist/styles.css'
import { render } from '@testing-library/react'
// COMPOSANTS
import Header from './Header'
import Slideshow from './Slideshow'
// MEDIAS
import CV from '../Medias/CV_BENLEMOUY-Amelia.pdf'
import CV_Miniature from '../Medias/CV_BENLEMOUY-Amelia_Miniature.jpg'
import CV_Image from '../Medias/CV_BENLEMOUY-Amelia_image.jpg'
import Presentation_Image from '../Medias/photo-profil1.png'



/** RAPPELS UTILS
* var_dump(variable)
* yaquoidansssa(ca)
* console.log(hauteurIdPortfolio);
**/



export default function Home() {

    // DECLARATIONS
    const [show, setShow] = useState(false)
    const history = useHistory();


    // FONCTIONS 
    // Fonction permettant de rediriger l'utilisateur à la section Contact ou un formulaire de contact
    const contactMe = () => {
        window.scrollTo({
            top: 10000,
            behavior: 'smooth',
        });
    }
    
    // Fonction permettant de rediriger l'utilisateur vers la prise de RDV automatique via Calendly
    function getRDV(){    
        return (
            <button className="rdvButton" onClick={() => history.push("/priseDeRdv")}>UN RENDEZ-VOUS AVEC MOI ?</button>
        )
    }

    // Fonction permettant de rediriger l'utilisateur à la section Portfolio pour en savoir plus sur moi
    const refAboutMe = useRef();
    const getAboutMe = () => {
        refAboutMe.current.scrollIntoView()
        window.scrollBy(0, -90);



        /*var hauteurIdPortfolio = document.getElementById("portfolio").scrollHeight;
        //console.log(hauteurP)
        window.scrollTo({
            top: 1400,
            behavior: 'smooth',
        });*/
    }

    // Fonction permettant de remonter en haut de la page
    const backtoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    // Fonction permettant de conserver la couleur jaune après clique si on clique à côté
    const changeColor = (id) => {
        let one = document.getElementById('1')
        let two = document.getElementById('2')
        let three = document.getElementById('3')

        let element = document.getElementById(id)

        one.classList.remove("activ")
        two.classList.remove("activ")
        three.classList.remove("activ")

        element.classList.add("activ") 
    }

    // Partie de code pour les cartes réversibles
    CSSPlugin.defaultTransformPerspective = 1000;

    TweenMax.set($(".cardBack"), {rotationY:-180});  //we set the backface 
    
    $.each($(".cardCont"), function(i,element) {
        var frontCard = $(this).children(".cardFront"),
        backCard = $(this).children(".cardBack"),
        tl = new TimelineMax({paused:true});

        tl
        .to(frontCard, 1, {rotationY:180})
        .to(backCard, 1, {rotationY:0},0)
        .to(element, .5, {z:50},0)
        .to(element, .5, {z:0},.5);

        element.animation = tl;
    });

    $(".cardCont").hover(elOver, elOut);

    function elOver() {
        this.animation.play();
    }
    
    function elOut() {
        this.animation.reverse();
    }



    return (

        <div className="homeComponent container-fluid">

            {/************************* 1ère SECTION : PRESENTATION *************************/}

            <div className="first-block">

                <div className="row presentation-block">

                    <div className="ppp col-8 col-sm-5 col-md-5 col-xl-3">
                        <h1>Amélia 
                            <br/>BENLEMOUY<span className="point-carre">■</span>
                        </h1>
                        <hr></hr>
                        <div className="presentationHome">
                            <p>27 ans</p>
                            <p>Lyon | Master 2 - I2A</p>
                            <p>CTU Besançon</p>
                        </div>
                        <button className="contactButton" onClick={contactMe}>CONTACTEZ-MOI</button>
                    </div> 

                    <div className="col-10 col-md-5 col-xl-4">
                        <div className="photoHome">
                            <div id="cercle">
                                <img className="imagePresentation" src={Presentation_Image} alt="Image presentation" title="presentationImage" />
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-md-6 col-xl-4 introductionHome">
                        <h2>INTRODUCTION</h2>
                        <div className="goal">
                            <h3>Recherche de stage en développement Web</h3>
                            <p>Je suis à la recherche d'un stage en développement web, d'une durée de 4 mois,
                                me permettant de mettre en pratique mes compétences 
                                en milieu professionnel.
                            </p>
                        </div>

                        <p className="more" onClick={getAboutMe}>
                            Lire plus
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                            </svg>
                        </p>
                    </div>
                </div>
                <div id="hauteurPresentation"></div>
            </div>
        


            {/************************* 2ème SECTION : CV *************************/}

            <div className="second-block justify-content-center">

                <div className="row ">
                    <div className="section-portfolio col-xl-12">
                        <h2 ref={refAboutMe}>PORTFOLIO</h2>
                        <h3>A propos de moi</h3>
                        <p>Dans cette section, vous pourrez télécharger mon CV<br />
                        et ainsi en savoir un peu plus sur ma personne
                        </p>
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div className="miniMenuCV col-10">
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link activ" onClick={() => changeColor('1')} id="1" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">CV</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" onClick={() => changeColor('2')} id="2" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Master I2A</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" onClick={() => changeColor('3')} id="3" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Intérêts</a>
                            </li>
                        </ul>
                    


                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row justify-content-center tab-pane-cv">

                                    <img className="miniatureCV" src={CV_Miniature} alt="CV Miniature" title="Cliquez pour zoomer" onClick={() => setShow(true)} />

                                    <Modal show={show} onHide={() => setShow(false)} centered size="lg" className="zoomCV">
                                        <img src={CV_Image} alt="template de facturation" onClick={() => setShow(false)} />
                                    </Modal>
                                    
                                    <a className="downloadCVbutton" href={CV} download>Téléchargez mon CV</a> 
                                </div>
                            </div>


                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row justify-content-center tab-pane-master">
                                    <p>Le Master I2A est un master général au cours duquel j'ai pu abordé plusieurs notions.</p>
                                    <p className="i2A">I2A : Informatique Avancée et Applications</p>
                                
                                    <div id="mainWrap" className="row justify-content-center col-12 col-sm-11 col-md-12">
                                        <div className="cardCont">
                                            <div className="cardBack">
                                                <ul>
                                                    <li>PHP / MySQL</li>
                                                    <li>HTML / CSS</li>
                                                    <li>Base de données : mariadb, mongodb, elasticsearch, cassandra</li>
                                                </ul>
                                            </div>
                                            <div className="cardFront">
                                                <p>Développement Web</p>
                                            </div>
                                        </div>
                                        <div className="cardCont">
                                            <div className="cardBack">
                                                <ul>
                                                    <li>Techniques de gestion de projet : méthodes agiles</li>
                                                    <li>Validation et preuve pour un modèle : notation B</li>
                                                </ul>
                                            </div>
                                            <div className="cardFront">
                                                <p>Génie Logiciel</p>
                                            </div>
                                        </div>
                                        <div className="cardCont">
                                            <div className="cardBack">
                                                <ul>
                                                    <li>Java : hérédité, polymorphisme, Design Patterns, Swing, algorithmique concurrente, communication dans les systèmes distribués : RMI, JMS, REST, SOAP...</li>
                                                    <li>Langage Scheme</li>
                                                </ul>
                                            </div>
                                            <div className="cardFront">
                                                <p>Programmation</p>
                                            </div>
                                        </div>
                                        <div className="cardCont">
                                            <div className="cardBack">
                                                <ul>
                                                    <li>Langage des contraintes OCL</li>
                                                    <li>Modélisation UML - Méta-modélisation</li>
                                                    <li>Langage de transformations : ATL </li>
                                                    <li>Cyber-sécurité</li>
                                                    <li>Vulnérabilités : par injection SQL/XSS, de type CRSF/authentification</li>
                                                    <li>Outils/méthodes de détection de vulnérabilités d'applications Web</li>
                                                </ul>
                                            </div>
                                            <div className="cardFront">
                                                <p>Ingénierie Dirigée par les Modèles et Sécurité</p>
                                            </div>
                                        </div>
                                        <div className="cardCont">
                                            <div className="cardBack">
                                                <ul>
                                                    <li>Concepts du système d'exploitation UNIX</li>
                                                    <li>Administration système</li>
                                                    <li>Environnement de travail - Commandes</li>
                                                    <li>Gestion de la sécurité</li>
                                                    <li>Adressage - Protocole - Gestion</li>
                                                </ul>
                                            </div>
                                            <div className="cardFront">
                                                <p>Réseau</p>
                                            </div>
                                        </div>
                                        <div className="cardCont">
                                            <div className="cardBack">
                                                <ul>
                                                    <li>Automates</li>
                                                    <li>Graphes</li>
                                                    <li>Algorithmique</li>
                                                    <li>Programmation : linéaire, dynamique, gloutonne</li>
                                                    <li>Machine de Turing</li>
                                                    <li>Intelligence artificielle</li>
                                                    <li>Méthodes formelles</li>
                                                    <li>Spécification, vérification et test</li>
                                                    <li>Informatique graphique : OpenGL</li>
                                                </ul>
                                            </div>
                                            <div className="cardFront">
                                                <p>Outils Mathématiques</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        

                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="tab-pane-hobbies row justify-content-center flex-direction-column">
                                    <Slideshow />
                                </div>  


                            </div>
                        </div>   
                    </div>
                </div>
            </div>


            {/************************* 3ème SECTION : CONTACT *************************/}

            <div id="contactMe" className="third-block">

                <div className="row justify-content-center">
                    <div className="text-contact col-xl-12">
                        <h2>CONTACTEZ-MOI</h2>
                        <h3>Joignable Via Différents Moyens</h3>
                        <p>N'hésitez à prendre contact avec moi afin que nous puissions<br />
                        échanger plus en détails</p>
                    </div>
                </div>

                <div className="row justify-content-center contactContainer">
                    <div className="col-10 col-md-8 col-lg-7 col-xl-3 contactBox">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.4354 2.58198C20.9352 2.0686 20.1949 1.87734 19.5046 2.07866L3.408 6.75952C2.6797 6.96186 2.16349 7.54269 2.02443 8.28055C1.88237 9.0315 2.37858 9.98479 3.02684 10.3834L8.0599 13.4768C8.57611 13.7939 9.24238 13.7144 9.66956 13.2835L15.4329 7.4843C15.723 7.18231 16.2032 7.18231 16.4934 7.4843C16.7835 7.77623 16.7835 8.24935 16.4934 8.55134L10.72 14.3516C10.2918 14.7814 10.2118 15.4508 10.5269 15.9702L13.6022 21.0538C13.9623 21.6577 14.5826 22 15.2628 22C15.3429 22 15.4329 22 15.513 21.9899C16.2933 21.8893 16.9135 21.3558 17.1436 20.6008L21.9156 4.52479C22.1257 3.84028 21.9356 3.09537 21.4354 2.58198Z" />
                        </svg>
                        <p>amelia.benlemouy@gmail.com</p>
                    </div>

                    <div className="col-10 col-md-8 col-lg-7 offset-xl-1 col-xl-3 contactBox">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1666 14.3797C17.4949 14.2352 16.9635 14.5471 16.493 14.8195C16.0111 15.1001 15.0949 15.8434 14.5697 15.6532C11.8808 14.5461 9.35189 12.1926 8.25714 9.49291C8.0642 8.95651 8.804 8.03445 9.08259 7.54691C9.35292 7.07496 9.65833 6.53856 9.51904 5.86183C9.39316 5.2537 7.76497 3.18192 7.18923 2.61538C6.80952 2.24115 6.42053 2.03532 6.02123 2.00205C4.51995 1.9376 2.84327 3.94078 2.54921 4.42C1.8125 5.44186 1.81663 6.80157 2.56159 8.45026C4.35693 12.8787 11.1472 19.5618 15.5922 21.4246C16.4125 21.8082 17.1626 22.0005 17.8364 22.0005C18.4957 22.0005 19.0828 21.8165 19.5874 21.4517C19.9681 21.2323 22.0534 19.4724 21.9987 17.9308C21.9657 17.5378 21.7604 17.1449 21.391 16.7644C20.8286 16.1833 18.7702 14.5066 18.1666 14.3797Z"/>
                        </svg>
                        <p>+ 33 (0)6 32 99 29 46</p>
                    </div>

                    <div className="col-10 col-md-8 col-lg-7 offset-xl-1 col-xl-3 contactBox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                        <a href="http://www.linkedin.com/in/benlemouyamelia">/benlemouyamelia</a>
                    </div>

                    
                </div>

                <div className="row justify-content-center">
                    {getRDV()}
                </div>

            </div>


            {/************************* Bouton Back To Top *************************/}

            <a className="scrollTop" href="#">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.52 2 22 6.49 22 12L21.9962 12.2798C21.8478 17.6706 17.4264 22 12 22C6.49 22 2 17.52 2 12C2 6.49 6.49 2 12 2ZM8 13.98C8.3 14.27 8.77 14.27 9.06 13.97L12 11.02L14.94 13.97C15.23 14.27 15.71 14.27 16 13.98C16.3 13.68 16.3 13.21 16 12.92L12.53 9.43C12.39 9.29 12.2 9.21 12 9.21C11.8 9.21 11.61 9.29 11.47 9.43L8 12.92C7.85 13.06 7.78 13.25 7.78 13.44C7.78 13.64 7.85 13.83 8 13.98Z" fill="#e0a94a"/>
                </svg>
            </a>

        </div>
    )
}
