import React from 'react'
import './HOME/EventManagementHome.css'
import Navbar from './HOME/NAVBAR/Navbar'
import Footer from './HOME/Footer'
import Carousel from './HOME/CAROUSEL/Carousel'
export default function Home() {







    return (
        <div>

            <title>Event Management Services</title>

            <header>
                <h1>Event Management Services</h1>

            </header>
            <Navbar />
            <main>
                <h2>Welcome to Event Management Services</h2>
                <p>We provide professional event planning and management services for corporate and private events. Our team of
                    experienced event planners can help you plan and execute your event from start to finish, ensuring a
                    memorable and successful experience for all attendees.</p>
                {/* <a href="#" classname="cta-button">Get in Touch</a> */}
                <Carousel/>
            </main>
            <Footer />
        </div>

    )
}
