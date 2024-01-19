console.log("rps game working !");

let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userPara= document.querySelector("#user-score");
const compPara= document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options = ["rock","paper","scissors"];
    const randomIdx =Math.floor(Math.random()*3); // write explains Math.floor(Math.random()*3)
    return options[randomIdx];
}

drawGame =()=> {
    console.log("Game Was Draw 1-1");
    msg.innerText="Draw Play Again !!";
    msg.style.backgroundColor='skyblue';
};


const showWinner = (userWin, userChoice,CompChoice)=>{
    if(userWin){

        userScore++;
        userPara.innerText=userScore ; 
        console.log("You WIN !!");

        msg.innerText=`You Win!!`;

        //msg.innerText=`You Win!! ${userChoice} beats ${ CompChoice}`;
        msg.style.backgroundColor='green';

    }
    else{
        compScore++;
        compPara.innerText=compScore;
        console.log("You Loose !!");
        msg.innerText=`You Lose!! `;

        //msg.innerText=`You Lose!! ${CompChoice} beats ${userChoice}`;

        //check this udefined compccoiec

        msg.style.backgroundColor='red';
    }
};

