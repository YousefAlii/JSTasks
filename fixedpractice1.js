// define my program constants
const TAX_RATE = 0.08;
const PHONE_PRICE = 95.99;
const ACCESSORY_PRICE = 10;
const SPENDING_THERSHOLD = 400;
// define my program var
var bank_balance;
bank_balance = prompt( "Please enter your bank balance" );
var amount = 0;
var topApps = []
// function to calculate Taxes
function claculateTax(amount) {
  return amount * TAX_RATE;
}
// function to make a format purchase
function formatAmount(amount) {
  return "$" + amount.toFixed( 2 );
}
//  You will keep purchasing phones (hint: loop!) until you run out of money in your bank account
if( amount < bank_balance) {
  amount = amount + PHONE_PRICE;
// You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold
  if( amount > SPENDING_THERSHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }  
}
function addFavoriteApp(appName) {
  if(!appName.includes("Sports")) {
    topApps.push(appName);
  }
}
function showTopApps(){
  for (let appName of topApps) {
    console.log(`I suggest to you ${topApps.length} apps : ${topApps}`);
  }
}
addFavoriteApp("123 Sports");
addFavoriteApp("econmics news");
addFavoriteApp("news drama");

// calculate total amount with taxes
amount = amount + claculateTax(amount);
// to output the purchase to customer
console.log( "your purchase: " + formatAmount(amount));
if(amount < bank_balance) {
  showTopApps();
}
// make a decision
if(amount > bank_balance ) {
  console.log("i'm realy sorry you can't take this!");
}