const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');

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
          messageDiv.innerHTML = '<div class="alert alert-success">Mensagem enviada com sucesso!</div>';
          form.reset();
        } else {
          messageDiv.innerHTML = '<div class="alert alert-danger">Erro ao enviar. Tente novamente.</div>';
        }
      } catch {
        messageDiv.innerHTML = '<div class="alert alert-danger">Erro de conexão.</div>';
      }
    });