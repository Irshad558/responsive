const photo = document.getElementsByClassName("photo");
let num = 0;
const slidehow = ()=>{
    if(num === 8){
        num = 0;
    }
    photo[num].style.display = "block";
    photo[num].classList.add("optical");
    
    setTimeout(()=>{
        photo[num].classList.remove("optical")
        photo[num].style.display = "none";
        num++;
        slidehow();
    }, 2000);
}
slidehow();

const menu = document.querySelector("#menu");

menu.addEventListener('click',()=>{
    let dropdown = document.querySelector("#dropdown");
    dropdown.classList.toggle("dropdown");
})
