// Toggle Sidebar
function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
}

// Toggle Dropdown
function toggleDropdown(event) {
  event.preventDefault();
  let dropdownMenu = event.target.nextElementSibling;
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}



// menu vidio selengkap nya

