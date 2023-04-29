document.getElementsByTagName("h1")[0].addEventListener("mouseover", function() {
    setTimeout(function() {
        document.getElementById("animation").className = "perm";
    }, 500); 
});