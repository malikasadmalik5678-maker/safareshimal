(function () {
  var slides = [
    {
      image: "assets/northern-areas.png",
      title: "Summer Time in Beach",
      alt: "Green mountain meadow with snowy peaks",
    },
    {
      image: "assets/hero-bg.png",
      title: "Northern Lakes Escape",
      alt: "Snowy mountain reflected in a calm lake",
    },
    {
      image: "assets/0-583.png",
      title: "Fairy Meadows Adventure",
      alt: "Bright green meadow below snow covered mountains",
    },
    {
      image: "assets/hero-bg.png",
      title: "Mountain Paradise Tour",
      alt: "Snowy mountain reflected in a peaceful lake",
    },
  ];

  var slider = document.querySelector("[data-vacation-slider]");
  if (!slider) return;

  var image = document.getElementById("vacation-slide-image");
  var nextImage = document.getElementById("vacation-slide-next-image");
  var title = document.getElementById("vacation-slide-title");
  var previous = slider.querySelector("[data-slide-prev]");
  var next = slider.querySelector("[data-slide-next]");
  var current = 0;
  var autoplayDelay = 4000;
  var slideDuration = 620;
  var autoplayTimer = null;
  var slideTimer = null;
  var isSliding = false;

  function setImage(element, slide) {
    if (element) {
      element.src = slide.image;
      element.alt = slide.alt;
    }
  }

  function setTransition(enabled) {
    if (image) {
      image.style.transition = enabled ? "" : "none";
    }
    if (nextImage) {
      nextImage.style.transition = enabled ? "" : "none";
    }
  }

  function renderSlide() {
    var slide = slides[current];
    setImage(image, slide);
    if (title) {
      title.textContent = slide.title;
    }
  }

  function resetSlidePosition() {
    setTransition(false);
    if (image) {
      image.style.transform = "translateX(0)";
    }
    if (nextImage) {
      nextImage.style.transform = "translateX(100%)";
    }
    window.requestAnimationFrame(function () {
      setTransition(true);
    });
  }

  function showSlide(index, animate, direction) {
    var nextIndex = (index + slides.length) % slides.length;
    var incomingOffset = direction === "previous" ? "-100%" : "100%";
    var outgoingOffset = direction === "previous" ? "100%" : "-100%";

    if (!animate || !image || !nextImage) {
      current = nextIndex;
      renderSlide();
      resetSlidePosition();
      return;
    }

    if (nextIndex === current || isSliding) {
      return;
    }

    clearTimeout(slideTimer);
    isSliding = true;
    setTransition(false);
    setImage(nextImage, slides[nextIndex]);
    image.style.transform = "translateX(0)";
    nextImage.style.transform = "translateX(" + incomingOffset + ")";
    nextImage.offsetWidth;

    if (title) {
      title.textContent = slides[nextIndex].title;
    }

    setTransition(true);
    window.requestAnimationFrame(function () {
      image.style.transform = "translateX(" + outgoingOffset + ")";
      nextImage.style.transform = "translateX(0)";
    });

    slideTimer = window.setTimeout(function () {
      current = nextIndex;
      renderSlide();
      resetSlidePosition();
      isSliding = false;
    }, slideDuration);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = window.setInterval(function () {
      showSlide(current + 1, true, "next");
    }, autoplayDelay);
  }

  function resetAutoplay() {
    startAutoplay();
  }

  if (previous) {
    previous.addEventListener("click", function () {
      showSlide(current - 1, true, "previous");
      resetAutoplay();
    });
  }

  if (next) {
    next.addEventListener("click", function () {
      showSlide(current + 1, true, "next");
      resetAutoplay();
    });
  }

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopAutoplay();
      return;
    }
    startAutoplay();
  });

  showSlide(0, false);
  startAutoplay();
})();
