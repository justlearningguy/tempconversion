const c_to_f = document.getElementById("c_to_f");
const f_to_c = document.getElementById("f_to_c");
const answer = document.getElementById("answer");
const type_form = document.getElementById("type_form");
const alert = document.getElementById("alert");
function convert() {
    let a = Number(type_form.value);
    if(isNaN(a) == false && ( c_to_f.checked || f_to_c.checked ) ) {
        if(c_to_f.checked) {
            a = a*9/5 + 32;
            answer.textContent = a.toFixed(2) + " °F";
        }
        else {
            a = (a-32)*5/9;
            answer.textContent = a.toFixed(2) + " °C";
        }
        alert.textContent = "";
    }
    else {
        if(isNaN(a) && ( c_to_f.checked || f_to_c.checked )) {
            alert.textContent = "Please enter the valid number!";
            answer.textContent = "";
        }
        else if(isNaN(a) == false &&(c_to_f.checked == false && f_to_c.checked == false)) {
            alert.textContent = "Choose the unit!";
            answer.textContent = "";
        }
        else {
            alert.textContent = "Please enter the valid number and choose the unit!";
            answer.textContent = "";
        }
    }
}