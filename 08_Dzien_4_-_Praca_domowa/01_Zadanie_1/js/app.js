const form = document.getElementById("order-form");
const orderInfo = document.getElementById("order-info");
const toppings = document.querySelectorAll(".topping");
const clearBtn = document.getElementById("clear-btn");
const allToppingsBtn = document.getElementById("all-toppings-btn");

// Funkcja do obliczania sumy cen dodatków
function calculateTotalPrice() {
    let totalPrice = 35; // Cena podstawowa za pizzę
    toppings.forEach(topping => {
        if (topping.checked) {
            const price = parseInt(topping.getAttribute("data-price"));
            totalPrice += price;
        }
    });
    return totalPrice;
}

// Aktualizacja wyświetlanej kwoty zamówienia
function updateOrderInfo() {
    orderInfo.textContent = "Do zapłaty: " + calculateTotalPrice() + " zł";
}

// Event listener dla zaznaczania/odznaczania dodatków
toppings.forEach(topping => {
    topping.addEventListener("change", updateOrderInfo);
});

// Event listener dla przycisku "Wyczyść"
clearBtn.addEventListener("click", () => {
    toppings.forEach(topping => {
        topping.checked = false;
    });
    updateOrderInfo();
});

// Event listener dla przycisku "Wszystkie dodatki"
allToppingsBtn.addEventListener("click", () => {
    toppings.forEach(topping => {
        topping.checked = true;
    });
    updateOrderInfo();
});

// Event listener dla wysłania formularza
form.addEventListener("submit", event => {
    event.preventDefault(); // Blokowanie domyślnej akcji
    updateOrderInfo(); // Aktualizacja wyświetlanej kwoty
});