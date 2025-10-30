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

function write_char(original_text, num_ch) {
    if(num_ch == '.') {
        original_text = original_text + num_ch
    }
    else if(original_text == '0') {
        if(num_ch != '0') {
            original_text = num_ch; }
    } else {
        original_text = original_text + num_ch;
    }

    return original_text
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
        delete math_statement_obj.num2;
        //console.log(math_statement_list);

       
                
    }

    return [mode_state, math_statement_obj, text]
}