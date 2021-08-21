function errorMessage() {
    let error = document.getElementById("error")
    let email =document.getElementById("email1").value
    let mailformat =  /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    var x = window.matchMedia("(max-width: 375px)")
    if (x.matches) { // If media query matches 
    document.getElementById("button").style.marginTop= "40px" 
    document.getElementById("error-div").style.marginTop= "-70px"
    document.getElementById("error-div").style.marginLeft= "-10px"
    document.getElementById("part2").style.marginTop="80px"
}
    if (mailformat.test(email))
    {
        console.log("")
        // Changing content and color of content
        error.textContent = "Email saved!"
    }
    else if(email===""){
        error.textContent = "Whoops! It looks like you forgot to add your email"
        error.style.color = "red"
        
        document.getElementById("email1").style.border= "solid 1px red"
               
    }
    else {
        console.log("")
        error.textContent = "Please enter a valid email"
        error.style.color = "red"
        document.getElementById("email1").style.border= "solid 1px red"
        
    
    }
}