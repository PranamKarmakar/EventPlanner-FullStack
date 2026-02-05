import React from 'react'
import Navbar from './NAVBAR/Navbar'
import './Services.css'

export default function Services () {
     






    return (
        <div>
          
            <title>Our Services - Event Management Services</title>
            <header>
                <h1>Event Management Services</h1>
            </header>
           <Navbar/>
            <main>
                <h2>Our Services</h2>
                <ul>
                    <li>
                        <h3>Wedding Planning</h3>
                        <p>We offer full-service wedding planning packages, including venue selection, catering, decor, entertainment, and more.</p>
                        <p><strong>Price:</strong> $5000+</p>
                        <a href="#" classname="cta-button">Learn More</a>
                    </li>
                    <li>
                        <h3>Corporate Events</h3>
                        <p>We specialize in planning and executing corporate events, from conferences and product launches to team building and appreciation events.</p>
                        <p><strong>Price:</strong> Contact us for a quote</p>
                        <a href="#" classname="cta-button">Learn More</a>
                    </li>
                    <li>
                        <h3>Social Events</h3>
                        <p>We also plan and coordinate social events such as birthday parties, anniversaries, and baby showers.</p>
                        <p><strong>Price:</strong> $1000+</p>
                        <a href="#" classname="cta-button">Learn More</a>
                    </li>
                    <li>
                        <h3>Party Rentals</h3>
                        <p>We offer party rental services, including catering, decoration, tent, and more for all kinds of events.</p>
                        <p><strong>Price:</strong> Varies depending on the rental package and event requirements</p>
                        <a href="#" classname="cta-button">Learn More</a>
                    </li>
                </ul>
            </main>
        </div>

    )
}
