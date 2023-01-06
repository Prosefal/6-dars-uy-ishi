var userName = prompt('Ismingizni kiriting')
var number = prompt('Pul miqdorini kiriting');
var Ticket = 500;
var Hotel = 250;
var Museum = 120;
var euro_to_sum = 11894;
var dollar_to_sum = 11328;
var amount = (Hotel + Ticket) * dollar_to_sum ;
var euro = Museum * euro_to_sum;
var price = dollar_to_sum + euro_to_sum; 


if (number >= price) {
  console.log ( userName + ' ' + "Safar uchun pulingiz yetarli 👍");
} 
else if (number < amount) {
  console.log( userName + ' ' +  "Safar uchun pulingiz yetarli emas.");
}
