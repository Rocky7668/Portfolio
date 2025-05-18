$(document).ready(function () {
  // navbar toggle
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // scroll & load event
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }
  });

  // fetch and display projects on page load
  getProjects().then(data => {
    showProjects(data);
  });
});

// tab visibility change
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Projects | Portfolio Jigar Sable";
    $("#favicon").attr("href", "/assets/images/profile.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "/assets/images/favhand.png");
  }
});

// fetch projects
function getProjects() {
  return fetch("projects.json")
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

// render projects
function showProjects(projects) {
  let projectsContainer = document.querySelector(".work .box-container");

  // add inline grid styling to container
  projectsContainer.setAttribute("style", "display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; justify-items: center; padding: 1rem;");

  let projectsHTML = "";

  projects.forEach(project => {
    projectsHTML += `
      <div class="grid-item ${project.category}" style="width: 100%; max-width: 350px;">
        <div class="box tilt" style="width: 100%; margin: 1rem;">
         <img draggable="false" src="${project.image}" alt="${project.name}" style="width: 100%; height: fix-content; object-fit: cover; display: block;" />

          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });

  projectsContainer.innerHTML = projectsHTML;
}

// Tawk.to live chat integration
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();

// disable developer tools shortcuts
document.onkeydown = function (e) {
  if (e.keyCode == 123 ||
    (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(String.fromCharCode(e.keyCode))) ||
    (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
    return false;
  }
}
