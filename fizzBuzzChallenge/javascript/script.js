// for (let x = 1; x < 101; x++) {
//     if (x % 3 == 0) {
//         console.log("Fizz");
//     }
//     if else (x % 5 == 0) {
//         console.log("Buzz");
//     }
//     if else (x % 5 == 0 && x % 3 == 0) {
//         console.log("FizzBuzz");
//     }
//                     else {
//         console.log(x);
//     }
// }

for (let x = 1; x < 101; x++) {

    if (x % 5 == 0 && x % 3 == 0) {
        console.log("FizzBuzz");
    }
    else {
        if (x % 3 == 0) {
            console.log("Fizz");
        }
        else if (x % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(x)
        }
    }

}