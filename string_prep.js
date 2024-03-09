// let str='aalok';
// let i=0;
// while(str[i]!=undefined)
// {
//    i++;

// }
// console.log(i);


// let arr=[1, 121, 55551, 545545, 10111, 90];
// let palindrom=0;

// arr.forEach(i=>{
//     if(isPalindrom(i)&&i>palindrom)
//     {
//         palindrom=i;
//     }
// });
// console.log(palindrom);




// function isPalindrom(n){
// let temp=n;
// let rev=0;
// while(n>0)
// {
//     let r=n%10;
//     rev=rev*10+r;
//     n=parseInt(n/10);
// }
// return temp===rev;
// }

// let arr=[10, 30, 10, 20, 40, 20, 50, 10];
// let visisted=[];

// for(let i=0;i<arr.length;i++)
// {
//     if(!visisted.includes(arr[i])){
//     visisted.push(arr[i]);
// }
// }
// console.log(visisted.length);


// let arr=[10, 30, 10, 20, 40, 20, 50, 10];
// let visited=[];
// for(let i=0;i<arr.length;i++)
// {
//     let count=1;
//     if(!visited.includes(arr[i]))
//     {
//         visited.push(arr[i]);
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(arr[i]===arr[j])
//             {
//                 count++;
//             }
//         }
//         if(count>1)
//         {
//             console.log(arr[i],count);
//         }
        
//     }
// }
// console.log(visited);


// let arr=[10, 30, 40, 20, 10, 20, 50, 10];
// let visited=[];
// for(let i=0;i<arr.length;i++)
// {
//     let count=1;
//     if(!visited.includes(arr[i]))
//     {
//         visited.push(arr[i]);
//     for(let j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]===arr[j])
//         {
//             count++;
//         }
//     }
//     if(count===1)
//     {
//         console.log(arr[i]);
//     }
// }
// }


// let arr=[10, 20, 20, 30, 40, 40, 40, 50, 50];

// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr.length;j++)
//     {
//         if(arr[i]===arr[j]&&i==j)
//         {
//             arr.splice(j,1);
//         }
//     }
// }
// console.log(arr);


// let arr1=[1, 2, 6, 3, 7];
// let arr2=[10, 7, 45, 3, 7];

// /// sort in ascending order 
// for(let i=0;i<arr1.length;i++)
// {
//     for(let j=i+1;j<arr1.length;j++)
//     {
//         if(arr1[i]>arr1[j])
//         {
//             let temp=arr1[i];
//             arr1[i]=arr1[j];
//             arr1[j]=temp;
//         }
//     }
// }
// // sort in descending order 
// for(let i=0;i<arr2.length;i++)
// {
//     for(let j=i+1;j<arr2.length;j++)
//     {
//         if(arr2[i]<arr2[j])
//         {
//             let temp=arr2[i];
//             arr2[i]=arr2[j];
//             arr2[j]=temp;
//         }
//     }
// }

// let product=0;
// for(let i=0;i<arr1.length;i++)
// {
//     product+=arr1[i]*arr2[i];
// }
// console.log(product);


// let arr1=[1, 2, 6, 3, 7];
// let arr2=[10, 7, 45, 3, 7];
// let product=0;
// for(let i=0;i<arr1.length;i++)
// {
//     product+=sort(arr1)[i]*sort(arr2)[i];
// }
// console.log(product);

// function sort(arr)
// {
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
// return arr;
// }


// let arr=[1, 7, 8, 4, 5, 16, 8];
// let odd=0;
// let even=0;

// arr.forEach(i=>{
//     if(i%2==0)
//     even++;
//     else
//     odd++;
// });
// console.log(even,odd);


// let str="AaLokBagheLE";
// let nStr="";
// for(let i=0;i<str.length;i++)
// {
//     nStr+=check(str[i]);
// }
// console.log(nStr);


// function check(s){
//     if(s.toUpperCase()==s){
//         return s.toLowerCase();
//     }
//     else
//     {
//         return s.toUpperCase();
//     }
// }

// let str="prepinsta";
// let vowels=['a','e','i','o','u','A','E','I','O','U'];
// let vowel=0;
// for(let i=0;i<str.length;i++)
// {
//     if(vowels.includes(str[i]))
//     {
//         vowel++;
//     }
// }
// console.log(vowel);

// let str="prepinsta";
// let vowels=['a','e','i','o','u','A','E','I','O','U'];
// let vowel=0;
// for(let i=0;i<str.length;i++)
// {
//     if(vowels.includes(str[i]))
//     {
//         vowel++;
//         str=str.replace(str[i],"");
//     }
// }
// console.log(str,vowel);


// let str="prepinsta";
// let vowels=['a','e','i','o','u','A','E','I','O','U'];
// let vowel="";
// let constonent="";
// let s="";
// for(let i=0;i<str.length;i++)
// {
//     if(vowels.includes(str[i]))
//     {
//         vowel+=str[i];
//     }
//     else
//     {
//         constonent+=str[i];
//     }

// }
// console.log(vowel,constonent);


// let str='aalaa';
// console.log(palindrom(str));
// function palindrom(str){
//     let newStr="";
// for(let i=str.length-1;i>=0;i--)
// {
//     newStr+=str[i];
// }
// return str===newStr;
// }


// let str="P*re;p..ins't^a?";

// let newSTR=str.replaceAll(/[^A-Za-z]/gi,"");
// console.log(newSTR);


// let str="aalok  baghele   hjfdg hjdf";
// str=str.replaceAll(" ","");
// console.log(str);


// let str='Pr22e44pinsta';
// let sum=0;
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]==Number(str[i]))
//     {
//             sum+=Number(str[i]);
//     }
// }
// console.log(sum);


// let str="prep insta aalok baghele gannatola kandrikalan";
// let n="";
// for(let i=0;i<str.length;i++)
// {
//    if(str[i+1]==" ") 
//    {
//     n+=str[i].toUpperCase();
//    }
//    else if(str)
//    else if(i==0||i==str.length-1)
//    {
//     n+=str[i].toUpperCase();
//    }
//    else
//    {
//     n+=str[i];
//    }
// }
// console.log(n);

// let a=9,b=2,c=3;
// // ans=(a>b&&a>c)?a:(b>c)?b:c;
// let ans=0;
// if(a>b&&a>c)
// {
//     ans=a;
// }
// else{
//     if(b>c)
//     ans=b;
//     else
//     ans=c;
// }
// console.log(ans);



// let str="prep insta aalok baghele gannatola kandrikalan";
// let n="";
// for(let i=0;i<str.length;i++)
// {
//    if(str[i+1]==" ") 
//    {
//     n+=str[i].toUpperCase();
//     n+=" ";
//    }
//    else if(str[i]==" ")
//    {
//         n+=str[i+1].toUpperCase();
//    }
//    else if(i==0||i==str.length-1)
//    {
//     n+=str[i].toUpperCase();
//    }
//    else
//    {
//     n+=str[i];
//    }
// }
// console.log(n);



// let str="prep insta aalok baghele gannatola kandrikalan";
// let arr=str.split("");

// for(let i=0;i<arr.length;i++)
// {
//     if(i==0||i==arr.length-1)
//     {
//         arr[i]=arr[i].toUpperCase();
//     }
//    else if(arr[i]===" ")
//    {
//     arr[i+1]=arr[i+1].toUpperCase();
//     arr[i-1]=arr[i-1].toUpperCase();
//    }
// }
// console.log(arr.join(""));


// let str="We use the inbuilt function count to calculate the count of each character in the";
// target=[];


// for(let i=0;i<str.length;i++)
// {
//     count=0;
//     for(let j=0;j<str.length;j++)
//     {
//         if(str[i]==str[j])
//         count+=1;
//     }
//     if(!target.includes(str[i]))
//     {
//         target.push(str[i]);
//     console.log(str[i],count);

//     }
// }

// let str="prepinsta";

// for(let i=0;i<str.length;i++)
// {
//     let count=0;
//     for(let j=0;j<str.length;j++)
//     {
//         if(str[i]==str[j])
//         count++;
//     }
//     if(count==1)
//     console.log(str[i]);
// }

// let s1="listen";
// let s2="silent";

// let count=0;
// for(let i=0;i<s1.length;i++)
// {
//     for(let j=0;j<s2.length;j++)
//     {
//         if(s1[i]==s2[j])
//         count++;
//     }
// }
// if(count==s1.length)
// console.log("yes");


// let arr=[1,4,5,2,3,7,6,9,9,3,2,5,6,3,4,8,7];

// let sum=arr.reduce((acc,num)=>acc+num,0);
// let multpication=arr.reduce((acc,num)=>acc*num,1);
// console.log(sum,multpication);

// let arr=[1,4,5,2,3,7,6,9,9,3,2,5,6,3,4,8,7];

// let even=arr.filter(i=>i%2==0);
// console.log(even);

// let odd=arr.filter(i=>i%2!=0);
// console.group(odd)

// let prime=arr.filter(i=>isPrime(i));
// console.log(prime);

// function isPrime(n){
//     if(n<2)
//     return false;
//     else if(n==2)
//     return true;
//     else if(n%2==0)
//     return false;
//     else
//     {
//         for(let i=3;i<=parseInt(n/2);i+=2)
//         {
//             if(n%i==0)
//             return false;
//         }
//         return true;
//     }
// }


// let a=[12, 34, 11, 9,3];
// let b=[7, 2, 1, 5]

// let count=0;

// for(let i=0;i<a.length;i++)
// {
//     for(let j=0;j<b.length;j++)
//     {
//         if(a[i]==b[j])
//         {
//             count++;
//         }
//     }
// }
// if(count==0)
// console.log("Yes Disjoint");
// else
// console.log("Not Disjoint");


// let arr1=[11, 10, 13, 21, 30, 70];
// let arr2=[11, 30, 70, 10];
// let l1=arr1.length;
// let l2=arr2.length;

// if(l1>l2)
// console.log(isSubSet(arr1,arr2,l1,l2),` arr2 is subset of arr1`);
// else
// console.log(isSubSet(arr2,arr1,l2,l1) ,`arr1 is subset of arr2`);


// function isSubSet(arr1,arr2,l1,l2)
// {
// let count=0;
// for(let i=0;i<l2;i++)
// {
//     for(let j=0;j<l1;j++)
//     {
//         if(arr2[i]==arr1[j])
//         count++;
//     }
// }
// return count==l2;
// }