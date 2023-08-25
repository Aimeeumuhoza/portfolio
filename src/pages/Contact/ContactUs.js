import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./contactUs.css"

const Contact = () => {
    return (
        <>
            <Sidebar />
            <section id="contact">
                <div class="header">
                    <div class="over">Get in touch</div>

                </div>
                <div class="middle">
                    <div class="main">
                        <div class="title">Address</div>
                        <div class="content">
                            <p>Rwanda ,Kigali </p>
                            <p>(+250) 7888888</p>
                            <p>aimee@gmail.com</p>
                        </div>
                    </div>
                    {/* <div class="credentials">
                        <div class="text"><span>Name:</span>{" "}Aimee UMUHOZA</div>
                        <div class="text"><span> Email:  </span><span class="email">aimeeumuhoza1@gmail.com</span></div>
                        <div class="text"> <span>From:</span> Kigali RWANDA</div>
                        <div class="btn"><a href="../../files/umuhoza.pdf" download="CV">Send message</a></div>
                    </div> */}
                    <div class="credentials">
                        <div class="input-group">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div class="input-group">
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div class="textarea-group">
                            <textarea placeholder="Write your message"></textarea>
                        </div>
                        <div class="button">
                            <button>Send message</button>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Contact
