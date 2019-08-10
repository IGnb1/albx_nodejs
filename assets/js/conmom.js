function getId(str){
    let temp = str.substr(1)
    let obj = {}
    temp = temp.split('&')
    for (let i = 0; i < temp.length; i++) {
        let arr = temp[i].split('=')
        obj[arr[0]] = arr[1]
    }
    return obj;
}