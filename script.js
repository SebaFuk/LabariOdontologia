// Cambiá este número por el real (formato internacional, sin +, sin espacios).
// Rosario suele ser 54 9 341...
const WHATSAPP_NUMBER = "5493413667500";

// Mensaje automático
const message = encodeURIComponent(
  "Hola! Quiero reservar un turno en Labari Odontología. ¿Me pasan disponibilidad?"
);

// Link de WhatsApp
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

// Setear links en botones
[
  "waTop",
  "waHero",
  "waSucursal",
  "waReserva",
  "waCard",
  "waBanner",
  "waContacto",
  "waFloat"
].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.href = waLink;
});

// Año en footer
document.getElementById("year").textContent = new Date().getFullYear();
