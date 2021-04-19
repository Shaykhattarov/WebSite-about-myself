function Create2DArray(length) {
    var arr = [];
  
    for (var i=0;i<length;i++) {
       arr[i] = [];
    }
  
    return arr;
}

function matrixInput(){
    var length = document.getElementById("rows").value;
    var str = document.getElementById("matrix").value;
    var matrix = Create2DArray(length);

    var coun = 0, i = 0, j = 0;
    while(str.length != coun){
        if(str[coun] != " " && str[coun] != "\n" && str[coun] != "\0") {
            matrix[i][j] = str[coun];
            j++;
            coun++;
        }
        else if(str[coun] == "\n"){
            i++;
            j = 0;
            coun++;
        }
        else{
            coun++;
        }
    }

    return matrix;
}


function reflexion(){
    var matrix = matrixInput();
    var val = true;
    var startArr = matrix[0][0];
    for(i = 0; i < matrix.length; i++){
        if(matrix[i][i] != startArr){
            val = false;
            break;
        }
    }
    return val;
}


function symmetry(){
    var matrix = matrixInput();
    var val = true;
    for(i = 0; i < matrix.length; i++){
        for( j = 0; j < matrix.length; j++){
            if(matrix[i][j] != matrix[j][i]){
                val = false;
                break;
            }
        }
    }

    return val;
}

function transivity(){
    var matrix = matrixInput();
    var val = true;
    for(i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix.length; j++){
            for(c = 0; c < matrix.length; c++){
                if(matrix[i][c] && matrix[c][j] && !matrix[i][j]){
                    val = false;
                    break;
                }
            }
        }
    }

    return val;
}
console.log(transivity());