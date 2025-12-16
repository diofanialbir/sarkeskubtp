// Data contoh dasar hukum per tugas.
// Nanti Anda bisa mengganti teks dalam array ini dengan regulasi yang sebenarnya.
const legalDataByTask = {
    1: [
        {
            jenis: "Undang-Undang",
            judul: "UU tentang Perkeretaapian",
            ringkas: "Mengatur kewenangan pemerintah dalam perencanaan jaringan dan standar prasarana kereta api."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Standar Teknis Prasarana",
            ringkas: "Menetapkan persyaratan teknis minimum untuk konstruksi dan operasi prasarana perkeretaapian."
        }
    ],
    2: [
        {
            jenis: "Peraturan Pemerintah",
            judul: "PP tentang Penyelenggaraan Perkeretaapian",
            ringkas: "Memuat ketentuan pengujian dan inspeksi berkala terhadap prasarana dan sarana."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Sertifikasi Kelaikan",
            ringkas: "Mengatur tata cara sertifikasi kelaikan prasarana dan sistem keselamatan."
        }
    ],
    3: [
        {
            jenis: "Undang-Undang",
            judul: "UU tentang Lalu Lintas dan Angkutan Kereta Api",
            ringkas: "Menetapkan prinsip operasi pelayanan yang selamat, aman, dan tertib."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Manajemen Keselamatan Perkeretaapian",
            ringkas: "Mengatur sistem manajemen keselamatan dan kewajiban operator."
        }
    ],
    4: [
        {
            jenis: "Peraturan Pemerintah",
            judul: "PP tentang Pengelolaan Aset Perkeretaapian",
            ringkas: "Mengatur pengadaan, pemanfaatan, dan penghapusan aset prasarana."
        }
    ],
    5: [
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Penanganan Gangguan dan Kedaruratan",
            ringkas: "Mengatur prosedur penanganan kecelakaan, gangguan operasi, serta pemulihan layanan."
        }
    ],
    6: [
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Pembinaan dan Pengawasan Penyelenggara",
            ringkas: "Memberi dasar hukum pembinaan, audit keselamatan, dan sanksi administratif."
        }
    ],
    7: [
        {
            jenis: "Undang-Undang",
            judul: "UU tentang Perencanaan Pembangunan Nasional",
            ringkas: "Menjadi rujukan penyusunan kebijakan, program, dan pelaporan sektor perkeretaapian."
        },
        {
            jenis: "Peraturan Menteri",
            judul: "PM tentang Monitoring dan Evaluasi Kinerja",
            ringkas: "Mengatur indikator, pelaporan, dan evaluasi kinerja prasarana dan keselamatan."
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
  const taskButtons = document.querySelectorAll(".task-card");

  taskButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const jenis = btn.dataset.jenis; // "sarana" atau "keselamatan"
      const id    = btn.dataset.id;    // "1" s.d. "6"

      // bentuk nama file: tugas-sarana-1.html atau tugas-keselamatan-3.html
      const targetPage = `tugas-${jenis}-${id}.html`;

      window.location.href = targetPage;
    });

    // Jika benar-benar ingin pakai double click, ubah ke "dblclick":
    // btn.addEventListener("dblclick", () => { ... });
  });
});

