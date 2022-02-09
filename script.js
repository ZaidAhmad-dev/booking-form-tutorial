let form = document.getElementById("form");

let destinationInput = document.getElementById("destination");
let checkinDate = document.getElementById("check-in");
let checkoutDate = document.getElementById("check-out");
let travelRadios = document.querySelectorAll('input[name="travel"]');
let searchForRadios = document.querySelectorAll('input[name="search-for"]');

let formGroup = document.getElementsByClassName('form-group');

// console.log(form)
// console.log(destinationInput)
// console.log(checkinDate)
// console.log(checkoutDate)
// console.log(travelRadios)
// console.log(searchForRadios)
console.log(formGroup)

$(function () {
    $("#check-in").datepicker({
        minDate: 0,
        maxDate: "+1M +10D",
    });

    $("#check-out").datepicker({
        minDate: 1,
        maxDate: "+1Y"
    });
});

form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    destinationInputValue = destinationInput.value;
    if (destinationInputValue === "") {
        formGroup[0].classList.add("error");
        destinationInput.classList.add("invalid")
    } else {
        formGroup[0].classList.remove("error");
        destinationInput.classList.remove("invalid")
    }

    if (checkinDate.value === "") {
        formGroup[2].classList.add("error");
        checkinDate.classList.add("invalid")


    } else {
        formGroup[2].classList.remove("error");
        checkinDate.classList.remove("invalid")
    }

    if (checkoutDate.value === "") {
        formGroup[4].classList.add("error");
        checkoutDate.classList.add("invalid")


    } else {
        formGroup[4].classList.remove("error");
        checkoutDate.classList.remove("invalid")
    }

    if(travelRadios[0].checked ===  false && travelRadios[1].checked === false){
        formGroup[8].classList.add("error");
    } else {
        formGroup[8].classList.remove("error");

    }

    if(searchForRadios[0].checked ===  false && searchForRadios[1].checked === false && searchForRadios[2].checked === false){
        formGroup[9].classList.add("error");
    } else {
        formGroup[9].classList.remove("error");

    }

   if(formGroup[0].classList.contains("error") === false && formGroup[2].classList.contains("error") === false && formGroup[4].classList.contains("error") === false && formGroup[8].classList.contains("error") === false && formGroup[9].classList.contains("error") === false){
       alert("form submitted");
   }
}