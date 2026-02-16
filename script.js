document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation for Sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .service-card-flip').forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

    // 3. Navbar Reveal on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Counter Animation for Metrics
    const metrics = document.querySelectorAll('.metric-number');
    let countersStarted = false;

    const startCounters = () => {
        metrics.forEach(metric => {
            const target = parseInt(metric.getAttribute('data-target'));
            let count = 0;
            const step = target / 50;

            const updateCount = () => {
                count += step;
                if (count < target) {
                    metric.innerText = Math.ceil(count);
                    setTimeout(updateCount, 20);
                } else {
                    metric.innerText = target;
                }
            };
            updateCount();
        });
    };

    const metricsSection = document.querySelector('.social-proof');
    const metricsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
            startCounters();
            countersStarted = true;
        }
    });
    if (metricsSection) metricsObserver.observe(metricsSection);

    // 5. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // 6. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 7. Fullscreen Photo Viewer Logic
    const images = [];
    for (let i = 1; i <= 12; i++) images.push(`images/obra_real_${i}.jpg`);

    let currentIdx = 0;
    const viewer = document.getElementById('photoViewer');
    const viewerImg = document.getElementById('viewerImg');

    window.openViewer = (index) => {
        currentIdx = index;
        if (viewerImg) viewerImg.src = images[currentIdx];
        if (viewer) viewer.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop scroll
    };

    window.closeViewer = () => {
        if (viewer) viewer.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    };

    // 8. Theme Toggle Logic
    const themeBtn = document.getElementById('themeToggle');
    const html = document.documentElement;
    // Helper to update icon
    function updateIcon() {
        if (!themeBtn) return;
        // If data-theme is dark, or no data-theme but system is dark
        const isDark = html.getAttribute('data-theme') === 'dark' ||
            (!html.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        const iconSpan = themeBtn.querySelector('.theme-icon');
        if (iconSpan) iconSpan.textContent = isDark ? '☀️' : '🌙';
    }

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    }
    updateIcon(); // Initial icon state

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            let currentTheme = html.getAttribute('data-theme');
            let systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            let newTheme;

            if (!currentTheme) {
                // No manual override yet, toggle from system
                newTheme = systemDark ? 'light' : 'dark';
            } else {
                // Manual override exists, flip it
                newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            }

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon();
        });
    }

    window.nextImg = () => {
        currentIdx = (currentIdx + 1) % images.length;
        viewerImg.src = images[currentIdx];
    };

    window.prevImg = () => {
        currentIdx = (currentIdx - 1 + images.length) % images.length;
        viewerImg.src = images[currentIdx];
    };

    // Close on click outside
    if (viewer) {
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer) closeViewer();
        });
    }

    // 9. Form Handling for n8n Automations
    const WEBHOOK_URL = 'https://capizapallar.app.n8n.cloud/webhook-test/leads-constructora'; // Using Test URL for now

    const handleFormSubmit = async (formId, event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;

        // Visual feedback
        submitBtn.disabled = true;
        submitBtn.innerText = 'Enviando...';

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formId: formId,
                    timestamp: new Date().toISOString(),
                    ...data
                })
            });

            if (response.ok) {
                alert('¡Solicitud enviada con éxito! ✅\n\nPronto serás contactado por WhatsApp o vía telefónica al número que nos dejaste para coordinar tu proyecto.');
                form.reset();
            } else {
                throw new Error('Error en el servidor: ' + response.status);
            }
        } catch (error) {
            console.error('Error detallado:', error);
            alert('Hubo un problema al conectar con el servidor. Por favor, asegúrese de que el evento en n8n esté activo o contáctenos por WhatsApp directamente.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        }
    };

    const constructionForm = document.getElementById('constructionLeadForm');
    if (constructionForm) {
        constructionForm.addEventListener('submit', (e) => handleFormSubmit('construccion_general', e));
    }

    const prefabricadasForm = document.getElementById('prefabricadasLeadForm');
    if (prefabricadasForm) {
        prefabricadasForm.addEventListener('submit', (e) => handleFormSubmit('cotizador_prefabricadas', e));
    }
});
