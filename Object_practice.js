// let person={
//     firstName:'john',
//     lastName:'doe',
//     age:30,
// };
// console.log(person);
// console.log(person.firstName);
// console.log(person['age']);

// let person=new Object();
// person.firstName='john';
// person.lastName='doe';
// person.age=30;
// console.log(person);

// let arr=new Array();
// arr[0]=1;
// arr[1]=2;
// console.log(arr);

// let str = new String();
// str='aalok';
// console.log(str);


// let person={
//     name:'john',
//     age:30,
//     address:{
//         street:'123 mian st',
//         city:'Anytown',
//         state:'CA',
//         zip:'12345',
//     }
// };
// console.log(person);
// console.log(person.address.state);
// console.log(person['address']['city']);



// let person={
//     name:'john',
//     age:30,
//     address:{
//         street:'123 mian st',
//         city:'Anytown',
//         state:'CA',
//         zip:'12345',
//     }
// };
// person.address.city='Othertown';
// person['address']['zip']='54321';

// console.log(person);

// person.address.country='USA';
// person['address']['phone']='555-1234';

// console.log(person);

// delete person.age;
// delete person['address']['phone'];

// console.log(person);



// const myObj={
//     name:'John',
//     age:30
// };
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));


// const targetObj={name:'john'};
// const sourceObj={age:30};
// Object.assign(targetObj,sourceObj);
// /////This method is used to copy the values of all enumerable own properties
// /// from one or more source objects to a target object.
// console.log(targetObj);


// const myObj={name:'john',age:30};
// Object.freeze(myObj);
// myObj.age=40; // if we freezed the object we can't modify the value of freezed properties
// console.log(myObj);


// const car={ 
//     make:'Toyota',
//     model:'Corolla',
//     year:2022,
//     startEngine:function(){
//         console.log('engine started');
//     }
// };
// console.log(car);
// car.startEngine();
// car['startEngine']();

// const person={
//     name:'John',
//     age:30,
//     greet:function(){
//         console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);
//     }
// };
// console.log(person.name);

// person.greet();
// console.log(person.greet);

// let student={};
// student.name='aalok';
// student.greet=function(){
//     console.log(`hello welcome in the world  of coding`);
// }

// console.log(student);
// student.greet();


// const person={
//     name:'John',
//     age:30,
//     greet:function(){
//         let surname='Doe';
//         console.log(`The name is ${this.name} ${surname} and i am ${this.age} years old.`);
//     }
// };
// person.greet();


// const mySet=new Set();
// mySet.add('aalok');
// mySet.add('rohan');
// mySet.add('micky');
// mySet.add('aalok'); // this duplicate as first element so this is ignored by set 

// console.log(mySet);


// const fruitsArray=['apple','banana','orange','banana','apple'];
// const furtsSet=new Set(fruitsArray);
// console.log(`Array(${fruitsArray.length})`,fruitsArray,furtsSet);

// const mySet=new Set([1,2,3,4,5,6,7,1,2,3,4]);
// console.log(mySet);


// const mySet=new Set();
// mySet.add('apple');
// mySet.add('banana');
// mySet.add('orange');
// mySet.add('apple');

// console.log(mySet);
// mySet.delete('banana');
// console.log(mySet)

// mySet.clear();
// console.log(mySet)


// const myNumSet=new Set([1,2,3,4,5,6,7]);
// console.log(myNumSet.has(5));
// console.log(myNumSet.has(0));

// console.log(myNumSet.size);

// myNumSet.forEach(value=>console.log(value));

// for(value of myNumSet)
// {
//     console.log(value);
// }

// const arr=Array.from(myNumSet)
// console.log(arr);


// const obj1={name:'John',age:30};
// const obj2={name:'John',age:30};
// //Remember that sets store elements based on their reference's uniqueness,
// // not of the values. So, objects with the same contents 
// //but different references will be considered unique in a Set.
// const mySet=new Set();
// mySet.add(obj1);
// mySet.add(obj2);
// console.log(mySet);

// const myMap=new Map();
// myMap.set('name','John');
// myMap.set('age',30);

// console.log(myMap.size);
// console.log(myMap)

// console.log(myMap.has('name'));
// console.log(myMap.has('gender'));

// console.log(myMap.get('name'));
// console.log(myMap.get('age'));

// myMap.forEach((value,key)=>console.log(`${key} : ${value}`));
// myMap.forEach(value=>console.log(value));

// for(const [key,value] of myMap)
// {
//     console.log(`${key}:${value}`);
// }

// for(const value of myMap)
// {
//     console.log(value);
// }

// myMap.delete('age');
// console.log(myMap);
// myMap.clear();
// console.log(myMap);


// const myMap=new Map([['name','John'],['age',30]]);
// const entriesArray=Array.from(myMap);
// console.log(entriesArray);


// let address={
//     flatNo:13,
//     village:'gannatola',
//     dist:'balaghat'
// };
// let education={
//     course:'B.Tech',
//     grade:'A',
//     university:'RGPV'
// };

// let person={
//     name:'aalok',
//     age:23,
//     education:education,
//     address,
//     oarmanent_address:{
//         wardNo:17,
//         apartmentNo:90,
//         dist:'Bhopal'
//     },
//     greet:function(){
//         console.log(`hi this is ${this.name} and i am ${this.age} years old`);
//     },
//     greeting(){
//         console.log(`hi welcome the world of coding `);
//     }
// };

// console.log(person);

// person.gender='Male';
// console.log(person);
// person.greet();
// person.greeting();


// let emp=new Object();
// console.log(emp);
// emp.name='aalokbaghele';
// emp.age=23;
// emp.id=13;
// console.log(emp);



// class PersonFactory{
//     constructor(name,age){
//         this.name=name,
//         this.age=age,
//         this.greets=function(){
//             console.log(`i am ${this.name} i am ${this.age} years old.`);
//         }
//     };
// };

// let ramesh=new PersonFactory('Ramesh',24);
// let raman=new PersonFactory('Raman',30);
// let sakshi=new PersonFactory('Sakshi',34);

// console.log(ramesh);
// console.log(raman);
// console.log(sakshi);

// ramesh.greets();
// raman.greets();
// sakshi.greets();

// console.log(Object.keys(ramesh));
// console.log(Object.values(ramesh));
// console.log(Object.entries(ramesh));

// console.log(ramesh instanceof PersonFactory);


// class emp{
//     constructor(name,id,position,salary)
//     {
//         this.name=name;
//         this.id=id;
//         this.position=position;
//         this.salary=salary;
//         this.description=function()
//         {
//             console.log(`Employee name is ${this.name}, id is ${this.id}, position is ${this.position} and salary is ${this.salary}`);
//         }
//     };
    
// };

// const aalok=new emp('aalok','emp id 123','Web Developer',"$400000");
// console.log(aalok);
// aalok.description();
// console.log(aalok instanceof emp);


// let person={
//     name:'aalok',
//     age:30,
//     gender:'Male'
// };
// let personI=new Object();
// Object.assign(personI,person);
// console.log(personI);
// console.log(person);

// let personII={...person};
// console.log(personII);



// let input=parseInt(prompt("enter the number : "));
// if(input%5==0)
//     document.write(`this number ${input} is multiple of 5.`);
// else
// document.write(`this number ${input} is  not multiple of 5.`);

// let num = prompt("enter a number:");

//     if (num % 5 == 0 ) {
//         document.write("this num ",num ,"is multiple of 5 " );
//     }
//     else {
//         document.write("this num ",num ,"is not multiple of 5 ");
//     }


// let arr=[1,2,3,3,3,1,4,5,-5,-6,7,-8];
// console.log(arr,arr.length);

// let set=new Set(arr);
// console.log(set,set.size);

// console.log(set.has(2),set.has(0));
// set.add(10);
// console.log(set);
// set.delete(-8);
// console.log(set);

// let array=Array.from(set);
// console.log(array);

// let map=new Map();
// map.set('string','string');
// map.set(1,'number');
// map.set([1,2,3],'array');
// map.set({name:'aalok',age:23},'object');
// map.set(true,'boolean');
// console.log(map);

// console.log(map.entries());
// console.log(map.get(1));
// console.log(map.keys());


// let input=parseInt(prompt("enter the scores: "));
// if(input>=80&&input<=100)
// document.write(`A`);
// else if(input>70)
// document.write(`B`);
// else if(input>60)
// document.write(`B`);
// else if(input>50)
// document.write(`B`);
// else
// document.write(`F`);

// let scores = "71"
//     let grades;

//     if (scores >= 80 && scores <= 100){
//         console.log(grades = "A");
//     }
//     else if (scores >= 70) {
//         console.log(grades = "B");
//     }
//     else if (scores >= 60){
//         console.log(grades = "C");
//     }
//     else if (scores >= 50){
//         console.log(grades = "D");
//     }
//     else{
//         console.log(grades = "E");
//     }


// const person={
//     name:'John Doe',
//     age:30,
//     email:'john@example.com'

// };
// const jsonSTR=JSON.stringify(person);
// console.log(jsonSTR)
// const OrignalObj=JSON.parse(jsonSTR);
// console.log(OrignalObj);


// let basic={
//     'name':'John',
//     'age':30
// };
// let profession={
//     'isStudent':true,
//     'age':25
// };

// // Object.assign(basic,profession);
// // basic={...profession};
// console.log(basic);

// let inputs={
//             person:{
//                     name:'john',
//                     age:30,
//                     address:{
//                         city:'New York',
//                         country:'USA'
//                             }
//                     }
//             } 


// let input=prompt("enter : ");
// let strArray=input.split(".");

// strArray.forEach(i=>{
//    inputs=inputs[i];
// });
// if(inputs===undefined)
// document.write(inputs);
// else
// document.write(inputs);


// console.log(inputs.person.address.city);


// var materials = ['Table', 'Chair', 'Boxes', 'Press'];
// console.log(materials.map(material => material.length));