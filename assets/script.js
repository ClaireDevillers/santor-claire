let latestProjectTabs = document.querySelectorAll('.latest-project .tabs li');
let projectSquaresDivs = document.querySelectorAll('.latest-project .project-squares');

for (let i = 0; i < latestProjectTabs.length; i++) {
  latestProjectTabs[i].addEventListener('click',changeTab)
}

function changeTab(event) {
  hideSections()
  let tabId = event.target.id; // tab0
  let numeroDeTab = tabId.substr(3);
  let cible = "section" + numeroDeTab;
  let cibleElement = document.getElementById(cible)
  cibleElement.classList.remove("hidden");
}

function hideSections() {
  for (let i = 0; i < projectSquaresDivs.length; i++) {
    projectSquaresDivs[i].classList.add("hidden");
  }
}

$('.cards-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
});

let articles = document.querySelectorAll('.single-article')
for (let a of articles) {
  a.addEventListener('click', toggleShow)
}
function toggleShow(event) {
  let closest = $(this).closest('.single-article')
  closest.toggleClass("show")
}

// Scroll Handler
$(window).scroll(function() {
  var width = document.innerWidth;
  checkBodyScroll();
});

// Check animations for site
function checkBodyScroll() {
  //Fade in animation
  var height = $(window).height();
  $('.scroll-top').each(function () {

    if ($(window).scrollTop() + height / 1.5 > $(this).offset().top) {
      $(this).addClass('show');
    } else {
      $(this).removeClass('show');
    }
  });

  $('.animate').each(function () {
    let counter = $(this);
    console.log("animating..")
    if ($(window).scrollTop() + height / 1.5 > counter.offset().top) {
      if (!counter.hasClass('animation-loaded')) {
        counter.addClass('animation-loaded');
      }
    } else {
      counter.removeClass('animation-loaded');
    }
  });
}