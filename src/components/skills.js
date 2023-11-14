import Fade from 'react-reveal/Fade';

function Skills(){
  let frontendSkills = [{ Id: "1", Name: "HTML"},{ Id: "2", Name: "CSS"}, { Id: "3", Name: "JavaScript"}, { Id: "4", Name: "TypeScript"}, { Id: "5", Name: "Bootstrap"}];
  let backendSkills =  [{ Id: "1", Name: "C#"},{ Id: "2", Name: "Python"}, { Id: "3", Name: "Java"}, { Id: "4", Name: "MongoDB"}, { Id: "5", Name: "NoSQL"}];
  let developmentTools =   [{ Id: "1", Name: "Azure Devops"},{ Id: "2", Name: "Git"}, { Id: "3", Name: "Visual Studio"}, { Id: "4", Name: "Waterfall"}, { Id: "5", Name: "Agile"}];

  return (
    <>
    <div className='skillsContainer flex'>

      <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="bgdark" height="75" width="auto" display="flex">
        <path d="M0 0 L50 100 L100 0 Z" fill="#f4f4f4"></path>
      </svg>
      
      <div className='skills'>
      <div className='container flex'>
        <h2 className="text-center display-4 pt-5" style={{color: 'white'}}>
          Technology I Have Experience With
        </h2>
        <div className="container pb-5">
          <div className="row">
            <div className="col-sm-4">
              <div className="skills-card container p-3">
                <h3 className="text-center hlblue">Front-End</h3>
                <Fade top big cascade>
                  <ul>
                    {frontendSkills.map((skill) => <li key={skill.Id}>{skill.Name}</li>)}
                  </ul>
                </Fade>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="skills-card container p-3">
                <h3 className="text-center hlblue">Development Tools</h3>
                <Fade top big cascade>
                  <ul>
                    {developmentTools.map((tool) => <li key={tool.Id}>{tool.Name}</li>)}
                  </ul>
                </Fade>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="skills-card container p-3">
                <h3 className="text-center hlblue">Back-End</h3>
                <Fade top big cascade>
                  <ul>
                    {backendSkills.map((skill) => <li key={skill.Id}>{skill.Name}</li>)}
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <svg preserveAspectRatio="none" viewBox="0 0 100 100" className="bglight" height="75" width="auto" display="flex">
        <path d="M0 0 L50 100 L100 0 Z" fill="#252934"></path>
      </svg>
    </div>
  </>
  )
}

export default Skills;
