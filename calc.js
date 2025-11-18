/*
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
*/


function operation_func(a, b, op) {

    let t = 0;
    switch(op) {
        case "add":
            //t = Number((a + b)).toFixed(10);
            t = parseFloat((a + b))
            break;
        case "minus":
            //t = Number((a - b)).toFixed(10);
            t = parseFloat((a - b))
            break;
        case "multiply":
            // t = Number((a * b)).toFixed(10);
            t = parseFloat((a * b))
            break;
        case "divide":
            // t = Number((a / b)).toFixed(10);
            t = parseFloat((a / b))
            break;
    }   

    console.log(t + " ttttt")
    return t
}

   
 

const operations = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a,b) => a / b
};


const operation = 'add';
const result = operations[operation](5, 3);
console.log(result); // Output: 8

/*
function trucate_number(text_elem) {
   let temp = text_elem.textContent.split(' ');
   console.log(temp);
   console.log("&&&&&&&&&&&&&&&&&&&&")  
   if(temp.length == 1) {
     temp[0]
   }

} */

function control_text_size(text_elem) {
            console.log(text_elem.textContent.length + "  leng")
            let temp = text_elem.textContent.split(' ');

            if(text_elem.textContent.length > 15) {
                text_elem.style.setProperty('font-size', '18px');
                console.log("30 length")
                
                console.log(temp.length);
                console.log("&&&&&&&&&&&&&&&&&&&&")

                if(temp.length == 1) {
                    // text_elem.textContent = String(parseFloat(temp[0]) * 1);
                    text_elem.textContent = String(parseFloat(temp[0]).toExponential());
                    console.log("control 1 " + text_elem.textContent);
                
                } else if((temp.length > 2) && (temp[1] != '')) {
                    console.log("control 2")
                     temp[0] = String(parseFloat(temp[0]).toExponential())
                     text_elem.textContent = temp[0] + " " + temp[1] + " ";
                } else {
                    console.log("^^^^^^^^^^^^^^^")
                    temp[0] = String(parseFloat(temp[0]).toExponential());
                    temp[2] = String(parseFloat(temp[2]).toExponential());
                    text_elem.textContent = temp[0] + " " + temp[1] + " " + temp[2];
                }

            } 
            /*
            else if(text_elem.textContent.length > 25) {
                text_elem.style.setProperty('font-size', '20px');
                console.log("30 length")
            } 
            else if(text_elem.textContent.length > 20) {
                text_elem.style.setProperty('font-size', '28px');
                console.log("25 length")
            } 
            else if(text_elem.textContent.length > 15) {
                console.log("0000")
                // document.documentElement.style.setProperty("--primary-color", "purple");
                text_elem.style.setProperty('font-size', '32px');
                console.log("15 length")
            } */
            
            else {
                text_elem.style.setProperty('font-size', '36px');
                console.log("36px FONT")
            }
            
}

function write_char(original_text, num_ch) {

    if(num_ch == '.') {
        console.log("<>< " + " " + num_ch + " " + (!(original_text.includes('.'))))
        if(!(original_text.includes('.'))) {
           
           original_text = original_text + num_ch;
           console.log("%%%%%%% " + original_text)
        }
    }
    else if(original_text == '0') {
            original_text = num_ch; 

            console.log("zero suppose to returned " + original_text)
    } else {
        original_text = original_text + num_ch;
        console.log(" original text  1" + original_text);
    }

    return original_text
}



function number_processor(operator_value, screen_text, num_ch) {

    let return_obj = {num1:'', num2:'', operator: operator_value, text: screen_text };

    if(operator_value != '') {
        let temp = return_obj.text.split(" ");
        return_obj.num1 = temp[0];
        return_obj.num2 = temp[2];
    
        console.log("num2 button one " + return_obj.num1 + " " + operator_value + " " + return_obj.num2);
        if(return_obj.num2 != '0') {
            console.log("11%% " + operator_value);
            return_obj.num2 = write_char(return_obj.num2, num_ch);
            return_obj.text = return_obj.num1 + " " + return_obj.operator + " " + return_obj.num2;
        } 
    } else {
        return_obj.num1 = write_char(return_obj.text, num_ch)
        return_obj.text = return_obj.num1;
        console.log("num1 button one " + return_obj.num1);
    }

    console.log(" obj " + return_obj.text);
    
    return [return_obj.text, return_obj.num1, return_obj.num2];

}


function op_processor(mode_state, math_statement_obj, text, operator_char, operation) {
    console.log("xxxxxx  " + math_statement_obj)

    if(math_statement_obj.operator == '') {
                console.log("lennkdjskdjskdjsk");
                //math_statement_obj['num1'] = text;
                math_statement_obj['operator'] = operator_char; 
                math_statement_obj['operation'] = operation;

                mode_state.operator_can_be_entered = false;
                // math_statement_list.push(screen_text.textContent);
                // math_statement_list.push(" + ")      
                
                text = text + " " + operator_char + " " ;          
            
    } else {
        let temp_list = text.split(' ')

        if((math_statement_obj['num2'] == '0') && (math_statement_obj['operation'] == "divide")) {
            //math_statement_obj['num1'] = String(operations[math_statement_obj.operation](parseFloat(math_statement_obj['num1']), parseFloat(math_statement_obj['num2'])));
            math_statement_obj.num1 = String(operation_func(parseFloat(math_statement_obj.num1), parseFloat(math_statement_obj.num1), math_statement_obj.operation));
            math_statement_obj['answer'] = "";
            math_statement_obj['operator'] = "";
            math_statement_obj['operation'] = "";
            mode_state.operator_can_be_entered = false;
            text = "CAN'T DIVIDE A NUMBER BY ZER0";
        }
        else {
            //math_statement_obj['num1'] = String(operations[math_statement_obj.operation](parseInt(math_statement_obj['num1']), parseInt(math_statement_obj['num2'])));
            math_statement_obj['num1'] = String(operation_func(parseFloat(math_statement_obj.num1), parseFloat(math_statement_obj.num1), math_statement_obj.operation));
            math_statement_obj['answer'] = math_statement_obj['num1'];
            math_statement_obj['operator'] = operator_char;
            math_statement_obj['operation'] = operation;
            mode_state.operator_can_be_entered = false;
            text = String(math_statement_obj['answer']) + " " + operator_char + " ";

            console.log("ANSWER : " + math_statement_obj['answer'])
            console.log(math_statement_obj.num1 + math_statement_obj.num2);

        }

        console.log(text);
        console.log(math_statement_obj)
        console.log("***  " + math_statement_obj.operation) 
        
        math_statement_obj.num2 = "";
                
    }


    return [mode_state, math_statement_obj, text]
}