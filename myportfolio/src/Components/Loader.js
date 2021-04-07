import React from 'react';
import ReactLoading from 'react-loading';

var Spinner = require('react-spinkit');

export default function Loader() {

    return (
        <div className="Loader">
            <div className="spinner-container">
                <Spinner className="spinner-form" name='folding-cube' color="#e0a94a"/>
            </div>
        </div>
    )
}   
