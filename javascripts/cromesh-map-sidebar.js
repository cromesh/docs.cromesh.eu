document.addEventListener("DOMContentLoaded", () => {
  const addMapCard = () => {
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

  const applySectionBackground = () => {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  document.body.classList.remove(
    "cromesh-section-blue",
    "cromesh-section-green"
  );

  // Home keeps the existing landing-page background unchanged.
  if (path === "/") return;

  // Main topic branches use the green section background.
  const greenPaths = [
    "/uvod",
    "/faq",
    "/postavke",
    "/odabir-uredaja",
    "/hardver",
    "/aplikacije",
    "/mreza"
  ];

  if (greenPaths.includes(path)) {
    document.body.classList.add("cromesh-section-green");
    return;
  }

  // Explicit blue topic sections and all other non-home pages use blue.
  const blueTopicPaths = [
    "/mqtt",
    "/solarno",
    "/firmware",
    "/antene",
    "/meshcore"
  ];

  if (blueTopicPaths.includes(path) || path !== "/") {
    document.body.classList.add("cromesh-section-blue");
  }
};;

  addMapCard();
  applySectionBackground();

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      addMapCard();
      applySectionBackground();
    });
  }
});
