
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

document.getElementById("show-gr").onclick = () => {
    document.getElementById("inputs").style.display="flex"
}

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
    msg.grid = true;
    var row = document.getElementById("row").value;
    var col = document.getElementById("col").value;
    if(row!=""||col!=""){
        msg.row=row;
        msg.col=col;
    }
    document.getElementById("inputs").style.display="none"
    port.postMessage(msg);
}

document.getElementById('remove-gr').onclick = () => {
    msg.grid = false;
    document.getElementById("inputs").style.display="none"
    port.postMessage(msg);
}