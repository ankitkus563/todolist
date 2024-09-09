let todoinput = document.getElementById("todoinput");
let todobutton = document.getElementById("todobutton");
let itembox = document.getElementById("itembox");
todobutton.addEventListener("click", () => {
    let todovol = todoinput.value;
    if (todovol === "") {
        alert("Please enter a task");

    } else {
        let newitm = document.createElement("div");
        let delbtn = document.createElement("span");

        delbtn.innerText = "Delete";
        itembox.appendChild(newitm)
        newitm.appendChild(delbtn);
        newitm.classList.add("todolist")
        delbtn.classList.add("dlbtn")
        let tasktext = document.createTextNode(todovol);
        newitm.insertBefore(tasktext, delbtn);
        delbtn.addEventListener("click", (event) => {

            let clickedButton = event.target;
            let parentElement = clickedButton.parentElement;
            parentElement.remove();

            console.log(parentElement);
        })

    }

})



