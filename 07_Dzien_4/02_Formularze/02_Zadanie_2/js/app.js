document.addEventListener('DOMContentLoaded', function () {
    // Znalezienie checkboxa i sekcji z danymi do faktury
    const invoiceCheckbox = document.querySelector('#invoice');
    const invoiceData = document.querySelector('#invoiceData');

    // Ukrycie sekcji z danymi do faktury na start
    invoiceData.classList.add('d-none');

    // Nasłuchiwanie zmiany stanu checkboxa
    invoiceCheckbox.addEventListener('change', function () {
        // Jeśli checkbox jest zaznaczony, pokaż sekcję z danymi do faktury
        if (invoiceCheckbox.checked) {
            invoiceData.classList.remove('d-none');
        } else {
            // W przeciwnym razie ukryj sekcję z danymi do faktury
            invoiceData.classList.add('d-none');
        }
    });
});

// Pierwsza wersja - elementy disabled

const getInvoice = document.querySelector('#invoice');
const invoiceElement = document.querySelector("#invoiceData");


getInvoice.addEventListener('change', checkInvoice);

checkInvoice();

function checkInvoice() {
    if (getInvoice.checked) {

        toogleInputs(invoiceElement, false)

        return;
    }

    toogleInputs(invoiceElement, true)
}

function toogleInputs(parent, mode) {
    parent.querySelectorAll("input").forEach(function (input) {
        input.disabled = mode
    })
}

// Druga wersja - ukryta sekcja

const getInvoice = document.querySelector('#invoice');
const invoiceElement = document.querySelector("#invoiceData");


getInvoice.addEventListener('change', checkInvoice);

checkInvoice();

function checkInvoice() {
    if (getInvoice.checked) {
        invoiceElement.classList.remove('d-none')

        return;
    }

    invoiceElement.classList.add('d-none')
}