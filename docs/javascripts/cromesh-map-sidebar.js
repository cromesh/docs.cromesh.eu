document.addEventListener("DOMContentLoaded", () => {
  const addMapCard = () => {
    // Keep the original v3.5.0 sidebar and all existing links untouched.
    const sidebar = document.querySelector(".md-sidebar--primary");
    if (!sidebar || sidebar.querySelector(".cromesh-map-sidebar-card")) return;

    const title = Array.from(sidebar.querySelectorAll("*")).find(
      el => el.children.length === 0 && el.textContent.trim() === "DODATNE POVEZNICE"
    );
    if (!title) return;

    const card = document.createElement("a");
    card.className = "cromesh-map-sidebar-card";
    card.href = "https://map.cromesh.eu/";
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.setAttribute("aria-label", "Otvori CroMesh kartu mreže");

    const img = document.createElement("img");
    img.src = "/assets/images/map-cromesh-eu.webp";
    img.alt = "CroMesh karta mreže";
    card.appendChild(img);

    const caption = document.createElement("span");
    caption.className = "cromesh-map-sidebar-card-caption";
    caption.innerHTML = "<strong>CroMesh karta mreže</strong><span>Otvori map.cromesh.eu ↗</span>";
    card.appendChild(caption);

    // Insert directly after the existing links container.
    const container = title.parentElement;
    let insertAfter = container;
    if (container.nextElementSibling) {
      insertAfter = container.nextElementSibling;
      while (insertAfter && insertAfter.nextElementSibling &&
             insertAfter.nextElementSibling.classList.contains("md-nav")) {
        insertAfter = insertAfter.nextElementSibling;
      }
    }
    insertAfter.insertAdjacentElement("afterend", card);
  };

  addMapCard();

  if (typeof document$ !== "undefined") {
    document$.subscribe(addMapCard);
  }
});
