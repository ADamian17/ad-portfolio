import { projects } from './projects';
import { createContact } from './api/callToAction';
import * as utils from './utils/functs';

// NOTE Globals
const ctaForm = $('.cta__form');
const $modal = $('#modal');

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

// NOTE cta form
const getFormValues = async (e) => {
  try {
    e.preventDefault();

    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const message = $('#message').val();

    const data = {
      firstName: firstName,
      lastName: lastName,
      message: message,
    }

    const isValid = utils.validateForm(data);

    console.log(isValid);
    return;

    const res = await createContact(data);
    
    if (res.id) {
      $modal.css({
        display: 'flex'
      })
      e.target.reset();
    }

  } catch (error) {
    return console.log(error);
  }
}

ctaForm.on('submit', getFormValues)

$(document).scroll(handleScroll);

$modal.on('click', function(event) {
  $modal.css({
    display: "none" 
  });
});

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });