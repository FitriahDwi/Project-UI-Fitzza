// Fungsi untuk membuka modal
function openModal(orderNumber) {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Menetapkan nomor pesanan ke atribut data-order-number pada elemen modal
    modal.setAttribute('data-order-number', orderNumber);
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Fungsi untuk menghapus pesanan
function deleteOrder() {
    // Mendapatkan nomor pesanan dari atribut data-order-number pada modal
    var orderNumber = document.getElementById('myModal').getAttribute('data-order-number');

    // Lakukan proses penghapusan pesanan (dapat disesuaikan dengan kebutuhan)
    console.log('Menghapus pesanan dengan nomor: ' + orderNumber);

    // Tutup modal setelah penghapusan
    closeModal();
}