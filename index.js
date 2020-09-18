exports.upperCaseLetter = function(string, letter){
    let stringArr = string.split('');
    for(let i = 0; i<stringArr.length; i++){
        if(stringArr[i]=== letter){
           stringArr[i] = stringArr[i].toUpperCase();
        }
    }
    const result = stringArr.join('');
    
    return result;
}