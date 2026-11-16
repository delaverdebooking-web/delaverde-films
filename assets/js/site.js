"use strict";

const phone = "18494976721";
const baseMessage = "Hola, DELAVERDE FILMS. Soy artista/músico independiente y quiero orientación sobre una estrategia visual y un plan de producción para mi proyecto.";

const whatsappButton = document.getElementById("wa");
whatsappButton.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(baseMessage);

document.getElementById("year").textContent = String(new Date().getFullYear());

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const value = (name) => Number(new FormData(form).get(name));
  const budget = value("budget");
  const goal = value("goal");
  const stage = value("stage");
  const timing = value("timing");
  const commitment = value("commit");
  const total = budget + goal + stage + timing + commitment;

  let title;
  let copy;
  let showContact = false;

  if (budget >= 2 && total >= 9 && timing >= 1 && commitment >= 1) {
    title = "Tu proyecto está listo para una evaluación personalizada.";
    copy = "Tu presupuesto alcanza el rango inicial y muestras claridad y disposición para avanzar.";
    showContact = true;
  } else if (budget === 0 || total >= 4) {
    title = "Tienes potencial; prepara mejor el siguiente paso.";
    copy = "Organiza tus prioridades, reúne referencias y define un presupuesto y una fecha realistas. No quedas descartado: puedes avanzar por etapas.";
  } else {
    title = "Este todavía puede ser un momento de preparación.";
    copy = "Define una meta concreta, desarrolla tu material musical y calcula los recursos que podrías reunir. Regresa cuando tengas una ruta más clara.";
  }

  const result = document.getElementById("result");
  const heading = document.createElement("h3");
  heading.textContent = title;
  const paragraph = document.createElement("p");
  paragraph.textContent = copy;
  const children = [heading, paragraph];

  if (showContact) {
    const contactParagraph = document.createElement("p");
    const link = document.createElement("a");
    link.className = "btn";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(
      "Hola, DELAVERDE FILMS. Completé la evaluación inicial y quisiera solicitar una evaluación personalizada de mi proyecto."
    );
    link.textContent = "Solicitar evaluación por WhatsApp ↗";
    contactParagraph.append(link);
    children.push(contactParagraph);
  }

  const note = document.createElement("small");
  note.textContent = "Orientación inicial; no constituye cotización ni garantiza disponibilidad.";
  children.push(note);
  result.replaceChildren(...children);
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
});
