///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
    return (cartTotal * (1 + tax)) - couponValue
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    first the customer would need an id we would give out a unique id for each customer so we can identify them, it would be a string that way we can store numbers and letters.
    next we would want there name stored and that would also be a string, after that we would have a array of objects which would be there shopping cart because it could store the name of the item, cost and discount.
    I would also store there age as a number that way we can check if they can order drinks or not
    also store a value for there server who served them. It would be a string because it is a name.
    i would also have a tip is percent and that would be a boolean to make sure to calculate the tip as a percent
    I would also store a tip value for the amount they tip and that will be a number data type 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer1 = {
    id: "12skq234",
    name: "John Doe",
    age: 25,
    server: "melissa smith",
    shoppingCart: [{name: "pasta", price: 12.95, discount: 0}, {name: "salad", price: 3.85, discount: .01} ],
    isPercentTip: true,
    tip: .15
}