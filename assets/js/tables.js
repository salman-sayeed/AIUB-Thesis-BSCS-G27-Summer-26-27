"use strict";

/* =========================================================
   THESIS GROUP G27
   Tables Page — CSV Loader and Phase Filtering

   - Vanilla JavaScript
   - Loads 17 research tables from CSV files
   - Preserves original CSV values
   - Generates semantic HTML tables
   - Supports responsive horizontal scrolling
   - Supports Phase 2–8 filtering
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------------------
     1. TABLE CONFIGURATION
     ------------------------------------------------------- */

  const TABLE_DIRECTORY = "../assets/data/tables/results/";

  const TABLES = [
    {
      id: "T01",
      phase: "2",
      title: "Baseline Performance",
      file: "T01_Phase2_Baseline_Performance.csv",
    },
    {
      id: "T02",
      phase: "3",
      title: "Cross-Domain Performance",
      file: "T02_Phase3_CrossDomain_Performance.csv",
    },
    {
      id: "T03",
      phase: "3",
      title: "MMD Stability",
      file: "T03_Phase3_MMD_Stability.csv",
    },
    {
      id: "T04",
      phase: "4",
      title: "Composition Performance",
      file: "T04_Phase4_Composition_Performance.csv",
    },
    {
      id: "T05",
      phase: "4",
      title: "Confirmatory Inference",
      file: "T05_Phase4_Confirmatory_Inference.csv",
    },
    {
      id: "T06",
      phase: "5",
      title: "Mechanistic Inference",
      file: "T06_Phase5_Mechanistic_Inference.csv",
    },
    {
      id: "T07",
      phase: "5",
      title: "Representation MMD",
      file: "T07_Phase5_Representation_MMD.csv",
    },
    {
      id: "T08",
      phase: "6",
      title: "Lambda Validation",
      file: "T08_Phase6_Lambda_Validation.csv",
    },
    {
      id: "T09",
      phase: "6",
      title: "Final Comparison",
      file: "T09_Phase6_Final_Comparison.csv",
    },
    {
      id: "T10",
      phase: "6",
      title: "Final Inference",
      file: "T10_Phase6_Final_Inference.csv",
    },
    {
      id: "T11",
      phase: "7",
      title: "Fair/Dark Performance",
      file: "T11_Phase7_FairDark_Performance.csv",
    },
    {
      id: "T12",
      phase: "7",
      title: "Hierarchical Bootstrap",
      file: "T12_Phase7_Hierarchical_Bootstrap.csv",
    },
    {
      id: "T13",
      phase: "7",
      title: "Fitzpatrick Descriptive",
      file: "T13_Phase7_Fitzpatrick_Descriptive.csv",
    },
    {
      id: "T14",
      phase: "7",
      title: "Fitzpatrick Omnibus",
      file: "T14_Phase7_Fitzpatrick_Omnibus.csv",
    },
    {
      id: "T15",
      phase: "8",
      title: "Visual Audit",
      file: "T15_Phase8_Visual_Audit.csv",
    },
    {
      id: "T16",
      phase: "8",
      title: "Stability Associations",
      file: "T16_Phase8_Stability_Associations.csv",
    },
    {
      id: "T17",
      phase: "8",
      title: "Correctness Stability",
      file: "T17_Phase8_Correctness_Stability.csv",
    },
  ];

  /* -------------------------------------------------------
     2. GET PAGE ELEMENTS
     ------------------------------------------------------- */

  const tablesList = document.getElementById("tables-list");
  const statusElement = document.getElementById("tables-status");

  const filterButtons = document.querySelectorAll(
    ".table-phase-filters .phase-filter",
  );

  if (!tablesList || !statusElement) {
    console.error("Required Tables page elements were not found.");
    return;
  }

  let activePhase = "all";

  /* -------------------------------------------------------
     3. STATUS HELPERS
     ------------------------------------------------------- */

  function showStatus(message) {
    statusElement.textContent = message;
    statusElement.hidden = false;
  }

  function hideStatus() {
    statusElement.hidden = true;
  }

  /* -------------------------------------------------------
     4. CSV PARSER

     Handles:
     - Comma-separated fields
     - Quoted fields
     - Commas inside quotes
     - Double quotes inside fields
     - Line breaks inside quoted fields
     - Windows and Unix line endings
     - UTF-8 BOM
     ------------------------------------------------------- */

  function parseCSV(csvText) {
    const text = csvText.replace(/^\uFEFF/, "");

    const rows = [];

    let row = [];
    let field = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const character = text[i];

      if (character === '"') {
        if (insideQuotes && text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (character === "," && !insideQuotes) {
        row.push(field);
        field = "";
      } else if ((character === "\n" || character === "\r") && !insideQuotes) {
        row.push(field);

        if (row.some((value) => value.trim() !== "")) {
          rows.push(row);
        }

        row = [];
        field = "";

        if (character === "\r" && text[i + 1] === "\n") {
          i++;
        }
      } else {
        field += character;
      }
    }

    if (insideQuotes) {
      throw new Error("CSV contains an unclosed quoted field.");
    }

    row.push(field);

    if (row.some((value) => value.trim() !== "")) {
      rows.push(row);
    }

    return rows;
  }

  /* -------------------------------------------------------
     5. NUMERIC VALUE DETECTION

     This affects text alignment only.
     Displayed values remain unchanged.
     ------------------------------------------------------- */

  function isNumericValue(value) {
    const trimmed = value.trim();

    if (trimmed === "") {
      return false;
    }

    return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?%?$/.test(trimmed);
  }

  /* -------------------------------------------------------
     6. BUILD HTML TABLE
     ------------------------------------------------------- */

  function buildHTMLTable(csvRows, tableInfo) {
    if (csvRows.length === 0) {
      const emptyMessage = document.createElement("p");

      emptyMessage.className = "table-empty";
      emptyMessage.textContent =
        "This CSV file does not contain any table data.";

      return emptyMessage;
    }

    const headers = csvRows[0];
    const dataRows = csvRows.slice(1);

    // Ensure extra cells are never discarded if a row
    // contains more columns than the header.
    const columnCount = Math.max(...csvRows.map((row) => row.length));

    const scrollContainer = document.createElement("div");

    scrollContainer.className = "table-scroll";
    scrollContainer.setAttribute("role", "region");
    scrollContainer.setAttribute("tabindex", "0");
    scrollContainer.setAttribute(
      "aria-label",
      `${tableInfo.id}: ${tableInfo.title}`,
    );

    const table = document.createElement("table");

    table.className = "research-table";
    table.setAttribute("aria-label", `${tableInfo.id}: ${tableInfo.title}`);

    /* TABLE HEADER */

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    for (let column = 0; column < columnCount; column++) {
      const th = document.createElement("th");

      th.scope = "col";

      th.textContent = headers[column] || `Column ${column + 1}`;

      headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    /* TABLE BODY */

    const tbody = document.createElement("tbody");

    dataRows.forEach((rowData) => {
      const tr = document.createElement("tr");

      for (let column = 0; column < columnCount; column++) {
        const td = document.createElement("td");

        const value = rowData[column] ?? "";

        // textContent prevents CSV content from
        // being interpreted as HTML.
        td.textContent = value;

        if (isNumericValue(value)) {
          td.classList.add("is-numeric");
        }

        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    scrollContainer.appendChild(table);

    return scrollContainer;
  }

  /* -------------------------------------------------------
     7. BUILD TABLE CARD
     ------------------------------------------------------- */

  function createTableCard(tableInfo) {
    const card = document.createElement("article");

    card.className = "table-card";
    card.dataset.phase = tableInfo.phase;
    card.id = tableInfo.id.toLowerCase();

    /* CARD HEADER */

    const header = document.createElement("div");

    header.className = "table-card-header";

    const heading = document.createElement("div");

    heading.className = "table-card-heading";

    const code = document.createElement("span");

    code.className = "table-code";
    code.textContent = tableInfo.id;

    const title = document.createElement("h3");

    title.className = "table-card-title";
    title.textContent = tableInfo.title;

    heading.appendChild(code);
    heading.appendChild(title);

    const phaseLabel = document.createElement("span");

    phaseLabel.className = "table-phase";
    phaseLabel.textContent = `Phase ${tableInfo.phase}`;

    header.appendChild(heading);
    header.appendChild(phaseLabel);

    card.appendChild(header);

    return card;
  }

  /* -------------------------------------------------------
     8. LOAD ONE CSV FILE
     ------------------------------------------------------- */

  async function loadTable(tableInfo) {
    const card = createTableCard(tableInfo);

    const fileURL = TABLE_DIRECTORY + encodeURIComponent(tableInfo.file);

    try {
      const response = await fetch(fileURL);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const csvText = await response.text();

      const parsedRows = parseCSV(csvText);

      const htmlTable = buildHTMLTable(parsedRows, tableInfo);

      card.appendChild(htmlTable);

      if (parsedRows.length > 0) {
        const scrollHint = document.createElement("p");

        scrollHint.className = "table-scroll-hint";
        scrollHint.textContent = "Swipe horizontally to view all columns.";

        card.appendChild(scrollHint);
      }

      return {
        card,
        success: true,
      };
    } catch (error) {
      console.error(`Unable to load ${tableInfo.file}:`, error);

      const errorMessage = document.createElement("p");

      errorMessage.className = "table-error";

      errorMessage.textContent =
        `Unable to load ${tableInfo.id}. ` +
        `Check that ${tableInfo.file} exists in ` +
        "assets/data/tables/results/.";

      card.appendChild(errorMessage);

      return {
        card,
        success: false,
      };
    }
  }

  /* -------------------------------------------------------
     9. PHASE FILTERING
     ------------------------------------------------------- */

  function applyPhaseFilter() {
    const cards = tablesList.querySelectorAll(".table-card");

    cards.forEach((card) => {
      const shouldShow =
        activePhase === "all" || card.dataset.phase === activePhase;

      card.hidden = !shouldShow;
    });

    filterButtons.forEach((button) => {
      const selected = button.dataset.phase === activePhase;

      button.classList.toggle("is-active", selected);

      button.setAttribute("aria-pressed", String(selected));
    });
  }

  /* -------------------------------------------------------
     10. FILTER BUTTON EVENTS
     ------------------------------------------------------- */

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPhase = button.dataset.phase;

      if (!selectedPhase) {
        return;
      }

      activePhase = selectedPhase;

      applyPhaseFilter();
    });
  });

  /* -------------------------------------------------------
     11. LOAD ALL RESEARCH TABLES
     ------------------------------------------------------- */

  async function initializeTables() {
    showStatus("Loading 17 research tables…");

    const results = await Promise.all(
      TABLES.map((tableInfo) => loadTable(tableInfo)),
    );

    const fragment = document.createDocumentFragment();

    let failedCount = 0;

    results.forEach((result) => {
      fragment.appendChild(result.card);

      if (!result.success) {
        failedCount++;
      }
    });

    tablesList.appendChild(fragment);

    applyPhaseFilter();

    if (failedCount === 0) {
      hideStatus();
    } else {
      showStatus(
        `${failedCount} of ${TABLES.length} tables ` +
          "could not be loaded. See the messages below.",
      );
    }
  }

  initializeTables();
});
