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

const playGame = (userChoice) => {

    console.log("use choice =", userChoice); // when clicked on any image get a log

    // generate computer choice --> modular fuctions// shrots and reusable func
    const CompChoice = genCompChoice();
    console.log("comp choice are =", CompChoice);

    if (userChoice === CompChoice) {
        //dreaw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //sc, pap
            userWin = CompChoice === "paper " ? false : true;
        }
        else if (userChoice === "paper") {
            //rock,sess
            userWin = CompChoice === "scissors" ? false : true;
        }
        else {
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    //console.log(choice); // will give all availble choices divs of images
        choice.addEventListener("click",() => {

        const userChoice = choice.getAttribute("id"); //to get id of clicked images
          //console.log("click is working",userChoice)  ; // when clicked on any image get a log
            playGame (userChoice);
    });
}); 
        msg.style.backgroundColor='red';
    }
};

