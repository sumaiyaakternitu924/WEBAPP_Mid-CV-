function contact () {
    var userName = document.getElementById("nameBox").value ; 
    var YourEmail = document.getElementById("email").value ; 
    var Subject = document.getElementById("subject").value ; 
    var Message = document.getElementById("message").value ; 
    
    if (userName === "" ||  YourEmail === "" || Subject === "" || Message === "") {
        document.getElementById("content").innerHTML = "<h4>Error. Please fill in all the required fields.</h4>";
    } 

    else {
        document.getElementById("content").innerHTML = `
            <h4>Hello ${userName} <br>
            Your Email is: ${YourEmail} <br>
            Your Phone Number is: ${Subject} <br>
            Your Date of Birth is: ${Message} <br><br><br>
            
            Successful</h4>`;
    }

    
}