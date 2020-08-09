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


const skillsList = ( arr ) => {

	const $skillList = $("#skills-list");
	arr.forEach( element => {
		console.log(element)
		const template = `
		<div class="card-container">
			<div class="card-container__skill">
				<p class="card-container__skill--text">${element.skill}: <span class="skill-card__bar"></span></p>
			</div>
			<div id="${element.id}" class="card-container__bar" />
		</div>
		`
		$skillList.append(template);

		$(`#${element.id}`).css( "background-image", `linear-gradient(-55deg, #dc8a8a ${element.level}%, red 10%)`);
	});
};

skillsList(skills);

{/* <div className="row justify-content-center">
<div className="col-3">
<h5 className="card-title text-center mt-2">{displayDate}</h5>
</div>
<div className="col-6" >
  <div className="mt-2 pogressBar" style={bar}></div>
</div>
<div className="col-3">
<h5 className="card-title mt-2 text-center">{storeCount}</h5>
</div>
</div> */}
