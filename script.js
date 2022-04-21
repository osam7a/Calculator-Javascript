console.log("Javascript loaded.");

// Variables
var elements = document.getElementsByTagName("*"); // Get all elements in the document

// Functions

// Append text to output
function appendText(text) {
    var out = document.getElementById("output");
    if (out.innerHTML === "Result will be shown here..." || out.innerHTML === "Invalid equation!") {
        out.style.opacity = "1";
        out.innerHTML = "";
        out.innerHTML += text;
    } else {
        out.innerHTML += text;
    }
}

// Reset the calculator
function reset() {
    var out = document.getElementById('output');
    out.style.opacity = 0.2;
    out.innerHTML = "Result will be shown here...";
}

// Evaluate equation
function evaluteEquation() {
    var equation = document.getElementById('output');
    if (equation.innerHTML === "Result will be shown here...") {
        equation.innerHTML = "Invalid equation!";
    } else {
        console.log(eval(equation.innerHTML));
        equation.innerHTML = eval(equation.innerHTML);
        console.log(equation.innerHTML);
    }
}

// Calculator initialization
function initializeCalculator(div) {
    // Create button numbers from 1 to 10
    for (let i=0; i < 10; i++) {
        // Skip zero
        if (i === 0) {
            continue
        }

        const button = document.createElement("button");
        button.appendChild(document.createTextNode(`${i}`));
        button.setAttribute("class", "numpad");
        div.appendChild(button);
        button.setAttribute("onclick", `appendText(${i})`);
        if (i === 3 || i === 6 || i === 9) {
            div.appendChild(document.createElement("br"));
        }
    }

    // Create elements
    const evaluate = document.createElement("button");
    const divide = document.createElement("button");
    const reset = document.createElement("button");
    const zero = document.createElement("button");
    const minus = document.createElement("button");
    const multiply = document.createElement("button");
    const plus = document.createElement("button");

    // Set text to each button
    evaluate.appendChild(document.createTextNode("="));
    divide.appendChild(document.createTextNode("/"));
    reset.appendChild(document.createTextNode("Reset"));
    zero.appendChild(document.createTextNode("0"));
    multiply.appendChild(document.createTextNode("*"));
    minus.appendChild(document.createTextNode("-"));
    plus.appendChild(document.createTextNode("+"))

    // Set attributes
    reset.setAttribute("onclick", `reset()`);
    divide.setAttribute("onclick", "appendText(\"/\")");
    multiply.setAttribute("onclick", "appendText(\"*\")");
    plus.setAttribute("onclick", "appendText(\"+\")");
    minus.setAttribute("onclick", "appendText(\"-\")");
    zero.setAttribute("onclick", "appendText(\"0\")");
    evaluate.setAttribute("onclick", "evaluteEquation()");
    

    // Set styles
    evaluate.setAttribute("class", "numpad");
    multiply.setAttribute("class", "numpad");
    divide.setAttribute("class", "numpad");
    plus.setAttribute("class", "numpad");
    minus.setAttribute("class", "numpad");
    zero.setAttribute("class", "numpad");
    reset.style.width = '50px';
    reset.style.height = '50px';

    // Append to main div
    div.appendChild(divide);
    div.appendChild(zero);
    div.appendChild(evaluate);
    div.appendChild(document.createElement("br"));
    div.appendChild(plus);
    div.appendChild(minus);
    div.appendChild(multiply);
    div.appendChild(document.createElement("br"));
    div.appendChild(reset);
}

function init() {
    // Add button numbers
    var div = document.getElementById("calculator");
    initializeCalculator(div);
}