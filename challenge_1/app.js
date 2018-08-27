
const choices = ['x', 'o'];
let useX = true;
let matrix = [['','',''],
['','',''],
['','','']];


let onClick = function(event) {
  if (useX) {
    event.target.textContent = choices[0];
  } else {
    event.target.textContent = choices[1];
  }
  useX = !useX;
};

let placeTicOnClick = function() {
  let cells = document.getElementsByTagName("td");

  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = onClick.bind(cells[i]);
  }
};

// let renderBoard = function() {

// }

