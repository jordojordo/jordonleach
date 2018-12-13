import React from 'react';
import './about.css';
import avatar from '../images/avatar.jpg';

const About = () => {
	return (
		<div>
			<article className="w-40 h-40 center br3 pa3 pa4-ns mv3 ba shadow-5 b--black-10 about-card">
			  <div className="tc">
			    <img src={avatar} className="br-100 h3 w3 dib grow-large" alt="Jordo"/>
			    <h1 className="f3">Jordon Leach</h1>
			    <hr className="mw3 bb bw1 b--black-10"/>
			  </div>
			  <p className="lh-copy measure center f5">
			  	A self-taught and dedicated developer building responsive, 
			  	hospitable, lightweight websites and mobile applications 
			  	with a strong focus on accessibility and readability.
			  </p>
			</article>
		</div>
	)
}


export default About;