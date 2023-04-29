var isAnagram = function (s, t) {
    if (t.length !== s.length) return false;
    const counts = new Map();
    for (let i = 0; i < s.length; i++) {
        if (counts.has(s[i])) {
            counts.set(s[i], counts.get(s[i]) + 1)
        } else {
            counts.set(s[i], 1)
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (counts.has(t[j]) && counts.get(t[j]) >0 ) {
            counts.set(t[j], counts.get(t[j]) - 1)
        }else{
            return false
        }
        if( counts.get(t[j] <0) || !counts.has(t[j])  ) {
            return false
        }
    }
    return true
};