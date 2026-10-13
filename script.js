// ==========================================
// 1. FITUR SALIN EMAIL OTOMATIS KE CLIPBOARD
// ==========================================

// Buat elemen tombol interaktif untuk menyalin email secara cepat
const tombolKontak = document.querySelector("#https://wa.me/+6289652851249 btn-primary");

if (tombolKontak) {
    tombolKontak.addEventListener("click", function() {
        // Mencegah link membuka aplikasi email default sejenak (opsional)
        // event.preventDefault(); 

        const emailKamu = "setiawansurya420@google.com"; // Ganti dengan email aslimu
        
        // Perintah sistem untuk menyalin teks ke memori HP
        navigator.clipboard.writeText(emailKamu).then(function() {
            alert("Berhasil menyalin email: " + emailKamu + "\nSilakan tempel (paste) di aplikasi pesanmu!");
        }).catch(function(err) {
            console.error("Gagal menyalin teks: ", err);
        });
    });
}

// ==========================================
// 2. LOGIKA INTERAKTIF TAMBAHAN (COUNTER / SAPAAN)
// ==========================================
// Bagian ini bisa disesuaikan jika kamu ingin mempertahankan tombol interaktif uji coba sebelumnya.
console.log("Landing page portofolio berhasil dimuat dan siap digunakan!");
