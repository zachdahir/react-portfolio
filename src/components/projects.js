import Carousel from 'react-bootstrap/Carousel';
import Trivia from "./images/trivia.jpg";
import GPA from "./images/gpa.png";
import Composer from "./images/comp.png";

function Projects() {
  return (
    <>
    <div className='bglight'>
    <div className="projects" id="projects">
        <h2 className="text-center">What I've Worked On...</h2>
        <div className='projects-card container'>
            <div className='card-body'>
                <Carousel>
                    <Carousel.Item>
                    <div className="card p-3 bg-dark">
                    <img className="project-img" src={GPA} alt="placeholder"></img>
                        <div className="card-body text-center">
                            <h4 className="">GPA Calculator</h4>
                            <a href="https://zachdahir.github.io/GPA-Calculator/session/sign-in"  className="btn btn-secondary center">Check it Out</a>
                        </div>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className=" card p-3 bg-dark">
                    <img className="project-img" src={Trivia} alt="placeholder"></img>
                        <div className="card-body text-center">
                            <h4 className="">JavaScript Trivia</h4>
                            <a href="https://zachdahir.github.io/simple.github.io/"  className="btn btn-secondary center">Check it Out</a>
                        </div>
                    </div>
                    </Carousel.Item> 

                    <Carousel.Item>
                    <div className=" card p-3 bg-dark">
                    <img className="project-img" src={Composer} alt="placeholder"></img>
                        <div className="card-body text-center">
                            <h4 className="">Composer Search</h4>
                            <a href="https://zachdahir.github.io/composer-app/"  className="btn btn-secondary center">Check it Out</a>
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>
                
            </div>
        </div>
    </div>
    </div>
    </>
    
  );
}

export default Projects;