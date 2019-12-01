const projects = [
	{title: "burning Rubber",  description: "this is a racing game", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/", photo:"./images/Burnning_ Rubber.png"},
	{title: "Okstupi",  description: "this is a racing game vjfhkj", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/"},
	{title: "Revive",  description: "this is a racing game jbvkjs", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/"},
	{title: "Not yet",  description: "this is a racing game fksjdh", repoLink: "https://git.generalassemb.ly/ADamian17/burnning_rubber", gameLink: "https://pages.git.generalassemb.ly/ADamian17/burnning_rubber/"},
]


const showProjects = (arr) => {
	const $projectList = $('#project-list')
	for (let i = 0; i < arr.length; i++) {
		const template = 
			`<div class="row featurette">
			<div class="col-md-7">
				<h2 class="featurette-heading">${arr[i].title}.</h2>
				<p class="lead">${arr[i].description}</p>
			</div>
			<div class="col-md-5">
				<div class="card project-card">
					<img class="card-img-top"  src=${arr[i].photo} alt="imagen">
					<div class="card-body">
						<h5 class="card-title"><a href=${arr[i].repoLink} target="_blank">link to the repo</a></h5>
						<a href=${arr[i].gameLink} target="_blank" class="btn btn-primary">link to the game</a>
					</div>
				</div>
			</div>
		</div>
		<hr />`
		$projectList.append(template)
		console.log(`this is the photo ${arr[i].photo}`)
	}
	
}

showProjects(projects)