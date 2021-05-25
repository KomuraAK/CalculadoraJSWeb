function insert(num) {
    var numA = document.getElementById('btnExit').innerHTML;
    document.getElementById('btnExit').innerHTML = numA + num;
}
function calc() {
    var exit = document.getElementById('btnExit').innerHTML;
    if (exit) {
        document.getElementById('btnExit').innerHTML = eval(exit);
    }
    else {
        document.getElementById('btnExit').innerHTML = "";
    }
}
function letfString() {
    var exit = document.getElementById('btnExit').innerHTML;
    document.getElementById('btnExit').innerHTML = exit.substring(0, exit.length - 1);
}
function clean() {
    document.getElementById('btnExit').innerHTML = "";
}
