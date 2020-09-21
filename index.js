const date = moment();
const beginDate = moment().subtract(1, "year");

// console.log(date._d);
// console.log(beginDate);
// console.log(date.diff(beginDate, "days"));

const tableWrapper = document.getElementById("tableWrapper");
const table = document.createElement("table");
// const cell = document.createElement("div");
// cell.className = "cell";
let diff = Number(date.diff(beginDate, "days"));

for (diff; diff > 0; diff -= 7) {
  let row = document.createElement("tr");
  row.className = "row";

  for (i = 0; i <= 6; i++) {
    console.log(diff);
    beginDate.add(1, "days");
    content = document.createTextNode(`${beginDate.format("DDD")}`);
    cellWrapper = document.createElement("td");
    cellWrapper.className = "cell";
    cellWrapper.appendChild(content);
    row.appendChild(cellWrapper);
  }
  tableWrapper.appendChild(row);
}
