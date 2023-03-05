function isAllX(string) {
    let flag = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i]=="x"||string[i]=="X") flag+=1
        else flag
    }
    if(flag==string.length) return true
    else return false
}
