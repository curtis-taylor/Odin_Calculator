

//# CURRENT VERSION OF FUNCTION THAT DOES MATH OPERATIONS 
function operation_func(a, b, op) {
    let t = 0;
    switch(op) {
        case "add":
            
            t = parseFloat(a) + parseFloat(b);
            break;
        case "minus":
            
            t = parseFloat(a) - parseFloat(b);
            break;
        case "multiply":
            
            t = parseFloat(a) * parseFloat(b);
            break;
        case "divide":

            t = parseFloat(a) / parseFloat(b);
            break;
    }   

    return t
}

//# 1ST VERSION OF FUNCTION THAT DOES MATH OPERATIONS  
const operations = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a,b) => a / b
};

/*
const operation = 'add';
const result = operations[operation](5, 3);
console.log(result); // Output: 8 */


//# FUNCTION CONTROLS FONT SIZE OF CALCULATOR SCREEN TEXT
// DEPENDING ON MATH STATEMENT LENGTH
function control_text_size(text_elem) {

        let temp = text_elem.textContent.split(' ');

        if(text_elem.textContent.includes('BY ZERO')) { 
     
            text_elem.style.setProperty('font-size', '30px');
        }
        else if(text_elem.textContent.length > 19) {
            text_elem.style.setProperty('font-size', '18px');
            
            if(temp.length == 1) {
                //text_elem.textContent = String((parseFloat(temp[0])) * 1 );
                text_elem.textContent = String(parseFloat(temp[0]).toExponential());
            
            } else if((temp[2] == '') && (temp[1] != '')) {
                
                    temp[0] = String(parseFloat(temp[0]).toExponential())
                    
                    text_elem.textContent = temp[0] + " " + temp[1] + " ";
            } else {
               
                temp[0] = String(parseFloat(temp[0]).toExponential());
                temp[2] = String(parseFloat(temp[2]).toExponential());
                //temp[0] = String(parseFloat(temp[0]) * 1);
                //temp[2] = String(parseFloat(temp[2]) * 1);
                text_elem.textContent = temp[0] + " " + temp[1] + " " + temp[2];
            }

        } 
        
        else {
            text_elem.style.setProperty('font-size', '36px');
        }
            
}

// THIS FUNCTION DOES FINAL CHECK THEN ADDS NUMBER AND/OR
// DECIMAL CHARACTER
function write_char(original_text, num_ch) {

    if(num_ch == '.') {
        if(!(original_text.includes('.'))) {
           
           original_text = original_text + num_ch;
        
        }
    }
    else if(original_text == '0') {
            original_text = num_ch; 

    } else {
        original_text = original_text + num_ch;
    }

    return original_text
}


//# FUNCTION CALLED BY NUMBER BUTTONS TO HANDLE ADDING NUMBERS. IT
// number_processor FUNCTION CALLS write_char FUNCTION WHEN IT DECIDES
// A NUMBER CAN BE ADDED.
function number_processor(operator_value, screen_text, num_ch) {

    let return_obj = {num1:'', num2:'', operator: operator_value, text: screen_text };

    if(operator_value != '') {
        let temp = return_obj.text.split(" ");
        return_obj.num1 = temp[0];
        return_obj.num2 = temp[2];
    
        if(return_obj.num2 != '0') {
            return_obj.num2 = write_char(return_obj.num2, num_ch);
            return_obj.text = return_obj.num1 + " " + return_obj.operator + " " + return_obj.num2;
        } 
    } else {
        if(!(return_obj.num1.includes('e'))) {
            return_obj.num1 = write_char(return_obj.text, num_ch)
            return_obj.text = return_obj.num1;
        }
    }
    
    return [return_obj.text, return_obj.num1, return_obj.num2];

}

//# THIS FUNCTION USED WHEN OPERATOR IS USED INPLACE OF EQUAL
// BUTTON. ALSO USED IN ADDING OPERATOR TO SCREEN. DEALS WITH 
// RULES ON WHEN OR IF TO ADD AN OPERATOR TO SCREEN STATEMENT
function op_processor(mode_state, math_statement_obj, text, operator_char, operation) {

    if(math_statement_obj.operator == '') {
        math_statement_obj['operator'] = operator_char; 
        math_statement_obj['operation'] = operation;

        mode_state.operator_can_be_entered = false;
        
        text = text + " " + operator_char + " " ;          
            
    } else {
        let temp_list = text.split(' ')

        if((math_statement_obj['num2'] == '0') && (math_statement_obj['operation'] == "divide")) {
            math_statement_obj.num1 = String(operation_func(parseFloat(math_statement_obj.num1), parseFloat(math_statement_obj.num2), math_statement_obj.operation));
            math_statement_obj['answer'] = "";
            math_statement_obj['operator'] = "";
            math_statement_obj['operation'] = "";
            mode_state.operator_can_be_entered = false;
            text = "CAN'T DIVIDE A NUMBER BY ZERO";
        }
        else {
            math_statement_obj['num1'] = String(operation_func(parseFloat(math_statement_obj.num1), parseFloat(math_statement_obj.num2), math_statement_obj.operation));
            math_statement_obj['answer'] = math_statement_obj['num1'];
            math_statement_obj['operator'] = operator_char;
            math_statement_obj['operation'] = operation;
            mode_state.operator_can_be_entered = false;
            text = String(math_statement_obj['answer']) + " " + operator_char + " ";

        }

        math_statement_obj.num2 = "";
                
    }


    return [mode_state, math_statement_obj, text]
}