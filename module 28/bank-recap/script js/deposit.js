/**
 * 1. add event listener to the deposit button
 * 2. get deposit amount from the deposit input field
 * 3. convert string deposit amount to a number type
 * 4. clear the deposit input field after getting the value
 * 5. get the previous deposit total
 * 6. calculate new deposit total and set the value to the deposit total
 * 7. get current balance
 * 8. calculate the new balance and set it to the balance total element
 */

// step: 1
document.getElementById('btn-deposit').addEventListener('click', function () {
  // step: 2
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  // step: 3
  const newDepositAmount = parseFloat(newDepositAmountString);
  // step: 4
  depositField.value = '';
  // step: 5
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // step: 6
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;
  // step: 7
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousTotalAmount = parseFloat(previousBalanceTotalString);
  // step: 8
  const newBalanceTotal = previousTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
