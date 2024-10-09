document.getElementById("stButton").addEventListener("click", function () {
  const dropdownMenu = document.getElementById("dropdown");
  const isHidden = dropdownMenu.classList.toggle("hidden");
  this.textContent = isHidden ? "Start" : "Don't touch";
  const contentArea = document.getElementById("contentArea");
  const newPara = document.createElement("p");
  newPara.classList.add("newContent");
  newPara.innerHTML = "<p> </p>";
  contentArea.appendChild(newPara);
  document.querySelector("p").textContent = "N";
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function addContent(contentobj) {
  let content = `
  <h3>${contentobj.heading}</h3>
  <p>${contentobj.paragraph}</p>`;
  document.getElementById("content").innerHTML = content;
}

{
  /* <ul>${contentobj.map((item) => `<li>${item}</li>`).join("")}</ul> */
}
