function myValidation() {
    let x = document.getElementById("newTask").value;

    if (x.indexOf([">", "<"])) {
        document.getElementById("newTaskError").style.display = "block";
    }

    let myList = document.createElement("li");

    let myListContent = document.createTextNode("newTask");

    let appendChildList = myList.appendChild("myListContent");

    let y = document.getElementById("myNewTaskList").appendChild("myList");

    console.log(myList);
}