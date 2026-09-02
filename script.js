// ============ Idioma (PT / EN) ============
const langToggle = document.getElementById('langToggle');
const langOpts = langToggle.querySelectorAll('.lang-opt');
const translatable = document.querySelectorAll('[data-pt]');
const placeholders = document.querySelectorAll('[data-pt-ph]');

function setLang(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  translatable.forEach(el => {
    const val = el.getAttribute(`data-${lang}`);
    if (val !== null) el.innerHTML = val;
  });
  placeholders.forEach(el => {
    const val = el.getAttribute(`data-${lang}-ph`);
    if (val !== null) el.setAttribute('placeholder', val);
  });
  langOpts.forEach(opt => opt.classList.toggle('active', opt.dataset.lang === lang));
  localStorage.setItem('portfolio-lang', lang);
}

langToggle.addEventListener('click', () => {
  const current = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
  setLang(current === 'pt' ? 'en' : 'pt');
});

// Respect a saved preference in-session only (no persistence across visits required,
// but harmless if the browser allows localStorage)
try {
  const saved = localStorage.getItem('portfolio-lang');
  if (saved) setLang(saved);
} catch (e) { /* ignore */ }

// ============ Formulário de contato ============
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formNote.style.color = '#f28b82';
    const lang = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
    formNote.textContent = lang === 'pt'
      ? 'Preencha todos os campos antes de enviar.'
      : 'Please fill in all fields before sending.';
    return;
  }

  // Site estático: abre o app de e-mail com os dados preenchidos.
  // Para envio direto sem sair do site, integre um serviço como Formspree
  // ou EmailJS e troque este bloco pela chamada fetch() correspondente.
  const subject = encodeURIComponent(`Contato via portfólio — ${name}`);
  const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
  window.location.href = `mailto:pedroeduspimenta@gmail.com?subject=${subject}&body=${body}`;

  formNote.style.color = '';
  form.reset();
});

// ============ Menu mobile (scroll suave já cuidado por CSS; aqui só fecha o menu ao clicar) ============
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});
