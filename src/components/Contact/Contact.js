import React from 'react';
import './contact.css';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import stackoverflow from '../images/stackoverflow.svg';
import linkedin from '../images/linkedin.svg';
import './contact.css';



const Contact = () => {
	return (
		<div>
			<div className="pa5 ma4 tc">
			  <a className="link near-black hover-silver dib h2 w3 ma5 dim" href="https://github.com/jordonleach" title="GitHub">
			  	<img class="contactIcon" src={github} alt="github" />
			  </a>
			  <a className="link hover-silver near-black dib h2 w3 ma5 dim" href="https://www.instagram.com/lordonjeach/" title="Instagram">
			  	<img class="contactIcon" src={instagram} alt="instagram" />
			  </a>
			  <a className="link hover-silver near-black dib h2 w3 ma5 dim" href="https://stackoverflow.com/users/story/10225946" title="Stack Overflow">
			  	<img class="contactIcon" src={stackoverflow} alt="stackoverflow" />
			  </a>
			  <a className="link hover-silver near-black dib h2 w3 ma5 dim" href="https://www.linkedin.com/in/jordon-leach" title="LinkedIn">
			  	<img class="contactIcon" src={linkedin} alt="linkedin" />
			  </a>
			</div>
			<div>
				<form action="mailto:jleachdevelopment@gmail.com" method="post" enctype="text/plain">
					<button className="w4 link dim br3 ph3 pv2 mb2 dib emailButton">Email</button>
				</form>
			</div>
		</div>
	)
}


export default Contact;