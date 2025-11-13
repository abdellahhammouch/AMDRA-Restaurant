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
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.setTextColor(255, 87, 34);
    doc.text("Confirmation de commande", 105, 25, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);

    doc.text(`Nom : ${name}`, 20, 50);
    doc.text(`Téléphone : ${phone}`, 20, 60);
    doc.text(`Adresse : ${adresse}`, 20, 70);
    doc.text(`Email : ${email}`, 20, 80);
    doc.text(`Total : ${total}`, 20, 90);
    doc.setFontSize(14);
    doc.setTextColor(0, 150, 0);
    doc.text(`Merci pour votre commande`, 20, 100);
    doc.save("commande.pdf");
});
  