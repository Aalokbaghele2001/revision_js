// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }

// const arr=["Bijay",1,2,"+"];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach((i)=>{
//     console.log(i);
// });
// arr.forEach(function(x){
//     console.log(x);
// });


// const emp={
//     namee:"aalok",
//     age:23,
//     des:"student",
//     work:"coder",
//     isGraduate:true
// }
// for(k in emp)
// {
//     console.log(k,emp[k]);
// };
// console.log(emp.namee,emp["namee"]);

// const arr=["Bijay",1,2,"+"];
// arr.isGraduate=true;
// console.log(arr);
// for(a in arr)
// {
//     console.log(a);
// }

// const arr=["aalok",23,"coder","m","student",true];
// for(i of arr)
// {
//     console.log(i);
// }

// let a=[1,2,3,4,5,6,7,8,9,0];
// for(let i of a)
// {
//     console.log(i);
// }

// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// let userInput;
// do{
//     userInput=prompt("enter a positive number : ");
//     userInput=parseInt(userInput);
//     document.write(userInput);
// }while(isNaN(userInput)||userInput<=0);

// const arr=[1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77,88,99,100];
// for(let i of arr)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
// arr.forEach((i)=>{
//     if(i%2==0)
//     console.log(i);
// });
// for(a in arr)
// {
//     if(arr[a]%2==0)
//     console.log(arr[a]);
// }
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
// }
// let i=0;
// while(arr.length>i)
// {
//     if(arr[i]%2==0)
//     console.log(arr[i]);
// i++;
// }


// let number=5;
// let power=-2;

// if(power>0)
// {
//    console.log( powe(number,power));
// }
// else if(power<0)
// {
//     console.log(1/powe(number,power*-1));
// }
// else
// console.log(1);

// function powe(n,p)
// {
//     let res=1;
//     while(p>0)
//     {
//         res*=n;
//         p--;
//     }
//     return res;
// }


// let n=8;
// let str="";
// for(let i=1;i<=n;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         str+=j;
//     }
//     str+="\n";
// }
// console.log(str);

// let number=8367;
// let count=0;

// while(number>0)
// {
//     number=parseInt(number/10);
//     count++;
// }
// console.log(count);


// let n=4367;
// let sum=0;

// while(n>0)
// {
//     let r=n%10;
//     sum+=r;
//     n=parseInt(n/10);
// }
// console.log(sum);


// const arr=[5,2,7,3,9,2,7,59,1,3,6];
// let max=arr[0];
// for(i in arr)
// {
//    if(arr[i]>max)
//    max=arr[i];
// }
// console.log(max);

// var arr1=[3,45,23,78,34];
// var arr2=[4,2,1,3];
// let product=[];

// for(let i=0;i<arr1.length;i++)
// {
//         if(arr1.length>arr2.length)
//             product.push(arr1[i])
//         else if(arr1.length<arr2.length)
//         product.push(arr2[i])
//         else
//         product.push(arr1[i]*arr2[i]);
    
    
// }
// console.log(product);



// let n=10;
// let a=0;
// let b=1;
// while(a<=n)
// {
//     console.log(a);
//     let t=b;
//     b=a+b;
//     a=t;
// }
