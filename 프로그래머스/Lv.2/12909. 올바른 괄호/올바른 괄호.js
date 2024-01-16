const solution = (s) => {
    let result = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(") result.push("(")
        else 
            if(result.length === 0) return false;
            else result.pop();
    }
    return result.length === 0;
}
