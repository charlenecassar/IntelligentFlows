(function () {
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeBooking");
  const yearEl = document.getElementById("year");

  const openButtons = [
    "openBookingTop",
    "openBookingMobile",
    "openBookingHero",
    "openBookingCard",
    "openBookingServices",
    "openBookingFooter"
  ].map(id => document.getElementById(id)).filter(Boolean);

  const tabBtnCalendly = document.getElementById("tabBtnCalendly");
  const tabBtnForm = document.getElementById("tabBtnForm");
  const tabCalendly = document.getElementById("tab-calendly");
  const tabForm = document.getElementById("tab-form");

  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  let lastFocusedEl = null;

  function openModal() {
    lastFocusedEl = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") lastFocusedEl.focus();
  }

  function setTab(which) {
    const isCalendly = which === "calendly";

    tabBtnCalendly.classList.toggle("active", isCalendly);
    tabBtnCalendly.setAttribute("aria-selected", String(isCalendly));
    tabCalendly.hidden = !isCalendly;

    tabBtnForm.classList.toggle("active", !isCalendly);
    tabBtnForm.setAttribute("aria-selected", String(!isCalendly));
    tabForm.hidden = isCalendly;
  }

  // Open modal
  openButtons.forEach(btn => btn.addEventListener("click", openModal));

  // Close modal by button
  closeBtn.addEventListener("click", closeModal);

  // Close by clicking backdrop
  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.dataset && target.dataset.close === "true") closeModal();
  });

  // Close by Escape
  document.addEventListener("keydown", (e) => {
    if (!modal.hidden && e.key === "Escape") closeModal();
  });

  // Tabs
  tabBtnCalendly.addEventListener("click", () => setTab("calendly"));
  tabBtnForm.addEventListener("click", () => setTab("form"));

  // Mobile menu
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = !mobileNav.hidden;
      mobileNav.hidden = isOpen;
      navToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close mobile menu when clicking a link
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileNav.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Default tab
  setTab("calendly");
})();
