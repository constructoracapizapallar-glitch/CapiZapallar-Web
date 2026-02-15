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

    // 2. Parallax Effect for Hero
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
        viewerImg.src = images[currentIdx];
        viewer.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop scroll
    };

    window.closeViewer = () => {
        viewer.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
    };

    // 8. Theme Toggle Logic
    const themeBtn = document.getElementById('themeToggle');
    const html = document.documentElement;
    // Helper to update icon
    function updateIcon() {
        // If data-theme is dark, or no data-theme but system is dark
        const isDark = html.getAttribute('data-theme') === 'dark' ||
            (!html.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        themeBtn.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
    }

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    }
    updateIcon(); // Initial icon state

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

    window.nextImg = () => {
        currentIdx = (currentIdx + 1) % images.length;
        viewerImg.src = images[currentIdx];
    };

    window.prevImg = () => {
        currentIdx = (currentIdx - 1 + images.length) % images.length;
        viewerImg.src = images[currentIdx];
    };

    // Close on click outside
    viewer.addEventListener('click', (e) => {
        if (e.target === viewer) closeViewer();
    });
});
