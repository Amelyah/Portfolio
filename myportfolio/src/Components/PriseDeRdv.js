// OUTILS
import React, { useEffect } from 'react'
import { InlineWidget } from "react-calendly"

export default function PriseDeRdv() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <div className="calendly">
            <div className="row justify-content-center">
                {/*<div className="col-8 col-sm-8 col-md-10"> </div>*/}
                    <div className="containerH3">
                    <h3>On papote un peu ?</h3>
                </div>
            </div>

            {/************************* Calendly - Prise de RDV automatique *************************/}
            <InlineWidget url="https://calendly.com/amelia-benlemouy/prise-de-contact-stage" />
        </div>
    )
}
