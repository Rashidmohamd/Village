

const allBgImg = document.querySelectorAll(".showCaseSect img");

function bgloop() {
    const bgShow = document.querySelector(".show")
        bgShow.classList.remove("show");
    if (bgShow.nextElementSibling) {
        bgShow.nextElementSibling.classList.add("show");
    } else {
        allBgImg[0].classList.add("show")
    }

}

setInterval(() => {
    bgloop()
}, 3000)


const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

const allGallaryImg = document.querySelectorAll(".photoContainer img");

rightArrow.addEventListener("click", () => {
    const current = document.querySelector(".currentImg");
    current.classList.remove("currentImg")

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("currentImg");
    } else {
        allGallaryImg[0].classList.add("currentImg");
    }
})


leftArrow.addEventListener("click", () => {
    const current = document.querySelector(".currentImg");
    current.classList.remove("currentImg")

    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("currentImg");
    } else {
         allGallaryImg[allGallaryImg.length -1].classList.add("currentImg");
    }
})

const menu = document.querySelector(".menubtn");
let operate = false;
menu.addEventListener("click",()=> {
    menu.classList.toggle("closebtn")
    if (!operate) {
        document.querySelector(".heading nav").style.right = "0"
        operate = true;
    }
    else {
        document.querySelector(".heading nav").style.right = "-55vw"
        operate = false;
        
    }
   
})


const blurr = document.querySelector(".heading nav")
blurr.addEventListener("click",()=> {
   menu.classList.toggle("closebtn")
    if (!operate) {
        document.querySelector(".heading nav").style.right = "0"
        operate = true;
    }
    else {
        document.querySelector(".heading nav").style.right = "-55vw"
        operate = false;
        
    }
})