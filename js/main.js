// functions
const showProjects = ( arr ) => {
	const $projectList = $('#project-list')
	for (let i = 0; i < arr.length; i++) {
		const template = 
		`	<div class="col-12 col-md-6 col-sm-6 col-lg-6 projects-holder">
				<div class="card project-card">
					<img class="project-card__img card-img-top" src=${arr[i].photo} alt="Person in a jumping">
					<div class="project-card__caption">
						<h5 class="card-title">${arr[i].title}</h5>
						<p class="card-text">${arr[i].description}.</p>

						<a href=${arr[i].repoLink} class="btn btn-primary rounded-pill" target="_blank">Code</a>
						<a href=${arr[i].demoLink} class="btn btn-primary rounded-pill mr-2" target="_blank">Demo</a>
					</div>
				</div>
			 </div>
			 `
		$projectList.append(template)
	}
	
};

showProjects(projects);
