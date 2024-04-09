
function newpage() {
    let Name = String(document.getElementById("name").value).toLowerCase();

    if (Name == "sister") {
        window.location.assign("page2.html");

    }
    else {
        alert("Sorry your name was not stored ❤️❤️❤️");
    }
}