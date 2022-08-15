import React from 'react'

//Resume Component
function Resume() {
  return (
    <div className='skills'>
      <div id='skillTitle'> <br />
      <h4> Skills and Proficiencies:</h4> <br/>
      </div>
      <div id='skillPoints'>
        <div className='frontend'>
          <h4 className='endType'>Front End</h4> <br />
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript / ES6+</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
          </ul> <br />
        </div>
        <div id='backend'>
        <h4 className='endType'>Back End</h4><br />
          <ul>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL / MySQL / Sequelize</li>
            <li>Inquirer</li>
            <li>MongoDB / Mongoose</li>
            <li>GraphQL</li>
            <li>JSON</li>
          </ul> <br /> 
        </div>
      </div>
      <div className='general'>
      
        <ul className='last' >
        <h4 className='resumeHead'>General</h4> <br></br>
            <li>MERN Stack</li>
            <li>MVC Framework</li>
            <li>GitHub</li>
            <li>Heroku</li>
            
        </ul> <br></br><br />
        
      </div>
      <br></br> <br></br><h4 className='resumeHead'>A copy of my Resume can be downloaded <a href='https://drive.google.com/file/d/1D6-nPLz84zxxUJtwQucDHUmnEFuTJvTV/view?usp=sharing' target= 'blank'>here</a></h4><br />
    </div>
  )
}

export default Resume