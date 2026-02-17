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
    const WEBHOOK_URL = 'https://capizapallar.app.n8n.cloud/webhook/leads-constructora'; // Production URL

    const handleFormSubmit = async (formId, event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.formId = formId;

        // Determinar tipo de proyecto para el Agente de IA
        if (formId === 'cotizador_prefabricadas') {
            data.tipoProyecto = 'residencial_prefabricada';
        } else if (formId === 'b2b_corporate' || window.location.pathname.includes('b2b') || data.mensaje?.toLowerCase().includes('galpon') || data.mensaje?.toLowerCase().includes('industrial')) {
            data.tipoProyecto = 'b2b_industrial';
        } else {
            data.tipoProyecto = 'construccion_general';
        }
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
                // ESTRATEGIA TRAMPA: Redirigir inmediatamente a WhatsApp con los datos del formulario
                let message = '';
                const nombre = data.nombre || 'Diego';
                if (formId === 'cotizador_prefabricadas') {
                    message = `Hola Capi Zapallar, soy ${nombre}. Acabo de cotizar una casa prefabricada ${data.model} de ${data.m2}m2 para la comuna de ${data.comuna}. Andrés, envíame el link para que hablemos sobre la cotización.`;
                } else if (data.tipoProyecto === 'b2b_industrial') {
                    message = `Hola Capi Zapallar, soy ${nombre}. Acabo de completar el formulario para un proyecto B2B/Industrial en ${data.comuna}. Andrés, envíame el link para conversar el proyecto.`;
                } else {
                    message = `Hola Capi Zapallar, soy ${nombre}. Acabo de completar el formulario para un proyecto en ${data.comuna || 'mi comuna'}. Andrés, envíame el link para conversar el proyecto.`;
                }

                const waUrl = `https://wa.me/56981501641?text=${encodeURIComponent(message)}`;

                // Reset y Redirigir
                form.reset();
                window.location.href = waUrl;
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

    // --- Success Modal & WhatsApp Redirection ---
    const showSuccessModal = (data, formId) => {
        const modal = document.getElementById('successModal');
        const modalInfo = document.getElementById('modalQuoteInfo');
        const waBtn = document.getElementById('whatsappBtn');

        if (!modal || !waBtn) return;

        let message = '';
        let quoteText = '';

        if (formId === 'cotizador_prefabricadas') {
            quoteText = `Modelo: ${data.model} | Superficie: ${data.m2}m² | Comuna: ${data.comuna}`;
            message = `Hola Capi Zapallar, acabo de cotizar una casa prefabricada ${data.model} de ${data.m2}m2 para la comuna de ${data.comuna}. Me gustaría agendar una reunión o recibir el catálogo.`;
        } else {
            quoteText = `Interés: Construcción General | Comuna: ${data.comuna || 'No especificada'}`;
            message = `Hola Capi Zapallar, acabo de completar el formulario en la web para un proyecto de construcción en ${data.comuna || 'mi comuna'}. Me gustaría recibir más información.`;
        }

        modalInfo.innerText = quoteText;
        waBtn.href = `https://wa.me/56973732599?text=${encodeURIComponent(message)}`;
        modal.style.display = 'block';
    };

    window.closeSuccessModal = () => {
        const modal = document.getElementById('successModal');
        if (modal) modal.style.display = 'none';
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
