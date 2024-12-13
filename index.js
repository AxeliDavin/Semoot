document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const organizerName = document.getElementById("organizerName").value.trim();
    const eventTitle = document.getElementById("eventTitle").value.trim();
    const eventDate = document.getElementById("eventDate").value;
    const eventDescription = document.getElementById("eventDescription").value.trim();
    const contactEmail = document.getElementById("contactEmail").value.trim();
    const eventImage = document.getElementById("eventImage").files[0];

    // Validate inputs
    if (!organizerName || !eventTitle || !eventDate || !eventDescription || !contactEmail) {
        alert("Semua bidang wajib diisi!");
        return;
    }

    if (!validateEmail(contactEmail)) {
        alert("Format email tidak valid!");
        return;
    }

    if (!eventImage) {
        alert("Harap unggah gambar seminar!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function() {
        alert("Pendaftaran berhasil!\n\nDetail Pendaftaran:\n" +
              "Nama Penyelenggara: " + organizerName + "\n" +
              "Judul Seminar: " + eventTitle + "\n" +
              "Tanggal Seminar: " + eventDate + "\n" +
              "Email Kontak: " + contactEmail + "\n" +
              "Gambar Seminar: " + eventImage.name);
    };
    reader.readAsDataURL(eventImage);

    // Here you can implement submission to backend server.
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
