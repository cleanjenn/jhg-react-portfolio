import React from 'react';

function Resume() {

    return (
        <section class="mb-5">
            <h1 className="resume">Résumé </h1>
            <hr></hr>
            <div class="row justify-content-center" id="resume">
                <div class="mt-5 pl-5 pr-5">
                    Welcome to my Portfolio my expertise include yet are not limited to high volume accounting, 
                    construction accounting and software engineering. 
                    I have knowledge in all accounting aspects from accounts receivables & payables, 
                    general ledgers, legal and accounting issues. Now added knowledge a full stack web Development which includes front and back end servers and programs.

                <p class="mt-5">
                        <a href="https://www.linkedin.com/in/jennifer-gomez-b152821bb/">
                            <img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="LinkedIn" /></a>
                    </p>
                    <p>
                        Download my full <a href="https://raw.githubusercontent.com/cleanjenn/jhg-react-portfolio/main/src/assets/images/Jennifer%20Gomez%20Resume.pdf" class="link">Résumé</a>
                        <br></br>
                    </p>
                </div>
            </div>

            <div class="justify-content-center mt-5">
                <div id="front-back">
                    <h2>Front End Experience</h2>
                    <p>HTML, CSS [Bootstrap, Foundation, Bulma], JavaScript, jQuery, React.js, IndexedDB</p>
                </div>

                <div id="front-back" class="mt-5">
                    <h2>Back End Experience</h2>
                    <p>
                        Node.js, Express.js, SQL [sqlite, mySQL, postgreSQL], Sequelize, NoSQL [MongoDB, Mongoose], Python, Django, API's [third-party, RESTful, server-side], Templating [Handlebars]
                </p>
                </div>
            </div>
        </section>
    );
}

export default Resume;
