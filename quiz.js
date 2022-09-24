(function () {
  function create() {
    const ans = [];
    que.forEach((a, b) => {
      const answers = [];
      for (p in a.answers) {
        answers.push(
          `<label>
              <input type="radio" name="question${b}" value="${p}">
              ${p} :
              ${a.answers[p]}
            </label>`
        );
      }
      ans.push(
        `<div class="slide">
            <div class="question"> ${a.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });
    quiz.innerHTML = ans.join("");
  }
  function display() {
    const answer = quiz.querySelectorAll(".answers");
    let c = 0;
    que.forEach((a, b) => {
      const val = answer[b];
      const m = `input[name=question${b}]:checked`;
      const input = (val.querySelector(m) || {}).value;
      if (input === a.correct) {
        c++;
        answer[b].style.color = "lightgreen";
      } else {
        answer[b].style.color = "red";
      }
    });
    result.innerHTML = `Result : You got ${c} out of ${que.length} marks`;
  }
  function output(n) {
    r[d].classList.remove("active-slide");
    r[n].classList.add("active-slide");
    d = n;
    if (d === 0) {
      back.style.display = "none";
    } else {
      back.style.display = "inline-block";
    }
    if (d === r.length - 1) {
      q.style.display = "none";
      submit.style.display = "inline-block";
    } else {
      q.style.display = "inline-block";
      submit.style.display = "none";
    }
  }
  function next() {
    output(d + 1);
  }
  function previous() {
    output(d - 1);
  }
  const quiz = document.getElementById("mcqs");
  const result = document.getElementById("results");
  const submit = document.getElementById("submit");
  const que = [
    {
      question:
        "Q1. What tag is used to list individual items of an ordered list?",
      answers: {
        A: "LI ",
        B: "UL",
        C: "OL",
        D: "None of the above",
      },
      correct: "A",
    },
    {
      question: "Q2. HTML stands for?",
      answers: {
        A: "Hyper Tabular Markup Language",
        B: "HyperText Markup Language",
        C: "High Text Markup Language",
        D: "Hyper Text Mark Language",
      },
      correct: "B",
    },
    {
      question:
        "Q3. Which of the following is not a valid alignment attribute?",
      answers: {
        A: "Left",
        B: "Right",
        C: "Top",
        D: "Center",
      },
      correct: "C",
    },
  ];
  create();
  const back = document.getElementById("back");
  const q = document.getElementById("next");
  const r = document.querySelectorAll(".slide");
  let d = 0;
  output(d);
  back.addEventListener("click", previous);
  q.addEventListener("click", next);
  submit.addEventListener("click", display);
})();
