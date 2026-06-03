(function () {
  var tours = {
    hunza: {
      title: "Hunza Valley Explorer",
      price: 19999,
      region: "Gilgit-Baltistan",
      destination: "Hunza",
      duration: "5 days / 4 nights",
      capacity: "Up to 8 guests",
      image: "assets/northern-areas.png",
      description:
        "Discover Hunza's dramatic mountain scenery, welcoming villages, historic forts, and turquoise lakes on a comfortable northern Pakistan escape.",
      highlights: [
        "Karimabad heritage walk and local bazaar",
        "Attabad Lake viewpoints and photo stops",
        "Eagle's Nest sunset over Rakaposhi and Ultar peaks",
      ],
      mapLocation: "Karimabad, Hunza, Gilgit-Baltistan",
      mapQuery: "Karimabad, Hunza, Gilgit-Baltistan, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 600 km from Islamabad",
      travelTime: "Approx. 12-14 hours by road",
      coordinates: { lat: 36.3167, lng: 74.65 },
      routeFactor: 1.85,
      avgSpeed: 48,
    },
    skardu: {
      title: "Skardu & Deosai Safari",
      price: 24999,
      region: "Gilgit-Baltistan",
      destination: "Skardu",
      duration: "7 days / 6 nights",
      capacity: "Up to 10 guests",
      image: "assets/northern-areas.png",
      description:
        "A scenic Skardu journey covering high-altitude plains, alpine lakes, and peaceful valley stays surrounded by the Karakoram mountains.",
      highlights: [
        "Deosai Plains wildlife and landscape drive",
        "Shangrila Resort and Upper Kachura Lake",
        "Satpara Lake and Skardu bazaar visit",
      ],
      mapLocation: "Skardu, Gilgit-Baltistan",
      mapQuery: "Skardu, Gilgit-Baltistan, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 640 km from Islamabad",
      travelTime: "Approx. 14-16 hours by road",
      coordinates: { lat: 35.2971, lng: 75.6333 },
      routeFactor: 1.8,
      avgSpeed: 45,
    },
    fairy: {
      title: "Fairy Meadows Trek",
      price: 14999,
      region: "Diamer",
      destination: "Nanga Parbat",
      duration: "4 days / 3 nights",
      capacity: "Up to 6 guests",
      image: "assets/hero-bg.png",
      description:
        "A short adventure trek to Fairy Meadows with forest trails, meadow camps, and unforgettable views of Nanga Parbat.",
      highlights: [
        "Jeep transfer from Raikot Bridge",
        "Fairy Meadows campsite and village walk",
        "Nanga Parbat sunrise and base camp viewpoints",
      ],
      mapLocation: "Fairy Meadows, Diamer",
      mapQuery: "Fairy Meadows, Diamer, Gilgit-Baltistan, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 450 km from Islamabad",
      travelTime: "Approx. 10-12 hours including jeep transfer",
      coordinates: { lat: 35.3876, lng: 74.5783 },
      routeFactor: 1.8,
      avgSpeed: 42,
      transferNote: "including jeep transfer",
    },
    swat: {
      title: "Swat Valley Cultural Tour",
      price: 19999,
      region: "Khyber Pakhtunkhwa",
      destination: "Swat",
      duration: "6 days / 5 nights",
      capacity: "Up to 12 guests",
      image: "assets/northern-areas.png",
      description:
        "Experience Swat Valley's green mountains, riverside towns, cultural heritage, and family-friendly sightseeing routes.",
      highlights: [
        "Malam Jabba hill station and chairlift area",
        "Kalam Valley and Mahodand Lake excursion",
        "Swat museum, local food, and cultural stops",
      ],
      mapLocation: "Mingora, Swat Valley",
      mapQuery: "Mingora, Swat, Khyber Pakhtunkhwa, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 250 km from Islamabad",
      travelTime: "Approx. 4-5 hours by road",
      coordinates: { lat: 34.7717, lng: 72.3606 },
      routeFactor: 1.35,
      avgSpeed: 55,
    },
    naltar: {
      title: "Naltar & Khunjerab Pass",
      price: 24999,
      region: "Gilgit-Baltistan",
      destination: "Naltar",
      duration: "8 days / 7 nights",
      capacity: "Up to 8 guests",
      image: "assets/hero-bg.png",
      description:
        "A highland route through Naltar's colorful lakes and onward to the iconic Khunjerab Pass near the Pakistan-China border.",
      highlights: [
        "Naltar Valley lakes and forest views",
        "Khunjerab Pass day trip",
        "Gilgit, Passu cones, and Karakoram Highway stops",
      ],
      mapLocation: "Naltar Valley, Gilgit-Baltistan",
      mapQuery: "Naltar Valley, Gilgit-Baltistan, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 560 km from Islamabad",
      travelTime: "Approx. 12-14 hours by road",
      coordinates: { lat: 36.1626, lng: 74.1928 },
      routeFactor: 1.85,
      avgSpeed: 48,
    },
    chitral: {
      title: "Luxury Chitral & Kalash",
      price: 29999,
      region: "Khyber Pakhtunkhwa",
      destination: "Chitral",
      duration: "9 days / 8 nights",
      capacity: "Up to 6 guests",
      image: "assets/northern-areas.png",
      description:
        "A premium Chitral and Kalash itinerary with cultural valley visits, private guiding, and relaxed stays in mountain surroundings.",
      highlights: [
        "Kalash valley cultural experience",
        "Chitral Fort and Shahi Mosque visit",
        "Private guide, scenic drives, and boutique stays",
      ],
      mapLocation: "Kalash Valley, Chitral",
      mapQuery: "Kalash Valley, Chitral, Khyber Pakhtunkhwa, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 420 km from Islamabad",
      travelTime: "Approx. 10-12 hours by road",
      coordinates: { lat: 35.6696, lng: 71.7304 },
      routeFactor: 1.65,
      avgSpeed: 42,
    },
    murree: {
      title: "Murree Weekend Escape",
      price: 14999,
      region: "Punjab",
      destination: "Murree",
      duration: "3 days / 2 nights",
      capacity: "Up to 15 guests",
      image: "assets/hero-bg.png",
      description:
        "A quick hill-station getaway for families and groups, with fresh mountain air, easy road access, and classic Murree sightseeing.",
      highlights: [
        "Mall Road evening walk",
        "Patriata chairlift and cable car area",
        "Nathia Gali and hilltop viewpoints",
      ],
      mapLocation: "Murree, Punjab",
      mapQuery: "Murree, Punjab, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 65 km from Islamabad",
      travelTime: "Approx. 1.5-2 hours by road",
      coordinates: { lat: 33.907, lng: 73.3943 },
      routeFactor: 1.25,
      avgSpeed: 45,
    },
    naran: {
      title: "Kaghan & Naran Odyssey",
      price: 14999,
      region: "Khyber Pakhtunkhwa",
      destination: "Naran",
      duration: "6 days / 5 nights",
      capacity: "Up to 10 guests",
      image: "assets/northern-areas.png",
      description:
        "Travel through Kaghan and Naran for lakes, mountain passes, river valleys, and cool summer scenery.",
      highlights: [
        "Lake Saif-ul-Malook excursion",
        "Babusar Pass viewpoint drive",
        "Lulusar Lake, Kunhar River, and Naran bazaar",
      ],
      mapLocation: "Naran, Kaghan Valley",
      mapQuery: "Naran, Kaghan Valley, Khyber Pakhtunkhwa, Pakistan",
      routeStart: "Islamabad, Pakistan",
      distance: "Approx. 280 km from Islamabad",
      travelTime: "Approx. 6-7 hours by road",
      coordinates: { lat: 34.9087, lng: 73.6507 },
      routeFactor: 1.45,
      avgSpeed: 50,
    },
  };

  var cityCoordinates = {
    islamabad: { name: "Islamabad", query: "Islamabad, Pakistan", lat: 33.6844, lng: 73.0479 },
    lahore: { name: "Lahore", query: "Lahore, Pakistan", lat: 31.5204, lng: 74.3587 },
    karachi: { name: "Karachi", query: "Karachi, Pakistan", lat: 24.8607, lng: 67.0011 },
    rawalpindi: { name: "Rawalpindi", query: "Rawalpindi, Pakistan", lat: 33.5651, lng: 73.0169 },
    peshawar: { name: "Peshawar", query: "Peshawar, Pakistan", lat: 34.0151, lng: 71.5249 },
    faisalabad: { name: "Faisalabad", query: "Faisalabad, Pakistan", lat: 31.4504, lng: 73.135 },
    multan: { name: "Multan", query: "Multan, Pakistan", lat: 30.1575, lng: 71.5249 },
    quetta: { name: "Quetta", query: "Quetta, Pakistan", lat: 30.1798, lng: 66.975 },
    sialkot: { name: "Sialkot", query: "Sialkot, Pakistan", lat: 32.4945, lng: 74.5229 },
    gujranwala: { name: "Gujranwala", query: "Gujranwala, Pakistan", lat: 32.1877, lng: 74.1945 },
    hyderabad: { name: "Hyderabad", query: "Hyderabad, Sindh, Pakistan", lat: 25.396, lng: 68.3578 },
    sukkur: { name: "Sukkur", query: "Sukkur, Pakistan", lat: 27.7244, lng: 68.8228 },
    bahawalpur: { name: "Bahawalpur", query: "Bahawalpur, Pakistan", lat: 29.3956, lng: 71.6836 },
    abbottabad: { name: "Abbottabad", query: "Abbottabad, Pakistan", lat: 34.1688, lng: 73.2215 },
    gilgit: { name: "Gilgit", query: "Gilgit, Pakistan", lat: 35.9208, lng: 74.3141 },
    skardu: { name: "Skardu", query: "Skardu, Pakistan", lat: 35.2971, lng: 75.6333 },
    mingora: { name: "Mingora", query: "Mingora, Swat, Pakistan", lat: 34.7717, lng: 72.3606 },
    muzaffarabad: { name: "Muzaffarabad", query: "Muzaffarabad, Pakistan", lat: 34.37, lng: 73.471 },
  };

  function setText(id, value) {
    var element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function formatMoney(value) {
    return "PKR " + value.toLocaleString("en-US");
  }

  function getMapEmbedUrl(query) {
    return "https://www.google.com/maps?q=" + encodeURIComponent(query) + "&output=embed";
  }

  function getDirectionsUrl(origin, destination) {
    return (
      "https://www.google.com/maps/dir/?api=1&origin=" +
      encodeURIComponent(origin) +
      "&destination=" +
      encodeURIComponent(destination) +
      "&travelmode=driving"
    );
  }

  function normalizeCity(value) {
    return value
      .toLowerCase()
      .replace(/,\s*pakistan/g, "")
      .replace(/[^a-z\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getOrigin(value) {
    var raw = (value || "").trim() || "Islamabad";
    var key = normalizeCity(raw);
    var known = cityCoordinates[key];
    if (known) {
      return Object.assign({ key: key, known: true }, known);
    }
    return {
      key: key,
      known: false,
      name: raw,
      query: raw.toLowerCase().indexOf("pakistan") === -1 ? raw + ", Pakistan" : raw,
    };
  }

  function getCoordinateOrigin(coords) {
    var lat = Number(coords.lat);
    var lng = Number(coords.lng);
    return {
      key: "current-location",
      known: true,
      name: "your current location",
      query: lat.toFixed(6) + "," + lng.toFixed(6),
      lat: lat,
      lng: lng,
      fromCurrentLocation: true,
    };
  }

  function getDistanceKm(start, end) {
    var radiusKm = 6371;
    var dLat = ((end.lat - start.lat) * Math.PI) / 180;
    var dLng = ((end.lng - start.lng) * Math.PI) / 180;
    var startLat = (start.lat * Math.PI) / 180;
    var endLat = (end.lat * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(startLat) *
        Math.cos(endLat) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radiusKm * c;
  }

  function roundDistance(value) {
    if (value < 100) return Math.round(value / 5) * 5;
    return Math.round(value / 10) * 10;
  }

  function formatTravelHours(hours, note) {
    var lower = Math.max(1, Math.floor(hours));
    var upper = Math.max(lower + 1, Math.ceil(hours + 0.75));
    var text = "Approx. " + lower + "-" + upper + " hours by road";
    return note ? text + " " + note : text;
  }

  function getRouteDetails(originValue, coords) {
    var origin = coords ? getCoordinateOrigin(coords) : getOrigin(originValue);
    var directions = getDirectionsUrl(origin.query, tour.mapQuery);
    var mapQuery = origin.query + " to " + tour.mapQuery;

    if (!coords && origin.key === "islamabad") {
      return {
        origin: origin,
        distance: tour.distance,
        travelTime: tour.travelTime,
        directionsUrl: directions,
        mapQuery: mapQuery,
      };
    }

    if (origin.known && tour.coordinates) {
      var distanceKm = roundDistance(
        getDistanceKm(origin, tour.coordinates) * (tour.routeFactor || 1.5)
      );
      var hours = distanceKm / (tour.avgSpeed || 50);
      var originLabel = origin.fromCurrentLocation ? "your current location" : origin.name;
      return {
        origin: origin,
        distance: "Approx. " + distanceKm.toLocaleString("en-US") + " km from " + originLabel,
        travelTime: formatTravelHours(hours, tour.transferNote),
        directionsUrl: directions,
        mapQuery: mapQuery,
      };
    }

    return {
      origin: origin,
      distance: "Open Google Maps for live distance from " + origin.name,
      travelTime: "Google Maps will calculate the live travel time",
      directionsUrl: directions,
      mapQuery: mapQuery,
    };
  }

  var params = new URLSearchParams(window.location.search);
  var tour = tours[params.get("tour")] || tours.hunza;
  var guestInput = document.getElementById("booking-guests");
  var dateInput = document.getElementById("booking-date");
  var originInput = document.getElementById("travel-from");
  var locateButton = document.getElementById("use-current-location");
  var locationStatus = document.getElementById("location-status");
  var total = document.getElementById("booking-total");
  var image = document.getElementById("booking-image");
  var form = document.querySelector(".booking-form");
  var tourInput = document.getElementById("booking-tour-input");
  var regionInput = document.getElementById("booking-region-input");
  var destinationInput = document.getElementById("booking-destination-input");
  var durationInput = document.getElementById("booking-duration-input");
  var descriptionInput = document.getElementById("booking-description-input");
  var highlightsInput = document.getElementById("booking-highlights-input");
  var totalInput = document.getElementById("booking-total-input");
  var routeStartInput = document.getElementById("booking-route-start-input");
  var distanceInput = document.getElementById("booking-distance-input");
  var travelTimeInput = document.getElementById("booking-travel-time-input");
  var mapLinkInput = document.getElementById("booking-map-link-input");
  var latitudeInput = document.getElementById("booking-latitude-input");
  var longitudeInput = document.getElementById("booking-longitude-input");
  var mapFrame = document.getElementById("booking-map-frame");
  var mapLink = document.getElementById("booking-map-link");
  var modal = document.getElementById("booking-modal");
  var modalClose = document.getElementById("booking-modal-close");
  var routeDetails = getRouteDetails(originInput ? originInput.value : tour.routeStart);
  var currentCoords = null;

  setText("booking-title", tour.title);
  setText("booking-region", tour.region);
  setText("booking-destination", tour.destination);
  setText("booking-duration", tour.duration);
  setText("booking-capacity", tour.capacity);
  setText("booking-price", formatMoney(tour.price) + " / person");
  setText("booking-description", tour.description);

  var highlightsList = document.getElementById("booking-highlights");
  if (highlightsList) {
    highlightsList.innerHTML = "";
    tour.highlights.forEach(function (highlight) {
      var item = document.createElement("li");
      item.textContent = highlight;
      highlightsList.appendChild(item);
    });
  }

  if (image) {
    image.src = tour.image;
    image.alt = tour.title;
  }

  function syncTourInputs() {
    if (tourInput) tourInput.value = tour.title;
    if (regionInput) regionInput.value = tour.region;
    if (destinationInput) destinationInput.value = tour.destination;
    if (durationInput) durationInput.value = tour.duration;
    if (descriptionInput) descriptionInput.value = tour.description;
    if (highlightsInput) highlightsInput.value = tour.highlights.join("; ");
    if (routeStartInput) routeStartInput.value = routeDetails.origin.query;
    if (distanceInput) distanceInput.value = routeDetails.distance;
    if (travelTimeInput) travelTimeInput.value = routeDetails.travelTime;
    if (mapLinkInput) mapLinkInput.value = routeDetails.directionsUrl;
    if (latitudeInput) latitudeInput.value = currentCoords ? String(currentCoords.lat) : "";
    if (longitudeInput) longitudeInput.value = currentCoords ? String(currentCoords.lng) : "";
  }

  function updateRoute(originValue, coords) {
    routeDetails = getRouteDetails(originValue, coords);
    setText("booking-map-location", tour.mapLocation);
    setText("booking-distance", routeDetails.distance);
    setText("booking-travel-time", routeDetails.travelTime);

    if (mapFrame) {
      mapFrame.src = getMapEmbedUrl(routeDetails.mapQuery);
      mapFrame.title = "Google route from " + routeDetails.origin.name + " to " + tour.title;
    }

    if (mapLink) {
      mapLink.href = routeDetails.directionsUrl;
    }

    syncTourInputs();
  }

  function setLocationStatus(message, isError) {
    if (!locationStatus) return;
    locationStatus.textContent = message;
    locationStatus.classList.toggle("is-error", Boolean(isError));
  }

  function clearCurrentLocation() {
    currentCoords = null;
    if (latitudeInput) latitudeInput.value = "";
    if (longitudeInput) longitudeInput.value = "";
  }

  function requestCurrentLocation() {
    if (!("geolocation" in navigator)) {
      setLocationStatus("Location detection is not supported in this browser.", true);
      return;
    }

    setLocationStatus("Detecting your current location...");
    if (locateButton) locateButton.disabled = true;

    navigator.geolocation.getCurrentPosition(
      function (position) {
        currentCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        if (originInput) originInput.value = "Current location";
        updateRoute("Current location", currentCoords);
        setLocationStatus("Current location detected. Distance and travel time updated.");
        if (locateButton) locateButton.disabled = false;
      },
      function () {
        clearCurrentLocation();
        updateRoute(originInput ? originInput.value : tour.routeStart);
        setLocationStatus("Location access was not allowed. Enter your city manually.", true);
        if (locateButton) locateButton.disabled = false;
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 600000,
      }
    );
  }

  if (originInput && params.get("travel_from")) {
    originInput.value = params.get("travel_from");
  }

  if (originInput) {
    originInput.addEventListener("input", function () {
      clearCurrentLocation();
      updateRoute(originInput.value);
    });

    originInput.addEventListener("change", function () {
      clearCurrentLocation();
      updateRoute(originInput.value);
    });
  }

  updateRoute(originInput ? originInput.value : tour.routeStart);

  if (locateButton) {
    locateButton.addEventListener("click", requestCurrentLocation);
  }

  if (!params.get("travel_from")) {
    window.setTimeout(requestCurrentLocation, 600);
  }

  if (dateInput && params.get("checkin")) {
    dateInput.value = params.get("checkin");
  }

  if (guestInput) {
    var guestCount = parseInt(params.get("guest_count") || params.get("guests") || "1", 10);
    guestInput.value = isNaN(guestCount) || guestCount < 1 ? "1" : String(guestCount);
  }

  function updateTotal() {
    var count = parseInt(guestInput ? guestInput.value : "1", 10);
    if (isNaN(count) || count < 1) count = 1;
    var totalText = formatMoney(count * tour.price);
    if (total) total.textContent = totalText;
    if (totalInput) totalInput.value = totalText;
  }

  if (guestInput) {
    guestInput.addEventListener("input", updateTotal);
  }

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      var guestCount = parseInt(guestInput ? guestInput.value : "1", 10);
      if (isNaN(guestCount) || guestCount < 1) guestCount = 1;
      if (totalInput) totalInput.value = formatMoney(guestCount * tour.price);

      var submitButton = form.querySelector(".booking-submit");
      var originalText = submitButton ? submitButton.textContent : "";

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      try {
        await fetch("https://formsubmit.co/ajax/safareshimal@gmail.com", {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        });

        if (modal) {
          modal.hidden = false;
        }
        form.reset();
        if (currentCoords && originInput) {
          originInput.value = "Current location";
          updateRoute("Current location", currentCoords);
        } else {
          if (originInput) originInput.value = "Islamabad";
          updateRoute(originInput ? originInput.value : tour.routeStart);
        }
        updateTotal();
      } catch (error) {
        alert("Booking could not be sent. Please try again.");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener("click", function () {
      modal.hidden = true;
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.hidden = true;
      }
    });
  }

  updateTotal();
})();
