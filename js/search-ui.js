(function () {
  var destinationOptions = [
    ["Hunza Valley", "Gilgit-Baltistan"],
    ["Skardu", "Gilgit-Baltistan"],
    ["Fairy Meadows", "Diamer"],
    ["Swat Valley", "Khyber Pakhtunkhwa"],
    ["Naran Kaghan", "Khyber Pakhtunkhwa"],
    ["Naltar", "Gilgit-Baltistan"],
    ["Chitral", "Khyber Pakhtunkhwa"],
    ["Murree", "Punjab"],
  ];

  var guestOptions = [
    [1, "Solo"],
    [2, "Couple"],
    [4, "Family"],
    [6, "Group"],
    [8, "Large group"],
    [10, "Tour group"],
  ];

  function closePanels(exceptPanel) {
    document.querySelectorAll(".dropdown-panel").forEach(function (panel) {
      if (panel !== exceptPanel) {
        panel.hidden = true;
      }
    });

    document.querySelectorAll("[aria-expanded='true']").forEach(function (input) {
      if (!exceptPanel || input.getAttribute("aria-controls") !== exceptPanel.id) {
        input.setAttribute("aria-expanded", "false");
      }
    });
  }

  function ensureDestinationPanel(field, input) {
    var panel = field.querySelector(".dropdown-panel");
    if (panel) return panel;

    panel = document.createElement("ul");
    panel.className = "dropdown-panel";
    panel.id = input.id + "-options";
    panel.setAttribute("role", "listbox");
    panel.setAttribute("aria-label", "Destination options");
    panel.hidden = true;

    destinationOptions.forEach(function (option) {
      var item = document.createElement("li");
      item.setAttribute("role", "option");
      item.dataset.value = option[0];
      item.dataset.region = option[1];
      item.innerHTML =
        '<span class="dropdown-place">' +
        option[0] +
        '</span><span class="dropdown-region">' +
        option[1] +
        "</span>";
      panel.appendChild(item);
    });

    input.setAttribute("aria-controls", panel.id);
    input.setAttribute("aria-expanded", "false");
    field.appendChild(panel);
    return panel;
  }

  function ensureGuestPanel(field, input, hiddenInput) {
    var panel = field.querySelector(".dropdown-panel");
    if (panel) return panel;

    panel = document.createElement("ul");
    panel.className = "dropdown-panel dropdown-panel--guests";
    panel.id = input.id + "-options";
    panel.setAttribute("role", "listbox");
    panel.setAttribute("aria-label", "Guest options");
    panel.hidden = true;
    panel.innerHTML =
      '<li class="dropdown-header"><span>Guests</span><span class="dropdown-header-rate">Per booking</span></li>';

    guestOptions.forEach(function (option) {
      var count = option[0];
      var label = count === 1 ? "1 Guest" : count + " Guests";
      var item = document.createElement("li");
      item.setAttribute("role", "option");
      item.dataset.value = String(count);
      item.dataset.label = label;
      item.innerHTML =
        '<span class="dropdown-place">' +
        label +
        '</span><span class="dropdown-price">' +
        option[1] +
        "</span>";
      panel.appendChild(item);
    });

    input.setAttribute("aria-controls", panel.id);
    input.setAttribute("aria-expanded", "false");
    if (hiddenInput) hiddenInput.value = hiddenInput.value || "";
    field.appendChild(panel);
    return panel;
  }

  function openPanel(input, panel) {
    closePanels(panel);
    panel.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }

  function initDestinationField(field) {
    var input = field.querySelector("input[name='destination']");
    if (!input) return;

    var panel = ensureDestinationPanel(field, input);

    input.addEventListener("focus", function () {
      openPanel(input, panel);
    });

    input.addEventListener("input", function () {
      var query = input.value.trim().toLowerCase();
      var shown = 0;

      panel.querySelectorAll("li[role='option']").forEach(function (item) {
        var text = (item.dataset.value + " " + item.dataset.region).toLowerCase();
        var match = !query || text.indexOf(query) !== -1;
        item.hidden = !match;
        if (match) shown++;
      });

      var empty = panel.querySelector(".dropdown-empty");
      if (!empty) {
        empty = document.createElement("li");
        empty.className = "dropdown-empty";
        empty.textContent = "No destinations found";
        panel.appendChild(empty);
      }
      empty.hidden = shown !== 0;
      openPanel(input, panel);
    });

    panel.addEventListener("click", function (event) {
      var item = event.target.closest("li[role='option']");
      if (!item) return;
      input.value = item.dataset.value || "";
      panel.hidden = true;
      input.setAttribute("aria-expanded", "false");
    });
  }

  function initDateField(field) {
    var input = field.querySelector("input[name='checkin']");
    if (!input) return;

    if (input.type !== "date") {
      input.type = "date";
    }

    var wrapper = input.closest(".date-wrap");
    if (!wrapper) {
      wrapper = document.createElement("span");
      wrapper.className = "date-wrap";
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);
    }

    function sync() {
      wrapper.classList.toggle("has-value", Boolean(input.value));
    }

    input.addEventListener("change", sync);
    input.addEventListener("input", sync);
    sync();
  }

  function initGuestField(field) {
    var input = field.querySelector("input[name='guests']");
    var hiddenInput = field.querySelector("input[name='guest_count']");
    if (!input) return;

    var panel = ensureGuestPanel(field, input, hiddenInput);
    input.readOnly = true;

    input.addEventListener("focus", function () {
      openPanel(input, panel);
    });

    input.addEventListener("click", function () {
      openPanel(input, panel);
    });

    panel.addEventListener("click", function (event) {
      var item = event.target.closest("li[role='option']");
      if (!item) return;

      var count = item.dataset.value || "";
      input.value = item.dataset.label || "";
      input.dataset.guestCount = count;
      if (hiddenInput) hiddenInput.value = count;
      panel.hidden = true;
      input.setAttribute("aria-expanded", "false");
    });
  }

  function syncFormSubmit(form) {
    form.addEventListener("submit", function () {
      var guests = form.querySelector("input[name='guests']");
      var guestCount = form.querySelector("input[name='guest_count']");
      if (guests && guestCount && !guestCount.value) {
        var match = guests.value.match(/\d+/);
        guestCount.value = match ? match[0] : "";
      }
    });
  }

  function initMenuButton() {
    var button = document.querySelector(".menu-button");
    var panel = document.getElementById(button ? button.getAttribute("aria-controls") : "");
    if (!button || !panel || button.dataset.menuReady === "true") return;

    button.dataset.menuReady = "true";

    function closeMenu() {
      panel.hidden = true;
      button.setAttribute("aria-expanded", "false");
    }

    function toggleMenu() {
      var isOpen = !panel.hidden;
      panel.hidden = isOpen;
      button.setAttribute("aria-expanded", isOpen ? "false" : "true");
    }

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMenu();
    });

    panel.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".menu-wrap")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  window.initSearchForms = function () {
    document.querySelectorAll(".search-form").forEach(function (form) {
      if (form.dataset.searchUiReady === "true") return;
      form.dataset.searchUiReady = "true";

      form.querySelectorAll(".search-field").forEach(function (field) {
        if (field.querySelector("input[name='destination']")) {
          field.classList.add("search-field--dropdown", "field-dropdown");
          initDestinationField(field);
        }
        if (field.querySelector("input[name='checkin']")) {
          field.classList.add("search-field--date");
          initDateField(field);
        }
        if (field.querySelector("input[name='guests']")) {
          field.classList.add("search-field--dropdown", "search-field--guests", "field-dropdown");
          initGuestField(field);
        }
      });

      syncFormSubmit(form);
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".field-dropdown")) {
        closePanels();
      }
    });

    initMenuButton();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.initSearchForms);
  } else {
    window.initSearchForms();
  }
})();
