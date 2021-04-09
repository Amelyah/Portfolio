import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom"

export default function Header() {

    // Change color of the background on scroll
    const [isToggle, setIsToggle] = useState(false)
    const [isNavbar, setNavbar] = useState(false);

    const toggle = () => {
        if(isToggle){
            setIsToggle(false)
        }else{
            setIsToggle(true)
        }
    }

    const changeBackground = () => {
        if(window.scrollY > 50){
            setNavbar(true)
        }else setNavbar(false)
    }

    window.addEventListener('scroll', changeBackground)


    // Redirections
    useEffect(() => {
        if(window.location.hash === "#contactMe"){
            window.location.href='/#contactMe'
        }else if(window.location.hash === "#portfolio"){
            window.location.href='/#portfolio'
        }
    }, [])


    return (
        <div> 
            <nav id="changeScrollHeader" className={(isNavbar || isToggle) ? 'navbar navbar-expand-md nav-scroll-color' : 'navbar navbar-expand-md'} >
                <a className="navbar-brand d-flex" href="/">AB
                    <p className="point-carre">■</p>
                </a>
                
                <button onClick={toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="toggler-icon"></div>
                    <div className="toggler-icon"></div>
                    <div className="toggler-icon"></div>
                    <div className="toggler-icon"></div>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto mr-5" >
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#portfolio">Portfolio</a>
                        </li>                   
                        <li className="nav-item">
                            <a className="nav-link" href="/#contactMe">Contact</a>
                        </li>

                        <hr></hr>

                        <a className="svg-navbar" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </a>

                    </ul>
                </div>
                
            </nav>
        </div>
    )
}
