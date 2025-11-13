  document.getElementById("btnPDF").addEventListener("click", () => {
    const name = document.getElementById('name').value;
    const adresse = document.getElementById('adresse').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/;
    const phoneRegex = /^[+]?[\d]{8,15}$/;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
      alert("Veuillez entrer un nom valide (au moins 3 lettres).");
      return;
    }
    if (!adresse || adresse.length < 5) {
      alert("Veuillez entrer une adresse valide.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("Veuillez entrer un numéro de téléphone valide.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    alert("Commande bien envoyée ");
  });
  