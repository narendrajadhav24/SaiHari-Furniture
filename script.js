/* =========================================================
   SAIHARI FURNITURE - MAIN JAVASCRIPT
   Category buttons -> category.html
   Product image/card -> enquiry modal -> WhatsApp
========================================================= */

const WHATSAPP_NUMBER = "918999384239";

const PRODUCTS = {
  home: {
    title: "Home Furniture",
    description: "Comfortable and stylish furniture for living rooms, bedrooms, dining areas and complete homes.",
    items: [
      ["Wooden Chair", "images/wooden-chair.jpg", "Elegant wooden chair"],
      ["Sofa Set", "images/sofa.jpg", "Comfortable sofa for your living room"],
      ["Dining Table", "images/dining-table.jpg", "Dining table for family spaces"],
      ["Bedroom Bed", "images/bed.jpg", "Modern and durable bed"],
      ["Wardrobe / Cupboard", "images/cupboard.jpg", "Practical storage solution"],
      ["Center Table", "images/center-table.jpg", "Stylish center table"],
      ["Accent Chair", "images/accent-chair.jpg", "Accent seating for modern interiors"],
      ["Side Table", "images/side-table.jpg", "Compact side table"]
    ]
  },
  hotel: {
    title: "Hotel Furniture",
    description: "Furniture solutions for hotel rooms, restaurants, bars, lobbies and outdoor areas.",
    items: [
      ["Hotel Room Bed", "images/hotel-bed.jpg", "Durable hotel room bed"],
      ["Hotel Side Table", "images/hotel-side-table.jpg", "Functional bedside table"],
      ["Hotel Lounge Chair", "images/lounge-chair.jpg", "Comfortable lounge seating"],
      ["Hotel Reception Desk", "images/reception-desk.jpg", "Reception and front-desk solution"],
      ["Restaurant Dining Chair", "images/dining-chair.jpg", "Commercial dining chair"],
      ["Restaurant Dining Table", "images/restaurant-table.jpg", "Restaurant dining table"],
      ["Bar Stool", "images/bar-stool.jpg", "Stylish commercial bar stool"],
      ["Lobby Sofa", "images/lobby-sofa.jpg", "Comfortable lobby seating"]
    ]
  },
  office: {
    title: "Office Furniture",
    description: "Professional workstations, desks, chairs, meeting room and reception furniture.",
    items: [
      ["Office Workstation", "images/workstation.jpg", "Efficient office workstation"],
      ["Office Desk", "images/office-desk.jpg", "Professional work desk"],
      ["Office Chair", "images/office-chair.jpg", "Comfortable office chair"],
      ["Conference Table", "images/conference-table.jpg", "Meeting and conference table"],
      ["Reception Desk", "images/reception-desk.jpg", "Reception counter"],
      ["Office Storage", "images/office-storage.jpg", "Office storage solution"],
      ["Meeting Chair", "images/meeting-chair.jpg", "Meeting room chair"],
      ["Bookshelf", "images/bookshelf.jpg", "Office bookshelf"]
    ]
  },
  educational: {
    title: "Educational Furniture",
    description: "Practical furniture for classrooms, libraries, administrative offices and hostels.",
    items: [
      ["Student Bench", "images/student-bench.jpg", "Classroom bench"],
      ["Writing Pad Chair", "images/writing-pad-chair.jpg", "Writing pad classroom chair"],
      ["Teacher Desk", "images/teacher-desk.jpg", "Teacher's desk"],
      ["Library Table", "images/library-table.jpg", "Library reading table"],
      ["Library Chair", "images/library-chair.jpg", "Library seating"],
      ["Bookshelf", "images/bookshelf.jpg", "Educational bookshelf"],
      ["Hostel Bed", "images/hostel-bed.jpg", "Hostel bed"],
      ["Hostel Almirah", "images/hostel-almirah.jpg", "Student storage almirah"]
    ]
  },
  outdoor: {
    title: "Outdoor Furniture",
    description: "Garden, patio, poolside and outdoor seating designed for practical everyday use.",
    items: [
      ["Outdoor Chair", "images/outdoor-chair.jpg", "Outdoor seating"],
      ["Garden Bench", "images/garden-bench.jpg", "Garden bench"],
      ["Outdoor Sofa", "images/outdoor-sofa.jpg", "Outdoor sofa"],
      ["Patio Dining Set", "images/patio-dining.jpg", "Patio dining furniture"],
      ["Garden Table", "images/garden-table.jpg", "Garden table"],
      ["Swing", "images/swing.jpg", "Outdoor swing"],
      ["Lounge Chair", "images/outdoor-lounge.jpg", "Outdoor lounge chair"],
      ["Side Table", "images/outdoor-side-table.jpg", "Outdoor side table"]
    ]
  },
  metal: {
    title: "Metal Furniture",
    description: "Strong and practical metal furniture for residential and commercial requirements.",
    items: [
      ["Metal Dining Table", "images/metal-dining-table.jpg", "Durable metal dining table"],
      ["Metal Chair", "images/metal-chair.jpg", "Strong metal chair"],
      ["Metal Center Table", "images/metal-center-table.jpg", "Metal center table"],
      ["Metal Side Table", "images/metal-side-table.jpg", "Compact side table"],
      ["Metal Console Table", "images/metal-console-table.jpg", "Metal console table"],
      ["Metal Storage", "images/metal-storage.jpg", "Metal storage solution"],
      ["Metal Bed", "images/metal-bed.jpg", "Durable metal bed"],
      ["Metal Bench", "images/metal-bench.jpg", "Strong metal bench"]
    ]
  }
};

function goToCategory(category) {
  window.location.href = `category.html?category=${encodeURIComponent(category)}`;
}

document.querySelectorAll(".nav-category-button, .category-card").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    if (category) goToCategory(category);
  });
});

/* Mobile menu */
const mobileMenuButton = document.getElementById("mobileMenuButton");
const navigation = document.getElementById("navigation");

if (mobileMenuButton && navigation) {
  mobileMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    navigation.classList.toggle("active");
    const icon = mobileMenuButton.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth <= 1100 &&
        navigation.classList.contains("active") &&
        !navigation.contains(event.target) &&
        !mobileMenuButton.contains(event.target)) {
      navigation.classList.remove("active");
      const icon = mobileMenuButton.querySelector("i");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-xmark");
    }
  });
}

/* Homepage contact form */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const furniture = document.getElementById("furnitureType").value.trim();
    const message = document.getElementById("customerMessage").value.trim();

    const text =
`Hello Saihari Furniture,

Name: ${name}
Mobile: ${phone}
Furniture / Requirement: ${furniture}

Message:
${message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

/* Category page */
const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("category");
const productGrid = document.getElementById("productGrid");

if (productGrid) {
  const category = PRODUCTS[categoryKey] || PRODUCTS.home;
  const title = document.getElementById("categoryTitle");
  const description = document.getElementById("categoryDescription");
  const itemCount = document.getElementById("itemCount");
  const emptyState = document.getElementById("emptyState");
  const sortProducts = document.getElementById("sortProducts");

  title.textContent = category.title;
  description.textContent = category.description;

  function renderProducts(items) {
    productGrid.innerHTML = "";
    itemCount.textContent = items.length;

    if (!items.length) {
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;

    items.forEach(([name, image, desc], index) => {
      const card = document.createElement("article");
      card.className = "catalogue-product-card";
      card.innerHTML = `
        <button class="product-click" type="button" aria-label="Enquire about ${escapeHtml(name)}">
          <div class="catalogue-product-image">
            <img src="${image}" alt="${escapeHtml(name)}"
                 onerror="this.src='https://placehold.co/900x700/f5e7ed/65122e?text=${encodeURIComponent(name)}'">
            <span class="enquire-overlay"><i class="fa-solid fa-message"></i> Enquire Now</span>
          </div>
          <div class="catalogue-product-info">
            <span class="product-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(name)}</h3>
            <p>${escapeHtml(desc)}</p>
            <span class="product-link">View & Enquire <i class="fa-solid fa-arrow-right"></i></span>
          </div>
        </button>
      </article>`;

      card.querySelector(".product-click").addEventListener("click", () => {
        openEnquiry(name, image, category.title);
      });

      productGrid.appendChild(card);
    });
  }

  sortProducts?.addEventListener("change", () => {
    let items = [...category.items];
    if (sortProducts.value === "az") items.sort((a,b) => a[0].localeCompare(b[0]));
    if (sortProducts.value === "za") items.sort((a,b) => b[0].localeCompare(a[0]));
    renderProducts(items);
  });

  renderProducts(category.items);
}

/* Enquiry modal */
const modal = document.getElementById("enquiryModal");

function openEnquiry(name, image, category) {
  if (!modal) return;
  document.getElementById("modalImage").src = image;
  document.getElementById("modalImage").onerror = function() {
    this.src = `https://placehold.co/900x700/f5e7ed/65122e?text=${encodeURIComponent(name)}`;
  };
  document.getElementById("modalImage").alt = name;
  document.getElementById("modalProductName").textContent = name;
  document.getElementById("modalCategory").textContent = category;
  document.getElementById("selectedProduct").value = name;
  document.getElementById("enquiryMessage").value = `I am interested in ${name}. Please share price, available designs, sizes and details.`;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeEnquiry() {
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.getElementById("closeModal")?.addEventListener("click", closeEnquiry);
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeEnquiry));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeEnquiry();
});

const productEnquiryForm = document.getElementById("productEnquiryForm");
if (productEnquiryForm) {
  productEnquiryForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("enquiryName").value.trim();
    const phone = document.getElementById("enquiryPhone").value.trim();
    const product = document.getElementById("selectedProduct").value.trim();
    const quantity = document.getElementById("enquiryQuantity").value.trim();
    const message = document.getElementById("enquiryMessage").value.trim();

    const text =
`Hello Saihari Furniture,

I want to enquire about:
Product: ${product}

Customer Name: ${name}
Mobile: ${phone}
Quantity: ${quantity || "Not specified"}

Requirement:
${message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

/* Back to top */
const backTop = document.getElementById("backTop");
if (backTop) {
  window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 500);
  });
  backTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
}
