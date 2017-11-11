window.onload = function() {
    var content = document.createElement("div");
    var para = document.createElement("p");
    para.innerHTML = "Hello, World!";
    content.append(para);
    body = document.getElementsByTagName("body")[0];
    body.append(content);

}
