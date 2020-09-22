const date = moment();
const beginDate = moment().subtract(1, "year");
const monthTracker = moment().subtract(1, "year");

const activeCellscount = document.getElementById('activeCellsCount');
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

  console.log(`
  monthTracker ${monthTracker.format('MMM')}`)
  console.log(`beginDate ${beginDate.format('MMM')}`)

  let monthValue = document.createTextNode(` `);
  if (monthTracker.format('MMM') == beginDate.format('MMM')) {
    monthTracker.add(1, "months");
    monthValue = document.createTextNode(`${beginDate.format('MMM')}`);


  }
  // else {

  // }

  const headerCellWrapper = document.createElement("td");
  headerCellWrapper.colSpan = '2'
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

tableWrapper.addEventListener('click', activate_cell, false);

function activate_cell(event) {

  console.log(event.target.classList)
  if (event.target.classList.contains('cell')) {
    if ((event.target.classList.contains('active_cell'))) {
      event.target.classList.remove("active_cell");
      if (cellsCount > 0) {
        cellsCount -= 1;
        activeCellscount.innerHTML = cellsCount;

      }

    }
    else {
      event.target.classList.add("active_cell");
      cellsCount += 1;
      activeCellscount.innerHTML = cellsCount;


    }
  }
}