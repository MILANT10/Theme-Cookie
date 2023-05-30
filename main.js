let bouton = document.querySelector("#mode");
let theme = document.querySelector("span");

bouton.addEventListener("click", () =>{
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        theme.textContent="Thème Sombre";
        localStorage.setItem('theme', "clair");
    } else {
        modeSombre();
    }
});


function modeSombre() {
    document.body.className="dark";
    bouton.textContent = "Thème clair";
    localStorage.setItem("theme", "sombre");
}

if(localStorage.getItem("theme")){
    if(localStorage.getItem('theme') == "sombre"){
        modeSombre();
    }

}