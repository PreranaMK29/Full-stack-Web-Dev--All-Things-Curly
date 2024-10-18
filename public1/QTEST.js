var questions = [
    ["I would describe my curl pattern", "Straight", "Wavy: S shaped bends", "Curly: Loose ringlets,springy", "Coily: z-shaped zig-zags","1","2","3","4"],
    ["What is the thickness of your hair", "Very fine", "Fine", "Medium", "Thick","1","2","3","4"],
    ["What is your hair porosity?", "Low", "Medium", "High","Very high", "1","2","3","4"],
    ["What is your hair elasticity", "Very low", "Low", "Medium", "High","1","2","3","4"],
    ["How often do you wash your hair", "Everyday", "2-3 times a week", "Once a week", "Once in 2 weeks","1","2","3","4"],
];

var quiz = document.getElementById("quiz");
var ques = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var res = document.getElementById("result");
var nextbutton = document.getElementById("next");
var q = document.getElementById('quit');

var tques = questions.length;
var score = [0, 0, 0, 0]; // Array to store the counts for each option
var quesindex = 0;

function quit() {
    quiz.style.display = 'none';
    result.style.display = '';
    var hairType = determineHairType(score);
    result.textContent = "Your Hair Type: " + hairType;
    q.style.display = "none";
}

function determineHairType(score) {
    var maxIndex = score.indexOf(Math.max(...score)); // Find the index of the maximum count
    return "Type " + (maxIndex + 1) + " Hair"; // Hair type is based on the index plus one
}

function give_ques(quesindex) {
    ques.textContent = quesindex + 1 + ". " + questions[quesindex][0];
    opt1.textContent = questions[quesindex][1];
    opt2.textContent = questions[quesindex][2];
    opt3.textContent = questions[quesindex][3];
    opt4.textContent = questions[quesindex][4];
    return;
}

give_ques(0);

function nextques() {
    var selected_ans = document.querySelector('input[type=radio]:checked');
    if (!selected_ans) {
        alert("SELECT AN OPTION");
        return;
    }

    var selected_index = parseInt(selected_ans.value) - 1; // Convert the value to index
    score[selected_index]++; // Increment the count for the selected option
    selected_ans.checked = false;
    quesindex++;
    if (quesindex == tques - 1)
        nextbutton.textContent = "Finish";
    if (quesindex == tques) {
        q.style.display = 'none';
        quiz.style.display = 'none';
        result.style.display = '';
        var hairType = determineHairType(score);
        result.textContent = "Your Hair Type: " + hairType;
        return;
    }
    give_ques(quesindex);
}

