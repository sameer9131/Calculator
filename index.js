let display=document.getElementById("screen");
function allclear(){
    display.value="";
}
function show(e){
    display.value+=e;
}
function calc(){
    display.value=eval(display.value)
}
function remove(){
    display.value=display.value.toString().slice(0,-1)
}
