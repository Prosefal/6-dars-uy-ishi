var number = prompt('Summani kiriting');
var elStyle = document.querySelector('.site-title')
var Ticket = 500;
var Hotel = 250;
var Museum = 120;
var amount = (Hotel + Ticket) * dollartosum ;
var eurotosum = 11686;
var dollartosum = 11225;
var euro = Museum * eurotosum;
var price = dollartosum + eurotosum;


if (number >= price) {
  elStyle.textContent = "Oq yo'l Alisher 👌 ";
} 

else {
  elStyle.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan   ";
}