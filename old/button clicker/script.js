function message(){
    alert("Ninja was liked");
}

function remove(el) {
var element = el;
element.remove();
}

const button = document.getElementById("button");
button.addEventListener("click", ()=>{
    if(button.innerText === "Login"){
        button.innerText = "Logout";
    }else{
        button.innerText= "Login";
    }
});