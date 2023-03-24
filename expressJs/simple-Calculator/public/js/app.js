let string = ""
let buttons = document.querySelectorAll(".button");


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            try {
                string = eval(string);
                document.querySelector("input").value = string;        
            }
            catch(err) {
                document.querySelector("input").value = "Expression Error";            
            }
        
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector("input").value = string;
            document.getElementById("temp-ans").value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = string.substring(0, string.length-1);
            // console.log(string);
            document.querySelector("input").value = string;
        }
        else{
            // console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector("input").value = string
            string = eval(string);
            document.getElementById("temp-ans").value = string;
        }
    })
})
