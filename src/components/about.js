import profilePic from ".//images/bg.jpg";

function About () {
    return (
        <>
        <div className="flex bglight" id="about">
            <div className="row">
                <div className="col">
                    <h2 className="text-center display-4">Hello</h2>
                    <p className="text-center">
                    Hello! My name is Zach, a software developer based out of Omaha, Ne.
                    I was a student at Bellevue University, there I obtained a Bachelor's 
                    of Science in Web Developement. I now work at CHR Solutions as a Jr.
                    Software Developer.
                    </p>
                </div>

                <div className="col">
                    <img className="oval-image"
                    src={profilePic}
                    alt="placeholder"
                    ></img>
                </div>
            </div>
        </div>  
        </>
    )
}

export default About