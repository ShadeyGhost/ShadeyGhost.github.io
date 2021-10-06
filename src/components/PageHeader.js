const PageHeader = () => {
    
    const text = "Hello!";
    let i = -5;

    window.onload = function() {
        if (i < text.length) {
            document.querySelector("#typing__effect").innerHTML += text.charAt(i);
            i++;
            setTimeout(window.onload, 250);
        }
    }
    
    return(
        <main className="maincontent">
            <div className="maincontent--headertxt">
                <h1 id="typing__effect">
                    <img src="./images/ufo.png" alt="UFO" className="maincontent--ufo"/>
                </h1>
                <span className="headertxt--lineblinker"></span>
            </div>
            <h2>I'm Pabodha</h2>

        </main>

    );
}

export default PageHeader;