// const names='john';  /// strings are immutable one you create string that can't be changed
// console.log(names);
// names[0]='a';  /// strings are immutable meaning their characters cannot be changed 

// console.log(names);

// const names="Rayan";
// const age=28;
// console.log(`My name is ${names} and i am ${age} years old.`);

// console.log(names[0],names.charAt(0));



// let a='hello';
// a[0]='H'; // strings are immutable meaning their charrcters cannot be changed 

// console.log(a);

// a='Hello'; // but we can assign a varible to a new string .
// console.log(a);
// console.log(a.length);


// let a='Hello';
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.indexOf('l'));
// console.log(a.lastIndexOf('l'));

// let b='World';
//  console.log(a+b);
//  console.log(a.concat(b));


// let str='Hello World!';

// let str1=str.slice(6);
// console.log(str1);
// console.log(str);

// let str2=str.slice(0,5);
// console.log(str2);

// let str='Hello World!';
// let str1=str.replace('e','a'); // it did'nt modify original string 
// console.log(str1);

// let arr=str.split("");
// console.log(arr);
// console.log(str);


// let s='   aalok    ';
// console.log(s,s.length);

// let s1=s.trim();
// console.log(s1,s1.length);

// let arr=[1,2,3];
// arr[5]=5;
// console.log(arr);

// const a=225;
// const b=true;

// const result1=String(a);
// const result2=String(b);

// console.log(result1,result2,typeof result1,typeof result2 );


// let input="Hello, world!";
// console.log(WordReverser(input));

// function WordReverser(str)
// {
//     let a=str.split(" ");
//     return a.reverse().join(" ");
// }

// let input='racecar';
// console.log(palindromeDetector(input));

// function palindromeDetector(str)
// {
//     let a=str.split("");
//     let newStr=a.reverse().join("");
//     return newStr===str;
// }
// let input=[1,2,3,4,5];
// let target=2;
// let de=input.splice(input.length-target,target);
// input.splice(0,0,de);
// console.log(input.flat());


// let str="😍Aalok Baghele #2001 $Restart £👨‍💻Welcome World of Coding 👨‍💻";
// let cleanedStr=str.replaceAll(/[^a-zA-Z0-9]/g,"");
// console.log(cleanedStr);


// var count = [1, ,3];
// console.log(count);


// let arr=[1,2,3,4,5,6,7,8,9,0]
// console.log(arr.toString(),typeof arr.toString());
// console.log(arr.join(""), typeof arr.join(""));

// let str="Aalok Baghele ";
// console.log(str);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// console.log(str.indexOf('o'));
// console.log(str.indexOf("O"));

// let str1="Welcome World ";
// let str2="of Coding ";
// let fullStr=str.concat(str1,str2);
// console.log(fullStr);


// let str='aalok baghele welcome';
// console.log(str.slice(3));
// console.log(str.slice(3,9));
// console.log(str.slice(-9));
// console.log(str.slice(-9,-3));

// let str='Hii This is Aalok from ak. Hii Aalok How are You aalok you Feeling well in this World';
// let nStr=str.replace('Aalok','Rohan');
// console.log(nStr);
// let nStr1=str.replace('aalok','rohan');
// console.log(nStr1);
// console.log(str);

// const regex=/aalok/i;
// console.log(str.replace(regex,'rohan'));
// const regex1=/aalok/gi;
// console.log(str.replaceAll(regex1,'Rohan'));

// const elements='air water fire';
// console.log(elements.split(" "));

// const url="https://www.airmeet.com/event/123";
// let splited=url.split('/');
// console.log(splited,splited[splited.length-1]);


// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.at(8));

// console.log(sentence.endsWith('dog.'));
// console.log(sentence.endsWith('fox',19));

// console.log(sentence.includes('brown'));
// console.log(sentence.includes('over'));
// console.log(sentence.includes('aalok'));

// console.log(sentence.indexOf('dog.'));

// const a='réservé';
// const b='RESERVE';
// console.log(a.localeCompare(b));
// console.log(a.localeCompare(b,'en',{sensitivity:'base'}));

// const str="The quick brown fox jumps over the lAxy DOg. It barked."
// console.log(str.match(/[A-Z]/g));
// console.log(str.match(/[a-z]/g));
// console.log(str.match(/[T,A,D]/g));
// console.log(str.match(/[a,b,c,d,e,f]/g));

// console.log(str.replace('brown','white'));
// console.log(str.replace(/dog/i,'cat'));
// console.log(str.replace(/laxy/i,'hard'));



// const str=`I am cat think Ruth's dog is cAt cuter than Cat your caT and dog! `;
// console.log(str.replaceAll('dog','monkey'));
// console.log(str.replaceAll('cat','rabbit'));
// console.log(str.replaceAll(/cat/gi,'rabbit'));

// console.log(str.replace(/[^A-Z]/g,""));
// console.log(str.replace(/[^a-z ]/g,"$"));


// const paragraph = "I thiwnk Ruth'S dog is cuter thawn your dog!";

// console.log(paragraph.search(/[^\w\s]/g));