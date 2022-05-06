class graphNode {
  constructor(value) {
    this.value = value;
    this.edges = new Map();
  }
}

class Graph {
  constructor() {
    this.verts = new Map();
    this.matrix = []
  }
  addVert(v) {
    this.verts.set(v, new graphNode(v))
  }
  addEdge(v1, v2) {
    this.verts.get(v1).edges.set(v2, v1)
    this.verts.get(v2).edges.set(v1, v2)
  }
  createAdj(){
    let matrix = [];
    this.verts.forEach(v => {
      let row = [];
      for(let col of this.verts.keys()) {
        if(v.edges.has(col)) {
          row.push(1)
        }
        else { row.push(0)}
      }
      matrix.push(row)
    })
    this.matrix = matrix;
    console.log("    1  2  3  4")
    matrix.forEach((row, idx )=> console.log(idx+1, row))
  }
}

let test = new Graph();
test.addVert(1);
test.addVert(2);
test.addVert(3);
test.addVert(4);
test.addEdge(1,2);
test.addEdge(2,3);
test.addEdge(3,4);
test.addEdge(1,4);
test.createAdj()