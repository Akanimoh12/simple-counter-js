const displayNumb = document.getElementById("displayNumb");
const subtractBtn = document.getElementById("subtract")
const resetBtn = document.getElementById("reset")
const additionBtn = document.getElementById("addition")

subtractBtn.addEventListener("click", ()=> {
    if (displayNumb.textContent > 0 ){
        displayNumb.textContent--
    }else{
        displayNumb.textContent = 0
    }
})

resetBtn.addEventListener("click", ()=> {
    displayNumb.innerHTML = "0"
})

additionBtn.addEventListener("click", ()=> {
   displayNumb.textContent++
})
