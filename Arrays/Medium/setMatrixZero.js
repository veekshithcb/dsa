var setZeroes = function(matrix) {
    let col0 = 1
    for(let i=0 ; i<matrix.length ; i++){
        if (matrix[i][0]== 0)  col0 = 0
        for(let j=1 ; j<matrix[0].length ; j++){
            if (matrix[i][j]==0) matrix[i][0] =matrix[0][j]= 0
        }
    }
    
    for(let i=matrix.length-1 ; i>=0 ; i--){
        
        for(let j = matrix[0].length-1 ; j>0 ; j--){
            
            if ( matrix[i][0] == 0||matrix[0][j] ==0 )matrix[i][j]= 0 
        }
        if (col0 == 0) matrix[i][0]=0
    }
    
    
    
};