// function task(message){
//     let n=10000000000;
//     while(n>0)
//     {
//         n--;
//     }
//    console.log(message);
// }
// console.log(`Start script..... `); 
// task(` Call an API `);
// console.log(` Done! `);


// function task2(message){
//     let n=10000000000;
//     while(n>0)
//     {
//         n--;
//     }
//    console.log(message);
// }
// console.log(`Start script..... `); 
// setTimeout(()=>task2(` Call an API `),1000);
// console.log(` Done! `);



// function greet(){
//     console.log(`This will appear next. Hello World!`);
// }

// setTimeout(function(){
//     console.log(`This message appears after 3 seconds`);
//     greet();
// },3000);


// function sayHello(name,message){
//     console.log(`Hello, ${name}! ${message}`);
// }
// setTimeout(sayHello,3000,'john','how are you?');


// function displayTime(){
//     var currentTime=new Date();
//     var hours=currentTime.getHours();
//     var minutes=currentTime.getMinutes();
//     var seconds=currentTime.getSeconds();

//     var timeString=`${hours}:${minutes}:${seconds}`;
//     console.log(timeString);
// }

// setInterval(displayTime,1000);



// function sayHello(){
//     console.log(`Hello, World!`);
// }
// const timerid=setTimeout(sayHello,2000);
// clearTimeout(timerid);


// let count=0;
// function displayCount(){
//     count++;
//     console.log(`Count:${count}`);
//     if(count===5)
//     {
//         clearInterval(intervalID);
//         console.log(`Interval stopped.`);
//     }
// }

// let intervalID=setInterval(displayCount,1000);


// var chunk = function(arr, size) {
//     //Your code goes here
//     let res=[];
//     let temp=[];
//     arr.forEach((i)=>{
//        temp.push(i);
//        if(temp.length===size)
//        {
//            res.push(temp);
//            temp=[];
//        }
//     });
//     if(temp.length)
//     {
//        res.push(temp);
//     }
//     return res;
// };























// let arr = [1,2,3,4,5], size = 2;

// let res=[];
// let temp=[];

// arr.forEach(i=>{
//     temp.push(i);
//     if(temp.length===size)
//     {
//         res.push(temp);
//         temp=[];
//     }
// });
// if(temp.length)
// res.push(temp)
// console.log(res);


// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
//   });
//   const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
//   });
//   Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
// function a(){
//     console.log("aalok");
// }
// setTimeout(a,0);


// setTimeout(() => console.log('timeout'), 0);
// // Microtask queue
// Promise.resolve().then(() => console.log('promise'));


// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);


// async function hello() {
//     try {
//       abc;
//       return ("Hello")
//     } catch (error) {
//       return ("Boo! You have a " + error)
//     }
//   }
//   hello().then(value => console.log(value)).catch(error => console.log(error));