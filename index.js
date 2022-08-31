// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
    return Math.abs(pickUp - 42);
    
};

function distanceFromHqInFeet(pickUp){
   return Math.abs(pickUp - 42) * 264;
};


function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264;
}

// function calculatesFarePrice(start, end){
//     let distance = Math.abs(start - end) * 264;
//     let fee;
//     if (distance < 400){
//         fee = 0;
//         return fee;

//     }else if( distance >= 400 && distance < 2000){
//         fee = (distance - 400) * 0.02;
//         return fee;
//     }else if( distance >= 2000 && distance < 2500){
//         fee = 25;
//         return fee;
//     }else {
//         return 'cannot travel that far'
//     }
// }


//make new function inside of this function?
//
function calculatesFarePrice(start, end){
    const distance = Math.abs(start - end) * 264;
     let fee;

        switch(true){
            case distance < 400:
               return fee = 0;
                break;
            case distance >= 400 && distance < 2000:
                return fee = (distance - 400) * 0.02;
                break;
            case distance >= 2000 && distance < 2500:
                return fee = 25;
                break;
            default: 
                return 'cannot travel that far'
        }
   
        // return fee

    }