window.onload = () => {
    let body = document.querySelector("body");
    body.addEventListener("click", removeLoginBox)
}


const removeLoginBox = () => {
    let body = document.querySelector("body");
    body.style.overflow = "";

    let loginBox = document.querySelector(".RnEpo.Yx5HN");
    loginBox.style.display = "none"
}



