/**
 * Classic Store Application Logic
 * Est. 1996 - Thirukoilur
 * Handcrafted Vanilla JS for state management, catalog filtering, and WhatsApp integrations.
 */

// Configuration
const WHATSAPP_NUMBER = "919443261234"; // Classic Store's phone number (with country code, no + or spaces)

// Product Database
const products = [
  // Teddy Bears Category
  {
    id: "teddy-giant",
    name: "Jumbo Huggable Teddy Bear (4 Feet)",
    category: "teddies",
    price: 1899,
    description: "Ultra-soft plush jumbo teddy bear in rich golden-brown. Filled with premium hypoallergenic cotton, perfect for big hugs.",
    image: "assets/images/teddy.png",
    badge: "Best Seller"
  },
  {
    id: "teddy-classic",
    name: "Classic Vintage Bow Bear",
    category: "teddies",
    price: 799,
    description: "Traditional soft teddy bear wearing a sophisticated satin bow. Elegant cream white fur with detailed velvet nose.",
    image: "assets/images/teddy.png",
    badge: "Since 1996"
  },
  {
    id: "teddy-couple",
    name: "Cozy Heart Couple Bears",
    category: "teddies",
    price: 1199,
    description: "A pair of miniature velvet teddy bears holding a soft crimson heart. Perfect for anniversaries and birthdays.",
    image: "assets/images/teddy.png",
    badge: "Anniversary Special"
  },
  
  // Toys Category
  {
    id: "toy-rccar",
    name: "High-Speed RC Drift Racer",
    category: "toys",
    price: 1499,
    description: "Rechargeable 1:16 scale remote control sports car. Features functional LED headlights and high-grip rubber drift tires.",
    image: "assets/images/hero.png",
    badge: "Trending"
  },
  {
    id: "toy-wooden",
    name: "Handcrafted Wooden Block Set",
    category: "toys",
    price: 649,
    description: "Eco-friendly, chemical-free pine wood blocks in natural finishes. Helps develop cognitive building skills in toddlers.",
    image: "assets/images/hero.png",
    badge: "Eco-Friendly"
  },
  {
    id: "toy-puzzle",
    name: "Interactive Space Expedition Puzzle",
    category: "toys",
    price: 499,
    description: "150-piece heavy-duty cardboard puzzle illustrating a beautiful solar system. Includes a glossy educational reference chart.",
    image: "assets/images/hero.png",
    badge: "Educational"
  },

  // Gifts Category
  {
    id: "gift-hamper",
    name: "Classic Delight Celebration Hamper",
    category: "gifts",
    price: 2499,
    description: "A gorgeous curated wicker basket filled with premium imported chocolates, soft plush keychain, and aromatic candles.",
    image: "assets/images/gift.png",
    badge: "Premium Gift"
  },
  {
    id: "gift-dome",
    name: "Enchanted LED Rose Dome",
    category: "gifts",
    price: 999,
    description: "A preserved red rose under a clear glass dome surrounded by warm micro-LED fairy lights. Runs on batteries.",
    image: "assets/images/gift.png",
    badge: "Romance Collection"
  },
  {
    id: "gift-music",
    name: "Vintage Carved Wooden Music Box",
    category: "gifts",
    price: 899,
    description: "Intricately hand-carved walnut music box playing a beautiful classic lullaby theme via mechanical wind-up.",
    image: "assets/images/gift.png",
    badge: "Collector's Item"
  }
];

// State Management
let currentFilter = "all";
let searchQuery = "";

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const menuToggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Order Form Elements
const orderItemSelect = document.getElementById("order-item");
const customerNameInput = document.getElementById("customer-name");
const wrappingRadios = document.querySelectorAll('input[name="wrapping"]');
const customMessageTextarea = document.getElementById("custom-message");
const priceEstimateEl = document.getElementById("price-estimate");
const btnSendOrder = document.getElementById("btn-send-order");

// Theme Switcher Initialization
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  if (theme === "dark") {
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  if (!menuToggleBtn || !navMenu) return;
  
  menuToggleBtn.addEventListener("click", () => {
    menuToggleBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  });
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggleBtn.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });
}

// Render Product Catalog
function renderCatalog() {
  if (!productsGrid) return;
  
  // Filter products
  const filtered = products.filter(product => {
    const matchesCategory = currentFilter === "all" || product.category === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Clear grid
  productsGrid.innerHTML = "";
  
  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products">
        <p>No beautiful items match your search. Try adjusting filters or keyword!</p>
      </div>
    `;
    return;
  }
  
  // Populate grid
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card fade-in-up";
    
    const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
    
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHTML}
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price-action">
          <span class="product-price">₹${product.price.toLocaleString("en-IN")}</span>
          <button class="card-btn" onclick="selectProductForOrder('${product.id}')" title="Inquire & Order" aria-label="Inquire and order this item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    productsGrid.appendChild(card);
  });
  
  // Re-observe animations
  setupAnimations();
}

// Select Product for Order Form
window.selectProductForOrder = function(productId) {
  if (!orderItemSelect) return;
  orderItemSelect.value = productId;
  updatePriceEstimate();
  
  // Smooth scroll to order section
  const orderSection = document.getElementById("order-section");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
    // Soft flash animation on the form card
    const card = document.querySelector(".builder-form-card");
    if (card) {
      card.style.transform = "scale(1.02)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 300);
    }
  }
};

// Populate Order Form Dropdown
function populateOrderDropdown() {
  if (!orderItemSelect) return;
  
  // Clear placeholders except first
  orderItemSelect.innerHTML = `<option value="" disabled selected>Choose a Toy / Gift...</option>`;
  
  products.forEach(product => {
    const opt = document.createElement("option");
    opt.value = product.id;
    opt.textContent = `${product.name} (₹${product.price.toLocaleString("en-IN")})`;
    orderItemSelect.appendChild(opt);
  });
}

// Calculate total and update display
function updatePriceEstimate() {
  if (!priceEstimateEl || !orderItemSelect) return;
  
  const selectedId = orderItemSelect.value;
  if (!selectedId) {
    priceEstimateEl.innerHTML = "₹0";
    return;
  }
  
  const product = products.find(p => p.id === selectedId);
  if (!product) return;
  
  // Get wrapping cost
  let wrappingCost = 0;
  wrappingRadios.forEach(radio => {
    if (radio.checked) {
      wrappingCost = parseInt(radio.getAttribute("data-cost") || "0", 10);
      // Toggle active class on parent radio-card
      radio.closest(".radio-card")?.classList.add("active");
    } else {
      radio.closest(".radio-card")?.classList.remove("active");
    }
  });
  
  const total = product.price + wrappingCost;
  priceEstimateEl.innerHTML = `₹${total.toLocaleString("en-IN")}`;
}

// WhatsApp Message Construction
function handleOrderSubmission(e) {
  e.preventDefault();
  
  const selectedId = orderItemSelect.value;
  if (!selectedId) {
    alert("Please select an item you'd like to order!");
    orderItemSelect.focus();
    return;
  }
  
  const product = products.find(p => p.id === selectedId);
  const customerName = customerNameInput.value.trim();
  const customMessage = customMessageTextarea.value.trim();
  
  if (!customerName) {
    alert("Please enter your name so we can address you!");
    customerNameInput.focus();
    return;
  }
  
  // Get wrapping info
  let wrappingText = "None";
  let wrappingCost = 0;
  wrappingRadios.forEach(radio => {
    if (radio.checked) {
      wrappingCost = parseInt(radio.getAttribute("data-cost") || "0", 10);
      wrappingText = radio.value;
    }
  });
  
  const total = product.price + wrappingCost;
  
  // Construct formatted text message
  let text = `*New Order Request - Classic Store 🎁*\n\n`;
  text += `👤 *Customer Name:* ${customerName}\n`;
  text += `🧸 *Item:* ${product.name}\n`;
  text += `🏷️ *Category:* ${product.category.toUpperCase()}\n`;
  text += `🎁 *Gift Wrapping:* ${wrappingText} (+₹${wrappingCost})\n`;
  
  if (customMessage) {
    text += `✉️ *Gift Card Note:* "${customMessage}"\n`;
  }
  
  text += `\n💰 *Total Price Estimate:* ₹${total.toLocaleString("en-IN")}\n\n`;
  text += `📍 _Please coordinate shipping details and payment option in this chat._`;
  
  // URL Encode
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");
}

// Scroll triggered fade-in-up animations using IntersectionObserver
function setupAnimations() {
  const elements = document.querySelectorAll(".fade-in-up");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    elements.forEach(el => el.classList.add("appear"));
  }
}

// Event Listeners
function setupEventListeners() {
  // Search listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }
  
  // Filter button listeners
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderCatalog();
    });
  });
  
  // Theme switcher toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
  
  // Order Form change listeners
  if (orderItemSelect) {
    orderItemSelect.addEventListener("change", updatePriceEstimate);
  }
  
  wrappingRadios.forEach(radio => {
    radio.addEventListener("change", updatePriceEstimate);
  });
  
  // Submit Order request
  if (btnSendOrder) {
    btnSendOrder.addEventListener("click", handleOrderSubmission);
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  populateOrderDropdown();
  renderCatalog();
  setupEventListeners();
});
