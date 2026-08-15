/* ==========================================================================
   YEAHIA BARBHUIYA — PORTFOLIO SCRIPT
   Vanilla JS only. All content lives in resumeData below — edit freely.
   ========================================================================== */

'use strict';

/* ==========================================================================
   1. EDITABLE CONTENT
   ========================================================================== */
const resumeData = {
  name: "Yeahia Barbhuiya",
  location: "India",
  email: "hello@gyanabhyas.com",
  phone: "+91 00000 00000",
  linkedin: "#",
  github: "#",
  instagram: "#",
  youtube: "#",
  resumeFile: "assets/Yeahia-Barbhuiya-Resume.pdf",

  // Rotating hero titles
  titles: [
    "Web Designer",
    "Digital Creator",
    "Entrepreneur",
    "Content Creator"
  ],

  // Skills — grouped, level is 0-100 and should stay realistic
  skills: {
    "Web Development": [
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
      { name: "JavaScript", level: 72 },
      { name: "Responsive Design", level: 82 },
      { name: "Firebase", level: 60 }
    ],
    "Design": [
      { name: "Canva", level: 92 },
      { name: "Photopea", level: 75 },
      { name: "UI/UX Design", level: 70 },
      { name: "Graphic Design", level: 78 },
      { name: "Web Design", level: 80 }
    ],
    "Content & Digital": [
      { name: "Content Creation", level: 90 },
      { name: "Video Editing", level: 76 },
      { name: "SEO", level: 65 },
      { name: "Social Media", level: 85 },
      { name: "Digital Marketing", level: 68 }
    ],
    "Other": [
      { name: "Communication", level: 88 },
      { name: "English", level: 90 },
      { name: "Problem Solving", level: 80 },
      { name: "Leadership", level: 75 },
      { name: "Creative Thinking", level: 86 }
    ]
  },

  // Experience / journey timeline
  experience: [
    {
      year: "2023",
      role: "Founder",
      org: "Gyan Abhyas",
      description: "Started an educational YouTube channel to make learning more accessible for Bengali-medium students.",
      achievements: [
        "Published first educational and motivational videos",
        "Built the core content format still used today"
      ]
    },
    {
      year: "2024",
      role: "Content Lead",
      org: "Gyan Abhyas",
      description: "Expanded into multi-language content and grew a consistent publishing rhythm across formats.",
      achievements: [
        "Scaled content into English, Bengali and Hindi/Hinglish",
        "Grew a steady, engaged community of learners"
      ]
    },
    {
      year: "2025",
      role: "Platform Builder",
      org: "Gyan Abhyas",
      description: "Started shaping Gyan Abhyas into a proper digital learning platform, not just a channel.",
      achievements: [
        "Designed early platform structure and content pipeline",
        "Introduced short-form and long-form content strategy"
      ]
    },
    {
      year: "2026",
      role: "Founder & Student",
      org: "Gyan Abhyas / FYUG",
      description: "Building digital products and creative projects while continuing undergraduate studies.",
      achievements: [
        "Producing structured, high-volume content across formats",
        "Balancing platform growth with academic commitments"
      ]
    }
  ],

  // Featured projects
  projects: [
    {
      name: "Gyan Abhyas",
      category: "Education Platform",
      description: "An educational platform and YouTube channel producing motivational and academic content for Bengali-medium students.",
      fullDescription: "Gyan Abhyas started as a single YouTube channel and grew into a multi-language educational effort spanning English, Bengali and Hindi/Hinglish. It combines academic explainers with motivational content, built around a consistent scripting and production pipeline designed for clarity and retention.",
      tech: ["Content Strategy", "YouTube", "Scriptwriting", "Community"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      link: "#",
      demo: "#"
    },
    {
      name: "Personal Digital Projects",
      category: "Web & Content",
      description: "A collection of web design, content creation and digital product experiments outside the main channel.",
      fullDescription: "A running sandbox of independent projects — landing pages, content formats and small tools — used to test ideas before they're folded into Gyan Abhyas or shipped on their own. Each project is a chance to sharpen a specific skill, from layout to copywriting to interaction design.",
      tech: ["HTML/CSS/JS", "Design", "Copywriting"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      link: "#",
      demo: "#"
    },
    {
      name: "E-commerce Experiments",
      category: "Digital Products",
      description: "Early explorations into online product and digital-product experiences.",
      fullDescription: "A set of small, iterative experiments in selling digital and physical products online — testing storefronts, product presentation and checkout flows to understand what actually converts for a young audience discovering products through content.",
      tech: ["E-commerce", "UI/UX", "Marketing"],
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1200&auto=format&fit=crop",
      link: "#",
      demo: "#"
    }
  ],

  // Education
  education: [
    {
      institution: "University (FYUG Programme)",
      course: "Political Science (2nd Semester)",
      year: "2025 — Present",
      result: "In Progress",
      description: "Undergraduate study covering comparative politics, constitutional law and political theory — knowledge that directly informs the educational content produced for Gyan Abhyas."
    },
    {
      institution: "Higher Secondary Education",
      course: "Senior Secondary",
      year: "Completed",
      result: "",
      description: "Foundational schooling that led into undergraduate studies and the beginnings of independent content creation."
    }
  ],

  // Achievements
  achievements: [
    {
      icon: "spark",
      title: "Founded Gyan Abhyas",
      year: "2023",
      description: "Built an educational content channel from scratch, now reaching students across three languages."
    },
    {
      icon: "users",
      title: "Grew a Real Community",
      year: "2024–2025",
      description: "Cultivated an engaged audience of over a thousand learners through consistent, useful content."
    },
    {
      icon: "layers",
      title: "Multi-Format Production",
      year: "2025–2026",
      description: "Built a repeatable pipeline spanning scripts, voiceovers and visuals across long-form and short-form content."
    }
  ]
};

/* ==========================================================================
   2. UTILITIES
   ========================================================================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ==========================================================================
   3. LOADER
   ========================================================================== */
function initLoader() {
  const loader = $('#loader');
  const done = () => {
    loader.classList.add('is-hidden');
    document.body.classList.add('is-loaded');
    startHeroAnimation();
  };
  if (document.readyState === 'complete') {
    setTimeout(done, 900);
  } else {
    window.addEventListener('load', () => setTimeout(done, 700));
  }
  // safety fallback in case load event is delayed
  setTimeout(done, 2600);
}

let heroAnimated = false;
function startHeroAnimation() {
  if (heroAnimated) return;
  heroAnimated = true;
  const items = $$('.hero [data-reveal], .hero__name');
  items.forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), i * 90);
  });
  $('.hero__name').classList.add('is-visible');
}

/* ==========================================================================
   4. NAVIGATION (scroll state, active link, smooth scroll, mobile menu)
   ========================================================================== */
function initNavigation() {
  const nav = $('#nav');
  const navToggle = $('#navToggle');
  const mobileMenu = $('#mobileMenu');
  const allLinks = $$('.nav__link, .mobile-menu__link');
  const sections = $$('main section[id]');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  // mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // smooth scroll for all in-page links
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      mobileMenu.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      const offset = 84;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  // active section highlight
  const setActive = (id) => {
    allLinks.forEach(l => l.classList.toggle('is-active', l.dataset.section === id));
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   5. TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const el = $('#typingText');
  if (!el) return;
  const words = resumeData.titles;
  let wordIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const word = words[wordIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();
}

/* ==========================================================================
   6. SCROLL REVEAL
   ========================================================================== */
function initScrollReveal() {
  const targets = $$('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  targets.forEach(t => observer.observe(t));
}

/* ==========================================================================
   7. COUNT-UP STATS
   ========================================================================== */
function initCounters() {
  const stats = $$('.stat__number');
  if (!stats.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  stats.forEach(s => observer.observe(s));
}

/* ==========================================================================
   8. THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
  const toggle = $('#themeToggle');
  const stored = localStorage.getItem('ga-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');

  applyTheme(initial);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('ga-theme', next);
  });

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      toggle.setAttribute('aria-pressed', 'true');
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggle.setAttribute('aria-pressed', 'false');
    }
  }
}

/* ==========================================================================
   9. CUSTOM CURSOR
   ========================================================================== */
function initCursor() {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  const dot = $('#cursorDot');
  const ring = $('#cursorRing');
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
  });

  function raf() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
    requestAnimationFrame(raf);
  }
  raf();

  $$('a, button, .project-card, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-active'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
  });
}

/* ==========================================================================
   10. MAGNETIC BUTTONS
   ========================================================================== */
function initMagneticButtons() {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches || prefersReducedMotion) return;
  $$('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ==========================================================================
   11. CARD TILT (projects)
   ========================================================================== */
function initCardTilt() {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches || prefersReducedMotion) return;
  $$('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ==========================================================================
   12. SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgress() {
  const bar = $('#scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
}

/* ==========================================================================
   13. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = $('#backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

/* ==========================================================================
   14. PARTICLES (hero background, lightweight canvas)
   ========================================================================== */
function initParticles() {
  const canvas = $('#particles');
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = canvas.offsetWidth * devicePixelRatio;
    height = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  function createParticles() {
    const count = Math.min(40, Math.floor((width * height) / 60000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      o: Math.random() * 0.5 + 0.15
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(227,168,87,${p.o})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

/* ==========================================================================
   15. RENDER: SKILLS
   ========================================================================== */
function renderSkills() {
  const container = $('#skillsGroups');
  const groups = Object.entries(resumeData.skills);
  container.innerHTML = groups.map(([groupName, skills]) => `
    <div class="skill-group glass" data-reveal>
      <h3 class="skill-group__title">${escapeHTML(groupName)}</h3>
      <div class="skill-list">
        ${skills.map(skill => `
          <div class="skill">
            <div class="skill__top">
              <span class="skill__name"><span class="skill__dot"></span>${escapeHTML(skill.name)}</span>
              <span class="skill__level">${skill.level}%</span>
            </div>
            <div class="skill__bar"><div class="skill__bar-fill" data-width="${skill.level}"></div></div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // animate bars on view
  const bars = $$('.skill__bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => observer.observe(b));
}

/* ==========================================================================
   16. RENDER: TIMELINE
   ========================================================================== */
function renderTimeline() {
  const container = $('#timeline');
  container.innerHTML = resumeData.experience.map(item => `
    <div class="timeline-item" data-reveal>
      <span class="timeline-item__dot"></span>
      <span class="timeline-item__year">${escapeHTML(item.year)}</span>
      <div class="timeline-item__card glass">
        <h3 class="timeline-item__role">${escapeHTML(item.role)}</h3>
        <p class="timeline-item__org">${escapeHTML(item.org)}</p>
        <p class="timeline-item__desc">${escapeHTML(item.description)}</p>
        <ul class="timeline-item__achievements">
          ${item.achievements.map(a => `<li>${escapeHTML(a)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   17. RENDER: PROJECTS + MODAL
   ========================================================================== */
function renderProjects() {
  const container = $('#projectsGrid');
  container.innerHTML = resumeData.projects.map((p, i) => `
    <article class="project-card glass" data-reveal data-project="${i}" tabindex="0" role="button" aria-label="View details for ${escapeHTML(p.name)}">
      <div class="project-card__media">
        <img src="${p.image}" alt="${escapeHTML(p.name)}" loading="lazy">
        <span class="project-card__category">${escapeHTML(p.category)}</span>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${escapeHTML(p.name)}</h3>
        <p class="project-card__desc">${escapeHTML(p.description)}</p>
        <div class="project-card__tags">
          ${p.tech.map(t => `<span>${escapeHTML(t)}</span>`).join('')}
        </div>
        <span class="project-card__link">
          View Project
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    </article>
  `).join('');

  $$('.project-card').forEach(card => {
    const open = () => openProjectModal(parseInt(card.dataset.project, 10));
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  initCardTilt();
}

function initProjectModal() {
  const modal = $('#projectModal');
  const backdrop = $('#modalBackdrop');
  const closeBtn = $('#modalClose');

  const close = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { modal.hidden = true; }, 350);
  };

  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });

  window.__closeProjectModal = close;
}

function openProjectModal(index) {
  const p = resumeData.projects[index];
  if (!p) return;
  const modal = $('#projectModal');
  const body = $('#modalBody');

  body.innerHTML = `
    <img src="${p.image}" alt="${escapeHTML(p.name)}">
    <span class="modal__category">${escapeHTML(p.category)}</span>
    <h3 id="modalTitle">${escapeHTML(p.name)}</h3>
    <p>${escapeHTML(p.fullDescription)}</p>
    <div class="project-card__tags">
      ${p.tech.map(t => `<span>${escapeHTML(t)}</span>`).join('')}
    </div>
    <div class="modal__actions">
      <a href="${p.link}" class="btn btn--primary magnetic" target="_blank" rel="noopener"><span>View Project</span></a>
      ${p.demo ? `<a href="${p.demo}" class="btn btn--ghost magnetic" target="_blank" rel="noopener"><span>Live Demo</span></a>` : ''}
    </div>
  `;

  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add('is-open'));
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   18. RENDER: EDUCATION
   ========================================================================== */
function renderEducation() {
  const container = $('#educationGrid');
  container.innerHTML = resumeData.education.map(edu => `
    <div class="edu-card glass" data-reveal>
      <span class="edu-card__year">${escapeHTML(edu.year)}</span>
      <h3 class="edu-card__course">${escapeHTML(edu.course)}</h3>
      <p class="edu-card__institution">${escapeHTML(edu.institution)}</p>
      ${edu.result ? `<span class="edu-card__result">${escapeHTML(edu.result)}</span>` : ''}
      <p class="edu-card__desc">${escapeHTML(edu.description)}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   19. RENDER: ACHIEVEMENTS
   ========================================================================== */
const achievementIcons = {
  spark: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>',
  users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15 14.2c2.7.4 5 2.4 5 5.8"/></svg>',
  layers: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>'
};

function renderAchievements() {
  const container = $('#achievementsGrid');
  container.innerHTML = resumeData.achievements.map(a => `
    <div class="achievement-card glass" data-reveal>
      <div class="achievement-card__icon">${achievementIcons[a.icon] || achievementIcons.spark}</div>
      <span class="achievement-card__year">${escapeHTML(a.year)}</span>
      <h3 class="achievement-card__title">${escapeHTML(a.title)}</h3>
      <p class="achievement-card__desc">${escapeHTML(a.description)}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   20. CONTACT FORM
   ========================================================================== */
function initContactForm() {
  const form = $('#contactForm');
  const status = $('#formStatus');
  const submitBtn = $('#submitBtn');

  const validators = {
    name: (v) => v.trim().length >= 2 || 'Please enter your full name.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.',
    subject: (v) => v.trim().length >= 3 || 'Please enter a subject.',
    message: (v) => v.trim().length >= 10 || 'Message should be at least 10 characters.'
  };

  function validateField(name) {
    const input = $(`#field${capitalize(name)}`);
    const field = input.closest('.field');
    const errorEl = $(`#error${capitalize(name)}`);
    const result = validators[name](input.value);
    if (result === true) {
      field.classList.remove('has-error');
      errorEl.textContent = '';
      return true;
    } else {
      field.classList.add('has-error');
      errorEl.textContent = result;
      return false;
    }
  }

  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  ['name', 'email', 'subject', 'message'].forEach(name => {
    const input = $(`#field${capitalize(name)}`);
    input.addEventListener('blur', () => validateField(name));
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('has-error')) validateField(name);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fields = ['name', 'email', 'subject', 'message'];
    const results = fields.map(validateField);
    const isValid = results.every(Boolean);

    if (!isValid) {
      status.textContent = 'Please fix the fields highlighted above.';
      status.className = 'contact__status is-error';
      return;
    }

    submitBtn.disabled = true;
    status.textContent = 'Sending…';
    status.className = 'contact__status';

    const payload = {
      name: $('#fieldName').value.trim(),
      email: $('#fieldEmail').value.trim(),
      subject: $('#fieldSubject').value.trim(),
      message: $('#fieldMessage').value.trim()
    };

    try {
      // ---------------------------------------------------------------
      // No backend is connected yet. To wire this up to a real inbox,
      // replace the block below with a fetch() call to your endpoint,
      // e.g. a Formspree form action:
      //
      // const res = await fetch('https://formspree.io/f/your-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });
      // if (!res.ok) throw new Error('Request failed');
      // ---------------------------------------------------------------
      await new Promise(resolve => setTimeout(resolve, 900));

      status.textContent = `Thanks, ${payload.name.split(' ')[0]} — your message has been noted. I'll get back to you soon.`;
      status.className = 'contact__status is-success';
      form.reset();
      fields.forEach(name => $(`#field${capitalize(name)}`).closest('.field').classList.remove('has-error'));
    } catch (err) {
      status.textContent = 'Something went wrong sending your message. Please try again or email directly.';
      status.className = 'contact__status is-error';
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* ==========================================================================
   21. APPLY RESUME DATA TO STATIC DOM
   ========================================================================== */
function applyResumeData() {
  document.title = `${resumeData.name} | Founder • Web Designer • Digital Creator`;

  $$('#heroEmail, #contactEmail').forEach(el => { el.textContent = resumeData.email; if (el.tagName === 'A') el.href = `mailto:${resumeData.email}`; });
  const contactEmail = $('#contactEmail');
  if (contactEmail) contactEmail.textContent = resumeData.email;
  const heroEmail = $('#heroEmail');
  if (heroEmail) { heroEmail.textContent = resumeData.email; heroEmail.href = `mailto:${resumeData.email}`; }

  const contactPhone = $('#contactPhone');
  if (contactPhone) contactPhone.textContent = resumeData.phone;
  const phoneLink = document.querySelector('a[href^="tel:"]');
  if (phoneLink) phoneLink.href = `tel:${resumeData.phone.replace(/\s+/g, '')}`;

  $$('[data-social="linkedin"]').forEach(el => el.href = resumeData.linkedin);
  $$('[data-social="github"]').forEach(el => el.href = resumeData.github);
  $$('[data-social="instagram"]').forEach(el => el.href = resumeData.instagram);
  $$('[data-social="youtube"]').forEach(el => el.href = resumeData.youtube);

  $$('#downloadResumeBtn, a[download]').forEach(el => {
    el.setAttribute('href', resumeData.resumeFile);
  });

  const footerYear = $('#footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}

/* ==========================================================================
   22. REDUCED MOTION FLAG
   ========================================================================== */
function initMotionPreference() {
  if (prefersReducedMotion) {
    document.body.classList.add('reduce-motion');
  }
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  applyResumeData();
  initMotionPreference();
  renderSkills();
  renderTimeline();
  renderProjects();
  renderEducation();
  renderAchievements();

  initLoader();
  initNavigation();
  initTypingEffect();
  initScrollReveal();
  initCounters();
  initThemeToggle();
  initCursor();
  initMagneticButtons();
  initScrollProgress();
  initBackToTop();
  initParticles();
  initProjectModal();
  initContactForm();
});
