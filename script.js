document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
  
    header.addEventListener("click", function() {
      header.style.backgroundColor = "#ff0000";
    });
  });
  
 // JavaScript code
function toggleProject(projectId) {
  const projectList = document.getElementById(projectId);
  projectList.classList.toggle("show");
}
