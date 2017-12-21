window.onload = function() {
    let content = document.createElement("div"),
        para = document.createElement("p"),
        body = document.getElementsByTagName("body")[0];

    para.innerHTML = "Hello, World!",
    body.appendChild(content.appendChild(para));
}
