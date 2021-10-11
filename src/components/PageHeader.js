import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageHeader = () => {
    
    //Debouncing method to stop vhGen function from running at every resize
    const debounce = (fn) => {
        let timeoutId;
        return function() {
            if (timeoutId) {
                clearTimeout(timeoutId);  //Clearing the timeout if it's already set
            }
    
            timeoutId = setTimeout(() => {
                fn();
            }, 100);
        }
    } 

    //To get the exact vh in mobile devices
    const vhGen = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    vhGen();

    //Running the function on resizing
    window.addEventListener('resize', debounce(() => vhGen()) );
    
    return(
        <main className="maincontent">
            <div className="headline">
                <span className="headline--vert-line" />
                <div className="headline--img-container">
                    <img src="./images/port-img.png" alt="Pabodha" className="headline--img" />
                </div>
            </div>

            <div className="headertxt">
                <h1>Pabodha Miyuranga</h1>
                <h1 className="trans-text">I'm a front-end developer</h1>
                <p className="trans-text">I spend most of my time designing and developing websites and searching for new things to learn and adapt.</p>
                
                <div className="social-icons-mobile">
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
                </div>
            </div>

        </main>
        

    );
}

export default PageHeader;