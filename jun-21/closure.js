/*function newacess(a)
{
    let message="I am parent function";
    console.log(message);
    function childacess1()
    {
        console.log("child1",message);
    }
    message="No thanks" ;
    return childacess1;
}
const outacess=newacess('Hi');
outacess(); */
// function createCounter() {
//   let count = 0;

//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1()); // 1
// console.log(counter1()); // 2

// console.log(counter2()); // 1

function createCounter() {
    let count = 0;
  
    function func() {
      count++;
      return count;
    }
    return func;
  }
  
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  console.log(counter1()); // 1
  console.log(counter1()); // 2
  
  console.log(counter2()); // 1
  console.log(counter2()); // 2
  