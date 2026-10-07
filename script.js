function createTable() {
    //Write your code here
  
}
function createTable() {
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  if (rn === null || cn === null) {
    return;
  }

  if (isNaN(rn) || isNaN(cn)) {
    return;
  }

  if (Number(rn) <= 0 || Number(cn) <= 0) {
    alert("Rows and columns must be greater than 0");
    return;
  }

  const table = document.getElementById("myTable");

  table.innerHTML = "";

  for (let i = 0; i < Number(rn); i++) {
    const row = table.insertRow();

    for (let j = 0; j < Number(cn); j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}