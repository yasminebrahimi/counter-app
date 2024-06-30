

/* First solution: 

const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const counterValue = document.querySelector(".counter__value")
let count = Number(counterValue.textContent); 


function increment(){
    count ++; 
    counterValue.textContent = count; 
}

function decrement(){
    count --; 
    counterValue.textContent = count; 
}

function reset(){
    count = 0; 
    counterValue.textContent = count; 
}



function counter(e){
    const classList = e.target.classList; 
    if (classList.contains("increment")) count ++; 
    else if (classList.contains("decrement")) count --; 
    else count = 0; 
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

*/


//Second solution: 

const counterValue = document.querySelector(".counter__value");
let count = Number(counterValue.textContent);

const buttons = document.querySelectorAll(".btn"); 

buttons.forEach((btn) => {
    btn.addEventListener("click", () => { 
        const classList = btn.classList;

        if (classList.contains("increment")) count++;
        else if (classList.contains("decrement")) count--;
        else count = 0;


        if(count > 0) counterValue.style.color= "green"
        else counterValue.style.color = "red"; 

        counterValue.textContent = count;
    });
});


