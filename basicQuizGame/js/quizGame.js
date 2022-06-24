let correctAnswers = [];

let q1Answer = prompt('====MULTIPLE CHOICE!==== \n Question 1: Answer only A,B or C \n Which is the first day of the week? \n A) Sunday \n B) Monday \n C) Tuesday');

if (q1Answer == 'a') {
    correctAnswers.push('Question 1: Sunday');
}

let q2Answer = prompt('Question 2: Answer only A,B or C \n How is the water molecule presented on the periodic table? \n A) o2 \n B) 2ho \n C) h20');

if (q2Answer == 'c') {
    correctAnswers.push('Question 2: h20');
}

let q3Answer = prompt('Question 3: Answer only A,B or C \n What is the last book of the Bible? \n A) James \n B) Revelation \n C) Genesis');

if (q3Answer == 'b') {
    correctAnswers.push('Question 3: Revelation');
}

let q4Answer = prompt('Question 4: Answer only A,B or C \n How fast can a cheetah run? \n A) 60km/h \n B) 100km/h \n C) 120km/h');

if (q4Answer == 'c') {
    correctAnswers.push('Question 4: 120 km/h');
}

let q5Answer = prompt('Question 5: Answer only A,B or C \n Who organized the Boston Tea Party? \n A) Sons of Liberty \n B) George Washington \n C) Donald Trump');

if (q5Answer == 'a') {
    correctAnswers.push('Question 5: Sons of Liberty');
}

let q6Answer = prompt('Question 6: Answer only A,B or C \n Who played the first James Bond? \n A) Daniel Craig \n B) Roger Moore \n C) Sean Connery');

if (q6Answer == 'c') {
    correctAnswers.push('Question 6: Sean Connery');
}

let q7Answer = prompt('Question 7: Answer only A,B or C \n Where were Mojitos invented? \n A) Jamaica \n B) Cuba \n C) Russia');

if (q7Answer == 'b') {
    correctAnswers.push('Question 7: Cuba');
}

let q8Answer = prompt('Question 8: Answer only A,B or C \n Who did the first heart transplant? \n A) Christian Barnard \n B) Robert Jarvik \n C) House');

if (q8Answer == 'a') {
    correctAnswers.push('Question 8: Christian Barnard');
}

console.log(correctAnswers);

document.getElementById('htmlElement').innerHTML = "Your Score is:" + " " + correctAnswers.length + "/10"