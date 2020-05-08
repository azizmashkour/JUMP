
let result = [];
let adj;
let firstLetter = 'A';

const initAdj = () => {
  // creating bi-dimensionnal array
  adj = new Array(10);

  for (let i = 0; i < adj.length; i++) {
    adj[i] = new Array(10);

    // initing with false
    for (let j = 0; j < adj.length; j++) {
      adj[i][j] = false;
    }
  }

  // filling the line path with true

  adj[0][1] = adj[1][2] = adj[2][3] = adj[3][4] =
  adj[4][0] = adj[0][5] = adj[1][6] = adj[2][7] =
  adj[3][8] = adj[4][9] = adj[5][7] = adj[7][9] =
  adj[9][6] = adj[6][8] = adj[8][5] = true;
}

// to convert Char to Code

const charToCode = (C) => {
  return C.charCodeAt(0);
}

const findPath = (S, v) => {
  // init the first path;
  result[0] = String.fromCharCode(v + charToCode('0'));

  for (let i = 1; i < S.length; i++) {
    // first traverse the outer graph
    if (adj[v][charToCode(S[i]) - charToCode(firstLetter)] || adj[charToCode(S[i]) - charToCode(firstLetter)][v]) {
      v = charToCode(S[i]) - charToCode(firstLetter);
    }
    // then traverse the inner graph
    else if (adj[v][charToCode(S[i]) - charToCode(firstLetter) + 5] || adj[charToCode(S[i]) - charToCode(firstLetter) + 5][v]) {
      v = charToCode(S[i]) - charToCode(firstLetter) + 5;
    }
    else {
      return false;
    }

    result[i] = String.fromCharCode(v + charToCode('0'));
  }
  return true;
}

const detectWalk = (sRaw) => {
  initAdj();

  let S = sRaw.split('');

  if (findPath(S, charToCode(S[0]) - charToCode(firstLetter)) || findPath(S, charToCode(S[0]) - charToCode(firstLetter) + 5)) {
    console.log(result);
  } else {
    console.log("-1");
  }
}

// calling the function in different use cases listed in the given example
detectWalk("ABBECCD"); // output is 0169723
detectWalk("ABB"); // output is 016
detectWalk("AABE"); // output is -1
