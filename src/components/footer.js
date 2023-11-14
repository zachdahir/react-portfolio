import github from ".//images/github.png";
import linkedin from ".//images/linkedin.png";
function Footer () {
    return (
        <>
            <div className="footer">
                
                    <a  className=" row icon-bottom" href="#top">                <icon className="icon fa-rotate-270">&#187;   </icon> </a>
             

                <div className="row footer-logo">
                    <div className="col">
                    <a className="mx-auto" href="https://github.com/zachdahir?tab=repositories">
                    <img                
                    src={github}
                    alt="github logo"
                    style={{ width: 42, height: 42, margin: 5}}
                    ></img>
                   
                    </a>
                    <a className="mx-auto" href="https://www.linkedin.com/in/zach-dahir-74b4a51bb">
                    <img
                    src={linkedin}
                    alt="linkedin logo"
                    style={{ width: 42, height: 42, margin: 5}}
                    ></img>
                </a>
                </div>
                </div>
                <div className="row">
                    <h2 className="hlpink">&lt;&#47;Zach Dahir&gt;</h2>    
              </div>          
            </div>
        </>
    )
}

export default Footer