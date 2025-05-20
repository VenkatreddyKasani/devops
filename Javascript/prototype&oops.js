
const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};
const venkat={
    salary:60000,
};
venkat.__proto__=employee;


//classes and objects
class car{
    start(){
        console.log("car has started");
    }
    stop(){
        console.log("car has stopped");
    }
    constructor(brand){
        this.brand=brand;
        console.log("constructor called");
        console.log(brand);
    }
}
let maruthi=new car("maruthi");
let toyoto=new car("toyoto");
maruthi.start();
toyoto.stop();



//error handling
let a=5;
let b=20;
        console.log("a+b=",a+b);
    try{
        console.log("a+c=",a+c);
        console.log("a+b=",a+b);
    }catch(err){
        console.log("wrong");
    }
    console.log("a+b=",a+b);


 //callback
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);


//callback hell
/*
function getdata(dataid,nextdata){
    //2s
    setTimeout(()=>{
        console.log("data:",dataid);
        if(nextdata){
            nextdata();
        }
    },2000);
}


getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        });
    });
});*/




//promise
/*
function getData(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data:",dataid);
            resolve("success");
        },3000);
    });
}
getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
        getData(3).then((res)=>{
            console.log(res);
            getData(4).then((res)=>{
                console.log(res);
            });
        });
    });
});*/


/*
//async await
function getData(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data:",dataid);
            resolve("success");
        },3000);
    });
}
(async function (){
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
} )();
//getAllData();
*/




/////////api and jsonmetods

/*
const url="https://cat-fact.herokuapp.com/facts"
let promise=fetch(url);
console.log(promise);

const url="https://cat-fact.herokuapp.com/facts"
const getfacts=async()=>{
    let response= await fetch(url);
    console.log(response);
}
getfacts();*/

const url="https://cat-fact.herokuapp.com/facts"
const getfacts=async()=>{
    console.log("getting facts data...");
    let response= await fetch(url); //fetching the api into json format
    console.log(response);
    let data=await response.json(); //converting json into js object
    console.log(data[0].text);  //there are 5 facts on cats and we can access them individually by {data[0].text,...data[n].text}
}
getfacts();