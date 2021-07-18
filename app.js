import Algorithmer from './Algorithmer.js';
const grid = document.querySelector("#grid-container");

document.getElementById("reset").addEventListener("click", function () {
  document.querySelectorAll("#grid-container > div").forEach(x => x.removeAttribute("class"))
});

for (const y of [...Array(41).keys()].slice(1)) {
  for (const x of [...Array(41).keys()].slice(1)) {
    const div = document.createElement("div");
    div.style.gridRowStart = y;
    div.style.gridColumnStart = x;

    //div.innerHTML = `${x}, ${y}`;
    // We add the div/node to the grid
    grid.appendChild(div);

    var mouseDown = false;
    grid.onmousedown = function () {
      mouseDown = true;
    }
    grid.onmouseup = function () {
      mouseDown = false;
    }

    div.addEventListener("mouseover", () => {
      if (!mouseDown) return;

      const findSpecifier = document.querySelector("." + checkedBox().id);

      if (!div.classList.contains(checkedBox().id) && checkedBox().id != "wall" && findSpecifier) return
      div.classList.toggle(checkedBox().id);
    });

    div.addEventListener("click", () => {
      const findSpecifier = document.querySelector("." + checkedBox().id);

      if (!div.classList.contains(checkedBox().id) && checkedBox().id != "wall" && findSpecifier) return
      div.classList.toggle(checkedBox().id);
    });

  }
}


/**
 * A function that returns the element of the checkbox that is checked
 * 
 */
function checkedBox() {
  let boxx = document.getElementById("wall");
  for (const box of checkboxes) {
    if (box.checked) boxx = box;
  }

  //we return a wall by default
  return boxx
}

//We grab all checkboxes and turn all of them off except the enabled one
const checkboxes = document.querySelectorAll("input[type=\"checkbox\"]");
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", () => {
    //We pick all checkboxes except the clicked one and disable them
    document.querySelectorAll(`input[type="checkbox"]:not(#${checkbox.id})`).forEach(box => box.checked = false);
  });
});


document.getElementById("run").addEventListener("click", runCode);

function runCode() {
  const start = document.querySelector(".starting-node");
  const target = document.querySelector(".target");

  if (!start || !target) return;

  const algorithmer = new Algorithmer(grid, start, target);
  if (algorithmer.isRunning) return;
  algorithmer.breadthFirstSearch();
}