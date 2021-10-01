const PageHeader = () => {
    return(

        <main className="main-section">
        <div className="welcome-message">
            <h1>Welcome! <br /> I'm Pabodha</h1>
            <p>I’m a Web Developer / Web Designer<br />
                Html, Css, Javascript, React, Nodejs, Php are some of my most used Technologies</p>
                <button className="contact-btn">CONTACT ME</button>
        </div>

        <div className="skills-sec">
            <div className="bitmoji-sec">
                <div className="lang-icon" id="html-ico">
                    <div className="lang-info">
                        <h3>HTML</h3>
                        <p>Hyper Text Markup Language. Used to Markup Web pages.</p>
                    </div>
                    <img src="./images/htmlSVG.png" alt="Html icon" height="60"/>
                </div>
                <div className="lang-icon" id="css-ico">
                    <div className="lang-info">
                        <h3>CSS</h3>
                        <p>CSS is used to style Web Pages that uses HTML.</p>
                    </div>
                    <img src="./images/cssSVG.png" alt="Css icon" height="60"/>
                </div>
                <div className="lang-icon" id="js-ico">
                    <div className="lang-info">
                        <h3>JS</h3>
                        <p>Javascript is mostly used to control user interactions in DOM.</p>
                    </div>
                    <img src="./images/jsSVG.png" alt="Javascript icon" height="60"/>
                </div>
                <div className="lang-icon" id="node-ico">
                    <img src="./images/nodeSVG.png" alt="Node.js icon" height="60"/>
                    <div className="lang-info">
                        <h3>NODE.JS</h3>
                        <p>Node.js is a JavaScript runtime environment.</p>
                    </div>
                </div>
                <div className="lang-icon" id="react-ico">
                    <img src="./images/reactSVG.png" alt="React icon" height="60"/>
                    <div className="lang-info">
                        <h3>REACT</h3>
                        <p>React is a JavaScript library for building UI s.</p>
                    </div>
                </div>
                <div className="bitmoji">
                    <img src="./images/bitmoji.png" alt="My Bitmoji" height="300"/>
                </div>
            </div>

        </div>

        </main>

    );
}

export default PageHeader;