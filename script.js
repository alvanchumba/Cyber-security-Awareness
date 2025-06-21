
const translations = {
  os: {
    tagline: "Iikuluntu lyu uukumwe niilonga",
    about_text: "Onda hala okukwashilipala omukithi gwandje, Alvan Chumba. Onda tumbulwa po NUST muCybersecurity. Tashi limbilile okuhangana na cybercrime muNamibia.",
    form_title: "Shanga okulonga",
    name_label: "Iilyo yoye",
    email_label: "Email yoye",
    phone_label: "Ombuga (WhatsApp)",
    topic_label: "Elongo loye"
  },
  af: {
    tagline: "Bouer weerbaarheid deur kennis",
    about_text: "Ek is Alvan Chumba, 'n kuberveiligheid gegradueerde van NUST. Ek help Namibiërs om teen kubermisdaad te beskerm.",
    form_title: "Registreer vir Gratis Opleiding",
    name_label: "Naam",
    email_label: "E-pos",
    phone_label: "Telefoon (WhatsApp)",
    topic_label: "Opleiding Tipe"
  },
  ot: {
    tagline: "Ozongarangarue tjinene nomatjangatjau",
    about_text: "Tjina tjandje tjinene Alvan Chumba, owa tumburwa ko NUST. Tjinene tjandje okurongwa okuronga ouNamibia okuhepa cybercrime.",
    form_title: "Tjaire omu Training",
    name_label: "Ovizina",
    email_label: "Email",
    phone_label: "Owa (WhatsApp)",
    topic_label: "Ove training"
  },
  en: {
    tagline: "Building resilience through knowledge",
    about_text: "My name is Alvan Chumba, a cybersecurity graduate from Namibia University of Science and Technology (NUST). I specialize in helping organizations and individuals stay safe from online threats through training, education, and simulations. This project aims to empower Namibians to recognize scams, protect personal data, and build safer digital habits.",
    form_title: "Register for Free Training",
    name_label: "Name",
    email_label: "Email",
    phone_label: "Phone (WhatsApp)",
    topic_label: "Training Type"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById("tagline").textContent = t.tagline;
  document.getElementById("about-text").textContent = t.about_text;
  document.getElementById("form-title").textContent = t.form_title;
  document.getElementById("name-label").textContent = t.name_label;
  document.getElementById("email-label").textContent = t.email_label;
  document.getElementById("phone-label").textContent = t.phone_label;
  document.getElementById("topic-label").textContent = t.topic_label;
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
