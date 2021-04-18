var rows="";
var matrix=0;

function create2DArray(rows, value){
    var arr = new Array;

    for(var i=0; i < rows; i++){
        arr[i] = [];
    }
}

function input(){
    rows = document.getElementById("rows").value;
    var value = document.getElementById("matrix").value;
    matrix = create2DArray(rows, value);
    return matrix;
}
input();
console.log(matrix);
function reflexion(){

}