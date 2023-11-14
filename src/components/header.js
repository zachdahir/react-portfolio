import github from ".//images/github.png";
import linkedin from ".//images/linkedin.png";
function Header () {
    return (
        <>
          <div className="parallax-container" id="top">    
            <div className="header">
            <h1 className="text-center display-1 pt-5">Zachary Dahir</h1>
            <h2 className="text-center display-4 font-weight-bold">
              Software Developer
            </h2>
              <div className="row">
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
              
            </div>
            
          </div>

        </>
    )
}

export default Header