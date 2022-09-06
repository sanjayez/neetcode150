class MinStack {
    constructor(){
        this.min = []
        this.stack = []
        this.len = 0
        this.mlen = 0
    }
    
    push(val){
        if(this.mlen === 0) {
            this.min[this.mlen] = [val, this.len]
            this.mlen += 1
        }
        
        else if(this.mlen !== 0 && val <= this.getMin()) {
            this.min[this.mlen] = [val, this.len]
            this.mlen += 1
        }

        this.stack[this.len] = val
        this.len += 1
    }
    
    pop(){
        let val = this.stack[this.len - 1]
        this.len -= 1
        if(this.getMin() === val) this.mlen -= 1
    }
    
    top(){
        return this.stack[this.len - 1]
    }
    
    getMin(){
        console.log(this.min, this.stack, this.mlen, this.len)
        return this.mlen === 0 ? this.min[this.mlen][0] : this.min[this.mlen - 1][0]
    }
}


let minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
minStack.getMin(); // 
minStack.pop();
minStack.getMin(); // 
minStack.pop();
minStack.getMin(); // 
minStack.pop();
minStack.getMin()