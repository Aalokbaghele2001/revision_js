// let arr=[ 89, 67, 56, 45, 78,10];

// let max=arr[0];

// for(let i=0;i<arr.length;i++)
// {
//     if(max<arr[i])
//     {
//         max=arr[i];
//     }
// }
// console.log(max);

// let min=arr[0];

// for(let i=0;i<arr.length;i++)
// {
//     if(min>arr[i])
//     {
//         min=arr[i];
//     }
// }
// console.log(min);



// let arr=[89, 67, 56, 45, 78,10];

// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);

// let arr=[10,89, 67, 56, 45, 78];
// let first=Number.MAX_VALUE;
// for(let i=0;i<arr.length;i++)
// {
//     if(first>arr[i])
//     {
//         first=arr[i];
//     }
// }
// let second=Number.MAX_VALUE;
// for(let i=0;i<arr.length;i++)
// {
//     if(second>arr[i]&&arr[i]!=first)
//     second=arr[i];
// }
// console.log(second,first);




// let arr=[10,89, 67, 56, 45, 78];
// let min=Number.MAX_VALUE;
// arr.forEach(i=>{
//     if(i<min)
//     min=i;
// });
// console.log(min);

// let sum=arr.reduce((acc,num)=>acc+num,0);
// console.log(sum);

// let rev=[];
// arr.forEach(i=>rev.unshift(i));
// console.log(rev);


// let arr=[1, 90, 34, 89, 7, 9];
// let len=arr.length;
// let hLen=parseInt(len/2);
// let a=1;

// for(let i=0;i<hLen;i++)
// {
//     if(a<=hLen){
//     for(let j=i+1;j<len;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
//     a++;
// }
// else
// {
//     for(let j=i+1;j<arr.length;j++)
//         {
//             if(arr[i]<arr[j])
//             {
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
// }
// }
// console.log(arr);

// let arr=[6,4,5,1,2,9,3,8];
// let len=arr.length;

// for(let i=0;i<len;i++)
// {
//     for(let j=i+1;j<len;j++)
//     {
//         if(arr[i]>arr[j])
//         {
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }

// for(let i=0;i<len;i++)
// {
//     for(let j=i+1;j<len;j++)
//     {
//         if(arr[i]<arr[j])
//         {
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);

// let arr=[10, 30, 10, 20, 10, 20, 30, 10];
// let len=arr.length;
// let visited=[];
// for(let i=0;i<len;i++)
// {
//     let count=1;
//     if(!visited.includes(arr[i])){
//     for(let j=i+1;j<len;j++)
//     { 
//         if(arr[i]===arr[j])
//         {
//             count++;
//         }
//     }
//     visited.push(arr[i]);
//     console.log(`${arr[i]} occurence is ${count}`);
//     }
// }
// console.log(visited);






// let arr=[1,1,2,2,3,3,4,4,5,5,1,1,2,3,4,5];

// let present=[];

// for(let i=0;i<arr.length;i++)
// {
//     let count=1;
//     if(!present.includes(arr[i]))
//     {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     present.push(arr[i]);
//     console.log(`${arr[i]} occurence is ${count}`);
//     }
// }



// let arr=[1,1,2,2,3,3,4,4,5,5,1,1,2,3,4,5];

// let present=[];

// for(let i=0;i<arr.length;i++)
// {
//     let count=1;
//     if(!present.includes(arr[i]))
//     {
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     present.push(arr[i]);
//     console.log(`${arr[i]} occurence is ${count}`);
//     }
// }
































