let userDatabase = ['Pietie', 'Sannie', 'Benjamin', 'Chere', 'Koos', 'Daniel', 'Wentzel', 'Marco', 'Olivia', 'Luna'];

let userInput = prompt("=======This is the Menu=======\n What would you like to do? \n 1) Add three users\n 2) Remove User \n 3) Display all Users \n 4) Sort Users");


switch (userInput) {

    case '1': let newUser1 = prompt("New user 1 name:");
        let newUser2 = prompt("New user 2 name:");
        let newUser3 = prompt("New user 3 name:");
        userDatabase.push(newUser1, newUser2, newUser3);
        console.log(userDatabase);
        break;

    case '2': let removeUserName = prompt(`Which user index would you like to remove? \n ${userDatabase}`);
        userDatabase.indexOf(removeUserName).slice(removeUserName); // help with this one
        console.log(userDatabase);
        break;

    case '3': document.getElementById('userList').innerHTML = userDatabase; // working
        break;

    case '4': userDatabase.sort(); //working
        console.log(userDatabase);
        break;
}
