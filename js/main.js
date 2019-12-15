// functions
const showProjects = (arr) => {
	const $projectList = $('#project-list')
	for (let i = 0; i < arr.length; i++) {
		const template = 
		`	<div class="col-12 col-md-6 col-sm-6 col-lg-6 pb-5 projects-holder">
				<div class="card">
				<img src=${arr[i].photo} class="card-img-top" alt="photo">
				<div class="card-body flex-fill">
					<h5 class="card-title">${arr[i].title}</h5>
					<p class="card-text">${arr[i].description}.</p>
					<a href=${arr[i].repoLink} class="btn btn-primary rounded-pill float-right" target="_blank">code</a>
					<a href=${arr[i].demoLink} class="btn btn-primary rounded-pill float-right mr-2" target="_blank">Demo</a>
				 </div>
			  </div>
			 </div>
			 `
		$projectList.append(template)
	}
	
}

showProjects(projects)



