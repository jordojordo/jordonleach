import React from 'react';

const Navigation = ({ onRouteChange }) => {
	return (
		<div className="nav-container avenir center">
			<nav className="navbar">
        <button className="w-20 dim bn f3 link pa4 br2 ma2" onClick={() => onRouteChange('home')}>Home</button>
        <button className="w-20 dim bn f3 link pa4 br2 ma2" onClick={() => onRouteChange('about')}>About</button>
        <button className="w-20 dim bn f3 link pa4 br2 ma2" onClick={() => onRouteChange('projects')}>Projects</button>
        <button className="w-20 dim bn f3 link pa4 br2 ma2" onClick={() => onRouteChange('contact')}>Contact</button>
    	</nav>
		</div>
	)
}

export default Navigation