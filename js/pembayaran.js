function checkout() {
    // Lakukan proses checkout dan tampilkan modal pembayaran berhasil
    openModal();
}

function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function prosesPembayaran() {
    var metodePembayaran = document.querySelector('input[name="metode"]:checked');

    if (metodePembayaran) {
        alert("Anda memilih pembayaran melalui " + metodePembayaran.value);
        // Lakukan proses pembayaran atau logika lainnya sesuai kebutuhan
    } else {
        alert("Silakan pilih metode pembayaran terlebih dahulu.");
    }
}