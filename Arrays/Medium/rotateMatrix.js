var rotate = function(matrix) {

    //transpose of matrix
    for(let i=0;i<matrix.length; i++){
        for(let j = i ; j<matrix[0].length; j++){
            let temp  = matrix[i][j]
            matrix[i][j] = matrix[j][i]
             matrix[j][i] = temp
        }
    }

    //reverse every rows
    for(let i=0;i<matrix.length; i++){
        for(let j = 0 ; j<matrix.length/2; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][matrix[i].length-1-j]
            matrix[i][matrix.length-1-j] = temp
        }
    }
}