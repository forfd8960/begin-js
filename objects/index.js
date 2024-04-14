const product = {
  name: "computer",
  price: 100,
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = "keywboard";
product.price = 400;
console.log(product);

product.awesome = true;
/*
{name: 'keywboard', price: 400, awesome: true}
awesome
: 
true
name
: 
"keywboard"
price
: 
400
*/
console.log(product);

// delete property

delete product.awesome;
// {name: 'keywboard', price: 400}
console.log(product);
