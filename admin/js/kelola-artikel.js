// script.js
$(document).ready(function() {
    // Tambahkan event listener untuk tombol tambah
    $("#addModalBtn").click(function() {
        // Tampilkan modal tambah artikel
        $("#addModal").modal("show");
    });

    // Tambahkan event listener untuk tombol edit
    $("#editModalBtn").click(function() {
        // Tampilkan modal edit artikel
        $("#editModal").modal("show");
    });

    // Tambahkan event listener untuk tombol hapus
    $("#deleteModalBtn").click(function() {
        // Tampilkan modal hapus artikel
        $("#deleteModal").modal("show");
    });

    // Tambahkan event listener untuk tombol Simpan pada modal tambah
    $("#btnSimpanTambah").click(function() {
        // Mendapatkan nilai dari form tambah
        var judul = $("#judul").val();
        var deskripsi = $("#deskripsi").val();
        var gambar = $("#gambar").val();

        // Lakukan sesuatu dengan nilai-nilai tersebut (misalnya, kirim ke server)

        // Menutup modal tambah
        $("#addModal").modal("hide");
    });

    // Tambahkan event listener untuk tombol Simpan Perubahan pada modal edit
    $("#btnSimpanEdit").click(function() {
        // Mendapatkan nilai dari form edit
        var judulEdit = $("#judulEdit").val();
        var gambar = $("#gambar").val();
        var deskripsiEdit = $("#deskripsiEdit").val();
        var gambarEdit = $("#gambarEdit").val();

        // Lakukan sesuatu dengan nilai-nilai tersebut (misalnya, kirim ke server)

        // Menutup modal edit
        $("#editModal").modal("hide");
    });

    // Tambahkan event listener untuk tombol Hapus pada modal hapus
    $("#btnHapus").click(function() {
        // Lakukan sesuatu untuk menghapus artikel (misalnya, kirim ke server)

        // Menutup modal hapus
        $("#deleteModal").modal("hide");
    });
});