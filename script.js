document.addEventListener("DOMContentLoaded", function () {
  // --- Hero Section Carousel Logic  ---
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active-slide");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active-slide");
  }

  slides[currentSlide].classList.add("active-slide");
  setInterval(showNextSlide, 5000);

  // --- Dropdown Menu Logic (FIXED: Mobile Click persistence) ---
  const dropdowns = document.querySelectorAll(".dropdown");
  const navLinks = document.getElementById("nav-links");
  const menuToggle = document.getElementById("menu-toggle");

  const MOBILE_BREAKPOINT = 1024;

  dropdowns.forEach((dropdown) => {
    const dropdownLink = dropdown.querySelector("a");

    dropdown.addEventListener("mouseenter", function (event) {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        this.classList.add("show-dropdown");
        // Close other dropdown wen one of the dropdown is clicked
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== this) {
            otherDropdown.classList.remove("show-dropdown");
          }
        });
      }
    });

// ===============================
// Search Functionality Script
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search-icon a");
  const searchBox = document.getElementById("search-box");
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (!searchIcon || !searchBox || !searchBtn || !searchInput || !searchResults) {
    console.error("❌ Search elements not found in DOM.");
    return;
  }

  // ✅ Toggle search box
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchBox.classList.toggle("hidden");
    if (!searchBox.classList.contains("hidden")) {
      searchInput.focus();
    }
  });

  // ✅ Fetch results from DuckDuckGo API
  async function fetchSearchResults(query) {
    searchResults.innerHTML = "<p>🔎 Searching...</p>";
    try {
      const response = await fetch(
        `https://api.duckduckgo.com/?q=${encodeURIComponent(
          query
        )}&format=json&pretty=1`
      );
      const data = await response.json();

      if (data.RelatedTopics && data.RelatedTopics.length > 0) {
        let html = "<ul>";
        data.RelatedTopics.slice(0, 5).forEach((item) => {
          if (item.Text && item.FirstURL) {
            html += `<li><a href="${item.FirstURL}" target="_blank">${item.Text}</a></li>`;
          }
        });
        html += "</ul>";
        searchResults.innerHTML = html;
      } else {
        searchResults.innerHTML = "<p>No results found.</p>";
      }
    } catch (error) {
      searchResults.innerHTML = "<p>⚠️ Error fetching results.</p>";
      console.error("Search Error:", error);
    }
  }

  // ✅ Handle search button click
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      fetchSearchResults(query);
    } else {
      searchResults.innerHTML = "<p>⚠️ Please enter a search term.</p>";
    }
  });

  // ✅ Press Enter to search
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBtn.click();
    }
  });
});


    dropdown.addEventListener("mouseleave", function (event) {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        this.classList.remove("show-dropdown");
      }
    });

    dropdownLink.addEventListener("click", function (event) {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        const subMenu = dropdown.querySelector(".dropdown-menu");

        if (subMenu && subMenu.children.length > 0) {
          event.preventDefault();
        }

        dropdown.classList.toggle("show-dropdown");

        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("show-dropdown");
          }
        });
      }
    });
  });


  window.addEventListener("click", function (event) {
    if (
      window.innerWidth > MOBILE_BREAKPOINT &&
      !event.target.closest(".dropdown")
    ) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show-dropdown");
      });
    }
  });

  // --- Mobile Menu Toggle (Hamburger/Cross Icon) ---
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // --- Close Mobile Menu on Sub-Link Click (After navigating) ---
  const navLinksList = document.querySelectorAll("#nav-links a");
  navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
      // Check if the menu is open AND it's a mobile size
      if (
        window.innerWidth <= MOBILE_BREAKPOINT &&
        navLinks.classList.contains("active")
      ) {
        if (link.closest(".dropdown-menu")) {
          setTimeout(() => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            dropdowns.forEach((dropdown) => {
              dropdown.classList.remove("show-dropdown");
            });
          }, 50);
        }
      }
    });
  });

  // --- Hero text animationnnnnn
  window.addEventListener("load", () => {
    document.querySelector(".hero h1").style.opacity = "1";
    document.querySelector(".hero h1").style.transform = "translateY(0)";

    document.querySelector(".hero-sectors").style.opacity = "1";
    document.querySelector(".hero-sectors").style.transform = "translateY(0)";
  });
});

// About us section
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".image-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// ================================
// Core Values Auto-Scroll + Buttons
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const valuesGrid = document.querySelector(".values-grid");
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");
  const valueCards = document.querySelectorAll(".value-card");

  if (!valuesGrid || valueCards.length === 0) return;

  let autoScrollInterval;

  // Scroll function (always one card at a time)
  const scrollCards = (direction) => {
    const cardWidth = valueCards[0].offsetWidth + 20; // card + gap
    const scrollAmount = cardWidth; // 1 card for both desktop & mobile

    if (direction === "next") {
      valuesGrid.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      valuesGrid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll function
  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
      scrollCards("next");
      if (
        valuesGrid.scrollLeft + valuesGrid.clientWidth >=
        valuesGrid.scrollWidth
      ) {
        valuesGrid.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000); // every 3s
  };

  const stopAutoScroll = () => clearInterval(autoScrollInterval);

  // Button click events
  prevButton.addEventListener("click", () => {
    stopAutoScroll();
    scrollCards("prev");
    startAutoScroll();
  });

  nextButton.addEventListener("click", () => {
    stopAutoScroll();
    scrollCards("next");
    startAutoScroll();
  });

  // Pause auto-scroll on hover
  valuesGrid.addEventListener("mouseenter", stopAutoScroll);
  valuesGrid.addEventListener("mouseleave", startAutoScroll);

  // Start auto scroll
  startAutoScroll();
});


// Buiikding sustainable section

// Add simple interactivity
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    alert("Redirecting to our Goal & SDG page...");
    // window.location.href = "goals.html";
  });
}

// Animation effecr when section enter
const section = document.querySelector(".sustainable-section");

if (section) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("visible");
      }
    });
  });

  observer.observe(section);
}

// footer

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".signup-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevents the page from reloading on form submission

      const firstName = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;

      console.log("Form Submission Details:");
      console.log(`First Name: ${firstName}`);
      console.log(`Email: ${email}`);

      alert("Thank you for subscribing!!!!!");
    });
  }
});
