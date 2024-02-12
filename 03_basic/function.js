// function declaration

function fun(){
   console.log("Function declaration syntax"); 
}
fun(); 

function sum(number1 , number2){
    return (number1 + number2);
}

console.log(sum(23 , 89));

// rest operator

function priceOfItems(...price){
    return price;
}

console.log(priceOfItems(899, 9785, 955));


