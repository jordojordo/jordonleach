import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';
import screenMockup from '../images/screenshot-mockup.png';
import faceRecog from '../images/face-recog.png';
import robofriends from '../images/robofriends.png';
import threadCoffee from '../images/thread-coffee.jpg';
import gradientGenerator from '../images/gradient-generator.png';
import supapp from '../images/supapp.png';
import threadLanding from '../images/thread-landing.png';
import blog from '../images/blog.png';

const Projects = () => {
	return (
		<div>
			<ProjectCard
				projectLink={'https://github.com/jordonleach/jobfinder'}
				imgLink={screenMockup}
				altImgName={'Job Finder'}
				projectName={'Job Finder Application'}
			/>
			<ProjectCard
				projectLink={'https://face-recoger.herokuapp.com'}
				imgLink={faceRecog}
				altImgName={'Face Recog'}
				projectName={'Facial Recognition App'}
			/>
			<ProjectCard
				projectLink={'https://www.threadcoffee.com/'}
				imgLink={threadCoffee}
				altImgName={'Thread Coffee'}
				projectName={'Thread Coffee Roasters'}
			/>
			<ProjectCard
				projectLink={'https://jordonleach.github.io/robofriends/'}
				imgLink={robofriends}
				altImgName={'Robo Friends'}
				projectName={'Contact List Template'}
			/>
			<ProjectCard
				projectLink={'https://jordonleach.github.io/Gradient-Generator/'}
				imgLink={gradientGenerator}
				altImgName={'Gradient Generator'}
				projectName={'Gradient Generator'}
			/>
			<ProjectCard
				projectLink={'https://supreme-apparel.com/'}
				imgLink={supapp}
				altImgName={'Supreme Apparel'}
				projectName={'Supreme Apparel'}
			/>
			<ProjectCard
				projectLink={'https://jordonleach.github.io/Thread-Landing/'}
				imgLink={threadLanding}
				altImgName={'Thread Landing'}
				projectName={'Email Subcription Template'}
			/>
			<ProjectCard
				projectLink={'https://jordonleach.github.io/hollypupholly/'}
				imgLink={blog}
				altImgName={'Blog Template'}
				projectName={'Blog Template'}
			/>
		</div>
	)
}


export default Projects;