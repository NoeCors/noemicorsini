// ===== EDIT YOUR DETAILS HERE — they update every page =====
window.SITE = {
  name:        '[Noemi Corsini]',
  position:    'Post-doctoral researcher in Statistical Networks',
  institution: '[University of Cambridge]',
  email:       'nc670@cam.ac.uk',
  scholar:     'https://scholar.google.com/citations?user=8u841esAAAAJ&hl=en&oi=ao',   // https://scholar.google.com/citations?user=...
  github:      'https://github.com/NoeCors',   // https://github.com/yourname
  orcid:       'https://orcid.org/my-orcid?orcid=0000-0001-5052-4636',   // https://orcid.org/0000-0000-0000-0000
  linkedin:    'https://www.linkedin.com/in/noemi-corsini-8390b5196/',   // https://www.linkedin.com/in/yourname
  consultancy: 'https://noecors.github.io/statistics-desk/#top',   // link to The Statistics Desk site
  photo:       'photo.HEIC'
};
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const S = window.SITE;
  document.querySelectorAll('[data-field]').forEach(el => el.textContent = S[el.dataset.field] || '');
  document.querySelectorAll('[data-link]').forEach(a => {
    const k = a.dataset.link;
    a.href = k === 'email' ? 'mailto:' + S.email : S[k];
    if (k !== 'email') { a.target = '_blank'; a.rel = 'noopener'; }
  });
  document.querySelectorAll('[data-photo]').forEach(img => img.src = S.photo);
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.title = document.title.replace('[Your Name]', S.name);
});
