
let subbtn = document.querySelector(".submitbtn")
let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname")
let pnumber = document.querySelector(".pnumber")
let email = document.querySelector(".email")
let file = document.querySelector(".file")
let pwd = document.querySelector(".pwd")
let icon = document.querySelector(".icon")
let uploadbtn = document.querySelector(".upload-btn")
let fileImg = document.querySelector(".file")
let imgcont =document.querySelector(".box")

subbtn.onclick = (e)=>{
    e.preventDefault()

    validate()
}

function validate(){
    // let pnumpattern = "/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im";
    // let emailPattern = "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/";

    const {name, size, type} = file.files[0]

    if(lname.value == "" || fname.value == "" || email.value == "" ||pwd.value == ""){
        emptyError()
    }
    else if(pnumber.value.length < 11 || pnumber.value.length > 11){
        verifyPhonenumerror()
    }
    else{
        let url = "validate/signup.php";
        $.ajax(url, {
            method: "POST",
            dataType: "text",
            data: {
                lname: lname.value,
                fname: fname.value,
                email: email.value,
                pnumber: pnumber.value,
                pwd: pwd.value,
                name: name,
                size: size,
                type: type
            },
            success: (err, data)=>{
                log(err)
                log(data)
            }
        })
    }
    log(name)
}

function emptyError(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Inputs cannot be empty',
    })
}

function verifyPhonenumerror(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Phone Number Is Invalid',
    })
}

function verifyEmailerror(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email Given Is Invalid',
    })
}



function driverRegAlert(){
    Swal.fire({
        title: "Success",
        text: "Account Created Successfully!",
        icon: 'success',
        confirmButtonText:'<a href="">Profile Page</a>'
    })
}



























