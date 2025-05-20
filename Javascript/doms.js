/*
//accesing the html elements by class
let head=document.getElementsByClassName("myclass");
console.log(head);
console.dir(head);


//accesing html elements by tag
let parahs=document.getElementsByTagName("p");
console.log(parahs);
console.dir(parahs);



//query selector ( it returns the first element of given selector)
let para=document.querySelector("p");
console.log(para);
console.dir(para);


//query selector (it returns all the elements of given selector)
let paragraph=document.querySelectorAll("p");
console.log(paragraph);
console.dir(paragraph);



//properties
let myclass=document.querySelector(".myclass");
console.log(myclass);
console.log(myclass.innerHTML);
console.log(myclass.innerText);

let h1=document.querySelector("h1");
console.log(h1.textContent);





//practice question
let divs=document.querySelectorAll(".box");
console.log(divs[0]);
divs[0].innerText="new inner text";
divs[1].innerText="new inner text";
divs[2].innerText="new inner text";



//attributes
let anchor=document.querySelector("a");
console.log(anchor.getAttribute("name"));

anchor.setAttribute("class","no class");//class name was changed "class1" to "no class"
console.log(anchor.getAttribute("class"));
*/


//style  (accesing and modifying the css elements)
let div =document.querySelector(".gi");
div.style.backgroundColor = "green";
div.style.height="200px";
div.style.width="150px";

