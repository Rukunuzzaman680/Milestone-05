// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
  // step-2: get the deposit amount from the input deposit field
  // for input use. "value" to the inside input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3: get the current deposit total
  // for text use. "innerText" to the inside input field
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step-4: add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the balance total
  depositTotalElement.innerText = currentDepositTotal;

  // step-5: get balance current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // step-07: clear the deposit field
  depositField.value = '';
});
