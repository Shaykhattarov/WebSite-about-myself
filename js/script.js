var result = 0;
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
    if (val == true){
        result = "Матрица рефлексивна";
    }
    else {
        result = "Матрица не рефлексивна";
    }
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


    if(val == true && matrix[0][0] == 1){
        result += ", симметрична";
    }
    else {
        result += ", не симметрична";
    }
}

function antisymmetry(){
    var matrixA = matrixInput();
    var matrixB = matrixInput();
    var matrixC = matrixInput();
    var N = matrixA.length;
    var val = true;
    
    for(i = 0; i < N; i++){
        for(j = 0; j < N; j++) {
            matrixC[i][j]=0;
            for (k = 0; k < N; k++){
               matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    for(i = 0; i < N; i++){
        for(j = 0; j < N; j++) {
            if(matrixC[i][i] != matrixC[0][0] || (i != j && matrixC[i][j] != 0)) {
                val = false;
                break;
            }
        }
    }

    if(val == true){
        result += ", антисимметрична";
    }
    else{
        result += ", не антисимметрична";
    }
}


function transivity(){
    var matrixA = matrixInput();
    var matrixB = matrixInput();
    var matrixC = matrixInput();
    var N = matrixA.length;
    var val = true;
    for(i = 0; i < N; i++){
        for(j = 0; j < N; j++) {
            matrixC[i][j]=0;
            for (k = 0; k < N; k++){
               matrixC[i][j] += matrixA[i][k] * matrixB[k][j];
               if(matrixC[i][j] == 2){
                   matrixC[i][j] = 1;
               }
            }
        }
    }

    for(i = 0; i < N; i++){
        for(j = 0; j < N; j++) {
            if(matrixA[i][j] != matrixC[i][j]){
                val = false;
                break;
            }
        }
    }

    if(val == true){
        result += " и транзитивна.";
    }
    else{
        result += " и не транзитивна.";
    }
}

function validation(){
    var length = document.getElementById("rows").value;
    var matrix = matrixInput();
    var val = true, val_matrix = true;
    
    for(i = 0; i < length; i++){
        if (matrix[i].length == length){
            val = true;
        }
        else{
            val = false;
            break;
        }
    }
    
    for(i = 0; i < length; i++){
        for(j = 0; j < length; j++){
            if(matrix[i][j] == 0 || matrix[i][j] == 1){
                val_matrix = true;
            }
            else{
                val_matrix = false;
                break;
            }
        }
    }

    if(val == true && val_matrix == true)
    {
        reflexion();
        antisymmetry();
        symmetry();
        transivity();
    }
    else if(val == true && val_matrix != true){
        alert("Матрица может состоять только из 0 и 1!");
        val_matrix = true;
    }
    else if(val != true && val_matrix == true){
        alert("Не хватает данных в матрице!");
        val = true;
    }
    else{
        alert("При вводе матрицы были совершены ошибки!");
        val = true;
        val_matrix = true;
    }
}

document.getElementById("resultButton").onclick = function() {
    validation();
    document.getElementById('resultOut').value = result;
};