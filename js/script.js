function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);

  // Close other dropdowns
  document.querySelectorAll('.dropdown').forEach((dropdown) => {
    if (dropdown !== menu) {
      dropdown.style.display = 'none';
    }
  });

  // Toggle visibility of the selected dropdown
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
