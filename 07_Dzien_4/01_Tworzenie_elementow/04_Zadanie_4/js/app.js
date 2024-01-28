// Na stronie znajduje się tabela z informacjami na temat zamówień (z dwoma już wprowadzonymi zamówieniami).
// Poniżej znajduje się formularz do wypełnienia nowego zamówienia. 
// Napisz event, który pobierze informacje z inputów (el.value) i wprowadzi nowy wpis do tabeli.

// Pobranie referencji do przycisku i tabeli:
const addButton = document.querySelector('#add');
const ordersTable = document.querySelector('#orders');
const templateRow = document.querySelector('#orders tbody tr');

// Dodanie eventu do przycisku
addButton.addEventListener('click', function() {

    // Funkcja obsługująca kliknięcie przycisku
    // Pobranie wartości z inputów
    const orderId = document.querySelector('#orderId').value;
    const item = document.querySelector('#item').value;
    const quantity = document.querySelector('#quantity').value;

    // Tworzenie nowego wiersza:
    const newRow = templateRow.cloneNode(true);
    // Wypełnienie nowego wiersza danymi:
    const cells = newRow.querySelectorAll('td');
    cells[0].textContent = orderId;
    cells[1].textContent = item;
    cells[2].textContent = quantity;

    // Dodanie nowego wiersza do tabeli zamówień:
    ordersTable.querySelector('tbody').appendChild(newRow);
});