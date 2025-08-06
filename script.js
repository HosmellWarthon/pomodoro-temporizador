


let changeUserButton = document.querySelector("#userButton");

let myHeading = document.querySelector("h1");

function newUserName() {
    const newName = prompt("Ingresa tu nombre");
    if (!newName) {
        newUserName ();
    }
     else {localStorage.setItem("name", newName);
    myHeading.textContent = `Bienvenido, ${newName}`;
    }
}

if (!localStorage.getItem("name")) {
    newUserName();
}   else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bienvenido, ${storedName}`;
}

changeUserButton.addEventListener("click", () => {
    newUserName ();
});