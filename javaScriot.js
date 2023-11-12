function contact() {
    var userName = document.getElementById("name").value ; 
    var YourEmail = document.getElementById("email").value ; 
    var Subject = document.getElementById("subject").value ; 
    var Message = document.getElementById("message").value ; 
    
    if (userName === "" ||  YourEmail === "" || Subject === "" || Message === "") {
        document.getElementById("content").innerHTML = "<h4>Error. Please fill in all the required fields.</h4>";
    } 

    else {
        document.getElementById("content").innerHTML = `
            <h4>Successful</h4>`;
    }

    
}