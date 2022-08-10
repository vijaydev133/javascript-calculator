let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("button"))


console.log(buttons);

buttons.forEach(button=>{
        button.addEventListener("click", function(){
            switch(button.textContent){
                case "=":
                    display.textContent = eval(display.textContent)
                    break;
                case "C":
                    display.textContent = ""
                    break;
                case "←" :
                    display.textContent = display.textContent.slice(0,-1)
                    break;
                default : {
                    display.textContent += button.textContent 
                }
            }
        })
})

