import React from "react";

function About() {
  return (
    <div>
      <div class="container">
          <div class="row">
              <div class="col-sm-2 col-xs-0"></div> 
              <div class="col-sm-8 col-xs-12 card">
                  <h2>About Me</h2>
                  <div class="container">
                    <div class="float-left col-xs-12">
                      <img class="img-thumbnail img-fluid imgMe" src="/Images/Me.jpg"></img>
                    </div>
                    <p> My Name is Nicholas Davies, I'm currently a student at UWA. I'm studying Computer Sciences as my major, but really I'm interested in many different areas of science, including Physics, Chemistry, and a few areas of Biology. I also enjoy mathematics a lot, I like the pureness and the logic to it. Most of my family use computers a lot in their careers, which sparked my interest in them at a young age. </p>
                    <br></br>
                    <p class="link"><a href="https://github.com/NickJDavies">GitHub</a></p>
                    <p class="link"><a href="https://github.com/NickJDavies">Resume</a></p>
                    <p class="link"><a href="https://github.com/NickJDavies">LinkedIn</a></p>
                  </div>
              </div>
            </div>  
          <div class="col-sm-2 col-xs-0"></div>
      </div>
    </div>
  );
}

export default About;
