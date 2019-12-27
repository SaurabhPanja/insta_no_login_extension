window.onload = () => {
    let body = document.querySelector("body");
    body.style.overflow = "";

    body.addEventListener("click", removeLoginBox)
}


const removeLoginBox = () => {
    let body = document.querySelector("body");
    body.style.overflow = "";

    let loginBox = document.querySelector(".RnEpo.Yx5HN");
    if (loginBox) {
        loginBox.style.display = "none"
    }
}



