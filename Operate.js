function select(params) {
    document.getElementById("fromNumb").value = "";
    document.getElementById("resultNumb").value = "";
}

const convert = new Convert();
function conv() {
    if (document.getElementById("from").value == "cel"){
        const res = convert.fromCelsius(document.getElementById("to").value, 
        parseInt(document.getElementById("fromNumb").value));
        document.getElementById("resultNumb").value = res; 
    }
    if (document.getElementById("from").value == "rea"){
        const res = convert.fromReamur(document.getElementById("to").value,
        parseInt(document.getElementById("fromNumb").value));
        document.getElementById("resultNumb").value = res;
    }
    if (document.getElementById("from").value == "fah"){
        const res = convert.fromFahrenheit(document.getElementById("to").value, 
        parseInt(document.getElementById("fromNumb").value));
        document.getElementById("resultNumb").value = res;
    }
}
//making a function validate with param evt to handle paste and keypress, declare var regex for unit tested by jest
//function validate(evt) {
    //var theEvent = evt || window.event;

    //handle paste
    //if (theEvent.type === "paste"){
        
    //}
    //var regex = /[0-9]|\./;
    //if (!regex.test(key))
//}

function change() {
    document.body.style.backgroundColor = document.getElementById("color").value;
}

function datetime() {
    document.getElementById("date").value = Date;
    document.getElementById("time").value = Time;
}