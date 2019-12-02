const projects = [
	{title: "Burning Rubber",  description: "this is a racing game Akskjdcskcnkkc ksdjckjckscnkk", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/", photo:"../images/burnning_rubber.png"},
	{title: "burning Rubber",  description: "this is a racing game", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/", photo:"../images/burnning_rubber.png"},
	{title: "burning Rubber",  description: "this is a racing game", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/", photo:"../images/burnning_rubber.png"},
	{title: "burning Rubber",  description: "this is a racing game", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/", photo:"../images/burnning_rubber.png"},
]

// functions

const showProjects = (arr) => {
	const $projectList = $('#project-list')
	for (let i = 0; i < arr.length; i++) {

		const template = 
		`	<div class="col-12 col-md-6 col-sm-6 col-lg-6 pb-5 projects-holder">
				<div class="card">
				<img src=${arr[i].photo} class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title"><a href=${arr[i].repoLink} target="_blank">${arr[i].title}.</a></h5>
					<p class="card-text">${arr[i].description}.</p>
					<a href=${arr[i].gameLink} class="btn btn-primary rounded-pill float-right">Demo</a>
				 </div>
			  </div>
			 </div>
			 `
		$projectList.append(template)
	}
	
}

showProjects(projects)



