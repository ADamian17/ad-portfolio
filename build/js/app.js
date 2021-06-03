/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("// NOTE Project list\nconst showProjects = (arr) => {\n  const $projectList = $('#project-list');\n\n  for (let i = 0; i < arr.length; i++) {\n    let template = `\n    <article class=\"project\">\n    <div class=\"project__picture\">\n      <div class=\"project__backdrop\" style=\"--background-image: url(../${arr[i].photo})\"></div>\n\n      <img src=${arr[i].photo} alt=\"project image\" class=\"project__img\">\n    </div>\n    <div class=\"project__content\">\n      <h2 class=\"heading-2 heading-2--dark mb-md\">&ldquo;${arr[i].title}&rdquo;</h2>\n\n      <p class=\"project__text\">\n      ${arr[i].description}\n      </p>\n      <div class=\"btn__group\">\n        <a class=\"btn\" href=${arr[i].demoLink} target=\"_blank\">live Demo</a>\n        <a class=\"btn\" href=${arr[i].repoLink} target=\"_blank\" >Github Repo</a>\n      </div>\n    </div>\n  </article>\n  `;\n    $projectList.append(template);\n  }\n};\n\nshowProjects(projects);\n\n// NOTE handle scroll event\nconst handleScroll = () => {\n  let scrolled = $(document).scrollTop();\n\n  if (scrolled >= 1000) {\n    $('.back-to-the-top').css({\n      visibility: 'visible',\n      'pointer-events': 'all',\n    });\n  } else {\n    $('.back-to-the-top').css({\n      visibility: 'hidden',\n      'pointer-events': 'none',\n    });\n  }\n};\n\n$(document).scroll(handleScroll);\n\nconsole.log(\"hello!!!!!\")\n\n\n//# sourceURL=webpack://ad-portfolio/./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.js"]();
/******/ 	
/******/ })()
;