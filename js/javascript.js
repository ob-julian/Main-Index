let fix1 = false;
let fix2 = false;
// const host = window.location.host;
// host is a relic from when the site reachable under multiple ddns domains
const host = "oberhofer.ddns.net";

neu1 = function() {
    if (fix1) document.getElementById("neue1").style.display = "none";
    else document.getElementById("neue1").style.display = "block";
    document.getElementById("neue2").style.display = "none";
    fix1 = !fix1;
    fix2 = false;
}
neu2 = function() {
    if (fix2) document.getElementById("neue2").style.display = "none";
    else document.getElementById("neue2").style.display = "block";
    document.getElementById("neue1").style.display = "none";
    fix2 = !fix2;
    fix1 = false;
}

function but1() {
    const alter = document.getElementById("alter").value;
    let fur = document.getElementById("fur").value;
    const von = document.getElementById("von").value;
    let ge;
    try {
        ge = document.querySelector('input[name="geschlecht"]:checked').value;
    } catch (e) {
        fur = false;
    }
    if (alter && fur && von) {
        const spacer = "=rtz=og"
        let result = "https://" + host +"/geburtstag?" + alter + spacer + fur + spacer + von + spacer + ge;
        const endcodeResult = encodeURI(result);
        const input = document.getElementById("fertig1")
        input.value = endcodeResult;
        input.select();
        copyToClipboard(endcodeResult);
    } else {
        const input = document.getElementById("fertig1")
        input.value = "Fehler, bitte alle Felder ausfüllen";
    }
}

function cp1() {
    let input = document.getElementById("fertig1");
    input.select();
    copyToClipboard(input.value);
}

but2 = function() {
    const date = document.getElementById("date").value;
    const anlass = document.getElementById("anlass").value;
    const name = document.getElementById("name").value;
    if (date && anlass && name) {
        const spacer = "=rtz=og";
        const result = "https://" + host +"/countdown?" + date + spacer + anlass + spacer + name;
        const encodeResult = encodeURI(result);
        const input = document.getElementById("fertig2")
        input.value = encodeResult;
        input.select();
        copyToClipboard(encodeResult);
    } else {
        const input = document.getElementById("fertig2")
        input.value = "Fehler, bitte alle Felder ausfüllen";
    }
}

function cp2() {
    const input = document.getElementById("fertig2")
    input.select();
    copyToClipboard(input.value);
}

random = function() {
    let ran = Math.floor((Math.random() * 7) + 1);
    switch (ran) {
        case 1:
            window.location.href = "https://" + host +"/ttt";
            break;
        case 2:
            window.location.href = "https://" + host +"/random";
            break;
        case 3:
            window.location.href = "https://" + host +"/geburtstag";
            break;
        case 4:
            window.location.href = "https://" + host +"/countdown";
            break;
        case 5:
            window.location.href = "https://" + host +"/lol";
            break;
        case 6:
            window.location.href = "https://bit.ly/sljulian";
            break;
        case 7:
            window.location.href = "https://bit.ly/jugit";
    }
}

window.onclick = function(event) {
    // check if the click was outside the boxes for inputting the data and close them if it was
    let fou = false;
    // get element on which the click occurred
    let target = event.target;
    // check if the element or one of its parents has the class "di"
    while (target !== document.documentElement) {
        if(target.classList[0] === "di"){
            fou = true;
            break;
        }
        target = target.parentElement;
    }

    if(!fou){
        document.getElementById("neue1").style.display = "none";
        document.getElementById("neue2").style.display = "none";
        fix1 = fix2 = false;
    }
}

function copyToClipboard(text) {
    // new method for copying to clipboard
    navigator.clipboard.writeText(text)
      .catch((error) => {
        console.error("Could not copy text: ", error);
      });
}

async function changeLanguage(lang) {
    // save the language in local storage
    localStorage.setItem("lang", lang);

    await setLanguage(lang);
}

function changeMode(mode) {
    // change between light and dark mode
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    // change between modes in iframe
    document.getElementById("ttt").contentWindow.document.body.classList.toggle("light");
    document.getElementById("ttt").contentWindow.document.body.classList.toggle("dark");

    // update the local storage to the current mode
    localStorage.setItem("mode", mode);
}