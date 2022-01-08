
//reading the msg
chrome.runtime.onMessage.addListener(gotMsg);
let pen = 0;
let previous=false;

//p5 instance
const sketch = p => {
    p.setup = () => {
        var c = p.createCanvas(p.windowWidth, p.windowHeight);
        c.position(0, 0);
        p.clear();
    }

    p.draw = () => {
        p.stroke(0);
        p.strokeWeight(4);
        if (p.mouseIsPressed) {
            p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
    }
}

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

//grid CSS
var Body = document.getElementsByTagName('body')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './Extensions/Grid/style.css';


function gotMsg(msg, sender, sendResponse) {

    const {a,b,c,d,e}=msg;
    console.log(a,b,c,d,e);

    //draggable**********
    $("div").draggable({ disabled: !msg.drag });
    // if (msg.drag === true) {
    //     document.body.style.backgroundColor = "pink";
    // }
    // else if (msg.drag === false) {
    //     document.body.style.backgroundColor = "white";
    // }

    //sketch**********
    if (msg.sketch == false) {
        x = 0, y = 0;
        setTimeout(windowResized, 100);
    }
    else {
        x = p5.windowWidth, y = p5.windowHeight;
        setTimeout(windowResized, 100);
    }

    //grid**********
    if (msg.grid == true) {
        previous=true;
        document.body.style.backgroundSize = `calc(100vw/${msg.col}) calc(100vh/${msg.row}),calc(100vw/${msg.col}) calc(100vh/${msg.row}), 10px 10px, 10px 10px`
        Body.appendChild(link);
    }
    else if(previous==true) {
        previous=false;
        Body.removeChild(link);
    }

    return true;
}


//alan-btn
var head = document.getElementsByTagName('body')[0];
var div = document.createElement('div');
div.classList.add("alan-btn");
head.appendChild(div);