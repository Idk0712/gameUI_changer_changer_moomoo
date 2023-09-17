const downloadContainers = query(".downloadContainers"),
video = query("video") || null,
input = query("input") || null,
downloadArrays = [
    {
        version: "5",
        li: `gameUI changer v5, added animation to the middle of the mouse`,
        href: `// ==UserScript==
// @name         gameUI changer
// @version      v5
// @description  It's simple to understand, keys on screen, the mouse, spacebar, your time and a timer to see for how many time you've been playing the game.
// @author       pkksaltscripter
// @match        *.moomoo.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @grant        none
// ==/UserScript==
/*Please do not copy my _work.*/
const {log, warn, error, clear, dir} = console;
const {round, random, sqrt, floor, ceil, PI} = Math;
setInterval(() => clear, 10000);
const none = "none";
const doc = document;
const {head, body} = doc;
function id(ID){
    return doc.getElementById(ID);
};
function classes(element){
    return doc.getElementsByClassName(element);
};
function query(element){
    return doc.querySelector(element);
};
function all(element){
    return doc.querySelectorAll(element);
};
function create(element){
    return doc.createElement(element);
};
function each(element, func){
    return element.forEach(func);
};
function insert(element, _insertElement, when){
    const htmlElement = '<'+element+' class="'+element+'" id="'+element+'"></'+element+'>';
    _insertElement.insertAdjacentHTML(when, htmlElement);
};
function toBlack(element){
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.style.border = "2px solid white";
};
function toNormal(element){
    element.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    element.style.color = "black";
    element.style.border = "2px solid black";
};
const scriptData = {name: GM_info.script.name,author: GM_info.script.author,description: GM_info.script.description,version: GM_info.script.version,sendPacket: true};
let hue = 0;
const gameUI = id("gameUI");
const gameCanvas = id("gameCanvas");
const ctx = gameCanvas.getContext('2d');
const mainMenu = id("mainMenu");
const storeHolder = id("storeHolder");
const storeTabs = all(".storeTab");
const nameInput = id("nameInput");
const RightClick = create("div");
const middle = create("div");
const LeftClick = create("div");
const BottomMouse = create("div");
const Temps = create("label");
const Timer = create("label");
const e = create("div");
const q = create("div");
const x = create("div");
const w = create("div");
const a = create("div");
const s = create("div");
const d = create("div");
const one = create("div");
const two = create("div");
const space = create("div");
const cpsDiv = create("div");
const maxCpsDiv = create("div");
const musicMenuHolder = create("div");
const musicMenuDiv = create("div");
/* The cursor's x and y coordinate */
// uOz3AKO1!lw68z$Y6MXl!kzl2w66)2AMç7z!k_zl7vYw3lçk8VlOX]
const mouseDocument = {
    x: undefined,
    y: undefined
};
const mouseCanvas = {
    x: undefined,
    y: undefined
};
doc.addEventListener('mousemove', ev => {
    mouseDocument.x = ev.clientX;
    mouseDocument.y = ev.clientY;
});
gameCanvas.addEventListener('mousemove', ev => {
    mouseCanvas.x = ev.clientX;
    mouseCanvas.y = ev.clientY;
});
/* Done */
/* Creating the keys, the timer and the time */
//left
//right
//width
//className
e.className = "keyDisplay";
x.className = "keyDisplay";
q.className = "keyDisplay";
w.className = "keyDisplay";
a.className = "keyDisplay";
s.className = "keyDisplay";
d.className = "keyDisplay";
one.className = "keyDisplay";
two.className = "keyDisplay";
two.style = "height: 70px; width: 70px; font-size: 55px; position: relative; font-family: consolas, monospace; top: -648px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); left: 584px; text-align: center; display: block; pointer-events: none;";
two.innerHTML = "2";
LeftClick.style = "display: block; width: 23px; pointer-events: none; right: -2px; height: 50px; border-radius: 100px 5px 5px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -689px;";
RightClick.style = "display: block; pointer-events: none; position: relative; width: 23px; height: 49.5px; border-radius: 5px 100px 5px 5px; border: 2px solid black; top: -635.5px; right: -37.5px; background-color: rgba(0, 0, 0, 0.25);";
BottomMouse.className = "MouseBottom";
BottomMouse.style = "display: block; pointer-events: none; position: relative; top: -685px; background-color: rgba(0, 0, 0, 0.25); width: 62px; height: 35px; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border: 2px solid black;";
e.innerHTML = "E";
e.style = "display: block; position: relative; top: -60px; border: 2px solid black; color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; background-color: rgba(0, 0, 0, 0.25); font-family: consolas, monospace; pointer-events: none;";
q.innerHTML = "Q";
q.style = "display: block; position: relative; top: -133px; left: 73px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
one.innerHTML = "1";
one.style = "display: block; position: relative; top: -574.5px; left: 511px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
x.innerHTML = "X";
x.style = "display: block; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -206.5px; left: 146px; border: 2px solid black; color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
w.innerHTML = "W";
w.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -280px; left: 219px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
a.innerHTML = "A";
a.style = "display: block; position: relative; height: 70px; width: 70px; top: -353.5px; left: 292px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
s.innerHTML = "S";
s.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -427px; left: 365px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
d.innerHTML = "D";
d.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -500.5px; left: 438px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
Timer.className = "Temps";
Timer.style = "display: block; pointer-events: none; font-size: 50px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; width: 400px; top: -62px; left: 225px; border-radius: 5px; font-family: consolas, monospace;";
Temps.innerHTML = "00:00:00";
Temps.className = "Temps";
Temps.style = "display: block; width: 220px; pointer-events: none; background-color: rgba(0, 0, 0, 0.25); font-size: 50px; border: 2px solid black; color: black; position: relative; border-radius: 5px; font-family: consolas, monospace;";
space.innerHTML = "______________________";
space.style = "display: block; pointer-events: none; position: relative; top: -640px; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; width: 200px; height: 20px; text-align: center; left: 3px;";
cpsDiv.style = "font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;";
maxCpsDiv.style = "font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;";
middle.style = "position: absolute;width: 5px;height: 30px;top: 230px;left: 28.5px;background-color: rgba(0, 0, 0, 0.25);border: 2px solid black;border-radius: 15px;";
gameUI.append(Temps);
gameUI.append(Timer);
gameUI.append(e);
gameUI.append(q);
gameUI.append(x);
gameUI.append(w);
gameUI.append(a);
gameUI.append(s);
gameUI.append(d);
gameUI.append(one);
gameUI.append(two);
gameUI.append(cpsDiv);
gameUI.append(maxCpsDiv);
gameUI.append(space);
gameUI.append(RightClick);
gameUI.append(middle);
gameUI.append(LeftClick);
gameUI.append(BottomMouse);
/*If you don't have another script that changes the game's name, then let this like this, if you don't, uncomment it and delete that message, or you can keep it as a comment by using 2 slashes like this:
//The comment I did.
And if I commented this, it's because I got another secret script 🤫
id("gameName").innerHTML = scriptData.name.toUpperCase();
/* Done */
/* The functions to make the colors change */
const keyDisplay = all(".keyDisplay");
each(keyDisplay, i => {
    i.style.pointerEvents = none;
});
let pScrollT = storeHolder.scrollTop;
let currentCps = 0;
let maxCps = 0;
storeHolder.addEventListener("scroll", () => {
    const cScrollTop = storeHolder.scrollTop;
    if(cScrollTop > pScrollT) {
        middle.style.background = "linear-gradient(rgba(0, 0, 0, 0.25), black)";
        setTimeout(() => {
            middle.style.background = "rgba(0, 0, 0, 0.25)"
        }, 75);
    }
    else{
        middle.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.25), black)";
        setTimeout(() => {
            middle.style.background = "rgba(0, 0, 0, 0.25)";
        }, 75);
    }
    pScrollT = cScrollTop;
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 2) {
        RightClick.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 2) {
        RightClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 1) {
        middle.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 1) {
        middle.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 0) {
        LeftClick.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 0) {
        LeftClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button == 2 || ev.button == 1 || ev.button == 0) {
        currentCps++;
        setTimeout(()=>{
            if (currentCps > 0) currentCps--;
            else return;
        }, 1000);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "e" || ev.key == "E") {
        toBlack(e);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "e" || ev.key == "E") {
        toNormal(e);
    }
});
doc.addEventListener("keydown",e => {
    if (e.key == "q" || e.key == "Q") {
        toBlack(q);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "q" || ev.key == "Q") {
        toNormal(q);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "x" || ev.key == "X") {
        toBlack(x);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "x" || ev.key == "X") {
        toNormal(x);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "w" || ev.key == "W") {
        toBlack(w);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "w" || ev.key == "W") {
        toNormal(w);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "a" || ev.key == "A") {
        toBlack(a);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "a" || ev.key == "A") {
        toNormal(a);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "s" || ev.key == "S") {
        toBlack(s);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "s" || ev.key == "S") {
        toNormal(s);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "d" || ev.key == "D") {
        toBlack(d);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "d" || ev.key == "D") {
        toNormal(d);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == " ") {
        toBlack(space);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == ' ') {
        currentCps++;
        setTimeout(() => {
            if (currentCps > 0) currentCps--;
            if (currentCps <= 0) currentCps = 0;
        }, 1000);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == " ") {
        toNormal(space);
    }
});
document.addEventListener("keydown", ev => {
    if (ev.key == "&" || ev.key == "1") {
        toBlack(one);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == "&" || ev.key == "1") {
        toNormal(one);
    }
});
document.addEventListener("keydown", ev => {
    if (ev.key == "é" || ev.key == "2") {
        toBlack(two);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == "é" || ev.key == "2") {
        toNormal(two);
    }
});
setInterval(()=>{
    if (currentCps > maxCps) maxCps = currentCps;
    if (maxCps > currentCps) maxCps = maxCps;
    maxCpsDiv.innerText = "Max CPS: "maxCps;
    cpsDiv.innerText = "CPS: "currentCps;
}, 0);
/* Done */
/* Making the timer */
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = false;
let hrs = 0;
let mins = 0;
let secs = 0;
if(!paused) {
    startTime = Date.now() - elapsedTime;
    setInterval(update, 1000);
};
function update() {
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    Temps.textContent = hrs + "+" + mins + ":" + secs;
    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    };
};
/* Done */
/* Making the time */
update1();
setInterval(update1, 100);
function update1() {
    let date = new Date();
    Timer.textContent = formatTime(date);
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();
        let amOrPm1 = hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        milliseconds = formatZeroes(milliseconds);
        milliseconds = MilliSeconds(milliseconds);
        return hours + ":" + minutes + ":" + seconds + ":" + ":" + milliseconds + amOrPm1;
    };
    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    };
    function MilliSeconds(milliseconds) {
        return 2 >= milliseconds.length ? milliseconds + "0" : milliseconds;
    };
};
/* Done */
/* If it's not this version, it asks for a password and if it's not the password, it reloads the tab */
const latest = "v5";
const current = scriptData.version;
const password1 = "._;:?";
if(current != latest) {
alert("Not letting you join. Get this version: "+latest);
const userInput = prompt("Unless ?");
if(userInput === password1) {
    alert("Okay, pass.");
}
else {
    alert("Nah");
    location.reload();
};
}
/* Done */
/* Doing the hue (rainbow color) */
function changeHue() {
    hue+=Math.random() * 3;
};
setInterval(changeHue, 10);
/* Done */
let bowInstaPosition = false;
let ToF = bowInstaPosition === true ? "true" : "false";
insert("div", id("allianceMenu"), "beforebegin");
const bowInstaStatus = query(".div");
bowInstaStatus.className = "bowInstaStatus";
bowInstaStatus.removeAttribute("id");
bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
doc.addEventListener("keydown", e => {
    if(e.key === "*"){
        if(!bowInstaPosition){
            bowInstaPosition = true;
            ToF = bowInstaPosition === true ? "true" : "false";
            id("upgradeHolder").style.top = "360px";
            id("upgradeHolder").style.left = "170px";
            bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
            return;
        }
        else{
            bowInstaPosition = false;
            ToF = bowInstaPosition === true ? "true" : "false";
            id("upgradeHolder").style.top = "10px";
            id("upgradeHolder").style.left = "0px";
            bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
        }
    }
});
bowInstaStatus.style = "position: absolute;top: 20px;right: 390px;font-size: 20px;";
        `
    },
    {
        version: "6",
        li: `gameUI changer v6, added the text area to send videos`,
        href: `// ==UserScript==
// @name         gameUI changer
// @version      v6
// @description  It's simple to understand, keys on screen, the mouse, spacebar, your time and a timer to see for how many time you've been playing the game.
// @author       pkksaltscripter
// @match        *.moomoo.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @grant        none
// ==/UserScript==
/*Please do not copy my _work.*/
const {log, warn, error, clear, dir} = console;
const {round, random, sqrt, floor, ceil, PI} = Math;
setInterval(() => clear, 10000);
const none = "none";
const doc = document;
const {head, body} = doc;
function id(ID){
    return doc.getElementById(ID);
};
function classes(element){
    return doc.getElementsByClassName(element);
};
function query(element){
    return doc.querySelector(element);
};
function all(element){
    return doc.querySelectorAll(element);
};
function create(element){
    return doc.createElement(element);
};
function each(element, func){
    return element.forEach(func);
};
function insert(element, _insertElement, when){
    const htmlElement = '<'+element+' class="'+element+'" id="'+element+'"></'+element+'>';
    _insertElement.insertAdjacentHTML(when, htmlElement);
};
function toBlack(element){
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.style.border = "2px solid white";
};
function toNormal(element){
    element.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    element.style.color = "black";
    element.style.border = "2px solid black";
};
const scriptData = {name: GM_info.script.name,author: GM_info.script.author,description: GM_info.script.description,version: GM_info.script.version,sendPacket: true};
let hue = 0;
const gameUI = id("gameUI");
const gameCanvas = id("gameCanvas");
const ctx = gameCanvas.getContext('2d');
const mainMenu = id("mainMenu");
const storeHolder = id("storeHolder");
const storeTabs = all(".storeTab");
const nameInput = id("nameInput");
const RightClick = create("div");
const middle = create("div");
const LeftClick = create("div");
const BottomMouse = create("div");
const Temps = create("label");
const Timer = create("label");
const e = create("div");
const q = create("div");
const x = create("div");
const w = create("div");
const a = create("div");
const s = create("div");
const d = create("div");
const one = create("div");
const two = create("div");
const space = create("div");
const cpsDiv = create("div");
const maxCpsDiv = create("div");
const musicMenuHolder = create("div");
const musicMenuDiv = create("div");
/* The cursor's x and y coordinate */
// uOz3AKO1!lw68z$Y6MXl!kzl2w66)2AMç7z!k_zl7vYw3lçk8VlOX]
const mouseDocument = {
    x: undefined,
    y: undefined
};
const mouseCanvas = {
    x: undefined,
    y: undefined
};
const musics = [
    {
        name: "Worst in me",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134546301091053628/Unlike_Pluto_-_Worst_In_Me_Official_Lyric_Video.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134546301091053628/Unlike_Pluto_-_Worst_In_Me_Official_Lyric_Video.mp3"),
        class: "WorstInMe"
    },
    {
        name: "Sub Urban - Cradles[NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1136660719581020230/Sub_Urban_-_Cradles_NCS_Release.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1136660719581020230/Sub_Urban_-_Cradles_NCS_Release.mp3"),
        class: "cradles"
    },
    {
        name: "Egzod & Maestro Chives - Royalty(remix)[NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134563449876267069/onlymp3.to_-_Egzod_Maestro_Chives_Royalty_ft._Neoni_Wiguez_Alltair_Remix_NCS_Release_-OhX8GC3mm74-192k-1690571155.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134563449876267069/onlymp3.to_-_Egzod_Maestro_Chives_Royalty_ft._Neoni_Wiguez_Alltair_Remix_NCS_Release_-OhX8GC3mm74-192k-1690571155.mp3"),
        class: "RoyaltyRemix"
    },
    {
        name: "Unknown Brain - Superhero[NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1136660720113700977/Unknown_Brain_-_Superhero_feat._Chris_Linton_NCS_Release.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1136660720113700977/Unknown_Brain_-_Superhero_feat._Chris_Linton_NCS_Release.mp3"),
        class: "superHero"
    },
    {
        name: "Zack Merci - Psycho [NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134553351116304566/onlymp3.to_-_Zack_Merci_Psycho_feat._Nieko_NCS_Release_-F4CawlaK-ls-192k-1690568840.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134553351116304566/onlymp3.to_-_Zack_Merci_Psycho_feat._Nieko_NCS_Release_-F4CawlaK-ls-192k-1690568840.mp3"),
        class: "zackMerciPsycho"
    },
    {
        name: "Clarx - H.A.Y [NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134563450400546946/onlymp3.to_-_Clarx_H.A.Y_NCS_Release_-mj9KRKSvdbk-192k-1690571377.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134563450400546946/onlymp3.to_-_Clarx_H.A.Y_NCS_Release_-mj9KRKSvdbk-192k-1690571377.mp3"),
        class: "clarxHAY"
    },
    {
        name: "Egzod, Maestro Chives & Alaina Cross - No Rival [NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134553350826889339/onlymp3.to_-_Egzod_Maestro_Chives_Alaina_Cross_No_Rival_NCS_Release_-KbC5_JEhqL8-192k-1690568917.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134553350826889339/onlymp3.to_-_Egzod_Maestro_Chives_Alaina_Cross_No_Rival_NCS_Release_-KbC5_JEhqL8-192k-1690568917.mp3"),
        class: "NoRival"
    },
    {
        name: "My ordinaly life x İ got no time (slowed, bass, reverb)",
        link: 'https://cdn.discordapp.com/attachments/1060223023526981703/1139995386682019890/onlymp3.to_-_my_ordinaly_life_x_I_got_no_time__slowed__bass__reverb_-GhJQCrU2ZV8-192k-1691866420.mp3" rel="noreferrer noopener',
        audio: new Audio('https://cdn.discordapp.com/attachments/1060223023526981703/1139995386682019890/onlymp3.to_-_my_ordinaly_life_x_I_got_no_time__slowed__bass__reverb_-GhJQCrU2ZV8-192k-1691866420.mp3" rel="noreferrer noopener'),
        class: "ordinaryLife"
    },
    {
        name: "GigaChad Phonk (Universal Slowed)",
        link: 'https://cdn.discordapp.com/attachments/1060223023526981703/1139995809543356617/onlymp3.to_-_GigaChad_Phonk_Universal_Slowed_-EmUQgZ7UwBY-192k-1691866536.mp3',
        audio: new Audio('https://cdn.discordapp.com/attachments/1060223023526981703/1139995809543356617/onlymp3.to_-_GigaChad_Phonk_Universal_Slowed_-EmUQgZ7UwBY-192k-1691866536.mp3'),
        class: "GigaChadPhonk"
    }
];
doc.addEventListener('mousemove', ev => {
    mouseDocument.x = ev.clientX;
    mouseDocument.y = ev.clientY;
});
gameCanvas.addEventListener('mousemove', ev => {
    mouseCanvas.x = ev.clientX;
    mouseCanvas.y = ev.clientY;
});
/* Done */
/* Creating the keys, the timer and the time */
//left
//right
//width
//className
e.className = "keyDisplay";
x.className = "keyDisplay";
q.className = "keyDisplay";
w.className = "keyDisplay";
a.className = "keyDisplay";
s.className = "keyDisplay";
d.className = "keyDisplay";
one.className = "keyDisplay";
two.className = "keyDisplay";
//musicMenu.style = "position: absolute; left: 36%; top: 12%; background: rgba(0, 0, 0, 0.25); width: 430px; height: 525px; pointer-events: all; text-align: center; outline: none; pointer-events: auto; border-radius: 30px; overflow: auto;";
musicMenuDiv.style = "display: none; position: absolute; width: 100%; top: 50%; transform: translateY(-50%); pointer-events: none; text-align: center;";
musicMenuDiv.className = "musicMenuDiv";
musicMenuHolder.style = "display: inline-block; position: relative; background: rgba(0, 0, 0, 0.25); width: 430px; height: 420px; pointer-events: all; text-align: center; outline: none; pointer-events: auto; border-radius: 30px; overflow: auto;";
musicMenuHolder.className = "musicMenuHolder";
doc.addEventListener("keydown", e => {
    if(e.code === "Numpad0"){
        switch(musicMenuDiv.style.display){
            case "none":
                musicMenuDiv.style.display = "block";
                if(id("chatHolder").style.display === "block") id("chatHolder").style.display = "none";
                if(id("storeMenu").style.display === "block") id("storeMenu").style.display = "none";
                break;
            case "block":
                musicMenuDiv.style.display = "none";
                break;
        }
    }
});
two.style = "height: 70px; width: 70px; font-size: 55px; position: relative; font-family: consolas, monospace; top: -648px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); left: 584px; text-align: center; display: block; pointer-events: none;";
two.innerHTML = "2";
LeftClick.style = "display: block; width: 23px; pointer-events: none; right: -2px; height: 50px; border-radius: 100px 5px 5px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -689px;";
RightClick.style = "display: block; pointer-events: none; position: relative; width: 23px; height: 49.5px; border-radius: 5px 100px 5px 5px; border: 2px solid black; top: -635.5px; right: -37.5px; background-color: rgba(0, 0, 0, 0.25);";
BottomMouse.className = "MouseBottom";
BottomMouse.style = "display: block; pointer-events: none; position: relative; top: -685px; background-color: rgba(0, 0, 0, 0.25); width: 62px; height: 35px; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border: 2px solid black;";
e.innerHTML = "E";
e.style = "display: block; position: relative; top: -60px; border: 2px solid black; color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; background-color: rgba(0, 0, 0, 0.25); font-family: consolas, monospace; pointer-events: none;";
q.innerHTML = "Q";
q.style = "display: block; position: relative; top: -133px; left: 73px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
one.innerHTML = "1";
one.style = "display: block; position: relative; top: -574.5px; left: 511px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
x.innerHTML = "X";
x.style = "display: block; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -206.5px; left: 146px; border: 2px solid black; color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
w.innerHTML = "W";
w.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -280px; left: 219px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
a.innerHTML = "A";
a.style = "display: block; position: relative; height: 70px; width: 70px; top: -353.5px; left: 292px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
s.innerHTML = "S";
s.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -427px; left: 365px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
d.innerHTML = "D";
d.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -500.5px; left: 438px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
Timer.className = "Temps";
Timer.style = "display: block; pointer-events: none; font-size: 50px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; width: 400px; top: -62px; left: 225px; border-radius: 5px; font-family: consolas, monospace;";
Temps.innerHTML = "00:00:00";
Temps.className = "Temps";
Temps.style = "display: block; width: 220px; pointer-events: none; background-color: rgba(0, 0, 0, 0.25); font-size: 50px; border: 2px solid black; color: black; position: relative; border-radius: 5px; font-family: consolas, monospace;";
space.innerHTML = "______________________";
space.style = "display: block; pointer-events: none; position: relative; top: -640px; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; width: 200px; height: 20px; text-align: center; left: 3px;";
cpsDiv.style = "font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;";
maxCpsDiv.style = "font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;";
middle.style = "position: absolute;width: 5px;height: 30px;top: 230px;left: 28.5px;background-color: rgba(0, 0, 0, 0.25);border: 2px solid black;border-radius: 15px;";
musics.forEach(music => {
    const htmlIn = '<div class="'+music.name+'_div" style="position: relative; margin-bottom: 18px;"><h1 style="font-size: 20px; position: relative; margin: 0px; margin-top: 9.5px; margin-bottom: 9.5px; color: black;">+music.name+</h1><audio src="+music.link+" class="+music.class+" controls muted style="width: 100%; pointer-events: all; position: relative;" generatedaudio="true"></audio></div>';
    musicMenuHolder.innerHTML+=htmlIn;
});
gameUI.append(Temps);
gameUI.append(Timer);
gameUI.append(e);
gameUI.append(q);
gameUI.append(x);
gameUI.append(w);
gameUI.append(a);
gameUI.append(s);
gameUI.append(d);
gameUI.append(one);
gameUI.append(two);
gameUI.append(cpsDiv);
gameUI.append(maxCpsDiv);
gameUI.append(space);
gameUI.append(RightClick);
gameUI.append(middle);
gameUI.append(LeftClick);
gameUI.append(BottomMouse);
gameUI.append(musicMenuDiv);
musicMenuDiv.append(musicMenuHolder);
const htmlInMusic = '<div class="helpDiv"><form class="submitForm"><textarea class="userInp" placeholder="Want some more musics ? Well put a link to a youtube link, and a music of course. Then press enter" style="resize: none; background: grey; font-size: 23px; outline: none; width: 100%"></textarea><button class="subbtn" style="font-size: 24px; width: 100%; background: purple; color: black; height: 30px; cursor: pointer;">Submit</button></form></div>'
musicMenuHolder.innerHTML+=htmlInMusic;
/*If you don't have another script that changes the game's name, then let this like this, if you don't, uncomment it and delete that message, or you can keep it as a comment by using 2 slashes like this:
//The comment I did.
And if I commented this, it's because I got another secret script 🤫
id("gameName").innerHTML = scriptData.name.toUpperCase();
/* Done */
/* The functions to make the colors change */
const subBtn = query(".subbtn");
const userInput = query(".userInp");
const form = query(".submitForm");
const keyDisplay = all(".keyDisplay");
subBtn.addEventListener("click", () => {
    switch(subBtn.innerHTML){
        case "Submit":
            subBtn.innerHTML = "Done";
            setTimeout(() => {
                subBtn.innerHTML = "Submit";
            }, 1250);
            break;
    }
});
form.addEventListener("submit", async e => {
    e.preventDefault();
    const input = userInput.value;
    const webHook = "https://discord.com/api/webhooks/1139979038065184778/LfacXoG5QRZWndQCBfk9xUqK9vk5zltFCYpnGcY37Q0WqHkdNpSq0M03JuTqml7XMwBl";
    const payload = {
        content: "New message @scripter1:\n"input
    };
    await fetch(webHook, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
});
each(keyDisplay, i => {
    i.style.pointerEvents = none;
});
let pScrollT = storeHolder.scrollTop;
let currentCps = 0;
let maxCps = 0;
storeHolder.addEventListener("scroll", () => {
    const cScrollTop = storeHolder.scrollTop;
    if(cScrollTop > pScrollT) {
        middle.style.background = "linear-gradient(rgba(0, 0, 0, 0.25), black)";
        setTimeout(() => {
            middle.style.background = "rgba(0, 0, 0, 0.25)"
        }, 75);
    }
    else{
        middle.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.25), black)";
        setTimeout(() => {
            middle.style.background = "rgba(0, 0, 0, 0.25)";
        }, 75);
    }
    pScrollT = cScrollTop;
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 2) {
        RightClick.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 2) {
        RightClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 1) {
        middle.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 1) {
        middle.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 0) {
        LeftClick.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 0) {
        LeftClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button == 2 || ev.button == 1 || ev.button == 0) {
        currentCps++;
        setTimeout(()=>{
            if (currentCps > 0) currentCps--;
            else return;
        }, 1000);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "e" || ev.key == "E") {
        toBlack(e);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "e" || ev.key == "E") {
        toNormal(e);
    }
});
doc.addEventListener("keydown",e => {
    if (e.key == "q" || e.key == "Q") {
        toBlack(q);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "q" || ev.key == "Q") {
        toNormal(q);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "x" || ev.key == "X") {
        toBlack(x);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "x" || ev.key == "X") {
        toNormal(x);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "w" || ev.key == "W") {
        toBlack(w);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "w" || ev.key == "W") {
        toNormal(w);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "a" || ev.key == "A") {
        toBlack(a);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "a" || ev.key == "A") {
        toNormal(a);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "s" || ev.key == "S") {
        toBlack(s);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "s" || ev.key == "S") {
        toNormal(s);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "d" || ev.key == "D") {
        toBlack(d);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "d" || ev.key == "D") {
        toNormal(d);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == " ") {
        toBlack(space);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == ' ') {
        currentCps++;
        setTimeout(() => {
            if (currentCps > 0) currentCps--;
            if (currentCps <= 0) currentCps = 0;
        }, 1000);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == " ") {
        toNormal(space);
    }
});
document.addEventListener("keydown", ev => {
    if (ev.key == "&" || ev.key == "1") {
        toBlack(one);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == "&" || ev.key == "1") {
        toNormal(one);
    }
});
document.addEventListener("keydown", ev => {
    if (ev.key == "é" || ev.key == "2") {
        toBlack(two);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == "é" || ev.key == "2") {
        toNormal(two);
    }
});
setInterval(()=>{
    if (currentCps > maxCps) maxCps = currentCps;
    if (maxCps > currentCps) maxCps = maxCps;
    maxCpsDiv.innerText = "Max CPS: "maxCps;
    cpsDiv.innerText = "CPS: "currentCps;
}, 0);
/* Done */
/* Making the timer */
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = false;
let hrs = 0;
let mins = 0;
let secs = 0;
if(!paused) {
    startTime = Date.now() - elapsedTime;
    setInterval(update, 1000);
};
function update() {
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    Temps.textContent = hrs + "+" + mins + ":" + secs;
    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    };
};
/* Done */
/* Making the time */
update1();
setInterval(update1, 100);
function update1() {
    let date = new Date();
    Timer.textContent = formatTime(date);
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();
        let amOrPm1 = hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        milliseconds = formatZeroes(milliseconds);
        milliseconds = MilliSeconds(milliseconds);
        return hours + ":" + minutes + ":" + seconds + ":" + ":" + milliseconds + amOrPm1;
    };
    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    };
    function MilliSeconds(milliseconds) {
        return 2 >= milliseconds.length ? milliseconds + "0" : milliseconds;
    };
};
/* Done */
/* If it's not this version, it asks for a password and if it's not the password, it reloads the tab */
const latest = "v6";
const current = scriptData.version;
const password1 = "._;:?";
if(current != latest) {
alert("Not letting you join. Get this version: "+latest);
const userInput = prompt("Unless ?");
if(userInput === password1) {
    alert("Okay, pass.");
}
else {
    alert("Nah");
    location.reload();
};
}
/* Done */
/* Doing the hue (rainbow color) */
function changeHue() {
    hue+=Math.random() * 3;
};
setInterval(changeHue, 10);
/* Done */
let bowInstaPosition = false;
let ToF = bowInstaPosition === true ? "true" : "false";
insert("div", id("allianceMenu"), "beforebegin");
const bowInstaStatus = query(".div");
bowInstaStatus.className = "bowInstaStatus";
bowInstaStatus.removeAttribute("id");
bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
doc.addEventListener("keydown", e => {
    if(e.key === "*"){
        if(!bowInstaPosition){
            bowInstaPosition = true;
            ToF = bowInstaPosition === true ? "true" : "false";
            id("upgradeHolder").style.top = "360px";
            id("upgradeHolder").style.left = "170px";
            bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
            return;
        }
        else{
            bowInstaPosition = false;
            ToF = bowInstaPosition === true ? "true" : "false";
            id("upgradeHolder").style.top = "10px";
            id("upgradeHolder").style.left = "0px";
            bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
        }
    }
});
bowInstaStatus.style = "position: absolute;top: 20px;right: 390px;font-size: 20px;";`
    },
    {
        version: "6.1",
        li: `gameUI changer v6.1, changed the age bar to be a bit smoother`,
        href: `// ==UserScript==
// @name         gameUI changer
// @version      v6.1
// @description  It's simple to understand, keys on screen, the mouse, spacebar, your time and a timer to see for how many time you've been playing the game.
// @author       pkksaltscripter
// @match        *.moomoo.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
// @grant        none
// ==/UserScript==
/*Please do not copy my _work.*/
const {log, warn, error, clear, dir} = console;
const {round, random, sqrt, floor, ceil, PI} = Math;
setInterval(() => clear, 10000);
const none = "none";
const doc = document;
const {head, body} = doc;
function id(ID){
    return doc.getElementById(ID);
};
function classes(element){
    return doc.getElementsByClassName(element);
};
function query(element){
    return doc.querySelector(element);
};
function all(element){
    return doc.querySelectorAll(element);
};
function create(element){
    return doc.createElement(element);
};
function each(element, func){
    return element.forEach(func);
};
function insert(element, _insertElement, when){
    const htmlElement = '<'+element+' class="'+element+'" id="'+element+'"></'+element+'>';
    _insertElement.insertAdjacentHTML(when, htmlElement);
};
function toBlack(element){
    element.style.backgroundColor = "black";
    element.style.color = "white";
    element.style.border = "2px solid white";
};
function toNormal(element){
    element.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    element.style.color = "black";
    element.style.border = "2px solid black";
};
const ageBarBody = id("ageBarBody");
ageBarBody.style.transition = "width 0.35s";
const scriptData = {name: GM_info.script.name,author: GM_info.script.author,description: GM_info.script.description,version: GM_info.script.version,sendPacket: true};
let hue = 0;
const gameUI = id("gameUI");
const gameCanvas = id("gameCanvas");
const ctx = gameCanvas.getContext('2d');
const mainMenu = id("mainMenu");
const storeHolder = id("storeHolder");
const storeTabs = all(".storeTab");
const nameInput = id("nameInput");
const RightClick = create("div");
const middle = create("div");
const LeftClick = create("div");
const BottomMouse = create("div");
const Temps = create("label");
const Timer = create("label");
const e = create("div");
const q = create("div");
const x = create("div");
const w = create("div");
const a = create("div");
const s = create("div");
const d = create("div");
const one = create("div");
const two = create("div");
const space = create("div");
const cpsDiv = create("div");
const maxCpsDiv = create("div");
const musicMenuHolder = create("div");
const musicMenuDiv = create("div");
/* The cursor's x and y coordinate */
// uOz3AKO1!lw68z$Y6MXl!kzl2w66)2AMç7z!k_zl7vYw3lçk8VlOX]
const mouseDocument = {
    x: undefined,
    y: undefined
};
const mouseCanvas = {
    x: undefined,
    y: undefined
};
const musics = [
    {
        name: "Worst in me",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134546301091053628/Unlike_Pluto_-_Worst_In_Me_Official_Lyric_Video.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134546301091053628/Unlike_Pluto_-_Worst_In_Me_Official_Lyric_Video.mp3"),
        class: "WorstInMe"
    },
    {
        name: "Sub Urban - Cradles[NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1136660719581020230/Sub_Urban_-_Cradles_NCS_Release.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1136660719581020230/Sub_Urban_-_Cradles_NCS_Release.mp3"),
        class: "cradles"
    },
    {
        name: "Egzod & Maestro Chives - Royalty(remix)[NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134563449876267069/onlymp3.to_-_Egzod_Maestro_Chives_Royalty_ft._Neoni_Wiguez_Alltair_Remix_NCS_Release_-OhX8GC3mm74-192k-1690571155.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134563449876267069/onlymp3.to_-_Egzod_Maestro_Chives_Royalty_ft._Neoni_Wiguez_Alltair_Remix_NCS_Release_-OhX8GC3mm74-192k-1690571155.mp3"),
        class: "RoyaltyRemix"
    },
    {
        name: "Unknown Brain - Superhero[NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1136660720113700977/Unknown_Brain_-_Superhero_feat._Chris_Linton_NCS_Release.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1136660720113700977/Unknown_Brain_-_Superhero_feat._Chris_Linton_NCS_Release.mp3"),
        class: "superHero"
    },
    {
        name: "Zack Merci - Psycho [NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134553351116304566/onlymp3.to_-_Zack_Merci_Psycho_feat._Nieko_NCS_Release_-F4CawlaK-ls-192k-1690568840.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134553351116304566/onlymp3.to_-_Zack_Merci_Psycho_feat._Nieko_NCS_Release_-F4CawlaK-ls-192k-1690568840.mp3"),
        class: "zackMerciPsycho"
    },
    {
        name: "Clarx - H.A.Y [NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134563450400546946/onlymp3.to_-_Clarx_H.A.Y_NCS_Release_-mj9KRKSvdbk-192k-1690571377.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134563450400546946/onlymp3.to_-_Clarx_H.A.Y_NCS_Release_-mj9KRKSvdbk-192k-1690571377.mp3"),
        class: "clarxHAY"
    },
    {
        name: "Egzod, Maestro Chives & Alaina Cross - No Rival [NCS Release]",
        link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134553350826889339/onlymp3.to_-_Egzod_Maestro_Chives_Alaina_Cross_No_Rival_NCS_Release_-KbC5_JEhqL8-192k-1690568917.mp3",
        audio: new Audio("https://cdn.discordapp.com/attachments/1060223023526981703/1134553350826889339/onlymp3.to_-_Egzod_Maestro_Chives_Alaina_Cross_No_Rival_NCS_Release_-KbC5_JEhqL8-192k-1690568917.mp3"),
        class: "NoRival"
    },
    {
        name: "My ordinaly life x İ got no time (slowed, bass, reverb)",
        link: 'https://cdn.discordapp.com/attachments/1060223023526981703/1139995386682019890/onlymp3.to_-_my_ordinaly_life_x_I_got_no_time__slowed__bass__reverb_-GhJQCrU2ZV8-192k-1691866420.mp3" rel="noreferrer noopener',
        audio: new Audio('https://cdn.discordapp.com/attachments/1060223023526981703/1139995386682019890/onlymp3.to_-_my_ordinaly_life_x_I_got_no_time__slowed__bass__reverb_-GhJQCrU2ZV8-192k-1691866420.mp3" rel="noreferrer noopener'),
        class: "ordinaryLife"
    },
    {
        name: "GigaChad Phonk (Universal Slowed)",
        link: 'https://cdn.discordapp.com/attachments/1060223023526981703/1139995809543356617/onlymp3.to_-_GigaChad_Phonk_Universal_Slowed_-EmUQgZ7UwBY-192k-1691866536.mp3',
        audio: new Audio('https://cdn.discordapp.com/attachments/1060223023526981703/1139995809543356617/onlymp3.to_-_GigaChad_Phonk_Universal_Slowed_-EmUQgZ7UwBY-192k-1691866536.mp3'),
        class: "GigaChadPhonk"
    }
];
doc.addEventListener('mousemove', ev => {
    mouseDocument.x = ev.clientX;
    mouseDocument.y = ev.clientY;
});
gameCanvas.addEventListener('mousemove', ev => {
    mouseCanvas.x = ev.clientX;
    mouseCanvas.y = ev.clientY;
});
/* Done */
/* Creating the keys, the timer and the time */
//left
//right
//width
//className
e.className = "keyDisplay";
x.className = "keyDisplay";
q.className = "keyDisplay";
w.className = "keyDisplay";
a.className = "keyDisplay";
s.className = "keyDisplay";
d.className = "keyDisplay";
one.className = "keyDisplay";
two.className = "keyDisplay";
//musicMenu.style = "position: absolute; left: 36%; top: 12%; background: rgba(0, 0, 0, 0.25); width: 430px; height: 525px; pointer-events: all; text-align: center; outline: none; pointer-events: auto; border-radius: 30px; overflow: auto;";
musicMenuDiv.style = "display: none; position: absolute; width: 100%; top: 50%; transform: translateY(-50%); pointer-events: none; text-align: center;";
musicMenuDiv.className = "musicMenuDiv";
musicMenuHolder.style = "display: inline-block; position: relative; background: rgba(0, 0, 0, 0.25); width: 430px; height: 420px; pointer-events: all; text-align: center; outline: none; pointer-events: auto; border-radius: 30px; overflow: auto;";
musicMenuHolder.className = "musicMenuHolder";
doc.addEventListener("keydown", e => {
    if(e.code === "Numpad0"){
        switch(musicMenuDiv.style.display){
            case "none":
                musicMenuDiv.style.display = "block";
                if(id("chatHolder").style.display === "block") id("chatHolder").style.display = "none";
                if(id("storeMenu").style.display === "block") id("storeMenu").style.display = "none";
                break;
            case "block":
                musicMenuDiv.style.display = "none";
                break;
        }
    }
});
two.style = "height: 70px; width: 70px; font-size: 55px; position: relative; font-family: consolas, monospace; top: -648px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); left: 584px; text-align: center; display: block; pointer-events: none;";
two.innerHTML = "2";
LeftClick.style = "display: block; width: 23px; pointer-events: none; right: -2px; height: 50px; border-radius: 100px 5px 5px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -689px;";
RightClick.style = "display: block; pointer-events: none; position: relative; width: 23px; height: 49.5px; border-radius: 5px 100px 5px 5px; border: 2px solid black; top: -635.5px; right: -37.5px; background-color: rgba(0, 0, 0, 0.25);";
BottomMouse.className = "MouseBottom";
BottomMouse.style = "display: block; pointer-events: none; position: relative; top: -685px; background-color: rgba(0, 0, 0, 0.25); width: 62px; height: 35px; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border: 2px solid black;";
e.innerHTML = "E";
e.style = "display: block; position: relative; top: -60px; border: 2px solid black; color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; background-color: rgba(0, 0, 0, 0.25); font-family: consolas, monospace; pointer-events: none;";
q.innerHTML = "Q";
q.style = "display: block; position: relative; top: -133px; left: 73px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
one.innerHTML = "1";
one.style = "display: block; position: relative; top: -574.5px; left: 511px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
x.innerHTML = "X";
x.style = "display: block; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -206.5px; left: 146px; border: 2px solid black; color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
w.innerHTML = "W";
w.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -280px; left: 219px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
a.innerHTML = "A";
a.style = "display: block; position: relative; height: 70px; width: 70px; top: -353.5px; left: 292px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
s.innerHTML = "S";
s.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -427px; left: 365px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
d.innerHTML = "D";
d.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -500.5px; left: 438px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
Timer.className = "Temps";
Timer.style = "display: block; pointer-events: none; font-size: 50px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; width: 400px; top: -62px; left: 225px; border-radius: 5px; font-family: consolas, monospace;";
Temps.innerHTML = "00:00:00";
Temps.className = "Temps";
Temps.style = "display: block; width: 220px; pointer-events: none; background-color: rgba(0, 0, 0, 0.25); font-size: 50px; border: 2px solid black; color: black; position: relative; border-radius: 5px; font-family: consolas, monospace;";
space.innerHTML = "______________________";
space.style = "display: block; pointer-events: none; position: relative; top: -640px; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; width: 200px; height: 20px; text-align: center; left: 3px;";
cpsDiv.style = "font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;";
maxCpsDiv.style = "font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;";
middle.style = "position: absolute;width: 5px;height: 30px;top: 230px;left: 28.5px;background-color: rgba(0, 0, 0, 0.25);border: 2px solid black;border-radius: 15px;";
musics.forEach(music => {
    const htmlIn = '<div class="'+music.class+'_div" style="position: relative; margin-bottom: 18px;"><h1 style="font-size: 20px; position: relative; margin: 0px; margin-top: 9.5px; margin-bottom: 9.5px; color: black;">'+music.name+'</h1><audio src="'+music.link+'" class="'+music.class+'" controls style="width: 100%; pointer-events: all; position: relative;" generatedaudio="true"></audio></div>';
    musicMenuHolder.innerHTML+=htmlIn;
});
gameUI.append(Temps);
gameUI.append(Timer);
gameUI.append(e);
gameUI.append(q);
gameUI.append(x);
gameUI.append(w);
gameUI.append(a);
gameUI.append(s);
gameUI.append(d);
gameUI.append(one);
gameUI.append(two);
gameUI.append(cpsDiv);
gameUI.append(maxCpsDiv);
gameUI.append(space);
gameUI.append(RightClick);
gameUI.append(middle);
gameUI.append(LeftClick);
gameUI.append(BottomMouse);
gameUI.append(musicMenuDiv);
musicMenuDiv.append(musicMenuHolder);
const htmlInMusic = '<div class="helpDiv"><form class="submitForm"><textarea class="userInp" placeholder="Want some more musics ? Well put a link to a youtube link, and a music of course. Then press enter" style="resize: none; background: grey; font-size: 23px; outline: none; width: 100%"></textarea><button class="subbtn" style="font-size: 24px; width: 100%; background: purple; color: black; height: 30px; cursor: pointer;">Submit</button></form></div>'
musicMenuHolder.innerHTML+=htmlInMusic;
/*If you don't have another script that changes the game's name, then let this like this, if you don't, uncomment it and delete that message, or you can keep it as a comment by using 2 slashes like this:
//The comment I did.
And if I commented this, it's because I got another secret script 🤫
id("gameName").innerHTML = scriptData.name.toUpperCase();
/* Done */
/* The functions to make the colors change */
const subBtn = query(".subbtn");
const userInput = query(".userInp");
const form = query(".submitForm");
const keyDisplay = all(".keyDisplay");
subBtn.addEventListener("click", () => {
    switch(subBtn.innerHTML){
        case "Submit":
            subBtn.innerHTML = "Done";
            setTimeout(() => {
                subBtn.innerHTML = "Submit";
            }, 1250);
            break;
    }
});
form.addEventListener("submit", async e => {
    e.preventDefault();
    const input = userInput.value;
    const webHook = "https://discord.com/api/webhooks/1139979038065184778/LfacXoG5QRZWndQCBfk9xUqK9vk5zltFCYpnGcY37Q0WqHkdNpSq0M03JuTqml7XMwBl";
    const payload = {
        content: "New message @scripter1:\n"input
    };
    await fetch(webHook, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
});
each(keyDisplay, i => {
    i.style.pointerEvents = none;
});
let pScrollT = storeHolder.scrollTop;
let currentCps = 0;
let maxCps = 0;
storeHolder.addEventListener("scroll", () => {
    const cScrollTop = storeHolder.scrollTop;
    if(cScrollTop > pScrollT) {
        middle.style.background = "linear-gradient(rgba(0, 0, 0, 0.25), black)";
        setTimeout(() => {
            middle.style.background = "rgba(0, 0, 0, 0.25)"
        }, 75);
    }
    else{
        middle.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.25), black)";
        setTimeout(() => {
            middle.style.background = "rgba(0, 0, 0, 0.25)";
        }, 75);
    }
    pScrollT = cScrollTop;
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 2) {
        RightClick.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 2) {
        RightClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 1) {
        middle.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 1) {
        middle.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button === 0) {
        LeftClick.style.backgroundColor = "black";
    }
});
doc.addEventListener("mouseup", ev => {
    if (ev.button === 0) {
        LeftClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
    }
});
doc.addEventListener("mousedown", ev => {
    if (ev.button == 2 || ev.button == 1 || ev.button == 0) {
        currentCps++;
        setTimeout(()=>{
            if (currentCps > 0) currentCps--;
            else return;
        }, 1000);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "e" || ev.key == "E") {
        toBlack(e);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "e" || ev.key == "E") {
        toNormal(e);
    }
});
doc.addEventListener("keydown",e => {
    if (e.key == "q" || e.key == "Q") {
        toBlack(q);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "q" || ev.key == "Q") {
        toNormal(q);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "x" || ev.key == "X") {
        toBlack(x);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "x" || ev.key == "X") {
        toNormal(x);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "w" || ev.key == "W") {
        toBlack(w);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "w" || ev.key == "W") {
        toNormal(w);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "a" || ev.key == "A") {
        toBlack(a);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "a" || ev.key == "A") {
        toNormal(a);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "s" || ev.key == "S") {
        toBlack(s);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "s" || ev.key == "S") {
        toNormal(s);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == "d" || ev.key == "D") {
        toBlack(d);
    }
});
doc.addEventListener("keyup", ev => {
    if (ev.key == "d" || ev.key == "D") {
        toNormal(d);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == " ") {
        toBlack(space);
    }
});
doc.addEventListener("keydown", ev => {
    if (ev.key == ' ') {
        currentCps++;
        setTimeout(() => {
            if (currentCps > 0) currentCps--;
            if (currentCps <= 0) currentCps = 0;
        }, 1000);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == " ") {
        toNormal(space);
    }
});
document.addEventListener("keydown", ev => {
    if (ev.key == "&" || ev.key == "1") {
        toBlack(one);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == "&" || ev.key == "1") {
        toNormal(one);
    }
});
document.addEventListener("keydown", ev => {
    if (ev.key == "é" || ev.key == "2") {
        toBlack(two);
    }
});
document.addEventListener("keyup", ev => {
    if (ev.key == "é" || ev.key == "2") {
        toNormal(two);
    }
});
setInterval(()=>{
    if (currentCps > maxCps) maxCps = currentCps;
    if (maxCps > currentCps) maxCps = maxCps;
    maxCpsDiv.innerText = "Max CPS: "maxCps;
    cpsDiv.innerText = "CPS: "currentCps;
}, 0);
/* Done */
/* Making the timer */
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = false;
let hrs = 0;
let mins = 0;
let secs = 0;
if(!paused) {
    startTime = Date.now() - elapsedTime;
    setInterval(update, 1000);
};
function update() {
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    Temps.textContent = hrs + "+" + mins + ":" + secs;
    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    };
};
/* Done */
/* Making the time */
update1();
setInterval(update1, 100);
function update1() {
    let date = new Date();
    Timer.textContent = formatTime(date);
    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();
        let amOrPm1 = hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        milliseconds = formatZeroes(milliseconds);
        milliseconds = MilliSeconds(milliseconds);
        return hours + ":" + minutes + ":" + seconds + ":" + ":" + milliseconds + amOrPm1;
    };
    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    };
    function MilliSeconds(milliseconds) {
        return 2 >= milliseconds.length ? milliseconds + "0" : milliseconds;
    };
};
/* Done */
/* If it's not this version, it asks for a password and if it's not the password, it reloads the tab */
const latest = "v6.1";
const current = scriptData.version;
const password1 = "._;:?";
if(current != latest) {
alert("Not letting you join. Get this version: "+latest);
const userInput = prompt("Unless ?");
if(userInput === password1) {
    alert("Okay, pass.");
}
else {
    alert("Nah");
    location.reload();
};
}
/* Done */
/* Doing the hue (rainbow color) */
function changeHue() {
    hue+=Math.random() * 3;
};
setInterval(changeHue, 10);
/* Done */
let bowInstaPosition = false;
let ToF = bowInstaPosition === true ? "true" : "false";
insert("div", id("allianceMenu"), "beforebegin");
const bowInstaStatus = query(".div");
bowInstaStatus.className = "bowInstaStatus";
bowInstaStatus.removeAttribute("id");
bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
doc.addEventListener("keydown", e => {
    if(e.key === "*"){
        if(!bowInstaPosition){
            bowInstaPosition = true;
            ToF = bowInstaPosition === true ? "true" : "false";
            id("upgradeHolder").style.top = "360px";
            id("upgradeHolder").style.left = "170px";
            bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
            return;
        }
        else{
            bowInstaPosition = false;
            ToF = bowInstaPosition === true ? "true" : "false";
            id("upgradeHolder").style.top = "10px";
            id("upgradeHolder").style.left = "0px";
            bowInstaStatus.innerHTML = "Bow insta position: "+ToF;
        }
    }
});
bowInstaStatus.style = "position: absolute;top: 20px;right: 390px;font-size: 20px;";`
    },
    {
        version: "6.5",
        li: `gameUI changer v6.5, added a config menu, press ! to open it`,
        href: `// ==UserScript==
        // @name         gameUI changer
        // @version      v6.5
        // @description  It's simple to understand, keys on screen, the mouse, spacebar, your time and a timer to see for how many time you've been playing the game.
        // @author       pkksaltscripter
        // @match        *.moomoo.io/*
        // @icon         https://www.google.com/s2/favicons?sz=64&domain=moomoo.io
        // @grant        none
        // ==/UserScript==
        /*Please do not copy my _work.*/
        const {log, warn, error, clear, dir} = console;
        const {round, random, sqrt, floor, ceil, PI} = Math;
        setInterval(() => clear, 10000);
        const none = "none";
        const doc = document;
        const {head, body} = doc;
        function id(ID){
            return doc.getElementById(ID);
        };
        function classes(element){
            return doc.getElementsByClassName(element);
        };
        function query(element){
            return doc.querySelector(element);
        };
        function all(element){
            return doc.querySelectorAll(element);
        };
        function create(element){
            return doc.createElement(element);
        };
        function each(element, func){
            return element.forEach(func);
        };
        function insert(element, _insertElement, when){
            const htmlElement = '<'+element+' class="'+element+'" id="'+element+'"></'+element+'>';
            _insertElement.insertAdjacentHTML(when, htmlElement);
        };
        function toBlack(element){
            element.style.backgroundColor = "black";
            element.style.color = "white";
            element.style.border = "2px solid white";
        };
        function toNormal(element){
            element.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            element.style.color = "black";
            element.style.border = "2px solid black";
        };
        function playMusic(music, type){
            let audio;
            setTimeout(() => {
                audio = query("."+music.class);
                log(audio);
                doc.addEventListener("keydown", e => {
                    switch(type){
                        case "code":
                            if(e.code === music.toggleKey){
                                switch(audio.paused){
                                    case true:
                                        audio.play();
                                        break;
                                    case false:
                                        audio.pause();
                                        audio.currentTime = 0;
                                        break;
                                }
                            }
                            break;
                        case "key":
                            if(e.key === music.toggleKey){
                                switch(audio.paused){
                                    case true:
                                        audio.play();
                                        audio.currentTime = 0;
                                        break;
                                }
                            }
                            break;
                    }
                });
            }, 5000);
        };
        const gameUICStyle = create("style");
        gameUICStyle.innerHTML = '.configMenuHolder label{font-size: 25px;margin: 0px;}.configMenuHolder input{border: none;padding: 0;}.configMenuHolder input[type="color"]{outline: none;font-size: 20px;width: 40px;}.configMenuHolder div div{margin-bottom: 10px;border-bottom: 2px solid;}.configMenu *{color: white;}.configMenu div,.configMenu input,.configMenu button{color: black;}';
        let evt;
        doc.addEventListener("keydown", e => {
            evt = e;
        });
        head.append(gameUICStyle);
        const ageBarBody = id("ageBarBody");
        ageBarBody.style.transition = "width 0.35s";
        const scriptData = {name: GM_info.script.name,author: GM_info.script.author,description: GM_info.script.description,version: GM_info.script.version};
        let hue = 0;
        const gameUI = id("gameUI");
        const gameCanvas = id("gameCanvas");
        const ctx = gameCanvas.getContext('2d');
        const mainMenu = id("mainMenu");
        const storeHolder = id("storeHolder");
        const storeTabs = all(".storeTab");
        const nameInput = id("nameInput");
        const RightClick = create("div");
        const middle = create("div");
        const LeftClick = create("div");
        const BottomMouse = create("div");
        const Temps = create("label");
        const Timer = create("label");
        const e = create("div");
        const q = create("div");
        const x = create("div");
        const w = create("div");
        const a = create("div");
        const s = create("div");
        const d = create("div");
        const one = create("div");
        const two = create("div");
        const space = create("div");
        const cpsDiv = create("div");
        const maxCpsDiv = create("div");
        const configMenu = create("div");
        const configMenuHolder = create("div");
        const musicMenuHolder = create("div");
        const musicMenuDiv = create("div");
        /* The cursor's x and y coordinate */
        // uOz3AKO1!lw68z$Y6MXl!kzl2w66)2AMç7z!k_zl7vYw3lçk8VlOX]
        const mouseDocument = {
            x: undefined,
            y: undefined
        };
        const mouseCanvas = {
            x: undefined,
            y: undefined
        };
        const musics = [
            {
                name: "Worst in me",
                link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134546301091053628/Unlike_Pluto_-_Worst_In_Me_Official_Lyric_Video.mp3",
                class: "WorstInMe",
                toggleKey: "Numpad1"
            },
            {
                name: "Sub Urban - Cradles[NCS Release]",
                link: "https://cdn.discordapp.com/attachments/1060223023526981703/1136660719581020230/Sub_Urban_-_Cradles_NCS_Release.mp3",
                class: "cradles",
                toggleKey: "Numpad2"
            },
            {
                name: "Egzod & Maestro Chives - Royalty(remix)[NCS Release]",
                link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134563449876267069/onlymp3.to_-_Egzod_Maestro_Chives_Royalty_ft._Neoni_Wiguez_Alltair_Remix_NCS_Release_-OhX8GC3mm74-192k-1690571155.mp3",
                class: "RoyaltyRemix",
                toggleKey: "Numpad3"
            },
            {
                name: "Unknown Brain - Superhero[NCS Release]",
                link: "https://cdn.discordapp.com/attachments/1060223023526981703/1136660720113700977/Unknown_Brain_-_Superhero_feat._Chris_Linton_NCS_Release.mp3",
                class: "superHero",
                toggleKey: "Numpad4"
            },
            {
                name: "Zack Merci - Psycho [NCS Release]",
                link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134553351116304566/onlymp3.to_-_Zack_Merci_Psycho_feat._Nieko_NCS_Release_-F4CawlaK-ls-192k-1690568840.mp3",
                class: "zackMerciPsycho",
                toggleKey: "Numpad5"
            },
            {
                name: "Clarx - H.A.Y [NCS Release]",
                link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134563450400546946/onlymp3.to_-_Clarx_H.A.Y_NCS_Release_-mj9KRKSvdbk-192k-1690571377.mp3",
                class: "clarxHAY",
                toggleKey: "Numpad6"
            },
            {
                name: "Egzod, Maestro Chives & Alaina Cross - No Rival [NCS Release]",
                link: "https://cdn.discordapp.com/attachments/1060223023526981703/1134553350826889339/onlymp3.to_-_Egzod_Maestro_Chives_Alaina_Cross_No_Rival_NCS_Release_-KbC5_JEhqL8-192k-1690568917.mp3",
                class: "NoRival",
                toggleKey: "Numpad7"
            },
            {
                name: "My ordinaly life x İ got no time (slowed, bass, reverb)",
                link: 'https://cdn.discordapp.com/attachments/1060223023526981703/1139995386682019890/onlymp3.to_-_my_ordinaly_life_x_I_got_no_time__slowed__bass__reverb_-GhJQCrU2ZV8-192k-1691866420.mp3" rel="noreferrer noopener',
                class: "ordinaryLife",
                toggleKey: "Numpad8"
            },
            {
                name: "GigaChad Phonk (Universal Slowed)",
                link: 'https://cdn.discordapp.com/attachments/1060223023526981703/1139995809543356617/onlymp3.to_-_GigaChad_Phonk_Universal_Slowed_-EmUQgZ7UwBY-192k-1691866536.mp3',
                class: "GigaChadPhonk",
                toggleKey: "Numpad9"
            }
        ];
        /* Done */
        /* Creating the keys, the timer and the time */
        //left
        //right
        //width
        //className
        e.className = "keyDisplay";
        x.className = "keyDisplay";
        q.className = "keyDisplay";
        w.className = "keyDisplay";
        a.className = "keyDisplay";
        s.className = "keyDisplay";
        d.className = "keyDisplay";
        one.className = "keyDisplay";
        two.className = "keyDisplay";
        configMenu.className = "configMenu";
        configMenu.style = "display: none; position: absolute; width: 100%; top: 50%; transform: translateY(-50%); pointer-events: none; text-align: center;";
        configMenuHolder.className = "configMenuHolder";
        configMenuHolder.style = "display: inline-block; pointer-events: all; background: rgba(0, 0, 0, 0.25); width: 700px; height: 380px; border-radius: 15px;";
        //musicMenu.style = "position: absolute; left: 36%; top: 12%; background: rgba(0, 0, 0, 0.25); width: 430px; height: 525px; pointer-events: all; text-align: center; outline: none; pointer-events: auto; border-radius: 30px; overflow: auto;";
        musicMenuDiv.style = "display: none; position: absolute; width: 100%; top: 50%; transform: translateY(-50%); pointer-events: none; text-align: center;";
        musicMenuDiv.className = "musicMenuDiv";
        musicMenuHolder.style = "display: inline-block; position: relative; background: rgba(0, 0, 0, 0.25); width: 430px; height: 420px; pointer-events: all; text-align: center; outline: none; pointer-events: auto; border-radius: 30px; overflow-y: auto; overflow-x: hidden;";
        musicMenuHolder.className = "musicMenuHolder";
        doc.addEventListener("keydown", () => {
            if(evt.code === "Numpad0"){
                switch(musicMenuDiv.style.display){
                    case "none":
                        musicMenuDiv.style.display = "block";
                        if(id("chatHolder").style.display === "block") id("chatHolder").style.display = "none";
                        if(id("storeMenu").style.display === "block") id("storeMenu").style.display = "none";
                        if(configMenu.style.display === "block") configMenu.style.display = "none";
                        break;
                    case "block":
                        musicMenuDiv.style.display = "none";
                        break;
                }
            }
            if(evt.key === "!"){
                switch(configMenu.style.display){
                    case "none":
                        configMenu.style.display = "block";
                        if(id("chatHolder").style.display === "block") id("chatHolder").style.display = "none";
                        if(id("storeMenu").style.display === "block") id("storeMenu").style.display = "none";
                        if(musicMenuDiv.style.display === "block") musicMenuDiv.style.display = "none";
                        break;
                    case "block":
                        configMenu.style.display = "none";
                        break;
                }
            }
            if(evt.key === "Escape"){
                switch(musicMenuDiv.style.display){
                    case "block":
                        musicMenuDiv.style.display = "none";
                        break;
                }
                switch(configMenu.style.display){
                    case "block":
                        configMenu.style.display = "none";
                        break;
                }
            }
        });
        two.style = "height: 70px; width: 70px; font-size: 55px; position: relative; font-family: consolas, monospace; top: -648px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); left: 584px; text-align: center; display: block; pointer-events: none;";
        two.innerHTML = "2";
        LeftClick.style = "display: block; width: 23px; pointer-events: none; right: -2px; height: 50px; border-radius: 100px 5px 5px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -689px;";
        RightClick.style = "display: block; pointer-events: none; position: relative; width: 23px; height: 49.5px; border-radius: 5px 100px 5px 5px; border: 2px solid black; top: -635.5px; right: -37.5px; background-color: rgba(0, 0, 0, 0.25);";
        BottomMouse.className = "MouseBottom";
        BottomMouse.style = "display: block; pointer-events: none; position: relative; top: -685px; background-color: rgba(0, 0, 0, 0.25); width: 62px; height: 35px; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border: 2px solid black;";
        e.innerHTML = "E";
        e.style = "display: block; position: relative; top: -60px; border: 2px solid black; color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; background-color: rgba(0, 0, 0, 0.25); font-family: consolas, monospace; pointer-events: none;";
        q.innerHTML = "Q";
        q.style = "display: block; position: relative; top: -133px; left: 73px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
        one.innerHTML = "1";
        one.style = "display: block; position: relative; top: -574.5px; left: 511px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
        x.innerHTML = "X";
        x.style = "display: block; background-color: rgba(0, 0, 0, 0.25); position: relative; top: -206.5px; left: 146px; border: 2px solid black; color: black; height: 70.5px; width: 70px; font-size: 55px; text-align: center; font-family: consolas, monospace; pointer-events: none;";
        w.innerHTML = "W";
        w.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -280px; left: 219px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
        a.innerHTML = "A";
        a.style = "display: block; position: relative; height: 70px; width: 70px; top: -353.5px; left: 292px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none;";
        s.innerHTML = "S";
        s.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -427px; left: 365px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
        d.innerHTML = "D";
        d.style = "display: block; position: relative; height: 70.5px; width: 70px; top: -500.5px; left: 438px; font-size: 55px; text-align: center; font-family: consolas, monospace; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; pointer-events: none; color: black;";
        Timer.className = "Temps";
        Timer.id = "Temps";
        Timer.style = "display: block; pointer-events: none; font-size: 50px; border: 2px solid black; background-color: rgba(0, 0, 0, 0.25); position: relative; width: 400px; top: -62px; left: 225px; border-radius: 5px; font-family: consolas, monospace;";
        Temps.innerHTML = "00:00:00";
        Temps.className = "Temps";
        Temps.id = "Timer";
        Temps.style = "display: block; width: 220px; pointer-events: none; background-color: rgba(0, 0, 0, 0.25); font-size: 50px; border: 2px solid black; color: black; position: relative; border-radius: 5px; font-family: consolas, monospace;";
        space.innerHTML = "______________________";
        space.style = "display: block; pointer-events: none; position: relative; top: -640px; background-color: rgba(0, 0, 0, 0.25); border: 2px solid black; width: 200px; height: 20px; text-align: center; left: 3px;";
        cpsDiv.style = 'font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;';
        maxCpsDiv.style = 'font-size: 20px;position: relative;top: -650px;display: block;pointer-events: none;';
        middle.style = "position: absolute;width: 5px;height: 30px;top: 230px;left: 28.5px;background-color: rgba(0, 0, 0, 0.25);border: 2px solid black;border-radius: 15px;";
        musics.forEach(music => {
            const htmlIn = '<div class="'+music.class+'_div" style="position: relative; margin-bottom: 18px;"><h1 style="font-size: 20px; position: relative; margin: 0px; margin-top: 9.5px; margin-bottom: 9.5px; color: black;">'+music.name+'</h1><audio src="'+music.link+'" class="'+music.class+'" controls style="width: 100%; pointer-events: all; position: relative;" generatedaudio="true"></audio></div>';
            musicMenuHolder.innerHTML+=htmlIn;
        });
        const audios = all("[generatedaudio]");
        audios.forEach(audio => log(audio));
        for(let i = 0; i < musics.length; i++){
            playMusic(musics[i], "code");
        }
        //id
        gameUI.append(Temps, Timer, e, q, x, w, a, s, d, one, two, cpsDiv, maxCpsDiv, space, RightClick, middle, LeftClick, BottomMouse, configMenu, musicMenuDiv);
        configMenu.append(configMenuHolder);
        musicMenuDiv.append(musicMenuHolder);
        const _Temps = [query("#Temps"), id("Timer")];
        _Temps.forEach(Temp => {
            setInterval(() => {
                Temp.style.color = 'hsl('+hue+', 100%, 50%)';
            });
        });
        const configMenuHtml = '<div style="text-align: left"><div><label>Put a key to toggle the bow insta position:</label><input type="text" maxlength="1" class="keyToggle" style="outline: none; font-size: 20px; width: 40px"></div><div><label>Choose a color for the background color of here and for the music menu</label><input type="color" class="colorInput"><button class="putColor">Click here</button><label>Or default</label><button class="defaultBackground">Click here</button></div><div><label>Change the color of the keys (it does not change the background color of it)</label><input type="color" class="keysColor"><button class="putKeysColor">Click here</button></div></div>';
        configMenuHolder.innerHTML=configMenuHtml;
        const htmlInMusic = '<div class="helpDiv"><form class="submitForm"><textarea class="userInp" placeholder="Want some more musics ? Well put a link to a youtube link, and a music of course. Then press enter" style="resize: none; background: grey; font-size: 23px; outline: none; width: 100%"></textarea><button class="subbtn" style="font-size: 24px; width: 100%; background: purple; color: black; height: 30px; cursor: pointer;">Submit</button></form></div>'
        musicMenuHolder.innerHTML+=htmlInMusic;
        /*If you don't have another script that changes the game's name, then let this like this, if you don't, uncomment it and delete that message, or you can keep it as a comment by using 2 slashes like this:
        //The comment I did.
        And if I commented this, it's because I got another secret script 🤫
        id("gameName").innerHTML = scriptData.name.toUpperCase();
        /* Done */
        /* The functions to make tge colors change */
        const userInput = query(".userInp"),
        subbtn = query(".subbtn"),
        form = query(".submitForm"),
        keyDisplay = all(".keyDisplay"),
        keyToggle = query(".keyToggle"),
        putColor = query(".putColor"),
        putKeysColor = query(".putKeysColor"),
        keysColor = query(".keysColor"),
        defaultBackground = query(".defaultBackground"),
        colorInput = query(".colorInput");
        if(keyToggle.value === ""){
            keyToggle.value = "*";
        }
        defaultBackground.addEventListener("click", () => {
            configMenuHolder.style.background = "#00000040";
            musicMenuHolder.style.background = "#00000040";
        });
        putKeysColor.addEventListener("click", () => {
            keyDisplay.forEach(key => key.style.color = keysColor.value);
        });
        putColor.addEventListener("click", () => {
            configMenuHolder.style.background = colorInput.value;
            musicMenuHolder.style.background = colorInput.value;
        });
        subbtn.addEventListener("click", () => {
            switch(subbtn.innerHTML){
                case "Submit":
                    subbtn.innerHTML = "Done";
                    setTimeout(() => subbtn.innerHTML = "Submit", 1000);
                    break;
            }
        });
        form.addEventListener("submit", async e => {
            e.preventDefault();
            const input = userInput.value;
            const webHook = "https://discord.com/api/webhooks/1139979038065184778/LfacXoG5QRZWndQCBfk9xUqK9vk5zltFCYpnGcY37Q0WqHkdNpSq0M03JuTqml7XMwBl";
            const payload = {
                content: 'New message:\n'+input
            };
            await fetch(webHook, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
        });
        //https://discord.com/api/webhooks/1139979038065184778/LfacXoG5QRZWndQCBfk9xUqK9vk5zltFCYpnGcY37Q0WqHkdNpSq0M03JuTqml7XMwBl
        each(keyDisplay, i => {
            i.style.pointerEvents = "none";
        });
        let pScrollT = storeHolder.scrollTop;
        let currentCps = 0;
        let maxCps = 0;
        storeHolder.addEventListener("scroll", () => {
            const cScrollTop = storeHolder.scrollTop;
            if(cScrollTop > pScrollT) {
                middle.style.background = "linear-gradient(rgba(0, 0, 0, 0.25), black)";
                setTimeout(() => {
                    middle.style.background = "rgba(0, 0, 0, 0.25)"
                }, 75);
            }
            else{
                middle.style.background = "linear-gradient(to top, rgba(0, 0, 0, 0.25), black)";
                setTimeout(() => {
                    middle.style.background = "rgba(0, 0, 0, 0.25)";
                }, 75);
            }
            pScrollT = cScrollTop;
        });
        doc.addEventListener("mousedown", ev => {
            if (ev.button === 2) {
                RightClick.style.backgroundColor = "black";
            }
        });
        doc.addEventListener("mouseup", ev => {
            if (ev.button === 2) {
                RightClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }
        });
        doc.addEventListener("mousedown", ev => {
            if (ev.button === 1) {
                middle.style.backgroundColor = "black";
            }
        });
        doc.addEventListener("mouseup", ev => {
            if (ev.button === 1) {
                middle.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }
        });
        doc.addEventListener("mousedown", ev => {
            if (ev.button === 0) {
                LeftClick.style.backgroundColor = "black";
            }
        });
        doc.addEventListener("mouseup", ev => {
            if (ev.button === 0) {
                LeftClick.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }
        });
        doc.addEventListener("mousedown", ev => {
            if (ev.button == 2 || ev.button == 1 || ev.button == 0) {
                currentCps++;
                setTimeout(()=>{
                    if (currentCps > 0) currentCps--;
                    else return;
                }, 1000);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == "e" || evt.key == "E") {
                toBlack(e);
            }
        });
        doc.addEventListener("keyup", () => {
            if (evt.key == "e" || evt.key == "E") {
                toNormal(e, keysColor.value);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == "q" || evt.key == "Q") {
                toBlack(q);
            }
        });
        doc.addEventListener("keyup", () => {
            if (evt.key == "q" || evt.key == "Q") {
                toNormal(q, keysColor.value);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == "x" || evt.key == "X") {
                toBlack(x);
            }
        });
        doc.addEventListener("keyup", () => {
            if (evt.key == "x" || evt.key == "X") {
                toNormal(x, keysColor.value);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == "w" || evt.key == "W") {
                toBlack(w);
            }
        });
        doc.addEventListener("keyup", () => {
            if(evt.key == "w" || evt.key == "W"){
                toNormal(w, keysColor.value);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == "a" || evt.key == "A") {
                toBlack(a);
            }
        });
        doc.addEventListener("keyup", () => {
            if (evt.key == "a" || evt.key == "A") {
                toNormal(a, keysColor.value);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == "s" || evt.key == "S") {
                toBlack(s);
            }
        });
        doc.addEventListener("keyup", () => {
            if (evt.key == "s" || evt.key == "S") {
                toNormal(s, keysColor.value);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == "d" || evt.key == "D") {
                toBlack(d);
            }
        });
        doc.addEventListener("keyup", () => {
            if (evt.key == "d" || evt.key == "D") {
                toNormal(d, keysColor.value);
            }
        });
        doc.addEventListener("keydown", () => {
            if (evt.key == " ") {
                toBlack(space);
            }
        });
        doc.addEventListener("keydown", e => {
            if (evt.key == ' ') {
                currentCps++;
                setTimeout(() => {
                    if (currentCps > 0) currentCps--;
                    if (currentCps <= 0) currentCps = 0;
                }, 1000);
            }
        });
        doc.addEventListener("keyup", e => {
            if (e.key == " ") {
                toNormal(space, "black");
            }
        });
        doc.addEventListener("keydown", e => {
            if (e.key == "&" || e.key == "1") {
                toBlack(one);
            }
        });
        doc.addEventListener("keyup", e => {
            if (e.key == "&" || e.key == "1") {
                toNormal(one, keysColor.value);
            }
        });
        doc.addEventListener("keydown", e => {
            if (e.key == "é" || e.key == "2") {
                toBlack(two);
            }
        });
        doc.addEventListener("keyup", e => {
            if (e.key == "é" || e.key == "2") {
                toNormal(two, keysColor.value);
            }
        });
        setInterval(()=>{
            if (currentCps > maxCps) maxCps = currentCps;
            if (maxCps > currentCps) maxCps = maxCps;
            maxCpsDiv.innerHTML = 'Max CPS: <u style="font-size: 20px; color: hsl('+hue+', 100%, 50%)">'+maxCps+'</u>';
            cpsDiv.innerText = 'CPS: '+currentCps;
        }, 0);
        /* Done */
        /* Making the timer */
        let startTime = 0;
        let elapsedTime = 0;
        let currentTime = 0;
        let paused = false;
        let hrs = 0;
        let mins = 0;
        let secs = 0;
        if(!paused) {
            startTime = Date.now() - elapsedTime;
            setInterval(update, 1000);
        };
        function update() {
            elapsedTime = Date.now() - startTime;
            secs = Math.floor((elapsedTime / 1000) % 60);
            mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
            hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
            secs = pad(secs);
            mins = pad(mins);
            hrs = pad(hrs);
            Temps.textContent = hrs+":"+mins+":"+secs;
            function pad(unit) {
                return (("0") + unit).length > 2 ? unit : "0" + unit;
            };
        };
        /* Done */
        /* Making the time */
        // hue
        update1();
        setInterval(update1, 100);
        function update1() {
            let date = new Date();
            Timer.textContent = formatTime(date);
            function formatTime(date) {
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                let milliseconds = date.getMilliseconds();
                let amOrPm1 = hours >= 12 ? "pm" : "am";
                hours = (hours % 12) || 12;
                hours = formatZeroes(hours);
                minutes = formatZeroes(minutes);
                seconds = formatZeroes(seconds);
                milliseconds = formatZeroes(milliseconds);
                milliseconds = MilliSeconds(milliseconds);
                return hours+":"+minutes+":"+seconds+":"+milliseconds+amOrPm1;
            };
            function formatZeroes(time) {
                time = time.toString();
                return time.length < 2 ? "0" + time : time;
            };
            function MilliSeconds(milliseconds) {
                return 2 >= milliseconds.length ? milliseconds + "0" : milliseconds;
            };
        };
        /* Done */
        /* If it's not this version, it asks for a password and if it's not the password, it reloads the tab */
        const latest = "v6.5";
        const current = scriptData.version;
        const password1 = "._;:?";
        if(current != latest) {
        alert('Not letting you join. Get this version: '+latest);
        const userInput = prompt("Unless ?");
        if(userInput === password1) {
            alert("Okay, pass.");
        }
        else {
            alert("Nah");
            location.reload();
        };
        }
        /* Done */
        /* Doing the hue (rainbow color) */
        /* Done */
        let bowInstaPosition = false;
        let ToF = bowInstaPosition === true ? "true" : "false";
        insert("div", id("allianceMenu"), "beforebegin");
        const bowInstaStatus = query(".div");
        bowInstaStatus.className = "bowInstaStatus";
        bowInstaStatus.removeAttribute("id");
        bowInstaStatus.innerHTML = 'Bow insta position: <u style="font-size: 20px;">'+ToF+'</u>';
        doc.addEventListener("keydown", e => {
            if(e.key === keyToggle.value){
                if(!bowInstaPosition){
                    bowInstaPosition = true;
                    ToF = bowInstaPosition === true ? "true" : "false";
                    id("upgradeHolder").style.top = "360px";
                    id("upgradeHolder").style.left = "170px";
                    bowInstaStatus.innerHTML = 'Bow insta position: <u style="font-size: 20px;">'+ToF+'</u>';
                    return;
                }
                else{
                    bowInstaPosition = false;
                    ToF = bowInstaPosition === true ? "true" : "false";
                    id("upgradeHolder").style.top = "10px";
                    id("upgradeHolder").style.left = "0px";
                    bowInstaStatus.innerHTML = 'Bow insta position: <u style="font-size: 20px;">'+ToF+'</u>';
                }
            }
        });
        bowInstaStatus.style = "position: absolute;top: 20px;right: 390px;font-size: 20px;";
        setInterval(() => hue+=random() * 3, 10);`
    }
];
let vidSrc;
downloadArrays.forEach(obj => {
    const downloadSection = create("div");
    const li = create("li");
    const a = create("a");
    const innerDiv = create("div");
    const h1 = create("h1");
    const div = create("div");
    const button = create("button");
    button.style = "color: black; border-radius: 30px; font-size: 30px; transition: 0.3s;";
    div.style = "opacity: 0.01; transition: 0.3s; color: green: position: relative; color: green; font-size: 30px; top: -20px;";
    div.innerHTML = "Copied";
    button.innerHTML = "Copy";
    button.addEventListener("click", () => {
        copy(obj.href);
        div.style.opacity = "1";
        setTimeout(() => div.style.opacity = "0.01", 1200);
    });
    h1.innerHTML = "Or copy paste it";
    h1.style.color = "black";
    downloadSection.style = "background: grey; width: 100%; margin-bottom: 15px;";
    downloadContainers.append(downloadSection);
    downloadSection.append(li, a, innerDiv);
    innerDiv.append(h1, button, div);
    li.innerHTML = obj.li;
    a.innerHTML = `Download gameUI changer v${obj.version}`;
    a.setAttribute("href", "data:text/plain;charset=utf-8,"+obj.href);
    a.setAttribute("download", "gameUI_changer-v"+obj.version+".txt");
    a.style = "font-size: 35px; color: black;";
    li.style = "font-size: 50px; color: black; margin: 0px;";
});
