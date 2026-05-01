/* IL site — shared scripts */
(function(){
  // Nav scrolled state
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Reveal on scroll
  const els = document.querySelectorAll('.reveal');
  if (els.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add('in'));
  }

  // Smooth-scroll for in-page anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const t = document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.offsetTop - 60, behavior: 'smooth' });
  });

  // Mobile menu
  window.toggleMobileMenu = function() {
    const m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('on');
  };
})();

/* Contact form (lives only on /contact/) */
(function(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('fEmail');
    const msg = document.getElementById('emailMsg');
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    if (!ok) {
      email.closest('.field').classList.add('err');
      msg.textContent = 'Please use a valid work email.';
      return;
    }
    email.closest('.field').classList.remove('err');
    msg.textContent = '';

    const name = document.getElementById('fName').value || '';
    const company = document.getElementById('fCo').value || '';
    const volume = document.getElementById('fVol').value || '';
    const role = document.getElementById('fRole').value || '';
    const subject = 'Demo request — ' + (company || name || 'Intelligent Logistics');
    const body =
      "Hi IL team,\n\nI'd like to book a demo of Intelligent Logistics.\n\n" +
      'Name: ' + name + '\n' +
      'Company: ' + company + '\n' +
      'Work email: ' + email.value + '\n' +
      'Monthly shipments: ' + volume + '\n' +
      'Role: ' + role + '\n\nThanks!';
    const href = 'mailto:il-demo@contax.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = href;

    form.innerHTML = '<div class="form-sent"><h4>Thanks — your email client should open with your demo request.</h4><p>If nothing happened, send the same details directly to <a href="mailto:il-demo@contax.com" style="color:var(--accent);">il-demo@contax.com</a> and our team will reach out within a business day.</p></div>';
  });
})();

/* Logo wall (auto-scrolling, used on homepage) */
(function(){
  const t = document.getElementById('logosTrack');
  if (!t) return;
  const logos = ['Costco','AT&T','T-Mobile','Nike','US Bank','Dior','Toast','Coca-Cola','John Deere','Lenovo','Samsung','Ariat','CVS','Callaway','Baxter','Signet','StockX','Duluth','Border States','Citi Trends'];
  const html = logos.map(l => '<span class="logo-item">' + l + '</span>').join('');
  t.innerHTML = html + html;
})();
