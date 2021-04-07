// OUTILS
import React from 'react'
import Typewriter from 'typewriter-effect/dist/core'


export default function TypeWriter(props) {

    var typeWriterZone = document.getElementById('typeWriterId');
    
    var typewriter = new Typewriter(typeWriterZone, {
        loop: true,
        delay: 120,
    });

    typewriter
        .pauseFor(100)
        .deleteAll()
        .typeString(props.texte)
        .deleteChars(props.texte.length)
        .start()


    return (
        <div className="typewriter-container">
            <div id="typeWriterId"> </div>
        </div>
    )
}
