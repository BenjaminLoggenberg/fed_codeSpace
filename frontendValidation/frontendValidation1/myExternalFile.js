function myValidation() {
    const x = document.getElementById("newTask").value;

    // why doesn't this work?? --->  if (x.includes([">", "<"])) {

    if (x.includes(">")) {
        document.getElementById("newTaskError").style.display = "block";
    }
    else if (x.includes("<")) {
        document.getElementById("newTaskError").style.display = "block";
    }

    event.preventDefault();
}

        //let myList = document.createElement("li");

        //let myListContent = document.createTextNode("newTask");

        // let appendChildList = myList.appendChild("myListContent");

        // let y = document.getElementById("myNewTaskList").appendChild("myList");

       // console.log(myList);

