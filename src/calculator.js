
let value = 0;
let old_value = 0;
let now_operator = null;
var console_logs = Boolean(true);

/*  #####################################################################
  * ------------------------ Calculator function ------------------------ *
  * - Description: This function using for calculate, math also return to *
  *     the user to summary the value and also answer the math.           *
  * ===================================================================== *
  * = Create by: Mr.Supakij Buasod                                        *
  * = Create date: 21/08/2022                                             *
  * = Last update: 21/08/2022                                             *
  * #####################################################################
*/
function calculator(input) {
    value = document.getElementById("answer").innerHTML;
    const operator = ["AC", "±", "%", "÷", "x", "-", "+", "="];

    if (value === '0') {
        if (operator.includes(input) === true)
            document.getElementById("answer").innerHTML = 0;
        else {
            document.getElementById("answer").innerHTML = input;
        }
    } else {
        if (operator.includes(input) === true){
            switch (input) {
                case "AC":
                    document.getElementById("answer").innerHTML = 0;
                    value = 0;
                    old_value = 0;
                    now_operator = null;
                    break;
                case "±":
                    document.getElementById("answer").innerHTML = Math.abs(value);
                    break;
                case "%":
                    document.getElementById("answer").innerHTML = parseFloat(value)/100;
                    break;
                case "÷":
                    now_operator = "÷";
                    value.concat(input);
                    old_value = parseFloat(value);
                    document.getElementById("answer").innerHTML = 0;
                    break;
                case "x":
                    now_operator = "x";
                    value.concat(input);
                    old_value = parseFloat(value);
                    document.getElementById("answer").innerHTML = 0;
                    break;
                case "-":
                    now_operator = "-";
                    document.getElementById("answer").innerHTML = 0;
                    old_value = value;
                    break;
                case "+":
                    now_operator = "+";
                    document.getElementById("answer").innerHTML = 0;
                    old_value = value;
                    break;
                case "=":
                    if(now_operator != null){
                        switch(now_operator){
                            case "÷":
                                value.concat(input);
                                value = parseFloat(old_value) / parseFloat(value);
                                document.getElementById("answer").innerHTML = value;
                                break;
                            case "x":
                                value.concat(input);
                                value = parseFloat(old_value) * parseFloat(value);
                                document.getElementById("answer").innerHTML = value;
                                break;
                            case "-":
                                value.concat(input);
                                value = parseFloat(old_value) - parseFloat(value);
                                document.getElementById("answer").innerHTML = value;
                                break;
                            case "+":
                                value.concat(input);
                                value = parseFloat(old_value) + parseFloat(value);
                                document.getElementById("answer").innerHTML = value;
                                break;
                            default:
                        }
                    }
                    break;
                default:
            }
        } else {
            document.getElementById("answer").innerHTML = value.concat(input);
        }
    }
    if(console_logs){
        console.log("input : ", input);
        console.log("value : ", value);
        console.log("now_operator : ", now_operator);
        console.log("old_value : ", old_value);
    }
}

export default calculator;