var reverseWords = function(s) {
    let i = 0;
	let n = s.length;

	let result  = new String()

    
    while(i<n ){
        while(i<n && s.charAt(i)== " ") i++
        if(i>=n) break
        let j = i+1
        
        while(j<n && s.charAt(j)!=" ") j++
        
        let subStr = s.substring(i, j)
        
        if (result.length==0){
            result = subStr
            i = j+1
        } else{
            result =  subStr + " " +result
            i = j+1
        }
        
    }
    return result
}