// function startGame() {
//     myGameArea.start();
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 360;
//         this.canvas.height = 360;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }
// }

// let angry1Ele = document.getElementById('angry1');
// let angry2Ele = document.getElementById('angry2');
// let angry3Ele = document.getElementById('angry3');
// let happy1Ele = document.getElementById('happy1');
// let happy2Ele = document.getElementById('happy2');
// let happy3Ele = document.getElementById('happy3');

let selectedEmoji;
let map = new Map();

document.onclick = userClicked;
    function userClicked() {
    let x = event.clientX;
    let y = event.clientY;
    // alert(x);alert(y);
    if(30 < y && y < 60) {
        if(45 < x && x < 70) {
            setPositionForSelectedEmoji(10, 10, 1);
        } else if (215 < x && x < 245) {
            setPositionForSelectedEmoji(190, 10, 2);
        } else if (385 < x && x < 415) {
            setPositionForSelectedEmoji(360, 10, 3);
        }
    } else if (200 < y && y < 230) {
        if(45 < x && x < 70) {
            setPositionForSelectedEmoji(10, 175, 4);
        } else if (215 < x && x < 245) {
            setPositionForSelectedEmoji(190, 175, 5);
        } else if (385 < x && x < 415) {
            setPositionForSelectedEmoji(360, 175, 6);
        }
    } else if (375 < y && y < 405) {
        if(45 < x && x < 70) {
            setPositionForSelectedEmoji(10, 350, 7);
        } else if (215 < x && x < 245) {
            setPositionForSelectedEmoji(190, 350, 8);
        } else if (385 < x && x < 415) {
            setPositionForSelectedEmoji(360, 350, 9);
        }
    }
}

function reset() {
    document.getElementById('angry1').style.fontSize = '80px';
    document.getElementById('angry2').style.fontSize = '80px';
    document.getElementById('angry3').style.fontSize = '80px';
    document.getElementById('happy1').style.fontSize = '80px';
    document.getElementById('happy2').style.fontSize = '80px';
    document.getElementById('happy3').style.fontSize = '80px';
    selectedEmoji = null;
}

function setPositionForSelectedEmoji(x, y, position) {
    let selectedEmojiEle = document.getElementById(selectedEmoji);
    selectedEmojiEle.style.position = 'absolute';
    selectedEmojiEle.style.top = y + 'px';
    selectedEmojiEle.style.left = x + 'px';
    buildPositionMap(position);
    checkResult();
}

function buildPositionMap(position) {
    map.set(selectedEmoji, position);
}

function checkResult() {
    let angryArray = [];
    let happyArray = [];
    for(let entry of map) {
        if(entry[0].includes('angry')) {
            angryArray.push(entry[1]); 
        } else if(entry[0].includes('happy')) {
            happyArray.push(entry[1]); 
        }
    }
    if(angryArray.length === 3 || happyArray.length === 3) {
        let Angryresult = checkArray(angryArray);
        let Happyresult = checkArray(happyArray);
        if(Angryresult === 'winner') {
            alert('Angry player wins');
        } else if(Happyresult === 'winner') {
            alert('Happy player wins');
        }
    }
}

function checkArray(arr) {
    arr.sort();
    if(arr[0] === 1){
        if((arr[1] === 2 && arr[2] === 3) || (arr[1] === 4 && arr[2] === 7) || (arr[1] === 5 && arr[2] === 9)){
            return 'winner';
        }
    } else if(arr[0] === 2){
        if(arr[1] === 5 && arr[2] === 8){
            return 'winner';
        }
    } else if(arr[0] === 3){
        if((arr[1] === 5 && arr[2] === 7) || (arr[1] === 6 && arr[2] === 9)){
            return 'winner';
        }
    } else if(arr[0] === 4){
        if(arr[1] === 5 && arr[2] === 6){
            return 'winner';
        }
    } else if(arr[0] === 7){
        if(arr[1] === 8 && arr[2] === 9){
            return 'winner';
        }
    }
    return null;
}

function setStyleAndPositionAngry1() {
    reset();
    let angry1Ele = document.getElementById('angry1');
    angry1Ele.style.fontSize = '100px';
    selectedEmoji = 'angry1';
}

function setStyleAndPositionAngry2() {
    reset();
    let angry2Ele = document.getElementById('angry2');
    angry2Ele.style.fontSize = '100px';
    selectedEmoji = 'angry2';
}

function setStyleAndPositionAngry3() {
    reset();
    let angry3Ele = document.getElementById('angry3');
    angry3Ele.style.fontSize = '100px';
    selectedEmoji = 'angry3';
}

function setStyleAndPositionHappy1() {
    reset();
    let happy1Ele = document.getElementById('happy1');
    happy1Ele.style.fontSize = '100px';
    selectedEmoji = 'happy1';
}

function setStyleAndPositionHappy2() {
    reset();
    let happy2Ele = document.getElementById('happy2');
    happy2Ele.style.fontSize = '100px';
    selectedEmoji = 'happy2';
}

function setStyleAndPositionHappy3() {
    reset();
    let happy3Ele = document.getElementById('happy3');
    happy3Ele.style.fontSize = '100px';
    selectedEmoji = 'happy3';
}