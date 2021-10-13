import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <section className="about">
            <div className="about--inner-layer">
                <div className="section-name">
                    <hr />
                    <h2>./About</h2>
                </div>
                <div className="about--info">
                    <img src="./images/port-img.png" alt="Pabodha"/>
                    <div className="info--content">
                        <p>Hello! My name is Pabodha Miyuranga and I enjoy developing 
                            things. About 2 years ago tried out python out of curiosity 
                            and that’s when it all started. Currently my interest is in 
                            front-end web development. Sometimes I design websites as to 
                            learn the concepts of UI/UX. <br /><br />
                            I’m currently a student at Bomiriya Central College doing A/Ls
                            (stressss). 
                        </p>
                        <div className="info--content__skills">
                            <p><br />Some technologies I've been using recently,</p>
                            <div className="content__skills--icons">
                                <FontAwesomeIcon icon={['fab', 'html5']} />
                                <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                                <FontAwesomeIcon icon={['fab', 'js-square']} />
                                <FontAwesomeIcon icon={['fab', 'git-alt']} />
                                <FontAwesomeIcon icon={['fab', 'react']} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;