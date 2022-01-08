
//reading the msg
chrome.runtime.onMessage.addListener(gotMsg);


var p5 = new p5(sketch);

//canvas size
let x = 0, y = 0;
function windowResized() {
    p5.resizeCanvas(x, y);
}
if (pen == 0) {
    x = 0, y = 0;
    setTimeout(windowResized, 100);
}


function gotMsg(msg, sender, sendResponse) {

    //draggable**********
    $("div").draggable({ disabled: !msg.drag });
    // if (msg.drag === true) {
    //     document.body.style.backgroundColor = "pink";
    // }
    // else if (msg.drag === false) {
    //     document.body.style.backgroundColor = "white";
    // }

    //sketch**********
  

    return true;
}
