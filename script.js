// script.js
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');

  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

async function loadPage(pageId) {
  const pageContent = document.getElementById('pageContent');

  try {
    const response = await fetch(`${pageId}.html`);
    const content = await response.text();
    pageContent.innerHTML = content;
  } catch (error) {
    pageContent.innerHTML = "<h2>Page Not Found</h2><p>The requested page was not found.</p>";
  }
}
