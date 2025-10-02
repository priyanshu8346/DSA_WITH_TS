// Question: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
function isValid(s: string): boolean {
    const stack: string[] = []
    const dict:{[key:string]: string}={
        ')': '(',
        '}': '{',
        ']': '['
    }
    const openingBrackets = new Set(['(','[','{']);
    for(const char of s){
        if(openingBrackets.has(char)){
            stack.push(char)
        }
        else{
            if(stack.length === 0 || stack[stack.length - 1] !== dict[char]){
                return false;
            }
            else{
                stack.pop();
            }
        }
    }
    return stack.length === 0;
};