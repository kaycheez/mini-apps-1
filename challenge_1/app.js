
const choices = ['x', 'o'];
const cells = document.getElementsByTagName("td");
const cellArr = Array.from(cells);
const rows = Array.from(document.getElementsByTagName("tr"));
const scoreboard = document.getElementById('scoreboard');
let useX = true;
let matrix;
let winner;

const addTicOnClick = function(event) {
  if (!winner) {
    if (!event.target.textContent) {
      if (useX) {
        event.target.textContent = choices[0];
      } else {
        event.target.textContent = choices[1];
      }
      useX = !useX;
      updateMatrix();
    }
  }
};

const placeClickOnTic = function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = addTicOnClick.bind(cells[i]);
  }
};

const updateMatrix = function() {
  matrix = rows.map((node) => {
    let childNodes = Array.from(node.children);
    return childNodes.map((childNode) => {
      return childNode.textContent;
    });
  });
  checkWinner();
}

const checkWinner = function() {
  const checkRows = function() {
    matrix.forEach((row) => {
      if(row[0] !== "" && row[0] === row[1] && row[1] === row[2]) {
        winner = row[0];
      }
    });
  };
  const checkCols = function() {
    for (let i = 0; i < 3; i++) {
      if (matrix[0][i] !== "" && matrix[0][i] === matrix[1][i] && matrix[0][i] === matrix[2][i]) {
        winner = matrix[0][i];
      }
    }
  };
  const checkDiag = function() {
    if (matrix[1][1] !== '') {
      if(matrix[1][1] === matrix[0][0] && matrix[1][1] === matrix[2][2]) {
        winner = matrix[1][1];
      } else if (matrix[1][1] === matrix[0][2] && matrix[1][1] === matrix[2][0]) {
        winner = matrix[1][1];
      }
    }
  };
  const checkDraw = function() {
    if (!winner) {
      if (cellArr.every((cell) => {
        return cell.textContent !== '';
      })) {
        winner = 'tie';
      }
    }
  };
  checkRows();
  checkCols();
  checkDiag();
  checkDraw();
  if (winner) {
    endGame();
  }
};

const endGame = function() {
  let p = document.createElement('p');
  if (winner === 'tie') {
    p.textContent = "YALL BOTH SUCK";
    scoreboard.appendChild(p);
  } else {
    p.textContent = `${winner} gonna give it to ya!`;
    scoreboard.appendChild(p);
  }
}

const clearBoard = function() {
  cellArr.forEach((cell) => {
    cell.textContent = '';
  });
  useX = true;
  winner = undefined;
  scoreboard.innerHTML = '';
  console.log(scoreboard);
  updateMatrix();
};

const addClickOnButt = function() {
  const clearButton = document.getElementsByTagName("button")[0];
  clearButton.onclick = clearBoard;
};
