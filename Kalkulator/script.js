let display = document.getElementById('display');

// Fungsi untuk menambah angka atau operator ke display
function appendToDisplay(value) {
    display.value += value;
}

// Fungsi untuk menghitung hasil ekspresi matematika
function calculateResult() {
    try {
        display.value = eval(display.value); // Menggunakan eval untuk kalkulasi
    } catch (error) {
        display.value = "Error";
    }
}

// Fungsi untuk menghapus semua input
function clearDisplay() {
    display.value = "";
}
