import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socialicons = () => {
    return(
        <div className="social-icons">
            <a href="https://github.com/ShadeyGhost">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://www.linkedin.com/in/pabodha-pathirana-775b34216/">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a href="https://twitter.com/Shadey_Ghost">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://codepen.io/Shadey_Ghost">
                <FontAwesomeIcon icon={['fab', 'codepen']} />
            </a>
            <span className="vertical-line"></span>
        </div>
    );
}

export default Socialicons;