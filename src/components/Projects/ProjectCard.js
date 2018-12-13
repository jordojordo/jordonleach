import React from 'react';

const ProjectCard = ({ projectLink, imgLink, altImgName, projectName }) => {
	return (
		<article class="br2 ba grow dark-gray shadow-5 b--black-10 w-30 vh-30 min-vh-30 ma4 project-card">
		  <a href={projectLink}>
		  	<img src={imgLink} class="db w-100 br2 br--top" alt={altImgName} />
		  </a>
		  <div class="pa2 ph3-ns pb3-ns">
		    <div class="dt w-100 mt1">
		      <div class="dtc">
		        <h1 class="f5 mv0">{projectName}</h1>
		      </div>
		    </div>
		  </div>
		</article>
	);
}

export default ProjectCard;