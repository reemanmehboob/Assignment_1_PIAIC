console.log(`\t\t\tTASK 1`)
import inquirer from "inquirer";//taking input
var customer = await inquirer.prompt([{
    name: "wants",
    type: "string",
    message: "Customer wants:"}
]);
console.log('\t\t\tBUYING GROciers')

//IF FRUITS==FRUITS
if (customer.wants=='fruits')//TRUE
 {
    console.log(`customer wants ${customer.wants}`)
    // Define array of fruits with prices
var fruits: { name: string; price: number }[] = [
    { name: 'apples', price: 10.99 },
    { name: 'bananas', price: 20.49 },
    { name: 'mangoes', price: 15.75 },
  ];
  // Display products and their prices
  console.log('fruits and Prices:');
  fruits.forEach(fruits => console.log(`${fruits.name}: $${fruits.price.toFixed(2)}`));
  function calculatetotal(fruits: { name: string; price: number }[]): number {
    return fruits.reduce((total, product) => total + product.price, 0);
  
}

//CALCULATING DISCOUNT
var discount:number;
var totalBill = calculatetotal(fruits);
console.log(`Total Bill: $${totalBill.toFixed(2)}`);
if(totalBill>=15)//NESTED IF
{
console.log('total bill is greater than $15')
discount= totalBill * 0.9;
console.log(`DISPLAY TOTALBILL WITH DISCOUNT: ${discount}$`)
}
}

//IF VEGETABLES==VEGETABLES
if(customer.wants=='vegetables')//TRUE
{
    console.log(`customer wants ${customer.wants}`)
    // Define array of products with prices
var vegetables: { name: string; price: number }[] = [
    { name: 'carrots', price: 9.99 },
    { name: 'potatoes', price: 6.49 },
    { name: 'tomatoes', price: 15.75 },
  ];
  
  // Display products and their prices
  console.log('vegetables and Prices:');
  vegetables.forEach(vegetables => console.log(`${vegetables.name}: $${vegetables.price.toFixed(2)}`));
  function calculatetotal(vegetables: { name: string; price: number }[]): number {
    return vegetables.reduce((total, product) => total + product.price, 0);
  
}

//CALCULATING DISCOUNT
var totalBill = calculatetotal(vegetables);
console.log(`Total Bill: $${totalBill.toFixed(2)}`);
if(totalBill>=15)//NESTED IF
{
console.log('total bill is greater than $15')
discount= totalBill * 0.9;
console.log(`DISPLAY TOTALBILL WITH DISCOUNT: ${discount}$`)
}
} 
//ELSE WILL EXECUTE WHEN CUSTOMER DOESNT WANT VEGETABLES
else{
    console.log("customer has bought no vegetables")
}


console.log("\n")
console.log('SECTION 3: CHECKOUT PROCESS:')
var customer = await inquirer.prompt([{ //TAKING INPUT OF PAYMENTMETHOD
    name: "paymentmethod",
    type: "string",
    message: "what has customer choose the payment mathod?"}
]);

if(customer.paymentmethod){ //IF-ELSE 
    if(customer.paymentmethod=='jazzcash'){ //NESTED IF
        console.log("customer has choosen JAZZCASH")
    }
    if(customer.paymentmethod=='easypaisa'){
        console.log("customer choosen EASYPAISA")
    }
    }
else{
    console.log("customer did not buy vegetables")
}
//END


//TASK 2:
console.log("\n")
console.log("_________________________________________________________")
console.log("\n")
console.log("\t\t\tTASK 2");


console.log("SECTION 1: ADD TWO NUMBERS")
//ADDITION OF TWO NUMBERS
function add(a:number, b:number){  
    return a+b;
}
console.log(`addition of a+b= ${add(5,6)}`);
//END


console.log("\n")
console.log("SECTION 2: CHECK EVEN OR ODD")
//CHECK IF NUMBER IS ODD OR EVEN
function checkevenodd(a:number){
    if(a%2==0){// IF-ELSE
        return `the number a= ${a} is even `
    }
    else{
        return `the number a= ${a} is odd `
    }
}
var number=5;
console.log(checkevenodd(number));
//END



console.log("\n")
console.log("SECTON 3: CALULATE AREA");
//CALCULATE AREA OF RECTANGLE:
function calculateArea(width:number, height: number){
    var area:number;
    area = width*height;
    return area;
}
console.log(`the area of rectangle is = ${calculateArea(5,6)}`)
//END



console.log("\n")
console.log("SECTION 4: STRING REVERSAL")
//REVERSE THE STRING 
function reverseString(sentence: string){
    return sentence.split('').reverse().join();// SPLIT FUNCTION TO DIVIDE IN INDIVIDUAL CHARCTERS, REVERSE FUNCTION TO REVERSE THE CHARACTERS, JOIN FUNCTION TO COMBINE ALL THE REVERSED CHARACTERS
}
const originalstring:string='reeman';//STRING TO REVERSE
console.log(`the reverse string is = ${reverseString(originalstring)}`);
//END



console.log("\n");
console.log("SECTION 5: TEMPRETURE CONSVERSION")
//CONVERT CELSIUS TO FAHRANHEIT
function convertCelsiusToFahrenheit(tempretureInCelsius:number){
    var tempretureInFahrenheit:number;
    tempretureInFahrenheit= tempretureInCelsius * 9/5 + 32;
    return tempretureInFahrenheit;
}
console.log(`Temperature in fahrenheit is = ${convertCelsiusToFahrenheit(45)}°F`);
//END



console.log("\n")
console.log("_________________________________________________________")
console.log("\n")
console.log("\t\t\tTASK 3");
console.log("SECTION 1: MODIFY ARRAY WITH METHODS");
var arr:string[]=['tea','sugar','milk'];
//pushing a word in array
arr.push('biscuit');
console.log(`the new array after PUSH is = ${arr}`);
console.log(`\n`)

//poping a word from a array
var arr:string[]=['tea','sugar','milk'];
arr.pop();
console.log(`the new array after POP is = ${arr}`);

console.log(`\n`)
//shifting a word in array
var arr:string[]=['tea','sugar','milk'];
arr.shift();
console.log(`the new array after SHIFT is = ${arr}`);

console.log(`\n`)
//unshifting a word in array
var arr:string[]=['tea','sugar','milk'];
arr.unshift('biscuit');
console.log(`the new array after UNSHIFT is = ${arr}`)


console.log(`\n`)
console.log(`__________`)
console.log("\n")


console.log('SECTION 2:SUBARRAY CREATION')
//SPLICE FUNCTION IN ARRAY
var arr = ['tea', 'sugar', 'milk'];
arr.splice(1, 1, 'biscuit'); 
console.log(`the new array after SPLICE is = ${arr}`); 

//SLICING FUNCTION IS ARRAY
var arr=['tea', 'sugar', 'milk','biscuit']
console.log(`the new array after SLICE is = ${arr.slice(1,3)}`);
console.log("_________________________________________________________")
    
