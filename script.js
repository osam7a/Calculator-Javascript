console.log("Javascript loaded.");

// Variables
var elements = document.getElementsByTagName("*"); // Get all elements in the document
var evaluatedRecently;

// Functions

// Append text to output
function appendText(text) {
    var out = document.getElementById("output");
    if (out.innerHTML === "Result will be shown here..." || out.innerHTML === "Invalid equation!") {
        out.style.opacity = "1";
        out.innerHTML = "";
        out.innerHTML += text;
    } else {
        if (evaluatedRecently === true) {
            const operators = ['+', '-', '/', '*'];
            if (operators.includes(text)) {
                out.innerHTML += text;
                evaluatedRecently = false;
                return;
            }
            out.innerHTML = "";
            out.innerHTML += text;
            evaluatedRecently = false;
        } else out.innerHTML += text;
        
    }
}

// Reset the calculator
function reset() {
    var out = document.getElementById('output');
    out.style.opacity = 0.2;
    out.innerHTML = "Result will be shown here...";
    evaluatedRecently = false;
}

// Evaluate equation
function evaluateEquation() {
    var equation = document.getElementById('output');
    if (equation.innerHTML === "Result will be shown here...") {
        equation.innerHTML = "Invalid equation!";
    } else {
        equation.innerHTML = eval(equation.innerHTML);
        evaluatedRecently = true;
    }
}

function addNumbers(div) {
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
}

function doSqrt() {
    const output = document.getElementById("output");
    if (output.innerHTML === "Result will be shown here...") { return }
    evaluateEquation();
    output.innerHTML = Math.sqrt(output.innerHTML);
}

function doSin() {
    const output = document.getElementById("output");
    if (output.innerHTML === "Result will be shown here...") { return }
    evaluateEquation();
    output.innerHTML = Math.sin(output.innerHTML);
}

function doRound() {
    const output = document.getElementById("output");
    if (output.innerHTML === "Result will be shown here...") { return }
    evaluateEquation();
    output.innerHTML = Math.round(output.innerHTML);
}

function doCos() {
    const output = document.getElementById("output");
    if (output.innerHTML === "Result will be shown here...") { return }
    evaluateEquation();
    output.innerHTML = Math.cos(output.innerHTML);
}

function doAbs() {
    const output = document.getElementById("output");
    if (output.innerHTML === "Result will be shown here...") { return }
    evaluateEquation();
    output.innerHTML = Math.abs(output.innerHTML);
}

function doLog() {
    const output = document.getElementById("output");
    if (output.innerHTML === "Result will be shown here...") { return }
    evaluateEquation();
    output.innerHTML = Math.log(output.innerHTML);
}

// Calculator initialization
function initializeCalculator(div) {
    // Create elements
    const evaluate = document.createElement("button");
    const divide = document.createElement("button");
    const reset = document.createElement("button");
    const zero = document.createElement("button");
    const minus = document.createElement("button");
    const multiply = document.createElement("button");
    const plus = document.createElement("button");
    const sqrt_ = document.createElement("button");
    const round_ = document.createElement("button");
    const sin_ = document.createElement("button");
    const cos_ = document.createElement("button");
    const abs_ = document.createElement("button");
    const log_ = document.createElement("button");
    const PI_ = document.createElement("button");

    // Set text to each button
    evaluate.appendChild(document.createTextNode("="));
    divide.appendChild(document.createTextNode("/"));
    reset.appendChild(document.createTextNode("Reset"));
    zero.appendChild(document.createTextNode("0"));
    multiply.appendChild(document.createTextNode("*"));
    minus.appendChild(document.createTextNode("-"));
    plus.appendChild(document.createTextNode("+"));
    sqrt_.appendChild(document.createTextNode('√'));
    PI_.appendChild(document.createTextNode("π"));
    abs_.appendChild(document.createTextNode("|x|"));
    log_.appendChild(document.createTextNode("log"));
    cos_.appendChild(document.createTextNode("cos"));
    sin_.appendChild(document.createTextNode("sin"));
    round_.appendChild(document.createTextNode("round"));
    
    // Set attributes
    reset.setAttribute("onclick", `reset()`);
    divide.setAttribute("onclick", "appendText(\"/\")");
    multiply.setAttribute("onclick", "appendText(\"*\")");
    plus.setAttribute("onclick", "appendText(\"+\")");
    minus.setAttribute("onclick", "appendText(\"-\")");
    zero.setAttribute("onclick", "appendText(\"0\")");
    PI_.setAttribute("onclick", `appendText(\"${Math.PI}\")`);
    sqrt_.setAttribute("onclick", "doSqrt()");
    abs_.setAttribute("onclick", "doAbs()");
    round_.setAttribute("onclick", "doRound()");
    sin_.setAttribute("onclick", "doSin()");
    cos_.setAttribute("onclick", "doCos()");
    log_.setAttribute("onclick", "doLog()");
    evaluate.setAttribute("onclick", "evaluateEquation()");
    

    // Set styles
    evaluate.setAttribute("class", "numpad");
    multiply.setAttribute("class", "numpad");
    divide.setAttribute("class", "numpad");
    plus.setAttribute("class", "numpad");
    minus.setAttribute("class", "numpad");
    zero.setAttribute("class", "numpad");
    PI_.setAttribute("class", "numpad");
    sqrt_.setAttribute("class", "numpad");
    cos_.setAttribute("class", "numpad");
    sin_.setAttribute("class", "numpad");
    round_.setAttribute("class", "numpad");
    abs_.setAttribute("class", "numpad");
    log_.setAttribute("class", "numpad")
    reset.style.width = '50px';
    reset.style.height = '50px';
    round_.style.fontSize = '45px';

    // Append to main div
    addNumbers(div);
    div.appendChild(divide);
    div.appendChild(zero);
    div.appendChild(evaluate);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    div.appendChild(plus);
    div.appendChild(minus);
    div.appendChild(multiply);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    div.appendChild(sqrt_);
    div.appendChild(PI_);
    div.appendChild(abs_);
    div.appendChild(document.createElement("br"));
    div.appendChild(log_);
    div.appendChild(round_);
    div.appendChild(cos_);
    div.appendChild(document.createElement("br"));
    div.appendChild(sin_);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    div.appendChild(reset);
}

function init() {
    // Add button numbers
    var div = document.getElementById("calculator");
    initializeCalculator(div);
}