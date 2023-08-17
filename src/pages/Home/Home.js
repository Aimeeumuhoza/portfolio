import React from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'


const Home = () => {
    return (
        <>
            <Sidebar />
            <section id="#home">
                <div class="main-content">
                    <div class="centering" >
                        <div class="header" style={{ marginTop: "250px" }}>Welcome</div>
                        <div class="intro">I'm a software developer.</div>
                        <div class="location">based in Kigali, Rwanda</div>
                        <div class="btn"><a href="#contact">Hire Me</a></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home