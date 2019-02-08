var hourlyPrices = [45, 24, 35, 31, 40, 38, 11]

function maxProfit(argument) {
      var profit = 0;

  for (var i = 1; i < argument.length; i++) {

    for (var j = 0; j < argument.length; j++) {

      var product = (argument[i] - argument[j]);
        if (product < profit && i < j) {
          profit = product;
      }
    }
  }
    return - (profit);
return argument;
}



console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([15, 45, 90, 3, 18, 38, 40]));
console.log(maxProfit([10, 2, 313, 30, 40, 212, 10]));
