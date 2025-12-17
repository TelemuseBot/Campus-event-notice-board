document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cardContainer');
  const data = JSON.parse(localStorage.getItem('campusData')) || [];

  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="text-center text-white mt-5">
          <h5>No events or notices available</h5>
          <p class="opacity-75">
            Please check back later for updates
          </p>
        </div>
      </div>
    `;
    return;
  }

  data.forEach(item => {
    const badgeClass = item.category === 'event' ? 'primary' : 'warning';

    const card = `
      <div class="col-md-4 col-sm-6 item ${item.category}">
        <div class="card h-100">
          <div class="card-body">
            <span class="badge bg-${badgeClass} mb-2">
              ${item.category.toUpperCase()}
            </span>
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <small class="text-muted">Date: ${item.date}</small>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });
});

function filterItems(type) {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    if (type === 'all') {
      item.style.display = 'block';
    } else if (item.classList.contains(type)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
