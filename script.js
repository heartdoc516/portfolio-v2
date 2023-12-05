rightPanelElement = document.getElementById("right");
gradientColor = "rgba(56,56,251,0.4)";
function setGradient(e) {
  // Get the viewport width and height
  var vw = window.innerWidth;
  var vh = window.innerHeight;

  var percentX = (e.clientX / vw) * 100;
  var percentY = (e.clientY / vh) * 100;

  gradientElement = document.getElementById("gradient");

  gradientElement.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, ${gradientColor} 0%, rgba(6,0,34,0.4) 40%)`;
}

document.addEventListener("mousemove", setGradient);

// Function to set the active class based on the target element's visibility
function setActiveClass() {
  var links = document.querySelectorAll(".link");

  links.forEach(function (link) {
    var targetId = link.getAttribute("href").substring(1);

    var targetElement = document.getElementById(targetId);

    // Get the target element's position
    var targetRect = targetElement.getBoundingClientRect();

    // Check if the target element is in view

    console.log(
      `target.top ${targetRect.top} \n targetRect.bottom ${targetRect.bottom} window.innerHeigh ${window.innerHeight} clientHeight ${document.documentElement.clientHeight}`
    );
    if (targetRect.top >= 0 && targetRect.top <= 300) {
      links.forEach(function (link) {
        link.classList.remove("active");
      });

      // Set the active class on the link associated with the in-view target element
      link.classList.add("active");
    }
  });
}

// Function to handle link clicks
function handleLinkClick(event) {
  var clickedLink = event.target;

  // Add the "active" class to the clicked link
  links.forEach(function (link) {
    link.classList.remove("active");
  });
  clickedLink.classList.add("active");
}

// Attach event listener to the scroll event

rightPanelElement.addEventListener("scroll", setActiveClass);

// Attach click event listeners to each link
var links = document.querySelectorAll(".link");
links.forEach(function (link) {
  link.addEventListener("click", handleLinkClick);
});

// Initial call to set active class on page load
setActiveClass();
