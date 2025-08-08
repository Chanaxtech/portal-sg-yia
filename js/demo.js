function toggleFaq(el) {
    const answer = el.nextElementSibling;
    const icon = el.querySelector('i');
    const isOpen = answer.style.display === 'block';
    answer.style.display = isOpen ? 'none' : 'block';
    icon.className = isOpen ? 'bi bi-chevron-down' : 'bi bi-chevron-up';
  }

  const form = document.getElementById('demoForm');
  const messageDiv = document.getElementById('demoMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        messageDiv.innerHTML = '<div class="alert alert-success">✅ Demonstração agendada com sucesso! Entraremos em contato em breve.</div>';
        form.reset();
      } else {
        messageDiv.innerHTML = '<div class="alert alert-danger">❌ Erro ao enviar. Tente novamente.</div>';
      }
    } catch {
      messageDiv.innerHTML = '<div class="alert alert-danger">❌ Erro de conexão.</div>';
    }
  });

  const btn = document.getElementById('btnToggleForm');
  const area = document.getElementById('formFeedbackArea');

  if (btn && area) {
    btn.addEventListener('click', () => {
      const aberto = area.style.display === 'block';
      area.style.display = aberto ? 'none' : 'block';
      btn.textContent = aberto ? 'Deixar Feedback' : 'Ocultar formulário';
    });
  }