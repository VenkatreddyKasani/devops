let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","Scissors"];
    const randidx =Math.floor(Math.random()*3);
    return options[randidx];
}
const showwinner=(userwin,userChoice,compchoice)=>{
    if(userwin===true){
        userScore++;
        userscorepara.innerText=userScore;
        console.log("you win");
        msg.innerText=`Neethu You win!. your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        console.log("you lose");
        compscorepara.innerText=compScore;
        msg.innerText=`Neethu You lost.${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);

    if(userChoice===compchoice){
        console.log("match was draw")
        msg.innerText="Neethu the Game was draw!.Play again";
        msg.style.backgroundColor="orange";
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            //computer choice will be either paper,scissor
            userwin=compchoice === "paper"?false : true;
        }else if(userChoice==="paper"){
            ////computer choice will be either rock,scissor
            userwin=compchoice === "Scissors"?false:true;
        } else{
                //computer choice will be either rock,paper
                userwin=compchoice==="rock"?false:true;

            }
        showwinner(userwin,userChoice,compchoice);
    }
};

choices.forEach((choice) =>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playgame(userChoice);
  });
});

