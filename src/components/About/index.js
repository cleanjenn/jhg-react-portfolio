import React from 'react';

function About() {
    return (
        <section className="title">
            <h1 class="name">ABOUT: Jennifer</h1>
            <hr></hr>

            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <img class="mb-5" src="https://raw.githubusercontent.com/cleanjenn/jhg-react-portfolio/main/src/assets/images/self.jpg" alt="Jennifer, in the flowers" />
                    <p>
                        content will be placed here..........to be continued.
                    </p>

                        View full <a href="#/resume" class="link">Resume</a>
                </div>
            </div>
        </section>
    )
};
export default About;