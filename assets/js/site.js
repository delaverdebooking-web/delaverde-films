"use strict";

const phone = "18494976721";
const whatsappLinks = document.querySelectorAll("[data-whatsapp-message]");

whatsappLinks.forEach((link) => {
  const message = link.dataset.whatsappMessage;
  link.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
});

document.getElementById("year").textContent = String(new Date().getFullYear());
