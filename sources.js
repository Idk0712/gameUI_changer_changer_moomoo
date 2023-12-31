const doc = document,
{head, body} = doc,
{log, warn, error, clear} = console,
{sqrt, floor, ceil, round, random, PI} = Math,
{parse, stringify} = JSON;
function id(element){
    return doc.getElementById(element);
};
function _class(element){
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
function remove(element){
    element.remove();
};
function copy(element){
    const textarea = create("textarea");
    body.append(textarea);
    textarea.style.color = "black";
    textarea.value = element;
    textarea.select();
    doc.execCommand("copy");
    remove(textarea);
};
function each(element, func){
    element.forEach(func);
};
function html(element, htmlIn){
    element.innerHTML = htmlIn;
};
function insert(element, insertElement, when){
    const htmlElement = `
    <${element} class="${element}" id="${element}"></${element}>
    `;
    insertElement.insertAdjacentHTML(when, htmlElement);
};
