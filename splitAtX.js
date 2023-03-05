function splitAtX(string) {
    for(let i=0;i<string.length;++i){
        if(string[i]=="x"){
            let text1 = string.slice(0,i)
            let text2 = string.slice(i+1,string.length)
            if(text1.length >= text2.length) return text1
            else return text2
        }
    }
}
