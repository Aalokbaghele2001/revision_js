// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(1,2);

// function calculateArea(width,height){
//     let area=width*height;
//     console.log(area);
// }
// calculateArea(5,10);

// function greet(name){
//     return `Hello, ${name}`;
// }
// const message=greet('Rohan');
// console.log(message);


// function sayHello(name){
//     return `Hello, ${name} welcome the world of coding.`;
// }
// console.log(sayHello("Aalok"));
// console.log(sayHello());

/// in function defualt parameter has less precidence than arguments
// function sayHello(name="Coder"){
//     return `Hello, ${name} welcome the world of coding.`;
// }
// console.log(sayHello("Aalok"));
// console.log(sayHello());


// function multi(a,b=6)
// {
//     return a*b;
// }
// console.log(multi(5));

// function calculateTotal(items){
//     let subTotal=0;
//     for(let item of items)
//     {
//         subTotal+=item.price;
//     }
//     let tax=subTotal*0.1;
//     let total=subTotal+tax;
//     return total;


// }

// let myItems=[{name:'Widge',price:9.99},
// {name:'Gadget',price:14.99},
// {name:'Doohickey',price:4.99}];

// let myTotal=calculateTotal(myItems);
// console.log(myTotal);


// function calculateTotal(items) {
//     let subtotal = 0;
//     for (let item of items) {
//       subtotal += item.price;
//     }
//     let tax = subtotal * 0.1;
//     let total = subtotal + tax;
//     return total;
//   }
  
//   let myItems = [
//     { name: 'Widget', price: 9.99 },
//     { name: 'Gadget', price: 14.99 },
//     { name: 'Doohickey', price: 4.99 }
//   ];
  
//   let myTotal = calculateTotal(myItems); // returns 31.47



// function fullName(firstName,lastName){
//     return `${firstName}${lastName}`;
// }

// let Identi=fullName('Aalok','baghele');
// console.log(Identi);


// console.log(IsPrime(7),IsPrime(12));

// function IsPrime(n){
//     if(n<2)
//     return false;
//     else if(n==2)
//     return true;
//     else if(n%2==0)
//     return false;
//     else{
//         for(let i=3;i<=parseInt(n/2);i+=2)
//         {
//             if(n%i==0)
//             return false;
//         }
//         return true;
//     }
// }


// let numbers=[1, 1, 1, 1];
// let target=5;

// console.log(Occurence(numbers,target));


// function Occurence(arr,k){
//     let count=0;
//     arr.forEach(i=>{
//         if(i===k)
//         count++;
//     });
//     return count;
// }

// function coffeMaker(){
//     let ingredient1="coffee beans";
//     let ingredient2="milk";
//     let ingredient3="water";
//     console.log(`ingredient is ${ingredient1}, ${ingredient2} and ${ingredient3} your coffe is ready`);
// }
// coffeMaker();

// function customCoffee(ingredient1,ingredient2="regular milk")
// {
// let water ="water";
// let sugar="sugar";
// console.log(`coffe is processing .............................`);
// return `special coffee with ${ingredient1} and ${ingredient2}`;
// }

// console.log(customCoffee('coffee beans','almond milk'));
// console.log(customCoffee('coffee beans'));


// function printNumber(...numbers)
// {
//     console.log(numbers);
// }
// printNumber(1,2,3,4,4,5,5,6,7,8);


// let arr=[1,2,3];
// [a,b,c]=arr;
// console.log(typeof a,b,c);



// const functionName=function(parameter)
// {
//     console.log(`function boddy ${parameter}`);
// }

// functionName("arguments")

// const result=(function(a,b){
//     return a+b;
// })(3,5);
// console.log(result);


// const add=(a,b)=>a+b;
// console.log(add(3,4));


// (function(a,b){
//     console.log(a+b);
// })(3,4);

// (function(){
//     console.log(`Hello i am AlmaBetter Learner`);
// })();


// (function(a,b){
//     console.log(a*b);
// })(3,4);

// (function(){
//     console.log('hii this aalok calling');
// })();


function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

// const numbers=numberGenerator();

// for(const number of numbers)
// {
//     console.log(number);
// }

// let a=numberGenerator();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// function factorial(n){
//     if(n===0)return 1;
//     return n*factorial(n-1);
// }
// console.log(factorial(5))


// function doSomething(n){
//     // if(n==0){
//     //     console.log(`TASK COMPLETED`);
//     //     return;
//     // }
//     console.log(` I am doing something.`);
//     doSomething(n-1)
// }
// doSomething(5);


// function sum(n)
// {
//     if(n===1)
//     return 1;
//     return n+sum(n-1);
// }
// console.log(sum(3));

// function power(n,p)
// {
//     if(p==0)
//     return 1;
//     return n*power(n,p-1);
// }
// console.log(power(2,4));

// function main()
// {
//     console.log(`Task Starting`);
//     task();
//     console.log(`Task Completed`)
//     function task(){
//         console.log(`Task Running`)
//     }
// }
// main();


// console.log(x);
// var x=10;
// console.log(x);

// greet();
// function greet(){
//     console.log(`Hello!`);
// }

// console.log(greet);
// // greet();
// var greet=function(){
//     console.log(`Hello!`)
// }

// function add(a)
// {
//     function res()
//     {
//         return a+5
//     }
//     return res();
// }

// console.log(add(5));

// const addFive=addNumber(5);
// console.log(addFive(3));

// function addNumber(num1)
// {
//     return function(num2)
//     {
//         return num1+num2;
//     }

// }

// let num=[5,2,8,1,9,5,2,1,2,4,5,9,8];

// console.log(sortAscending(removeDuplicate(num))[1]);

// function removeDuplicate(num)
// {
//     for(let i=0;i<num.length;i++)
//     {
//         for(let j=0;j<num.length;j++)
//         {
//             if(num[i]===num[j]&&i!=j)
//             {
//                 num.splice(j,1);
//             }
//         }
//     }
//     return num;
// }

// function sortAscending(num)
// {
//     for(let i=0;i<num.length;i++)
//     {
//         for(let j=i+1;j<num.length;j++)
//         {
//             if(num[i]>num[j])
//             {
//                let temp=num[i];
//                num[i]=num[j];
//                num[j]=temp;
//             }
//         }
//     }
//     return num;
// }


// let num=[5,2,8,1,9];
// let min=Number.MAX_VALUE;
// let second=Number.MAX_VALUE;

// for(let i=0;i<num.length;i++)
// {
//     if(num[i]<min)
//     {
//         min=num[i];
//     }
// }
// console.log(min);
// for(let i=0;i<num.length;i++)
// {
//     if(num[i]<second&&min<num[i])
//     {
//         console.log(num[i]);
//         second=num[i];
//     }
// }
// console.log(second);



// function constfuncs() {
//     var funcs = [];
//     for (var i = 0; i < 10; i++) {
//       funcs[i] = function() {
//         return i;
//       };
//     }
//     return funcs;
//   }
//   var funcs = constfuncs();
// //   console.log(funcs[5]());
// console.log(funcs[9]());



// var add = new Function("num1", "num2", "return num1+num2");
// console.log(add(2, 5));

// console.log(Math.ceil(3.7));
// var grand_Total = eval("10*10+5");
// console.log(grand_Total);


function TnS_add(a, b,c,d) {
    return a + d;
  }
  
  function TnS_spreadadd(...nums) {
    var count = 0;
    for (let num of nums) {
      count += num;
    }
    return count;
  }
  console.log(TnS_add(10, 20, 40), TnS_spreadadd(10, 20, 40));
