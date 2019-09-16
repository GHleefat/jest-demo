function numAddNew (num1, num2) {
  var baseNum, baseNum1, baseNum2;
  try {
    baseNum1 = num1.toString().split(".")[1].length;
  } catch (e) {
    baseNum1 = 0;
  }
  try {
    baseNum2 = num2.toString().split(".")[1].length;
  } catch (e) {
    baseNum2 = 0;
  }
  baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  var totalNumMulti = numMulti(num1, baseNum) + numMulti(num2, baseNum);
  return totalNumMulti / baseNum;
};
function numMulti (num1, num2) {
  var baseNum = 0;
  try {
    baseNum += num1.toString().split(".")[1].length;
  } catch (e) {
  }
  try {
    baseNum += num2.toString().split(".")[1].length;
  } catch (e) {
  }
  return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
};

const sum =(a,b) => a+b;
const sumNew =(a,b) => numAddNew(a, b);
const sumToFixed = (a,b)=>{
	let total = a+b;
	return Number(total.toFixed(2));
}

module.exports = { sum, sumNew, sumToFixed }