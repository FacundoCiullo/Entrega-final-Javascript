const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCOD = document.querySelector("#input-cod");
const inputDNI = document.querySelector("#input-dni")
const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCOD = document.querySelector("#card-cod");
const form = document.querySelector("#form");

/** MOSTRAR Y ESCONDER FORMULARIO*/

const toggleButton = document.getElementById('toggle-form');
const cardForm = document.getElementById('card-form');

cardForm.style.display = 'none';

toggleButton.addEventListener('click', () => {
    if (cardForm.style.display === 'none') {
        cardForm.style.display = 'block';

    } else { 
        cardForm.style.display = 'none';
    }
});

/** DATOS DE LA TARJETA**/

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "JUAN PEREZ";
    }
})

var cleave = new Cleave('#input-number', {
    creditCard: true,
});

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    
    }
})

inputMonth.addEventListener("input", () => {
    const regex = /[^0-9]/g;
    inputMonth.value = inputMonth.value.replace(regex, '');
    cardMonth.innerText = inputMonth.value;

    if (inputMonth.value.length === 0) {
        cardMonth.innerText = "00";
    }
});

inputYear.addEventListener("input", () => {
    const regex = /[^0-9]/g;
    inputYear.value = inputYear.value.replace(regex, '');
    cardYear.innerText = inputYear.value;

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00";
    }
})

inputCOD.addEventListener("input", () => {
    const regex = /[^0-9]/g;
    inputCOD.value = inputCOD.value.replace(regex, '');
    cardCOD.innerText = inputCOD.value;

    if (inputCOD.value.length === 0) {
        cardCOD.innerText = "000";
    }
})

inputDNI.addEventListener("input", () => {
    const regex = /[^0-9]/g;
    inputDNI.value = inputDNI.value.replace(regex, '');
})


/** FUNCION OPCION CANCELAR COMPRA **/

const cancelarCompraBtn = document.getElementById("cancelar-compra");

cancelarCompraBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás deshacer esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'var(--clr-red)',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "index.html";
        }
    })
});


/** MENSAJE DE CONFIRMACION DE PAGO EN EFEVTIVO**/

const efectivo = document.getElementById("efectivo");

efectivo.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    Swal.fire({
        icon: 'success',
        title: 'Listo! pasá por caja',
        text: 'Gracias por su compra!',
        showConfirmButton: false,
        focusConfirm: false,
        timer: 3500
    }).then(() => {
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 0); // Tiempo de redireccionamiento a inicio (ms)
    });
})


/** MENSAJE DE CONFIRMACION DE PAGO CON TARJETA POST FORM**/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    Swal.fire({
        icon: 'success',
        title: 'CONFIRMADO!',
        text: 'Gracias por su compra!',
        showConfirmButton: false,
        focusConfirm: false,
        timer: 3000
    }).then(() => {
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 0); // Tiempo de redireccionamiento a inicio (ms)
    });
})

