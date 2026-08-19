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
    document.body.classList.remove("cromesh-section-blue", "cromesh-section-green");

    const bluePrefixes = [
      "/uvod",
      "/postavke/",
      "/faq",
      "/zajednica/",
      "/meshcore/",
      "/odabir-uredaja/"
    ];

    const greenPrefixes = [
      "/hardver/",
      "/antene/",
      "/solarno/",
      "/aplikacije/",
      "/firmware/",
      "/mqtt/",
      "/mreza/"
    ];

    if (bluePrefixes.some(prefix => path === prefix || path.startsWith(prefix))) {
      document.body.classList.add("cromesh-section-blue");
    } else if (greenPrefixes.some(prefix => path === prefix || path.startsWith(prefix))) {
      document.body.classList.add("cromesh-section-green");
    }
  };

  addMapCard();
  applySectionBackground();

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
      addMapCard();
      applySectionBackground();
    });
  }
});
