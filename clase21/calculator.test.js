const Calculator = require('./Calculator')


function test() {
    assertEqual(8, Calculator.suma(3,5));
    assertEqual(1, Calculator.resta(2,1));
    assertEqual(1, Calculator.multiplication(2,1));
    assertEqual(1, Calculator.division(2,1));
    assertEqual(1, Calculator.resta(2,1));
}