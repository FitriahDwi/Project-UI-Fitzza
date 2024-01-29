function tambahJumlah(id) {
    var jumlahElemen = document.getElementById('jumlahProduk' + id);
    var jumlah = parseInt(jumlahElemen.textContent);
    jumlahElemen.textContent = jumlah + 1;

    updateTotal(id);
}

function kurangiJumlah(id) {
    var jumlahElemen = document.getElementById('jumlahProduk' + id);
    var jumlah = parseInt(jumlahElemen.textContent);

    if (jumlah > 1) {
        jumlahElemen.textContent = jumlah - 1;
        updateTotal(id);
    }
}

function updateTotal(id) {
    var harga = 50000; // Ganti dengan harga produk yang sesuai
    var jumlah = parseInt(document.getElementById('jumlahProduk' + id).textContent);
    var totalElemen = document.getElementById('totalProduk' + id);
    var total = harga * jumlah;
    totalElemen.textContent = 'Rp ' + total.toLocaleString();
}

function tambahKeKeranjang(id) {
    var jumlah = parseInt(document.getElementById('jumlahProduk' + id).textContent);
    var total = parseInt(document.getElementById('totalProduk' + id).textContent.replace('Rp ', '').replace(',', ''));

    // Lakukan sesuatu dengan data produk yang akan ditambahkan ke keranjang
    console.log('Tambah ke keranjang - Produk ' + id + ' | Jumlah: ' + jumlah + ' | Total: ' + total);
}

function tambahSemuaKeKeranjang() {
    // Lakukan sesuatu dengan data semua produk yang akan ditambahkan ke keranjang
    console.log('Tambah semua ke keranjang');
}