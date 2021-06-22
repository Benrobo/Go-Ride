function  activNewevents(){
    let btn = document.querySelector(".newevent");
    let rejbtn = document.querySelector(".rejbtn");
    let ovl = document.querySelector(".new-event");

    btn.onclick = ()=>{
        ovl.classList.add("active")
    }
    rejbtn.onclick = ()=>{
        ovl.classList.remove("active")
    }
}
activNewevents()

function HideandSeeEditCont(){
    let editbtn = document.querySelector(".edit-btn")
    let editprofilecont = document.querySelector(".edit-profile")
    let cancelbtn = document.querySelector(".cancel-edit-btn");

    cancelbtn.onclick = (e)=>{
        e.preventDefault()
        editprofilecont.classList.remove("show")
        editprofilecont.classList.add("hide")
    }
    editbtn.onclick = ()=>{
        editprofilecont.classList.remove("hide")
        editprofilecont.classList.add("show")
    }
}
HideandSeeEditCont()

function logout(){
    let logoutbtn = document.querySelector(".logout-btn");

    logoutbtn.onclick = ()=>{
        window.location = "../index.html"
    }
}
logout()