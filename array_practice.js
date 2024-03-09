// let fruits=['apple','banana','orange'];
// let numbers=new Array();
// numbers.push(5);
// numbers.push(6);
// console.log(fruits);
// console.log(numbers);


// let myArray=[
//     1,"Hello",true,[2,3,4],
//     {
//     name:"john",
//     age:30
//     },
//     function(){
//         console.log("This is a function inside an array");
//             }
//         ];

// console.log(myArray);
// console.log(myArray[3][1]);
// myArray[5]();

// let myArray=[1,2,3];
// myArray.push(4);
// console.log(myArray);

// const fruits=['banana','apple','orange'];
// console.log(fruits);
// fruits.unshift('grape');
// console.log(fruits);


// let fruits=['apple','banana','cherry'];
// console.log(fruits);
// fruits[1]='pear';
// console.log(fruits);
// fruits[3]='orange';
// console.log(fruits);

// let fruits=['apple','banana','orange'];
// let removedFruit=fruits.pop();
// console.log(fruits);
// console.log(removedFruit);

// let fruits=['apple','banana','orange'];
// console.log(fruits.length);
// // let removedFruit=fruits.shift();
// // console.log(fruits);
// // console.log(removedFruit);


// let numbers=[1,2,3,4,5,6,7,8,9,0];


// console.log(numbers.splice(4,0,"a","b","c"));
// console.log(numbers);


// console.log(numbers.slice(3));
// console.log(numbers);

// console.log(numbers.slice(1,6));
// console.log(numbers);

// console.log(numbers.slice(-4));
// console.log(numbers.slice(-7,-3));


// let num=numbers.splice(6);
// console.log(num);
// console.log(numbers);

// console.log(numbers.splice(-4));

// console.log(numbers.splice(1,4));

// console.log(numbers.splice(1,1,"aalok"));
// console.log(numbers);

// console.log(numbers.splice(5,3,'six','seven','eight'));
// console.log(numbers);


// let alfa=['a','b','c','d','e','f','g','a','a','b','b','c','c','d','d',];
// console.log(alfa);
// console.log(alfa.indexOf('c'));
// console.log(alfa.lastIndexOf('a'));
// console.log(alfa.includes('d'));
// console.log(alfa.includes('z'));


// let a=[1,2,3,4,5,6,7,8,9];
// // let res=a.find(i=>i>5);
// // console.log(res);

// // let res1=a.filter(i=>i>6);
// // console.log(res1);

// // const doubled=a.map(i=>i*2);
// // console.log(doubled);
// // console.log(a);

// // let Sum=a.reduce((acc,num)=>acc+num,0);
// // let Mult=a.reduce((acc,num)=>acc*num,1);

// // console.log(Sum);
// // console.log(Mult);

// // let b=[11,22,33,44,55,66,77,88,99];

// // let con=a.concat(b);
// // console.log(con);
// // let str=b.join("");
// // console.log(str);
// // let arr=str.split('');
// // console.log(arr);

// // console.log(b.reverse());

// let numbers=[3,5,1,8,2];
// let n=numbers.sort();
// console.log(numbers);
// console.log(n);

// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(96));

// numbers.push(4,7);
// console.log(numbers);

// let moreNumber=[6,9];
// let allNumber=numbers.concat(moreNumber);
// console.log(allNumber);

// console.log(allNumber.includes(5));

// let greaterThanFour=allNumber.find(number=>number>4);
// console.log(greaterThanFour);


// let arr=[{names:"john"},{names:"jane"}];
// let arr1=arr;
// arr1.push({names:"bob"});

// console.log(arr);
// console.log(arr1);

// arr[0].names="mike";
// console.log(arr);
// console.log(arr1);


// let a=[1,2,3,4,5];
// let b=a;
// b.push(6);
// console.log(a);
// console.log(b);


// let arr=['h','e'];
// arr.names='john';
// console.log(arr);
// console.log(arr.names);
// console.log(arr['names']);

// let fruits=['apple','orange','strawebary','kiwi'];
// fruits.push('grape');
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// const myArray=[];
// myArray.push(['apple','orange']);
// myArray.push(['grape','pear']);
// myArray.push(['pineapple','mango']);
// console.log(myArray);


// let x=[['jack',24],['sara',25],['peter',26]];
// console.log(x[0]);
// console.log(x[0][0]);
// console.log(x[2][1]);

// let studentData=[['jack',24],['sara',23]];
// studentData.push(['mark',24]);
// console.log(studentData);

// studentData[1][2]='hello';
// console.log(studentData);

// studentData.splice(1,0,['mark',24]);
// console.log(studentData);

// let studentData=[['jack',25],['sara',27]];

// studentData.pop();

// studentData[1].pop();

// studentData.splice(1,1);

// console.log(studentData);



let studentData = [['ryan', 24], ['sara', 23]];

// studentData.forEach(student => {

//     student.forEach(data => {

//         console.log(data);
//     });
// });

// for(let i of studentData)
// {
//     for(let j of i)
//     {
//         console.log(j);
//     }
// };

// for(let i in studentData)
// {
//     for(let j in studentData[i])
//     {
//         console.log(studentData[i][j]);
//     }
// }

// for(let i=0;i<studentData.length;i++)
// {
//     for(let j=0;j<studentData[i].length;j++)
//     {
//         console.log(studentData[i][j]);
//     }
// }

// const animal=['ant','bison','camel','duck','elephent'];

// console.log(animal.slice());
// console.log(animal.slice(2));
// console.log(animal.slice(2,4));
// console.log(animal.slice(4,2));


// console.log(animal.splice(2));
// console.log(animal);

// console.log(animal.splice(1,3));
// console.log(animal);

// console.log(animal.splice(1,1));
// console.log(animal);

// console.log(animal.splice(0,1,"bull"));
// console.log(animal);


// const array=[5,11,8,130,44,150];

// const found=array.find(i=>i>100);
// const even=array.find(i=>i%2==0);
// array.find(i=>{
//     if(i%100==0)
//      console.log(i);;
// })
// console.log(found,even);

// const array=[5,11,8,130,44,150];

// console.log(array.filter(i=>i%2==0));
// console.log(array.find(i=>i>100));


// const array=[1,4,6,16];
// console.log(array.map(i=>i*2));


// let elements=['fire','air','water'];
// console.log(elements.join());
// console.log(elements.join(""));

// const num=[1,2,3,4,5,6];
// console.log(num.reverse());
// console.log(num);


// let array=[1,2,3,4,5];
// let sum=array.reduce((acc,num)=>acc+num,0);
// console.log(sum);
// let mult=array.reduce((acc,num)=>acc*num,1);
// console.log(mult);

// let arr=['aalok','string','love','javascript','web','developer'];
// let str=arr.toString();
// console.log(str);


// emp={
//     names:'aalok',
//     age:23,
//     gender:'male',
//     profession:'web developer',
//     salary:40000
// };

// console.log(emp);
// delete emp.gender;
// console.log(emp);


// let names=['aalok','rohit','mohit'];
// let scores=[40,70,50];
// let grades=['A','B','C'];

// console.log(names.concat(scores,grades));


// let a=[1,2,3,[2,3,4],1,[1,2]];
// console.log(a.flat());


// let a=[1,2,3,4,10];
// let b=[10,20,30,100];
// console.log(a.some(i=>i%10==0));
// console.log(a.every(i=>i%10==0));

// console.log(b.every(i=>i%10==0));
// console.log(b.every(i=>i%100==0));
// console.log(b.some(i=>i%100==0));

// let a=[1,2,3,4,5,6,7,8,9,0];
// let sumRight=a.reduce((acc,num)=>acc+num,0);
// console.log(sumRight);


// function func(){
//     console.log(Array.isArray("aalok"),Array.isArray([1,2,3]),Array.isArray({foo:123}));
// }
// func();

// let arr=[1,2,3,4,5];
// arr.copyWithin(0,3,4);  // copy to index 0 the element at index 3
// console.log(arr); /// [4,2,3,4,5]

// let arr1=[1,2,3,4,5,6,7];
// arr1.copyWithin(1,3);   // copy to index 1 all elements from index 3 to the end 
// console.log(arr1);    // [1,2,5,6,7,6,7]


// let arr=[1,2,3,4,5,6,7,8,9,0];
// const iter=arr.entries();  // it print index and value at that index 
// console.log(iter.next().value); // [0,1]  0 is index and 1 is value at index 0
// console.log(iter.next().value); // next [1,2]  1 is index and 2 is value at index 1 

// for(const [index,element] of arr.entries())   /// it prints all index and values
// {
//     console.log(index,element);
// }

// for(value of arr.entries())   //  it prints in arr of index and value one  pair 
// {
//     console.log(value);
// }

// for(values of arr.entries())
// {
//     console.log(values[0],values[1]);
// }


// let arr=[1,2,3,4,5,6,7,8,9,0];

// arr.fill(0,2,4);   // fill 0 from index 2 upto index 4 

// arr.fill(4);   // fill all index value with 4 

//arr.fill(4,1);  // fill value with 4 from index 1 to at end 

// arr.fill(4,1,2);  // fill value with 4  at index 1 

// arr.fill(4,1,1);    // nothing fill in array becuase index 1 to upto index 1 = nothing  

// arr.fill(4,-3,-2);

// console.log(Array(3).fill(4));

// console.log(arr);


// let arr=Array(5);
// document.write(arr)

// for(let i=0;i<arr.length;i++)
// {
//     arr.fill(parseInt(prompt("enter")),i,i+1);
// }

// document.write(arr,arr.length)

let arr=[5,12,8,130,44];

// const largeEleIndex=arr.findIndex(i=>i>13);
// console.log(largeEleIndex);

// const a=arr.findIndex(i=>{
//     if(i>13)
//    return i;
// });
// console.log(a);

const found=arr.findLast(i=>i>10);
console.log(arr.indexOf(found));