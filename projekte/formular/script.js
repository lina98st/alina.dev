// Formular und Felder abrufen
const form = document.getElementById('booking-form');
const validateForm = document.querySelector('#submitButton');
const destination = document.getElementById('destination');
const date = document.getElementById('date');
const participants = document.getElementById('participants');
const requests = document.getElementById('requests');

// Fehlermeldungen abrufen
const destinationError = document.getElementById('destinationError');
const dateError = document.getElementById('dateError');
const groupError = document.getElementById('groupError');
const textError = document.getElementById('textError');

// Verhindert das Neuladen
form.addEventListener('submit', function (event) {
    event.preventDefault();
});

// Validierung und Klick auf den Button
validateForm.addEventListener('click', () => {
    let isValid = true; // Zustand des Formulars zurücksetzen

    // Reiseziel prüfen
    if (destination.value.trim() === '') {
        destinationError.textContent = 'Bitte wählen Sie ein Reiseziel aus.';
        isValid = false;
    } else {
        destinationError.textContent = '';
    }

    // Reisedatum prüfen
    if (date.value.trim() === '') {
        dateError.textContent = 'Bitte wählen Sie ein Reisedatum aus.';
        isValid = false;
    } else {
        dateError.textContent = '';
    }

    // Teilnehmeranzahl prüfen
    if (participants.value.trim() === '' || parseInt(participants.value) < 1) {
        groupError.textContent = 'Bitte geben Sie eine gültige Teilnehmeranzahl ein (mindestens 1).';
        isValid = false;
    } else {
        groupError.textContent = '';
    }

    // Spezialwünsche prüfen
    if (requests.value.trim().length > 200) {
        textError.textContent = 'Spezialwünsche dürfen maximal 200 Zeichen lang sein.';
        isValid = false;
    } else {
        textError.textContent = '';
    }

    // Formular abschließen, wenn alles gültig ist
    if (isValid) {
        alert('Formular erfolgreich abgesendet!');
        resetForm(); // Formular zurücksetzen
    }
});

// Reset-Funktion
function resetForm() {
    form.reset(); // Setzt alle Eingabefelder zurück
    destinationError.textContent = '';
    dateError.textContent = '';
    groupError.textContent = '';
    textError.textContent = '';
}
