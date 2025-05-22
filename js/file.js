function filterFiles(type) {
        const cards = document.querySelectorAll('.file-card');
        cards.forEach(card => {
                card.style.display = (type === 'all' || card.classList.contains(type)) ? 'block' : 'none';
        });
}

function startDownload(fileUrl) {
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
}


window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get('filter');
  if (filter) {
    filterFiles(filter);
  }
};

