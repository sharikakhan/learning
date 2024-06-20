/*short circuit evaluation*/
a='hello'
b=false
result=a && b //reads from left to right and returns last value(b)
result1=a || b//reads from left to right.if any one is true then it returns true else false(a)
console.log(result)
console.log(result1)
/*function divideAndCheck(a, b) {
    // Check if b is not zero using the logical OR (||) operator for short-circuit evaluation
    return b !== 0 && a / b || "Division by zero error";
  }
  res=divideAndCheck(4,2)
console.log(res)*/
