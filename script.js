function toggleDropdown(id) {
  const dropdown = document.getElementById(id + "Dropdown");
  dropdown.classList.toggle("show");

  const otherDropdowns = document.querySelectorAll('.dropdown-content:not(#' + id + 'Dropdown)');
  otherDropdowns.forEach((otherDropdown) => {
    otherDropdown.classList.remove('show');
  });
}
// script.js
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');

  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
