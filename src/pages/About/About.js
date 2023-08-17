import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./about.css"

const About = () => {
    return (
        <>
            <Sidebar />
            <section id="about">
            <div class="header">
                <div class="background">ABOUT ME</div>
                <div class="over">Know Me Better</div>
                <div class="line"></div>
            </div>
                <div class="middle">
                    <div class="main">
                        <div class="title">I'm <span>Aimee UMUHOZA</span>{" "}Software Developer</div>
                        <div class="content">
                            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                        </div>
                    </div>
                    <div class="credentials">
                        <div class="text"><span>Name:</span>{" "}Aimee UMUHOZA</div>
                        <div class="text"><span> Email:  </span><span class="email">aimeeumuhoza1@gmail.com</span></div>
                        <div class="text"> <span>From:</span> Kigali RWANDA</div>
                        <div class="btn"><a href="../../files/umuhoza.pdf" download="CV">Download CV</a></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About