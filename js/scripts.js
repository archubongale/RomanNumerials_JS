var getRomanDigit = function(number) {
  var romanSingleDigits = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var result = romanSingleDigits[(number - 1)];
  return result;
}

var getRomanMultipleDigit = function(number) {
  var one = 'I';
  var ten = 'X';
  var fifty = 'L';
  var hundred = 'C';
  var fiveHundred = 'D';
  var thousand = 'M';

}
