// let sum=10+5;
// console.log("sum",sum);
// let num1='2080/05/30';
// let num2=6;
// let sum2=new Date(num1);
// console.log("Sum",sum,sum2);


// //assignment
// let x=1;
// let m ="messsage";
// let y="1";
// console.log("x+y",x+y);

// z=0;
// if(z){
//     console.log("z");

// }
// else{
//     console.log("not z");    //output is not z xuz z=0 whit is null

// }
// let a="1";
// let b="1";
//  const value= a===b;
//  if(value){
//     console.log("equal");


// }
// else{
//     console.log("not z");    //output is not z xuz z=0 whit is null

// }


//  const tur=value?"equal":"not equal" ;///equal in output cuz b===c


//  //array
//  const checker={
//     'test1':'this is test'
    
//  }


//  console.log("checker",checker.test1)  //key 
//  console.log("checker",checker['test1'])  //index
 

//  const testKey='test1'
//  console.log("checker3",checker[testKey])
//  /**
//  * //cmmb is shortcut for multi line comment
//   */

//  const obj1={
//     condition1:(value)=>{
// console.log("func1");
// return"value";
//     },
//     condition2:(value)=>{
//         console.log("func2");
//         return "value";
        
//     },
//  }

//  const conditionToCall="condition1";   //refer and function call  linked in
//  obj1[conditionToCall]();


//  //datatypes   //babel -compiler eg tur condition to old condition so that browser understand


//  const str1="Hello";
//  const str10="1234";
//  const str00=`1234`;
//  const num=-1234

// console.log(`my name is ${str1} and I am ${num}`);




// //comparing object returns fallse so compare its obj.keys to compare
// //array function map,reduce,foreach


// Assignment






const displayInput = document.getElementById("input");
let currentValue = "";
let pendingOperation = null;

function numberchange(number) {
    currentValue += number;
    displayInput.value = currentValue;
}

function operatorchange(operator) {
    if (pendingOperation) {
        calculate();
    }
    currentValue += operator;
    pendingOperation = operator;
    displayInput.value = currentValue;
}

function decimalchange(decimal) {
    if (!currentValue.includes(".")) {
        currentValue += decimal;
        displayInput.value = currentValue;
    }
}

function cleardisplay() {
    currentValue = "";
    pendingOperation = null;
    displayInput.value = "";
}

function calculate() {
    const expression = currentValue.replace(/\s/g, ""); 
    const result = eval(expression);
    currentValue = result.toString();
    pendingOperation = null;
    displayInput.value = result;
}
