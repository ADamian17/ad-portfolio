// NOTE Nav
const $nav = document.querySelector('.nav');
const $closeIcon = document.getElementById('close-icon');
const $openIcon = document.getElementById('open-icon');
const $navItems = document.querySelectorAll('.nav__item');
console.log($navItems);

$nav.style.display = 'none';

$openIcon.addEventListener('click', function (e) {
  this.style.display = 'none';
  $nav.style.display = 'flex';

  $navItems.forEach((el) => {
    el.style.display = 'flex';
    el.style.animation = 'fromLeft .5s linear easy';
  });
});

$closeIcon.addEventListener('click', function (e) {
  $nav.style.display = 'none';
  $openIcon.style.display = 'block';

  $navItems.forEach((el) => {
    el.style.display = 'none';
  });
});

// // NOTE Project list
// const showProjects = (arr) => {
//   const $projectList = $('#project-list');
//   for (let i = 0; i < arr.length; i++) {
//     const template = `	<div class="col-12 mb-5 col-md-6 col-sm-6 col-lg-6 projects-holder">
// 				<div class="card project-card">
// 					<img class="project-card__img card-img-top" src=${arr[i].photo} alt="Person in a jumping">
// 					<div class="project-card__caption">
// 						<h5 class="card-title">${arr[i].title}</h5>
// 						<p class="card-text">${arr[i].description}.</p>

// 						<a href=${arr[i].repoLink} class="btn btn-primary rounded-pill" target="_blank">Code</a>
// 						<a href=${arr[i].demoLink} class="btn btn-primary rounded-pill mr-2" target="_blank">Demo</a>
// 					</div>
// 				</div>
// 			 </div>
// 			 `;
//     $projectList.append(template);
//   }
// };

// showProjects(projects);

// // NOTE Skill list
// const skillsList = (arr) => {
//   const $skillList = $('#skills-list');

//   arr.forEach((element) => {
//     const template = `
// 		<div class="card-container">
// 			<div class="card-container__skill">
// 				<p class="card-container__skill--text">${element.skill}: <span class="skill-card__bar"></span></p>
// 			</div>
// 			<div id="${element.id}" class="card-container__bar" />
// 		</div>
// 		`;

//     $skillList.append(template);

//     $(`#${element.id}`).css(
//       'background-image',
//       `linear-gradient(-55deg, #dc8a8a ${element.level}%, red 10%)`
//     );
//   });
// };

// skillsList(skills);

// // NOTE handle scroll event
// const handleScroll = () => {
//   let scrolled = $(document).scrollTop();
//   // console.log( "scrolled:", scrolled);

//   // if ( scrolled >= 1000 ) {
//   // 	$( "#main-navbar" ).removeClass( "fixed-top" )
//   // } else {
//   // 	$( "#main-navbar" ).addClass( "fixed-top" )
//   // }

//   if (scrolled >= 1400) {
//     // $( ".skill-card" ).css( "opacity", 0 )
//     $('.skill-card').addClass('skill-card--animated');
//   } else {
//     // $( ".skill-card" ).css( "opacity", 1 )
//     $('.skill-card').removeClass('skill-card--animated');
//   }
// };

// $(document).scroll(handleScroll);
