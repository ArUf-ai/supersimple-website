function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subjec").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_1b2pa28","template_6wupgkg",parms).then(alert("Email Sent!!"))
}