

  function limparFeedbacks() {
    if (confirm("Tem certeza de que deseja apagar todos os feedbacks?")) {
      localStorage.removeItem('feedbacks');
      document.getElementById('feedbacks-list').innerHTML = '';
    }
  }


  const form = document.getElementById('formFeedback');
  const lista = document.getElementById('feedbacks-list');

  // Ao enviar o formulário
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = this.nome.value.trim();
    const estrelas = this.estrelas.value;
    const comentario = this.comentario.value.trim();
    const fotoFile = this.foto.files[0];

    if (!fotoFile) return;

    const reader = new FileReader();
    reader.onload = function () {
      const fotoBase64 = reader.result;

      const novoFeedback = { nome, estrelas, comentario, foto: fotoBase64 };
      const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
      feedbacks.unshift(novoFeedback);
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

      lista.prepend(criarCard(novoFeedback));
      form.reset();
    };
    reader.readAsDataURL(fotoFile);
  });

  // Exibir feedbacks ao carregar a página
  window.addEventListener('DOMContentLoaded', () => {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    feedbacks.forEach(f => lista.appendChild(criarCard(f)));
  });

  // Criar card de feedback
  function criarCard({ nome, estrelas, comentario, foto }) {
    const stars = '★'.repeat(parseInt(estrelas)) + '☆'.repeat(5 - parseInt(estrelas));
    const div = document.createElement('div');
    div.className = 'col-md-4';
    div.innerHTML = `
      <div class="d-flex flex-column align-items-center text-center">
        <img src="${foto}" alt="${nome}" class="rounded-circle mb-3" style="width: 80px; height: 80px; object-fit: cover;">
        <div class="text-warning mb-1">${stars}</div>
        <p class="mb-1 fw-bold">${nome}</p>
        <p class="small">${comentario}</p>
      </div>
    `;
    return div;
  }


  //Contato
  
