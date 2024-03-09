// let input=-10;
// (input>0)?console.log(`${input} is positive.`):console.log(`${input} is negative.`);


// let n=15;
// (n%2==0)?console.log(`${n} is even.`):console.log(`${n} is odd.`);


// let n=10;
// let sum=0;
// while(n>0)
// {
//     sum+=n;
//     n--;
// }
// console.log(sum);

// console.log((n*(n+1))/2);


// let a=5;
// let b=10;
// let sum=0;
// while(a<=b)
// {
//     sum+=a;
//     a++;
// }
// console.log(sum);

// (a>b)?console.log(a):console.log(b);


// let a=4,b=6,c=2;
// (a>b&&a>c)?console.log(a):(b>c)?console.log(b):console.log(c);


// let year=2021;

// // (year%100==0)?(year%400==0)?console.log('leap'):console.log('not leap'):(year%4==0)?console.log('leap'):console.log('not leap');


// if(year%100==0)
// {
//     if(year%400==0)
//     console.log('leap');
//     else
//     console.log('not leap');
// }
// else
// {
//     if(year%4==0)
//     console.log('leap');
//     else
//     console.log('not leap');
// }


// let num=17;
// console.log(isPrime(num));
// function isPrime(n){
//     if(n<=1)
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






// let n=100;

// for(let i=1;i<=n;i++)
// {
//     if(isPrime(i))
//     console.log(i);
// }

// function isPrime(n){
// if(n<=1)
// return false;
// else if(n===2)
// return true;
// else if(n%2===0)
// return false;
// else{
//     for(let i=3;i<n;i+=2)
//     {
//         if(n%i===0)
//         return false;
//     }
//     return true;
// }
// }


// let n=12345;
// let sum=0;
// while(n>0)
// {
//     let r=n%10;
//     sum+=r;
//     n=parseInt(n/10);
// }
// console.log(sum);


// let str=String(n);
// console.log(Number(str.split("").reverse().join("")));


// let n=12321;

// console.log(n===reverseNumber(n));

// function reverseNumber(n)
// {
//     let rev=0;
//     while(n>0)
// {
//     let r=n%10;
//     n=parseInt(n/10);
//     rev=rev*10+r;
// }
// return rev;
// }



// let n=1000;
// let power=pow(n);
// // console.log(armSum(n,power)===n);
// for(let i=1;i<=n;i++)
// {
//     if(armSum(i,pow(i))===i)
//     console.log(i);
// }
// function pow(n)
// {
//         let count=0;
//         while(n>0)
//         {
//             n=parseInt(n/10);
//             count++;
//         }
//         return count;
// }
// function armSum(n,p)
// {
//     let sum=0;
//     while(n>0)
//     {
//         let r=n%10;
//         sum=sum+r**p;
//         n=parseInt(n/10);
//     }
//     return sum;
// }


// let a=0;
// let b=1;
// let n=10;
// for(let i=1;i<=n;i++)
// {
//     console.log(a);
//     let t=b;
//     b=a+b;
//     a=t;  
// }


// let n=5;
// let fact=1;
// while(n>0)
// {
//     fact*=n;
//     n--;
// }
// console.log(fact);

// let n=5;
// let p=-3;
// if(p>0)
// console.log(ans(n,p));
// else if(p==0)
// console.log(1);
// else
// console.log(1/ans(n,p*(-1)));

// function ans(n,p){
//     let ans=1;
//     while(p>0)
// {
//     ans*=n;
//     p--;
// }
// return ans;
// }

// let n=100;
// let i=1;
// while(n>=i)
// {
//     if(n%i==0)
//     {
//     console.log(i);
//     }
//     i++;
// }

// let n=145;
// console.log(n===strongNum(n));

// function strongNum(n)
// {
//     let strong=0;
//     while(n>0)
//     {
//         let r=n%10;
//         strong+=fact(r);
//         n=parseInt(n/10);
//     }
//     return strong;
// }

// function fact(n)
// {
//     let fact=1;
//     while(n>0)
//     {
//         fact*=n;
//         n--;
//     }
//     return fact;
// }



// let n=28;
// let i=1;
// let sum=0;
// while(n>i)
// {
//     if(n%i==0)
//     sum+=i;
// i++;
// }
// console.log(sum);


// let n=153;
// console.log(n%digitS(n)===0);

// function digitS(){
//     let digitSum=0;
// while(n>0)
// {
//     let r=n%10;
//     digitSum+=r;
//     n=parseInt(n/10);
// }
// return digitSum;
// }


// let n=12;
// let i=1;
// let sum=0;
// while(n>i)
// {
//     if(n%i==0)
//     sum+=i;
// i++;
// }
// console.log(sum>n);



// let a=30,b=140;
// console.log(divisiorSum(a)/a===divisiorSum(b)/b);

// function divisiorSum(n){
//     let sum=0;
//     let i=1;
//     while(n>i)
//     {
//         if(n%i==0)
//         sum+=i;
//     i++;
//     }
//     return sum;
// }


// let a=36,b=60;
// for(let i=small(a,b);i>0;i--)
// {
//     if(a%i==0&&b%i==0)
//     {
//     console.log(i);
//     break;
//     }

// }

// while(a!=b)
// {
//     (a>b)?a-=b:b-=a;
// }
// console.log(a);

// function greater(a,b)
// {
//     let ans=(a>b)?a:b;
//     return ans;
// }
// function small(a,b)
// {
//     let ans=(a>b)?b:a;
//     return ans;
// }
// function NegToPosi(n){
//     return n*(-1);
// }


// let a=12,b=14;
// let max=(a>b)?a:b;
// let lcm;
// for(let i=max;i<=a*b;i++)
// {
//     if(i%a==0&&i%b==0)
//     {
//         lcm=i;
//         break;
//     }
// }
// console.log(lcm);



// let a=19,b=38;
// console.log(LCM(a,b),HCF(a,b));

// function LCM(a,b)
// {
// let max=(a>b)?a:b;
// let lcm;
// for(let i=max;i<=a*b;i+=max)
// {
//     if(i%a==0&&i%b==0)
//     {
//         lcm=i;
//         break;
//     }
// }
// return lcm;
// }

// function HCF(a,b)
// {
//     let min=(a>b)?b:a;
//     let hcm;
//     for(let i=min;i>0;i/=2)
//     {
//         if(a%i==0&&b%i==0)
//         {
//             hcm=i;
//             break;
//         }
//     }
//     return hcm;
// }

// /// binary to decimal
// let n=11011;
// console.log(decimal(n));

// function decimal(n)
// {
//     let count=0;
//     let sum=0;
//     while(n>0)
//     {
//         let r=n%10;
//         sum=sum+r*2**count;
//         n=parseInt(n/10);
//         count++;
//     }
//     return sum;
// }


/// decimal to binary

// let n=27;
// let binary=0;
// while(n>0)
// {
//     let r=n%2;
//     binary=binary*10+r;
//     n=parseInt(n/2);
// }
// console.log(binary);



// function BinaryToDecimal(n)
// {
//     let count=0;
//     let sum=0;
//     while(n>0)
//     {
//         let r=n%10;
//         sum=sum+r*2**count;
//         n=parseInt(n/10);
//         count++;
//     }
//     return sum;
// }

// function DecimalToBinary(n)
// {
// let binary="";
// while(n>0)
// {
//     let r=n%2;
//     binary=binary+r;
//     n=parseInt(n/2);
// }

// return Number(binary.split("").reverse().join(""));
// }

// console.log(DecimalToBinary(294));
// console.log(BinaryToDecimal(100100110));





// Formula  =  n P r  =  n! / (n-r)!


// function factorial(n)
// {
//     let fact=1;
//     while(n>0)
//     {
//         fact*=n;
//         n--;
//     }
//     return fact;
// }

// let n=5;
// let r=10;

// let permutation=factorial(n)/factorial(n-r);
// console.log(permutation);


// const a=[1,2];
// const b=[1,2];


// console.log(String(a)===String(b));

// console.log(JSON.stringify(a)===JSON.stringify(b));


// let n1=1,d1=3;
// let n2=3,d2=9;

// let lcm=LCM(d1,d2);
// let sum=(n1*lcm/d1)+(n2*lcm/d2);
// // let hcf=HCF(lcm,sum);
// let hcf=(lcm*sum)/LCM(lcm,sum);
// sum=sum/hcf;
// lcm=lcm/hcf;
// console.log(sum,lcm);
// function LCM(a,b)
// {
//     let lcm=0;
//     let max=(a>b)?a:b;
//     for(let i=max;i<=a*b;i+=max)
//     {
//         if(i%a==0&&i%b==0)
//         {
//             lcm=i;
//             break;
//         }
//     }
//     return lcm;
// }

// function HCF(a,b)
// {
//     let hcf=1;
//     let min=(a>b)?b:a;
//     for(let i=min;i>0;i=parseInt(i/2))
//     {
//         if(a%i==0&&b%i==0)
//         {
//             hcf=i;
//           break;
//         }
//     }
//     return hcf;

// }

// // console.log(HCF(7,6),LCM(4,6));



// let n=12090;
// let newNumber=0;
// while(n>0)
// {
//     let r=n%10;
//     if(r==0)
//     newNumber=newNumber*10+1;
//     else
//     newNumber=newNumber*10+r;
//     n=parseInt(n/10);
// }
// function reverse(n){
//     let rev=0;
//     while(n>0)
//     {
//         let r=n%10;
//         rev=rev*10+r;
//         n=parseInt(n/10);
//     }
//     return rev;
// }
// console.log(reverse(newNumber));



// let n=5;
// let base=3;
// let result=power(n,base);
// console.log(result);

// function power(n,b)
// {
//     if(b==0)
//     return 1;
//     return n*power(n,b-1);
// }


// let num=17;
// console.log(isPrime(num,2));
// function isPrime(n,i)
// {
//     if(n<2)
//     return false;
//     else if(n===i)
//     return true;
//     else if(n%2===0)
//     return false;
//      else if(n%i===0)
//       return false;
//     else if(i*i>n)
//     return true;
// return isPrime(n,i+1);
// }


// let num=15;
// let result=isPrime(num,3);
// console.log(result);

// function isPrime(n,i)
// {
//     if(n<=2)
//     return (n===2)?true:false;
//     else if(n%2===0)
//     return false;
//     else if(n%i===0)
//     return false;
//     else if(i*i>n)
//     return true;
// return isPrime(n,i+=2);
// }

// let num=17;
// console.log(isPrime(num,2));
// function isPrime(n,i)
// {
//     if(n<2)
//     return false;
//     else if(n===i)
//     return true;git 
//     else if(n%2===0)
//     return false;
//      else if(n%i===0)
//       return false;
//     else if(i>n)
//     return true;
// return isPrime(n,i+1);
// }






















