let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX,playerY

const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true)
            {
                box.innerText="O";
                turnO=false;
            }
        else
            {
                box.innerText="X";
                turnO=true;
            }     
        box.disabled=true;
        
        checkWinner();
    });
    
});

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const enableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations Winner is, ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winningPatterns)
        {
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!="")
                {
                    if(pos1===pos2 && pos2===pos3 && pos1===pos3)
                        {
                            console.log("Winner",pos1);
                            showWinner(pos1);
                        }
                }
        }
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);