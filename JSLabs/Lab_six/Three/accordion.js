function toggle() {
    var extra = document.getElementById("extra");
    var button = document.querySelector(".button");

    if (extra.style.display === "none") {
        extra.style.display = "block";
        button.innerHTML = "Less";
    }
    else {
        extra.style.display = "none";
        button.innerHTML = "More";
    }
}