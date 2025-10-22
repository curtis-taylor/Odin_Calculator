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
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a,b) => a / b
};

const operation = 'add';
const result = operations[operation](5, 3);
console.log(result); // Output: 8

function write_number(original_text, num_ch) {
    if(original_text == '0') {
            original_text = num_ch;
    } else {
    original_text = original_text + num_ch;
    }

    return original_text
}

function op_processor(mode_state, math_statement, operator_char) {


    if(Object.keys(math_statement).length < 1) {
                console.log("plus") 
                math_statement['num1'] = screen_text.textContent;
                math_statement['operator'] = "+"; 
                // math_statement_list.push(screen_text.textContent);
                // math_statement_list.push(" + ")
                
                console.log("+++")
                
                screen_text.textContent = screen_text.textContent + " + ";            
            
    } else {
        let temp_list = screen_text.textContent.split(' ')
        console.log(temp_list);
        console.log("***")
        math_statement['num2'] = temp_list[2];

        math_statement['num1'] = operations['add'](parseFloat(math_statement['num1']), parseFloat(math_statement['num2']));
        math_statement['operator'] = operator_char;
        
        //math_statement_list[0] = operations['add'](parseFloat(math_statement_list[0]), parseFloat(temp_list[2]));
        // math_statement_list[1] ="+";
        
        
        screen_text.textContent = String(math_statement['num1']) + " + ";
        delete math_statement.num2;
        //console.log(math_statement_list);
                
    }
}