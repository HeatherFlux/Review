// working
var vertList = function(graph){
    var vertices = [];
    // Create an array with each vertice in it
    for(var i=0; i<graph[0]; i++){
      for(var j=0; j<graph[1]; j++){
        vertices.push([i,j]);
      }
    }
    return vertices;
}

// working
var adjList = function(vertices){
  var adj = [];
  // Now create the Adjacency matrix, V[i,j]
  for(var i=0; i<vertices.length; i++){
    adj.push(i);
    adj[i] = []
    for(var j=0; j<vertices.length; j++){
      if((Math.abs((vertices[i][0]-vertices[j][0])) == 0 && Math.abs((vertices[i][1]-vertices[j][1])) == 1) || ((Math.abs((vertices[i][0]-vertices[j][0])) == 1) && (Math.abs((vertices[i][1]-vertices[j][1])) == 0))){
        adj[i].push(1);
      }
      else {
        adj[i].push(0);
      }
    }
  }
  return adj
}

var hamiltonian = function(path,vert,adj,pos){
  path[0]=0;

  if (next(path,vert,adj,pos)==false){
    console.log("No Cycle, check for walk");
    return false
  }
  console.log(path);
  return true

}

var next = function(path,vert,adj,pos){
    // Think this through more.
    // You have the pos 1 at first coming in.
    // First check if position in is equal to # of vertices
    if (pos == vert.length){
      // if it is, make sure that the last vertex can connect to the first for cycle.
      if (adj[ path[pos-1] ][ path[0] ] == 1){
        return true;
      }
      else {
        return false;
      }
    }

    // Ok next up test different vertices
    // they have to be adjacent to currnt vertices
    // and best case they haven't been visited yet.
    for(var v = 1; v < vert.length; v++){
      if (checkNext(adj,v,pos,path)==true){
        path[pos] = v
        if (next(path, vert, adj, pos+1) == true){
          return true
        }
      }
      path[pos] = -1
    }
}

var checkNext = function(adj,v,pos,path){
  // Fist check adjecency of current and last node
  if (adj[ path[pos-1] ][v] == 0){
    return false;
  }

  // Next check if its already in our path
  for (var i=1;i<vert.length;i++){
    if (path[i]==v){
      return false;
    }
  }
  return true;
}

var graph = [14,9]; // [2,3] works, [4,8] works, starts to break around the 35 and above sized matrix
var vert = vertList(graph);
var adj = adjList(vert);
var path = new Array(vert.length).fill(-1);
console.log(path);
console.log(vert);
console.log(adj);

hamiltonian(path,vert,adj,1)
