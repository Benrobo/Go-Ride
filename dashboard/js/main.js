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