import React from 'react';

const Navigation = ({ onRouteChange }) => {
	return (
		<div className="nav-container avenir center">
			<nav className="navbar">
        <button className="w-20 dim bn f3 link pa4 br2 ma2 center inline-flex" onClick={() => onRouteChange('home')}>Home</button>
        <button className="w-20 dim bn f3 link pa4 br2 ma2 center inline-flex" onClick={() => onRouteChange('about')}>About</button>
        <button className="w-20 dim bn f3 link pa4 br2 ma2 center inline-flex" onClick={() => onRouteChange('projects')}>Projects</button>
        <button className="w-20 dim bn f3 link pa4 br2 ma2 center inline-flex" onClick={() => onRouteChange('contact')}>Contact</button>
    	</nav>
		</div>
	)
}

export default Navigation