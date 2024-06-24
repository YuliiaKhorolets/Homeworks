function getRandomNumber(start,finish){
    function checkProbabilityTheory(count){
           let result = []
           let randomResult = []
           let randomResultEven = []
           let randomResultOdd = []
        for ( let k= start; k<=finish; k++){
             result.push(k);
        }
            let temp = result.join('');
            let reverseString = temp.split('').reverse().join('');
            let reversedNumbers = reverseString.match(/.{1,3}/g).map(Number) 
        for ( iteration = 1; iteration <= count ; iteration++){
              let randomIndex = Math.floor(Math.random() * reversedNumbers.length);
              randomResult.push(reversedNumbers.splice(randomIndex, 1)[0]);
            // randomResult.push(result.splice(Math.random()*result.length,1)[0]) 
        }
             //console.log(randomResult)
            for (let element of randomResult){
                let counter = 0
                if(element%2 == 0 &&randomResultEven.indexOf(element) == -1){
                   counter++
                   randomResultEven.push(element) 
                } 
                   if(element%2 != 0 && randomResultOdd.indexOf(element) == -1){
                     counter++
                     randomResultOdd.push(element) 
                   } 
            }
                 let percentEven =(randomResultEven.length/count)*100
                 let percentOdd = (randomResultOdd.length/count)*100
                     console.log("number of genereted" + " : " + count)
                     console.log("number of even" + ":" + randomResultEven.length)
                     console.log("number of odd" + ":" + randomResultOdd.length)
                     console.log("Percentage of even to odd"+ ":" + percentEven.toFixed(0) +" % "+percentOdd.toFixed(0) )
    }  
             checkProbabilityTheory(20)
}       getRandomNumber(100,1000)  