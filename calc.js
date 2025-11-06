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

function operate(op, a, b) {
    
} */

const operations = {
    add: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a,b) => a / b
};




const operation = 'add';
const result = operations[operation](5, 3);
console.log(result); // Output: 8

function control_text_property(text_elem) {
            console.log(text_elem.textContent.length + "  leng")

            if(text_elem.textContent.length > 38) {
                text_elem.style.setProperty('font-size', '18px');
                console.log("30 length")
            } 
            else if(text_elem.textContent.length > 30) {
                text_elem.style.setProperty('font-size', '22px');
                console.log("30 length")
            } 
            else if(text_elem.textContent.length > 25) {
                text_elem.style.setProperty('font-size', '28px');
                console.log("25 length")
            } 
            else if(text_elem.textContent.length > 15) {
                console.log("0000")
                // document.documentElement.style.setProperty("--primary-color", "purple");
                text_elem.style.setProperty('font-size', '32px');
                console.log("15 length")
            } 
            
            else {
                text_elem.style.setProperty('font-size', '36px');
            }
}

function write_char(original_text, num_ch) {

    if(num_ch == '.') {
        if(!(original_text.includes('.'))) {
        original_text = original_text + num_ch;
        }
    }
    else if(original_text == '0') {
            original_text = num_ch; 

            console.log("zero suppose to returned " + original_text)
    } else {
        original_text = original_text + num_ch;
        console.log(" original text  " + original_text);
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


        console.log(text);
        console.log(math_statement_obj)
        console.log("***  " + math_statement_obj.operation)
        //math_statement_obj['num2'] = temp_list[2];

        math_statement_obj['num1'] = operations[math_statement_obj.operation](parseFloat(math_statement_obj['num1']), parseFloat(math_statement_obj['num2']));
        math_statement_obj['operator'] = operator_char;
        math_statement_obj['operation'] = operation
        mode_state.operator_can_be_entered = false;
        mode_state.num1 = false;

        // let mode_state_machine = {num1:true, operator_can_be_entered:false, num2:false, num1_decimal_used:false, num2_decimal_used:false};
        //math_statement_list[0] = operations['add'](parseFloat(math_statement_list[0]), parseFloat(temp_list[2]));
        // math_statement_list[1] ="+";
        
        
        text = String(math_statement_obj['num1']) + " " + operator_char + " ";
         math_statement_obj.num2 = "";
        //delete math_statement_obj.num2;
        //console.log(math_statement_list);

       
                
    }


    return [mode_state, math_statement_obj, text]
}