let boxes=document.querySelectorAll(".boxes")
let turn1=document.querySelector(".turn1")
let turn2=document.querySelector(".turn2")
let msg=document.querySelector(".msg")
let span=document.querySelector("#result")
let reset=document.getElementById("reset")
let ng=document.getElementById("ng")
let clicksound=new Audio("clicksound.mp3")
let winsound=new Audio("winsound.mp3")
let turnX=true;
let Winnercondition=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
reset.addEventListener('click',()=>{
     boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
        box.classList.add("hover");
        msg.classList.add("hide");
        box.classList.remove("b-s");
        box.classList.remove("cs");
        clicksound.play();
    })
})
ng.addEventListener('click',()=>{
     boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
        box.classList.add("hover");
        msg.classList.add("hide");
        box.classList.remove("b-s");
        box.classList.remove("cs");
        clicksound.play();
    })
})
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        clicksound.play();
        if(turnX){
            box.innerText="X";
            box.style.color="rgb(255, 234, 0)";
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s");
            turnX=false;
        }else{
            box.innerText="O";
            box.style.color="rgb(255, 0, 0)";
            turn1.classList.add("b-s");
            turn2.classList.remove("b-s")
            turnX=true;
        }
        checkWinner();
    })
})
function checkWinner(){
    for(let condition of Winnercondition){
        let box1=boxes[condition[0]].innerText;
        let box2=boxes[condition[1]].innerText;
        let box3=boxes[condition[2]].innerText;
        if(box1!=="" && box2!=="" && box3!==""){
            if(box1===box2 && box2===box3){
                showResult(box1);
                winsound.play();
                boxes.forEach(box=>{
                    boxes[condition[0]].classList.add("cs")
                    boxes[condition[1]].classList.add("cs")
                    boxes[condition[2]].classList.add("cs")
                    
                })
                boxes[condition[0]].classList.remove("b-s")
                boxes[condition[1]].classList.remove("b-s")
                boxes[condition[2]].classList.remove("b-s")

            }
        }
    }
}
function showResult(result){
    boxes.forEach(box=>{
        box.disabled=true;
        box.classList.remove("hover")
    })
    msg.classList.remove("hide")
    span.innerText=result;
    if(result==="X"){
        span.style.color="rgb(255, 234, 0)";
    }else{
        span.style.color='red';
    }
}