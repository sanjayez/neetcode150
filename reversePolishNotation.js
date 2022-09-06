var evalRPN = function(tokens) {
    let stack = []
    
    const evaluate = (symbol) => {
        let first = Number(stack.pop())
        let second = Number(stack.pop())
        switch(symbol){
            case '+':
                stack.push(first + second)
                break;
            case '-':
                stack.push(second - first)
                break;
            case '*':
                stack.push(first * second)
                break;
            case '/':
                stack.push(Math.trunc(second / first))
                break;
            default: break;
        }
    }
    
    for(let s of tokens){
        console.log(stack, s)
        if(s === '+' || s === '-' || s === '*' || s === '/'){
            evaluate(s)
        }
        
        else stack.push(s)
    }
    
    return stack[0]
};

