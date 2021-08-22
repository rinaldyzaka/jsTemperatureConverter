class Convert {
    constructor(){
    //console.log("this is new object");
    }
    fromCelsius(to, fromNumb){
        if (to == "cel"){
            return fromNumb;
        }
        if (to == "rea"){
            return (4 / 5) * fromNumb;
        }
        if (to == "fah"){
            return ( 9 / 5 ) * fromNumb + 32;
        }
    }

    fromReamur(to, fromNumb){
        if (to == "cel"){
            return (5 / 4) * fromNumb;
        }
        if (to == "rea"){
            return fromNumb;
        }
        if (to == "fah"){
            return (9 / 4) * fromNumb + 32;
        }
    }

    fromFahrenheit(to, fromNumb){
        if (to == "cel"){
            return (5 / 9) * (fromNumb - 32);
        }
        if (to == "rea"){
            return (4 / 9) * (fromNumb - 32);
        }
        if (to == "fah"){
            return fromNumb;
        }
    }
}

module.exports = Convert;