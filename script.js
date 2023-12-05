function setGradient(e) {
  // Get the viewport width and height
  var vw = window.innerWidth;
  var vh = window.innerHeight;

  rightPanel = document.querySelector(".right");
  console.log(rightPanel.scrollTop);

  rightPanel.addEventListener("scroll", function () {
    console.log(rightPanel.scrollTop);
    var percentX = (e.clientX / vw) * 20 + 130;
    var percentY = (e.clientY / vh) * rightPanel.scrollTop * 0.6;

    // Set the gradient as the body background
    gradientEl = document.getElementById("gradient");
    gradientEl.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%,rgba(0,170,255,0.3) 0%, rgba(0,0,0,0.3) 60%)`;
  });
}

// Add event listener to call the function on mousemove
document.addEventListener("mousemove", setGradient);
