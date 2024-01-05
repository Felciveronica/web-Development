var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("mybtn1");

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("mybtn2");

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("mybtn3");

var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}




btn2.onclick = function() {
  modal2.style.display = "block";
}
span1.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}





btn3.onclick = function() {
  modal3.style.display = "block";
}

span2.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}



function updateBill() 
{
  const radioButtons = document.querySelectorAll('.rd1');
  const checkbox= document.getElementById('cb1')
  let totalCost =0;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      totalCost = totalCost+parseFloat(radioButtons[i].getAttribute('data-cost'));
    }
  }
  if (checkbox.checked)
  {totalCost=totalCost+parseFloat(checkbox.getAttribute('value'));
  }

  const billResultElement = document.getElementById('billResult');
  
  
  const toCurrency = document.getElementById('selectedToCurrency').value;
  const exchangeRate = conversionRates[toCurrency];
  const convertedAmount = (totalCost * exchangeRate).toFixed(2);
  billResultElement.textContent = `Bill Amount: ${convertedAmount} ${toCurrency}`;


}

function updateBill1() 
{
  const radioButtons1 = document.querySelectorAll('.rd2');
  let totalCost1 =0;

  for (let i = 0; i < radioButtons1.length; i++) {
    if (radioButtons1[i].checked) {
      totalCost1 = totalCost1+parseFloat(radioButtons1[i].getAttribute('value'));
    }
  }
  

  const billResultElement1 = document.getElementById('billResult1');
  
  
  const toCurrency1 = document.getElementById('selectedToCurrency1').value;
  const exchangeRate1 = conversionRates[toCurrency1];
  const convertedAmount1 = (totalCost1 * exchangeRate1).toFixed(2);
  billResultElement1.textContent = `Bill Amount: ${convertedAmount1} ${toCurrency1}`;


}
function bill()
{ 
  const billResultElement2 = document.getElementById('billResult2');
const toCurrency2 = document.getElementById('selectedToCurrency2').value;
const exchangeRate2= conversionRates[toCurrency2];
  const convertedAmount2 = (40 * exchangeRate2).toFixed(2);
  billResultElement2.textContent = `Bill Amount: ${convertedAmount2} ${toCurrency2}`;

}

const conversionRates = {
  
    '€': 0.90,
    '£': 0.79,
    '¥': 141.56,
    '₹':83.19,
    '$':1
  
  
};

