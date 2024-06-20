function pow(x,y){
    let rise = 1
    if (y == 0){
        rise == 1
        console.log(rise);
    }   else if (y > 0){
            for(let k = 0; k < y; k++){
              rise *= x; 
            }   
              console.log(rise);
        }   else if (y < 0){
                for(let i = y; i < 0; i++){
                   rise *= 1/x;
                } 
                console.log(rise)
            }  
}
 pow(-2,0)