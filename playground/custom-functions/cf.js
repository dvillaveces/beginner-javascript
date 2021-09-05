

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // This is the function body
  console.log(`Tax: ${taxRate}`, `Tip: ${tipRate}`);
  console.log("Running calculate Bill!");
  const total = billAmount * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(120, 0.08);
console.log(`Your total is $${myTotal}`);
