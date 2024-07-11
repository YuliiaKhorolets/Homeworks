var arr = [
    {
        userName:"Test",
        lastName:"Test",
        "<email":"test.test@gmail.com>"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        "<email":"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        "<email":"andrii@mail.ru>" 
    }    
];
let validEmailArr = []
for (let element of arr){
let keyRegExp = /email/i 
    for(let key in element){
        if(keyRegExp.test(key)){
     let valueRegExp = /^[a-zA-Z0-9.]+@(gmail|yahoo)\.com>$/ 
     let result = valueRegExp.test(element[key]);
     console.log(result)
           if (result == true){
          validEmailArr.push(element)
           } 
        } 
    }
}
console.log(validEmailArr)
