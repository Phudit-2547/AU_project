function unique(array) {
    const uniarr = []
    for(let i =0;i<array.length;++i){
        const element = array[i]
        if (uniarr.indexOf(element)===-1){ // KEY: if new array don't have this element push it 
            uniarr.push(element)
        }
    }
    return uniarr
}
