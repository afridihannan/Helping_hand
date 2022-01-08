
let msg = {
    drag: false,
    sketch: false,
    grid:false,
    row: 1,
    col: 1
}

//port connection
var port = chrome.extension.connect({
    name: "connectionn"
});

//sending msg through port
document.getElementById("draggable").onclick = () => {
    msg.sketch = false;
    msg.drag = !msg.drag;
    port.postMessage(msg);
}
document.getElementById("sketch").onclick = () => {
    msg.drag = false;
    msg.sketch = !msg.sketch;
    port.postMessage(msg);
}
document.getElementById('gr').onclick = () => {
    msg.grid = !msg.grid;
    var row = document.getElementById("row").value;
    var col = document.getElementById("col").value;
    // if(row!=""||col!=""){
    //     msg.row=row;
    //     msg.col=col;
    // }
    port.postMessage(msg);
}
document.body.style.width = "1000px";
document.body.style.height = "1000px";