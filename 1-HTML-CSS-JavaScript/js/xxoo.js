function XO(str) {
    let oCount = 0;
    let xCount = 0;
    let status = false;
    let message = ""

    for (let i = 0; i< str.length; i++){
        if (str.charAt(i).toLowerCase() === 'o'){
            ++oCount;
        }else if (str.charAt(i).toLowerCase() === "x"){
            ++xCount;
        }
    }
    if (xCount === oCount){
        status = true;
        message = "x's equal o's";
    } else {
        status =  false;
        message = "x's do not equal o's";
    } 
    let mydiv = document.createElement('div');
    document.querySelector('body').appendChild(mydiv);

    let outString = str + " is " + status + ".  " + message;
    mydiv.innerHTML = outString;
    return;
}

XO('ooxx');
XO('xooxx');
XO('ooxXm');
XO('zpzpzpp');
XO('zzoo');

