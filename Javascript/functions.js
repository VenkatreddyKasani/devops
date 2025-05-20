/*let sum=0;
let str;
function myFunction(strr){
   for(const str of strr){
    if(str == "a" || str == "e" || str == "i"|| str == "o" || str == "u")
        {
            sum=sum+1;
        }
   }
   console.log("the sum of vowel numbers are:",sum)
}
myFunction("venkatreddy")

const arrowSum=(a,b)=>{
    console.log(a+b);
};
let arr=[1,2,3,4,5];
arr.forEach((val) => {
    console.log(val**2);
}
);
*/


/*let marks=[880,88,95,98,67,100,95]
let nerMarks=marks.filter((val)=>{
    return val>90;
}
);
console.log(nerMarks);
*/

let n=prompt("enter the range");
let arr=[];
for(let i=1;i<=n;i++)
    {
        arr[i]=i;
    }
let factorial=arr.reduce((res,curr)=>{
    return res * curr;
}
);
console.log(factorial);


