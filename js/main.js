// NOTE Project list
const showProjects = (arr) => {
  const $projectList = $('#project-list');

  for (let i = 0; i < arr.length; i++) {
    let template = `
    <article class="project">
    <div class="project__picture">
      <div class="project__backdrop" style="--background-image: url(../${arr[i].photo})"></div>

      <img src=${arr[i].photo} alt="project image" class="project__img">
    </div>
    <div class="project__content">
      <h2 class="heading-2 heading-2--dark mb-md">&ldquo;${arr[i].title}&rdquo;</h2>

      <p class="project__text">
      ${arr[i].description}
      </p>
      <div class="btn__group">
        <a class="btn" href=${arr[i].demoLink} target="_blank">live Demo</a>
        <a class="btn" href=${arr[i].repoLink} target="_blank" >Github Repo</a>
      </div>
    </div>
  </article>
  `;
    $projectList.append(template);
  }
};

showProjects(projects);

// NOTE handle scroll event
const handleScroll = () => {
  let scrolled = $(document).scrollTop();

  if (scrolled >= 1000) {
    $('.back-to-the-top').css({
      visibility: 'visible',
      'pointer-events': 'all',
    });
  } else {
    $('.back-to-the-top').css({
      visibility: 'hidden',
      'pointer-events': 'none',
    });
  }
};

$(document).scroll(handleScroll);

console.log(process.env.HELLO_WORLD)
