console.log("Hairdo Salon Website Loaded Successfully");

// form submit tanpa refresh
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Booking request terkirim! (simulasi)");
    });
  }
});
