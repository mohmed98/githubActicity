const date = moment();
const beginDate = moment().subtract(1, "year");
const monthTracker = moment().subtract(1, "year");
let selectedColor = "rgb(33, 110, 57)";

const activeCellscount = document.getElementById("activeCellsCount");
let cellsCount = 0;
activeCellscount.innerHTML = cellsCount;
// console.log(date._d);
// console.log(beginDate);
// console.log(date.diff(beginDate, "days"));

const tableWrapper = document.getElementById("tableWrapper");
const table = document.createElement("table");
let diff = Number(date.diff(beginDate, "days"));

for (diff; diff > 0; diff -= 7) {
  let row = document.createElement("tr");
  row.className = "row";

  // console.log(`
  // monthTracker ${monthTracker.format('MMM')}`)
  // console.log(`beginDate ${beginDate.format('MMM')}`)

  let monthValue = document.createTextNode(` `);
  if (monthTracker.format("MMM") == beginDate.format("MMM")) {
    monthTracker.add(1, "months");
    monthValue = document.createTextNode(`${beginDate.format("MMM")}`);
  }
  // else {

  // }

  const headerCellWrapper = document.createElement("td");
  headerCellWrapper.className = "headerCell";
  headerCellWrapper.appendChild(monthValue);
  row.appendChild(headerCellWrapper);

  for (i = 0; i <= 6; i++) {
    beginDate.add(1, "days");
    const content = document.createTextNode(` `);
    const cellWrapper = document.createElement("td");
    cellWrapper.className = "cell";
    cellWrapper.appendChild(content);
    row.appendChild(cellWrapper);
  }

  tableWrapper.appendChild(row);
}

tableWrapper.addEventListener("click", activate_cell, false);

function activate_cell(event) {
  if (
    event.target.classList.contains("cell") &&
    selectedColor != getComputedStyle(event.target).backgroundColor
  ) {
    console.log(getComputedStyle(event.target).backgroundColor);
    console.log(selectedColor);
    event.target.style.backgroundColor = selectedColor;
    if (selectedColor == "rgb(235, 237, 240)") {
      cellsCount -= 1;
    } else {
      cellsCount += 1;
    }
    activeCellscount.innerHTML = cellsCount;
  }
}

const colorPickerwrapper = document.getElementById("colorPickerwrapper");
colorPickerwrapper.addEventListener("click", changeColor, false);
let currentColorId = "col5";
function changeColor(event) {
  if (event.target.classList.contains("colorOption")) {
    console.log(document.getElementById(currentColorId));
    document.getElementById(currentColorId).classList.remove("selected");
    if (!event.target.classList.contains("selected")) {
      currentColorId = event.target.id;
      event.target.classList.add("selected");
      selectedColor = getComputedStyle(event.target).backgroundColor;
      console.log(selectedColor);
    }
  }
}
