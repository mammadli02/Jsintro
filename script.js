// //TASK1
// // //regular function
function divided(a){
    let b=a%7;
    if (b==0){
        console.log("7-ye bolunur");
    }else{
        if(b<=4){
console.log(a-b);
        }
        else{
            console.log(a+(7-b));
        }
    }
}
divided(19)

// // //arrow function
let divided1 =(a)=>{
    let b=a%7;
    if (b==0){
        console.log("7-ye bolunur");
    }else{
        if(b<=4){
console.log(a-b);
        }
        else{
            console.log(a+(7-b));
        }
    }
}
divided1(19)


// // //anonim function
let divided2 = function(a){
    let b=a%7;
    if (b==0){
        console.log("7-ye bolunur");
    }else{
        if(b<=4){
console.log(a-b);
        }
        else{
            console.log(a+(7-b));
        }
    }
}
divided2(19)


// // //TASK2
// // //regular function
function count(a){
    if(a<50){
        for(let i=1; i<a; i++){
            if(i%3==0){
                console.log(i);
            }
        }
    }
    else if(a>=50 && a<=100){
        for (let i = 0; i < a; i++) {
            if(i%5==0){
                console.log(i);
            }
            
        }
    }
    else{
        for (let i = 0; i < a; i++) {
            if(i%8==0){
                console.log(i);
            }
            
        }
    }
}
count(80)
// // //arrow function
let count1=(a)=>{
    if(a<50){
        for(let i=1; i<a; i++){
            if(i%3==0){
                console.log(i);
            }
        }
    }
    else if(a>=50 && a<=100){
        for (let i = 0; i < a; i++) {
            if(i%5==0){
                console.log(i);
            }
            
        }
    }
    else{
        for (let i = 0; i < a; i++) {
            if(i%8==0){
                console.log(i);
            }
            
        }
    }
}
count1(80)

// // //anonim function
let count2=function (a){
    if(a<50){
        for(let i=1; i<a; i++){
            if(i%3==0){
                console.log(i);
            }
        }
    }
    else if(a>=50 && a<=100){
        for (let i = 0; i < a; i++) {
            if(i%5==0){
                console.log(i);
            }
            
        }
    }
    else{
        for (let i = 0; i < a; i++) {
            if(i%8==0){
                console.log(i);
            }
            
        }
    }
}
count2(120)



