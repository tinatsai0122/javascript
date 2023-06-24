"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (value) => {
  if (value > 50 && value < 300) {
    return value * 0.15;
  } else {
    return value * 0.2;
  }
};

for (let i = 0; i <= bills.length - 1; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);
