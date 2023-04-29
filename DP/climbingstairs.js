
///recursive
var climbStairs = function(n) {
    return f(n , dp =Array(n+1).fill(-1))
 };
  let f = (ind , dp ) =>{
      if(dp[ind]!=-1)return dp[ind]
      if(ind==0) return 1
      if(ind==1) return 1
      
      let left =  f(ind-1 ,dp) 
      let right = f(ind-2 ,dp) 
      return dp[ind] = left+right
  }

  ///iterative
 climbStairs = function(n) {
    let prev2= 1;
    let prev1 = 1;
    for (let i = 2; i <= n; i++) {
        let cur = prev1+prev2
        prev2 = prev1
        prev1 = cur
    }
    return n > 0 ? prev1 : 0;
};