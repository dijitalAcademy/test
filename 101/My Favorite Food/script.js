//comments

function getTips() {
  let amount = prompt("Bill amount: ");
  if (amount != null) {
    let tip15 = amount * .15;
    let tip18 = amount * .18;
    let tip20 = amount * .20;

    let dollarStyle = Intl.NumberFormat('en-US', {
      style: "currency",
      currency: "USD"
    });
    
    document.getElementById("billAmt").innerHTML = dollarStyle.format(amount);
    document.getElementById("amt15").innerHTML = dollarStyle.format(tip15);
    document.getElementById("amt18").innerHTML = dollarStyle.format(tip18);
    document.getElementById("amt20").innerHTML = dollarStyle.format(tip20);
    
  }
}

function clearTips() {
    document.getElementById("billAmt").innerHTML = "$0.00";
    document.getElementById("amt15").innerHTML = "$0.00";
    document.getElementById("amt18").innerHTML = "$0.00";
    document.getElementById("amt20").innerHTML = "$0.00";
    
}