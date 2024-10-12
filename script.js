let btns = document.querySelectorAll(".btnSelect");
let comp = ["rock" , "paper" , "scissor"];
let compare = document.querySelector(".showResult");
let btnReset = document.querySelector(".reset");
let pCount = document.querySelector(".playerCount");
let cCount = document.querySelector(".compCount");
let playerCount = 0;
let compCount = 0;
let rand;
let player;
compare.classList.remove("ifDraw");
compare.classList.remove("ifTrue");
compare.classList.remove("ifFalse");

btnReset.addEventListener("click" , () =>{
    compare.classList.remove("ifFalse");
    compare.classList.remove("ifTrue");
    compare.classList.add("ifDraw");
    compare.innerText = "Start Game";
    playerCount = 0;
    compCount = 0;
    pCount.innerText = 0;
    cCount.innerText = 0;
    ;});


btns.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
        player = btn.getAttribute("id");
        random();
        if(player  == "rock" && rand == "scissor" 
            || player  == "paper" && rand == "rock"
            || player  == "scissor" && rand == "paper"){
            compare.innerText = `You Won ${player} defeats ${rand}`; 
            compare.classList.remove("ifFalse");
            compare.classList.add("ifTrue");
            playerCount++;
            pCount.innerText = playerCount;
        }
        else if(player == rand){
            compare.innerText = "Match Draw";
            compare.classList.add("ifDraw");
            compare.classList.remove("ifTrue");
            compare.classList.remove("ifFalse");
        }
        else if(rand  == "rock" && player == "scissor" 
            || rand  == "paper" && player == "rock"
            || rand  == "scissor" && player == "paper"){
            compare.classList.add("ifFalse");
            compare.classList.remove("ifTrue");
            compare.innerText = `You Lost ${rand} defeats ${player}`;
            compCount++;
            cCount.innerText = compCount; 
        }
        
    })
})


function random(){
    rand = (comp[(Math.floor(Math.random() * comp.length))]);
}
