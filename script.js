let score = 0;
let current = 0;

const questions = [
{
q:"Which is the largest continent?",
a:[
["Asia","correct"],
["Europe","wrong"],
["Africa","wrong"]
]
},
{
q:"Where do penguins live?",
a:[
["Africa","wrong"],
["Antarctica","correct"],
["Asia","wrong"]
]
},
{
q:"Where is the Eiffel Tower?",
a:[
["Europe","correct"],
["Africa","wrong"],
["Australia","wrong"]
]
},
{
q:"Where is the Amazon rainforest?",
a:[
["South America","correct"],
["Asia","wrong"],
["Europe","wrong"]
]
},
{
q:"Where do kangaroos live?",
a:[
["Australia","correct"],
["Africa","wrong"],
["North America","wrong"]
]
},
{
q:"Which continent has lions and elephants?",
a:[
["Africa","correct"],
["Europe","wrong"],
["Asia","wrong"]
]
},
{
q:"Which continent has USA and Canada?",
a:[
["North America","correct"],
["Australia","wrong"],
["Europe","wrong"]
]
}
];

function startQuiz(){
score = 0;
current = 0;

document.getElementById("quiz").classList.remove("hidden");

loadQuestion();
}

function loadQuestion(){
let q = questions[current];

document.getElementById("qtext").innerHTML = q.q;

let answersDiv = document.getElementById("answers");
answersDiv.innerHTML = "";

document.getElementById("feedback").innerHTML = "";

q.a.forEach(ans=>{
let btn = document.createElement("button");
btn.innerHTML = ans[0];

btn.onclick = function(){
check(ans[1]);
};

answersDiv.appendChild(btn);
});
}

function check(type){
let feedback = document.getElementById("feedback");

if(type === "correct"){
score++;
feedback.innerHTML = "✅ Correct!";
feedback.style.color = "green";
} else {
feedback.innerHTML = "❌ Wrong!";
feedback.style.color = "red";
}

document.querySelectorAll("#answers button").forEach(b=>{
b.disabled = true;
});

setTimeout(next, 1000);
}

function next(){
current++;

if(current < questions.length){
loadQuestion();
} else {
document.getElementById("qtext").innerHTML = "🎉 Quiz Finished!";
document.getElementById("answers").innerHTML = "";
document.getElementById("feedback").innerHTML = "";

// FINAL SCORE + AGAIN BUTTON
document.getElementById("score").innerHTML =
"⭐ Score: " + score + " / 7 <br><br>" +
"<button onclick='startQuiz()'>🔁 Play Again</button>";
}
}