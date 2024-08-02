let quoteDisplayE1 = document.getElementById("quoteDisplay");
let timerE1 = document.getElementById("timer");
let quoteInputE1 = document.getElementById("quoteInput");
let counter = 0;
let spinnerE1 = document.getElementById("spinner");
let resultE1 = document.getElementById("result");
let uniqueid = setInterval(function() {
    counter += 1;
    timerE1.textContent = counter + "seconds";
}, 1000);
let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET",
};
fetch(url, options).then(function(response) {
    return response.json();
}).then(function(jsondata) {
    spinnerE1.classList.add("d-none");
    quoteDisplayE1.textContent = jsondata.content;
});

let submitBtnE1 = document.getElementById("submitBtn");
submitBtnE1.onclick = function() {
    if (quoteDisplayE1.textContent === quoteInputE1.value) {
        resultE1.textContent = "you got it in " + timerE1.textContent;
        clearInterval(uniqueid);
    } else {
        resultE1.textContent = "Try again";

    }
};
