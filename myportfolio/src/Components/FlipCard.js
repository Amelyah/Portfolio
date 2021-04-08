import React, {useState}  from 'react'
import ReactCardFlip from 'react-card-flip'

export default function FlipCard(props) {

    const [isFlipped, setFlipped] = useState(false)

    const handleClick = () => {
        //e.preventDefault();
        setFlipped(!isFlipped);
    }


    return (
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className="front-card" onClick={handleClick}>
                    <h4>{props.frontContent}</h4>
                </div>

                <div className="back-card" onClick={handleClick}>
                    {props.backContent}
                </div>
            </ReactCardFlip>
        </div>
    )
}
