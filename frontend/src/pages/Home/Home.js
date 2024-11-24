import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>ZENFLOW</h1>
  
            </div>

            <h1 className="description1">A Yoga </h1>
            <h1 className='description2'>AI Trainer</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <indexbutton
                            className="btn-start"
                        >Let's Start</indexbutton>
                    </Link>
                    <br />
                    <Link to='/tutorials'>
                        <indexbutton
                            className="btn-tutorial"
                        >Tutorials</indexbutton>
                    </Link>

                </div>
            </div>
        </div>
    )
}

