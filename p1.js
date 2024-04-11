const inputb=document.getElementById("ipbox");
const listc=document.getElementById("listcontainer");
const bclick=document.getElementById("b1");


function addTask(){
    if (inputb.value==''){
        alert("write task to do ");

    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputb.value;
        listc.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);


    }
    inputb.value='';    
    saveData();
}
document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        addTask();
    }
})

listc.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");
        saveData();



    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();


    }
}, false);

function saveData(){
    localStorage.setItem("data",listc.innerHTML);
}
function showTask(){
    listc.innerHTML=localStorage.getItem("data");
}
showTask();