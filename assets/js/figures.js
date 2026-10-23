/* =========================================
   G27 THESIS WEBSITE
   Figures Page JavaScript
   Version 1.0
   ========================================= */

(() => {
  "use strict";

  /* =====================================
     1. CATEGORY TABS
     ===================================== */

  const categoryButtons = document.querySelectorAll(".figure-tab");

  const categoryPanels = document.querySelectorAll(".figure-panel");

  function activateCategory(category) {
    categoryButtons.forEach((button) => {
      const isActive = button.dataset.category === category;

      button.classList.toggle("is-active", isActive);

      button.setAttribute("aria-pressed", String(isActive));
    });

    categoryPanels.forEach((panel) => {
      const isActive = panel.dataset.panel === category;

      panel.hidden = !isActive;
    });
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activateCategory(button.dataset.category);
    });
  });

  /* =====================================
     2. RESULTS PHASE FILTERING
     ===================================== */

  const phaseButtons = document.querySelectorAll(".phase-filter");

  const resultFigures = document.querySelectorAll(
    "#panel-results .figure-card[data-phase]",
  );

  function activatePhase(phase) {
    phaseButtons.forEach((button) => {
      const isActive = button.dataset.phase === phase;

      button.classList.toggle("is-active", isActive);

      button.setAttribute("aria-pressed", String(isActive));
    });

    resultFigures.forEach((figure) => {
      const shouldShow = phase === "all" || figure.dataset.phase === phase;

      figure.hidden = !shouldShow;
    });
  }

  phaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activatePhase(button.dataset.phase);
    });
  });

  /* =====================================
     3. FIGURE IMAGE VIEWER
     ===================================== */

  const figureImages = document.querySelectorAll(".figure-card img");

  // Create one reusable image dialog.

  const dialog = document.createElement("dialog");

  dialog.className = "figure-dialog";

  dialog.setAttribute("aria-labelledby", "figure-dialog-title");

  dialog.innerHTML = `
    <div class="figure-dialog-header">

      <h2
        class="figure-dialog-title"
        id="figure-dialog-title"
      >
        Figure
      </h2>

      <button
        type="button"
        class="figure-dialog-close"
        aria-label="Close enlarged figure"
      >
        &times;
      </button>

    </div>

    <img
      class="figure-dialog-image"
      alt=""
    >

    <div class="figure-dialog-caption"></div>
  `;

  document.body.appendChild(dialog);

  /* Dialog elements */

  const dialogTitle = dialog.querySelector(".figure-dialog-title");

  const dialogImage = dialog.querySelector(".figure-dialog-image");

  const dialogCaption = dialog.querySelector(".figure-dialog-caption");

  const closeButton = dialog.querySelector(".figure-dialog-close");

  let lastTrigger = null;

  /* =====================================
     4. OPEN ENLARGED FIGURE
     ===================================== */

  function openFigure(image) {
    const figure = image.closest(".figure-card");

    if (!figure) {
      return;
    }

    const figureCode = figure.querySelector(".figure-code");

    const figureName = figure.querySelector(".figure-name");

    const code = figureCode ? figureCode.textContent.trim() : "Figure";

    const name = figureName ? figureName.textContent.trim() : image.alt;

    lastTrigger = image;

    // Set the figure number and title.

    dialogTitle.textContent = code;

    dialogCaption.textContent = name;

    // Display the original image.

    dialogImage.src = image.currentSrc || image.src;

    dialogImage.alt = image.alt;

    // Open the native modal dialog.

    if (!dialog.open) {
      dialog.showModal();
    }
  }

  /* =====================================
     5. FIGURE INTERACTIONS
     ===================================== */

  figureImages.forEach((image) => {
    const figure = image.closest(".figure-card");

    const figureName = figure?.querySelector(".figure-name");

    const name = figureName ? figureName.textContent.trim() : image.alt;

    // Make the image keyboard accessible.

    image.setAttribute("tabindex", "0");

    image.setAttribute("role", "button");

    image.setAttribute("aria-label", `Enlarge figure: ${name}`);

    // Mouse and touch interaction.

    image.addEventListener("click", () => {
      openFigure(image);
    });

    // Keyboard interaction.

    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        openFigure(image);
      }
    });
  });

  /* =====================================
     6. CLOSE FIGURE VIEWER
     ===================================== */

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // Close when clicking outside the dialog.

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) {
      return;
    }

    const rect = dialog.getBoundingClientRect();

    const clickedInside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!clickedInside) {
      dialog.close();
    }
  });

  // Restore keyboard focus after closing.

  dialog.addEventListener("close", () => {
    if (lastTrigger) {
      lastTrigger.focus();

      lastTrigger = null;
    }
  });

  /* =====================================
     7. INITIAL PAGE STATE
     ===================================== */

  activateCategory("conceptual");

  activatePhase("all");
})();
