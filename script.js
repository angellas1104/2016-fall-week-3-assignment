/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = [];//this is an array

var shoes1 = {
    name:"Venture",
    price: 79.95,
    maker: "GEL"
}
var shoes2 = {
    name: "woman unisex couple casual",
    price: 32.99,
    maker: "Jackshibo"
}
var shoes3 = {
    name:"Gusto Cross Trainer",
    price: 39.97,
    maker: "Champion"
}
var shoes4 = {
    name:"Adult Suede Classic shoe",
    price: 168.32,
    maker: "PUMA"
}
productList.push(shoes1,shoes2,shoes3,shoes4);

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array

console.log(productList[0]);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){
if(productList[i].price<50.00){
    console.log("The product"+productList[i].name+"cost"+productList[i].price+" and is a match");
}
    //Your code here

    console.log();
}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

//3.2 then, divide total price by the number of products, using proudctList.length
var totalprice=0;
for(var i = 0; i < productList.length; i++){
    totalprice=totalprice+productList[i].price;
}
var Avrageprice=totalprice/productList.length;
console.log(Avrageprice);


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    //Your code here
    for(var i = 0; i < productList.length; i++){
        if(productList[i].price<p){
            numOfMatchingProducts=numOfMatchingProducts+1;
        }
    }
    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
