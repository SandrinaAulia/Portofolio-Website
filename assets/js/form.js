
  const form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mendapatkan nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Membuat objek untuk menyimpan data
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    // Mengecek apakah local storage tersedia
    if (typeof(Storage) !== "undefined") {
      // Jika tersedia, simpan data ke dalam local storage
      let messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.push(formData);
      localStorage.setItem('messages', JSON.stringify(messages));

      // Menampilkan pesan konfirmasi dengan isi pesan
      alert(`Pesan Anda telah berhasil dikirim!\n\nNama: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
      
      form.reset();
    } else {
      // Jika local storage tidak tersedia, tampilkan pesan kesalahan
      alert('Browser Anda tidak mendukung penyimpanan local, silakan perbarui atau gunakan browser lain.');
    }
  });
