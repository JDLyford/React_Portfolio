import React from 'react';

import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>My Links</h3>
                <hr className="sub"/>
                <p className="text-faded contact dark">To fulfill your dream, you need to have a dream first. You can have an image, a desire, or a wish of what you want to become. Don't forget about it, and keep wishing for it. That's the first step to fulfilling your dream.</p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="_blank" rel="noopener noreferrer" href="https://github.com/JDLyford"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joseph-lyford-829057110/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>

                </div>

              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 
            <div className="right">Built with React and MaterializeCSS</div> 
            </div>
          </div>
        </section>
    );
}