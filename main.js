const user = document.getElementById().value;
const psw1 = document.getElementById().value;
const psw2 = document.getElementById().value;
const email = document.getElementById().value;



let comprobePSW = false;
let comprobeUSER = false;
let comprobeEMAIL = false;
function comprobeAllData() {
    preventDefault();

    comprobePSW(comprobePSW);
    comprobeUSER(comprobeUSER);
    comprobeEMAIL(comprobeEMAIL);



    if (comprobePSW === true) console.log("Funciona") //funcion submit && 
    else errorPrint(comprobePSW);

    if (comprobeUSER === true) console.log("Funciona") // funcio
    else errorPrint(comprobeUSER);


    if (comprobePSW === true && comprobeUSER === true && comprobeEMAIL === true) return //Funcion Submit;
    //return errorPrint(userError, emailError, comprobePSW); //pasarErrores por parametros
}

function comprobePsw(comprobePSW) {
    if (psw1 === psw2 && psw1, psw2 !== "") return comprobePSW = true;
    else return comprobePSW = false;
}
function comprobeUser(comprobeUSER) {

}
function comprobeEmail(comprobeEMAIL) {

}


function errorPrint() {

    setTimeout(() => {
        document.getElementById("error").innerHTML = "";
    }, 3000);

}