const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

// Function to show alert for "Coming Soon"
const showComingSoonAlert = (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  alert("Coming Soon!"); // Show alert message
}

// Apply the same function to multiple buttons
document.getElementById("giftBoxesBtn").addEventListener("click", showComingSoonAlert);
document.getElementById("menuItemBtn").addEventListener("click", showComingSoonAlert);

function toggleMenu(header) {
  const list = header.nextElementSibling;
  list.classList.toggle("hidden");
  
  // OPTIONAL: Change ^ to v when collapsed
  const arrow = header.querySelector("span");
  arrow.textContent = list.classList.contains("hidden") ? "v" : "^";
}