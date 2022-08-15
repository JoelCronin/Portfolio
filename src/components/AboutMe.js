import React from 'react';
import profilePic from '../assets/pp.jpg'

//About Me component
export default function AboutMe() {

  return (
    <section className="container-1">
        <aside className="profile" id="profile-id">
            <img src= {profilePic} alt="profile-pic" className="profPic"/> <br/><br/>
            <h2>Joel Cronin</h2> <br/>
            <p>Full Stack Developer</p><br/>
            <p> UofT SCS Graduate</p><br/>
        </aside>
        <section className="bio" id="bio-id">
            <h2>About me</h2><br/>
            <p>Originally from London, UK I moved to Toronto in March 2022. Having spent seven successful years as a Mechanical and Electrical Engineer with London Underground, I'm now broadening my skill set to focus on web development. </p><br></br>
            <p>To kick start this process, I enrolled with the University of Toronto's School of Continuous Studies Coding & Web Development course. In this rigorous and fast-paced course I learnt all the fundamentals of full stack web development (check out the Resume section for a full list) and now I am eager to implement these new found skills in the workplace. </p><br></br>
            <p> Head over to the portfolio tab for a selection of the individual and group projects that demonstrate these skills!</p> <br></br>
              
        </section>
    </section>
  );
}
