console.log("Hello")

let button=document.querySelectorAll(".btn");
let resestbtn=document.querySelector(".reset");
let msgdisp=document.querySelector(".msg");
let msgcont=document.querySelector(".msgcontainer")
let newGame=document.querySelector(".newgame")

let turnX=true;

const winpattern=[

    [0, 1, 2] ,

    [0, 3, 6] ,

    [0, 4, 8] ,
    [1, 4, 7] ,
    [2, 5, 8] ,
    [2, 4, 6] ,
    [3, 4, 5] ,
    [6, 7, 8] ,



    
];

const resetgame=()=>
{
    turnX=true;
    enablebtn();
    msgcont.classList.add("hide");
    newGame.classList.add("hide2");
}


button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(turnX)
        {
            btn.innerText=("X");
            turnX=false;
        }
        else
        {
            btn.innerText=("O");
            turnX=true;

        }
        btn.disabled=true;
        checkWinner();
    })
    
    
});
const disablebtn=()=>
{
  for(btn of button)
  {
    btn.disabled=true;
  }
}

const enablebtn=()=>
{
    for(btn of button)
  {
    btn.disabled=false;
    btn.innerText="";
  }
}

 const showWinnwer = (winner) =>{

 msgdisp.innerText=`Congratulations The Winner is ${winner}`
 msgcont.classList.remove("hide")
 newGame.classList.remove("hide2")
}
const checkWinner=()=>{
     for( let pattern of winpattern)
    {
      let pos1 = button[pattern[0]].innerText;
      let pos2 = button[pattern[1]].innerText;
      let pos3 = button[pattern[2]].innerText;
    

      if(pos1!==""&&pos2!==""&&pos3!=="" )
     {
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("Winner",pos1)
            showWinnwer(pos1);
            disablebtn();
            
            
        }

    
       }
    }

};
resestbtn.addEventListener("click",resetgame);
newGame.addEventListener("click",resetgame);







